import type { Metadata, Viewport } from "next";

const siteUrl = "https://nearestlibrary.com";
const pageUrl = `${siteUrl}/check`;

// ─────────────────────────────────────────────────────────────────────
// /check — Dedicated SEO-optimized landing page
// Targets long-tail queries: "check library near me", "library availability
// check", "check study seat online", "library status check", "verify
// library pass", "library health check".
// ─────────────────────────────────────────────────────────────────────

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Check Library Near Me — Live Seat Availability, Status & Pass Verification | NearestLibrary",
  description:
    "Check library near me in seconds. Live seat availability, library status, QR pass verification & study space health check across 500+ partner libraries in India. Free real-time library checker — no signup needed.",
  keywords: [
    // ─── Primary Check-Intent Keywords ───
    "check library near me",
    "library near me check",
    "check nearest library",
    "library availability check",
    "library status check",
    "library seat check",
    "check study seat availability",
    "verify library pass",
    "library pass check",
    "library health check",
    // ─── Long-Tail Check Queries ───
    "check library open now near me",
    "check library timing near me",
    "check library seats available",
    "check library fees near me",
    "check library AC availability",
    "check wifi library near me",
    "check 24 hour library near me",
    "check silent library zone near me",
    "check library membership status",
    "check library QR code online",
    // ─── Action / Tool Keywords ───
    "library checker tool India",
    "real-time library seat tracker",
    "online library availability checker",
    "library booking status check",
    "study seat booking verification",
    "library attendance check online",
    "library digital pass validator",
    // ─── City + Check Intent ───
    "check library near me Delhi",
    "check library near me Mumbai",
    "check library near me Bangalore",
    "check library near me Hyderabad",
    "check library near me Pune",
    "check library near me Patna",
    "check library near me Lucknow",
    "check library near me Jaipur",
    // ─── Library Owner / Partner Check ───
    "library partner dashboard check",
    "library owner status check",
    "library revenue check online",
    "library occupancy check India",
    // ─── Hindi / Hinglish Intent ───
    "library ka status check karo",
    "paas ki library check karo",
    "library khula hai kya",
    "library seat khaali hai kya",
  ],
  authors: [{ name: "Shivam Kumar", url: siteUrl }],
  creator: "Shivam Kumar",
  publisher: "NearestLibrary",
  applicationName: "NearestLibrary",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: pageUrl,
    languages: {
      "en-IN": pageUrl,
      "en": pageUrl,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title:
      "Check Library Near Me — Live Seat Availability & Status | NearestLibrary",
    description:
      "Check the nearest library near you in real-time. See live seat availability, library status, opening hours, and verify your digital library pass. India's #1 library checker tool — 500+ partner libraries.",
    url: pageUrl,
    siteName: "NearestLibrary — Library Near Me",
    locale: "en_IN",
    type: "website",
    countryName: "India",
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Check Library Near Me — Live availability, status and pass verification tool by NearestLibrary.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Check Library Near Me — Live Seat Availability & Status",
    description:
      "Quickly check the nearest library near you. Live seat availability, library status, opening hours and pass verification — all in one place. Free for students.",
    creator: "@nearestlibrary",
    site: "@nearestlibrary",
    images: [`${siteUrl}/opengraph-image`],
  },
  appLinks: {
    android: {
      package: "com.shivam.nearestlibrary",
      url: "https://play.google.com/store/apps/details?id=com.shivam.nearestlibrary",
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/icon.svg?v=2",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  category: "Education",
  classification: "Education, Library, Study Space, Utility Tool",
  other: {
    "page-topic": "Library availability checker, library status, pass verification",
    "page-type": "Utility landing page",
    "audience": "Students, library owners, study space seekers across India",
  },
};

// ─── JSON-LD Structured Data for /check page ────────────────────────
function CheckStructuredData() {
  const baseUrl = siteUrl;
  const pageUrlStr = pageUrl;
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=com.shivam.nearestlibrary";

  // 1. WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrlStr}#webpage`,
    url: pageUrlStr,
    name:
      "Check Library Near Me — Live Seat Availability, Status & Pass Verification",
    description:
      "Check the nearest library near you with real-time seat availability, library status, and digital pass verification across 500+ partner libraries in India.",
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${baseUrl}#website`,
      name: "NearestLibrary",
      url: baseUrl,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${baseUrl}/opengraph-image`,
      width: 1200,
      height: 630,
    },
    breadcrumb: {
      "@id": `${pageUrlStr}#breadcrumb`,
    },
  };

  // 2. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrlStr}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home — Library Near Me",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Check Library Near Me",
        item: pageUrlStr,
      },
    ],
  };

  // 3. SoftwareApplication Schema (for the app powering the checker)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "NearestLibrary — Library Near Me",
    operatingSystem: "Android",
    applicationCategory: "EducationalApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    description:
      "Check the nearest library near you, view live seat availability, library status, and verify your digital pass. India's #1 library near me and study space checker app.",
    url: pageUrlStr,
    downloadUrl: playStoreUrl,
    installUrl: playStoreUrl,
    screenshot: `${baseUrl}/opengraph-image`,
    softwareVersion: "2.0",
    author: {
      "@type": "Person",
      name: "Shivam Kumar",
      url: "https://www.linkedin.com/in/shivam-kumar108/",
    },
  };

  // 4. FAQPage Schema — keyword-rich Q&As for /check intent
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I check the nearest library near me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Open the NearestLibrary app and tap 'Check Library Near Me'. The app uses your live location to instantly show the nearest libraries near you with real-time seat availability, opening hours, AC/Wi-Fi status, and distance. You can also visit nearestlibrary.com/check on any browser to start checking.",
        },
      },
      {
        "@type": "Question",
        name: "Can I check seat availability at a library before visiting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! NearestLibrary shows live seat availability for every partner library. You can check which seats are free in real-time, pick your shift (Morning, Afternoon, Evening, or Full Day), and book a seat before walking in — saving you time and guaranteeing a spot.",
        },
      },
      {
        "@type": "Question",
        name: "How do I check if a library near me is open right now?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use the NearestLibrary app or visit nearestlibrary.com/check to see live 'Open Now' status for every partner library. The status is updated in real-time by the library's check-in system — no more wasted trips to closed libraries.",
        },
      },
      {
        "@type": "Question",
        name: "Can I verify my digital library pass online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Open the NearestLibrary app, go to 'My Pass', and your digital library pass is displayed with a scannable QR code. Library owners can scan this QR at the entrance to instantly verify your membership, attendance, and active plan.",
        },
      },
      {
        "@type": "Question",
        name: "How do library owners check their library's live status?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Library owners get a dedicated dashboard inside the NearestLibrary app. You can check live occupancy, today's attendance, revenue collection, active members, and QR check-in logs in real-time — all from one screen.",
        },
      },
      {
        "@type": "Question",
        name: "Is the library checker tool free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — the NearestLibrary library checker is 100% free for students. You can check library availability, status, timings, and verify your pass unlimited times. Library owners also get free access to the partner dashboard.",
        },
      },
      {
        "@type": "Question",
        name: "Which cities support the library check feature?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The library check feature works in 50+ Indian cities including Delhi, Mumbai, Bangalore, Hyderabad, Pune, Chennai, Kolkata, Jaipur, Lucknow, Patna, Bhopal, Chandigarh, Ahmedabad, Indore, Nagpur, Surat, and many more. New cities are added weekly.",
        },
      },
    ],
  };

  // 5. Service Schema — describes what /check offers
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Library Availability & Status Checker",
    name: "Check Library Near Me",
    description:
      "Real-time library availability, status, opening hours, and digital pass verification across 500+ partner libraries in India.",
    provider: {
      "@type": "Organization",
      name: "NearestLibrary",
      url: baseUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: pageUrlStr,
      availableLanguage: ["English", "Hindi"],
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Library Check Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Live seat availability check",
            description:
              "Check real-time study seat availability at libraries near you.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Library open-now status",
            description:
              "Check if a library is currently open with live hours and status.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital library pass verification",
            description:
              "Verify your digital library pass via QR code scan.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Library health & occupancy check",
            description:
              "Check live occupancy, AC, Wi-Fi, and amenities of partner libraries.",
          },
        },
      ],
    },
  };

  // 6. HowTo Schema — explains how to check a library
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to check the nearest library near me using NearestLibrary",
    description:
      "Step-by-step guide to check library availability, status, and pass verification using NearestLibrary.",
    totalTime: "PT1M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: "0",
    },
    tool: [
      {
        "@type": "HowToTool",
        name: "NearestLibrary app (Android)",
      },
      {
        "@type": "HowToTool",
        name: "Web browser",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Open NearestLibrary",
        text: "Download the NearestLibrary app from Google Play, or visit nearestlibrary.com/check in any browser.",
        url: `${baseUrl}#download`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Allow location access",
        text: "Grant location permission so NearestLibrary can find the nearest library to your current spot.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "View live library list",
        text: "See a real-time list of libraries near you with available seats, distance, and live 'Open Now' status.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Check details and book",
        text: "Tap any library to see full details — seat map, fees, timings, AC/Wi-Fi, then book your study seat instantly.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
}

export default function CheckLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CheckStructuredData />
      {children}
    </>
  );
}
