import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'NearestLibrary — Your Study Space, One Tap Away';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
          color: 'white',
          position: 'relative',
        }}
      >
        {/* Background Decorative Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'rgba(184, 134, 11, 0.15)',
            filter: 'blur(80px)',
          }}
        />

        {/* Brand Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #B8860B 0%, #D4A017 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              fontWeight: 900,
              color: 'white',
            }}
          >
            N
          </div>
          <span style={{ fontSize: '28px', fontWeight: 800, tracking: '-0.5px' }}>
            Nearest<span style={{ color: '#D4A017' }}>Library</span>
          </span>
        </div>

        {/* Main Hero Copy */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '850px' }}>
          <h1
            style={{
              fontSize: '56px',
              fontWeight: 900,
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: '-1.5px',
            }}
          >
            Your Perfect <span style={{ color: '#D4A017' }}>Study Spot</span> is Just a Tap Away ✨
          </h1>
          <p
            style={{
              fontSize: '22px',
              color: '#94A3B8',
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Find nearby co-working libraries, reserve your seat in real-time, and manage attendance seamlessly.
          </p>
        </div>

        {/* Footer Badges */}
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              padding: '10px 20px',
              borderRadius: '999px',
              fontSize: '16px',
              fontWeight: 700,
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            📚 500+ Libraries Listed
          </div>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              padding: '10px 20px',
              borderRadius: '999px',
              fontSize: '16px',
              fontWeight: 700,
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            ⭐ 10,000+ Happy Students
          </div>
          <div
            style={{
              background: 'rgba(16, 185, 129, 0.2)',
              color: '#10B981',
              padding: '10px 20px',
              borderRadius: '999px',
              fontSize: '16px',
              fontWeight: 800,
              border: '1px solid rgba(16, 185, 129, 0.3)',
            }}
          >
            Instant Booking
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
