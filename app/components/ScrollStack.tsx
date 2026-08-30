"use client";

import React, { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

export interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
  style?: React.CSSProperties;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = '',
  style
}) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()} style={style}>
    {children}
  </div>
);

export interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

// Helper: Calculate absolute document top using static offsetParent chain.
// Unlike getBoundingClientRect(), offsetTop is completely immune to CSS transforms (translate3d, scale),
// guaranteeing zero feedback loops and zero jitter.
function getElementDocumentTop(element: HTMLElement | null): number {
  let top = 0;
  let curr = element;
  while (curr) {
    top += curr.offsetTop;
    curr = curr.offsetParent as HTMLElement | null;
  }
  return top;
}

// Shared singleton for window scroll so multiple ScrollStacks never conflict or duplicate listeners
let globalLenis: Lenis | null = null;
let globalRafId: number | null = null;
const scrollSubscribers = new Set<() => void>();

function subscribeToWindowScroll(cb: () => void): () => void {
  if (typeof window === 'undefined') return () => {};

  if (!globalLenis) {
    globalLenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075,
    });

    globalLenis.on('scroll', () => {
      scrollSubscribers.forEach((fn) => fn());
    });

    const raf = (time: number) => {
      if (globalLenis) {
        globalLenis.raf(time);
        globalRafId = requestAnimationFrame(raf);
      }
    };
    globalRafId = requestAnimationFrame(raf);
  }

  scrollSubscribers.add(cb);

  return () => {
    scrollSubscribers.delete(cb);
    if (scrollSubscribers.size === 0 && globalLenis) {
      if (globalRafId) cancelAnimationFrame(globalRafId);
      globalLenis.destroy();
      globalLenis = null;
      globalRafId = null;
    }
  };
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true,
  onStackComplete
}) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const endSpacerRef = useRef<HTMLDivElement | null>(null);
  const stackCompletedRef = useRef(false);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef<Map<number, any>>(new Map());
  const isUpdatingRef = useRef(false);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(String(value));
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      const scrollTop = globalLenis ? globalLenis.scroll : window.scrollY;
      return {
        scrollTop,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller ? scroller.scrollTop : 0,
        containerHeight: scroller ? scroller.clientHeight : window.innerHeight,
        scrollContainer: scroller || document.documentElement
      };
    }
  }, [useWindowScroll]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const endElement = endSpacerRef.current;
    const endElementTop = getElementDocumentTop(endElement);

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      // Static position calculation via offsetTop chain — invariant under translate3d
      const cardTop = getElementDocumentTop(card);
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = getElementDocumentTop(cardsRef.current[j]);
          const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }

        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';

        card.style.transform = transform;
        card.style.filter = filter;

        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData
  ]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller && !useWindowScroll) return;

    // Scope card queries strictly to THIS component instance
    const container = scroller || scrollerRef.current;
    const cards = container
      ? (Array.from(container.querySelectorAll('.scroll-stack-card')) as HTMLElement[])
      : [];

    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform, filter';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      card.style.webkitTransform = 'translateZ(0)';
      card.style.perspective = '1000px';
      card.style.webkitPerspective = '1000px';
    });

    // Subscribe to singleton Lenis loop
    const unsubscribe = subscribeToWindowScroll(updateCardTransforms);
    updateCardTransforms();

    const handleResize = () => {
      updateCardTransforms();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
      stackCompletedRef.current = false;
      cardsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    useWindowScroll,
    updateCardTransforms
  ]);

  return (
    <div className={`scroll-stack-scroller ${useWindowScroll ? 'use-window-scroll' : ''} ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        {/* Unique Spacer so the last pin can release cleanly */}
        <div className="scroll-stack-end" ref={endSpacerRef} />
      </div>
    </div>
  );
};

export default ScrollStack;
