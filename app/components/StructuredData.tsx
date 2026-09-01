export default function StructuredData() {
  const baseUrl = "https://nearestlibrary.com";
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=com.shivam.nearestlibrary";

  // 1. Software Application Schema — triggers Google App Rich Cards
  // Note: aggregateRating is omitted to comply with Google's structured data guidelines.
  // Adding fake ratings is a violation — Google may issue a Manual Action.
  // Once you have verified real reviews on Google Play, add the real numbers here.
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
      "Find the nearest library near you, book study seats instantly, and manage attendance with QR check-in. India's #1 library near me and study space booking app for students.",
    url: baseUrl,
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

  // 2. Organization Schema — Google Knowledge Panel
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NearestLibrary",
    alternateName: [
      "Nearest Library",
      "Library Near Me App",
      "NearestLibrary App",
    ],
    url: baseUrl,
    logo: `${baseUrl}/icon.png`,
    sameAs: [
      "https://twitter.com/nearestlibrary",
      "https://instagram.com/nearestlibrary",
      "https://linkedin.com/company/nearestlibrary",
      playStoreUrl,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "shivam108ku@gmail.com",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    founder: {
      "@type": "Person",
      name: "Shivam Kumar",
      url: "https://www.linkedin.com/in/shivam-kumar108/",
    },
    description:
      "NearestLibrary helps students find the nearest library near them, book study seats online, and manage library attendance. India's leading library near me platform.",
  };

  // 3. WebSite SearchAction Schema — triggers Google Sitelinks Search Box
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NearestLibrary",
    alternateName: "Library Near Me",
    url: baseUrl,
    description:
      "Find nearest library, book study seats online, and manage library attendance with NearestLibrary — India's #1 library near me app.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // 4. FAQ Schema — Google Rich FAQ Snippets with keyword-rich Q&As
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I find the nearest library near me using NearestLibrary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Download the NearestLibrary app from Google Play Store, open it, and it will automatically detect your location to show the nearest library near you. You can browse available study seats, check real-time occupancy, and book your seat in seconds — completely free for students!",
        },
      },
      {
        "@type": "Question",
        name: "Is NearestLibrary really free for students looking for a library near me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! The NearestLibrary app is 100% free for students. You can search for libraries near you, check seat availability, book study seats, track your attendance, and manage your study streaks — all without paying anything.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a study seat at a library near me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Open the NearestLibrary app, search for 'library near me', pick your preferred library, select a shift (Morning, Afternoon, Evening, or Full Day), choose an available seat from the interactive seat map, and confirm your booking. It takes less than 30 seconds!",
        },
      },
      {
        "@type": "Question",
        name: "How does QR code attendance tracking work at the library?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every NearestLibrary partner library has a unique QR code displayed at the entrance. Students scan the QR code when entering and leaving. Their attendance is automatically logged in the app with exact timestamps — no manual registers needed.",
        },
      },
      {
        "@type": "Question",
        name: "Can library owners list their study space on NearestLibrary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Library owners can register their library for free on the NearestLibrary platform. After registration, you get access to a full digital dashboard for seat management, billing, attendance tracking, student management, and real-time occupancy monitoring.",
        },
      },
      {
        "@type": "Question",
        name: "What cities have libraries listed on NearestLibrary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NearestLibrary currently has 500+ partner libraries across major Indian cities including Delhi, Mumbai, Bangalore, Hyderabad, Pune, Jaipur, Lucknow, Patna, Bhopal, Chandigarh, Ahmedabad, Kolkata, and many more. New libraries are added daily!",
        },
      },
    ],
  };

  // 5. Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        name: "Features",
        item: `${baseUrl}/#features`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Partner Libraries Near You",
        item: `${baseUrl}/#partner-libraries`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "For Library Owners",
        item: `${baseUrl}/#for-libraries`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Download App",
        item: `${baseUrl}/#download`,
      },
    ],
  };

  // 6. LocalBusiness Schema — critical for "library near me" Google Maps
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LibrarySystem",
    name: "NearestLibrary — Find Library Near Me",
    description:
      "Find the nearest library near you across India. Book study seats, reserve reading rooms, and manage attendance — all from one app. 500+ libraries listed.",
    url: baseUrl,
    logo: `${baseUrl}/icon.png`,
    image: `${baseUrl}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "20.5937",
      longitude: "78.9629",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: [
      "Library Seat Booking",
      "Study Space Reservation",
      "Library Management System",
      "Find Library Near Me",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Library Booking Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Find Nearest Library Near Me",
            description:
              "Discover and locate the nearest library near your current location across India.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Book Study Seat Online",
            description:
              "Reserve study seats at libraries near you in real-time with instant confirmation.",
          },
        },
      ],
    },
  };

  // 7. Service Catalog — keyword-targeted service entries
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Library Discovery & Seat Reservation Platform",
    provider: {
      "@type": "Organization",
      name: "NearestLibrary",
      url: baseUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Library Near Me Services in Major Indian Cities",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Library near me Delhi" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Library near me Mumbai" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Library near me Bangalore" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Library near me Hyderabad" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Library near me Pune" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Library near me Chennai" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Library near me Kolkata" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Library near me Jaipur" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Library near me Lucknow" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Library near me Patna" } },
      ],
    },
  };

  // 8. ItemList — list of cities where libraries are available (helps rank for "library near me [city]")
  const citiesListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Indian Cities with NearestLibrary Partner Libraries",
    description: "Find libraries near you in these major Indian cities via NearestLibrary.",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: 13,
    itemListElement: [
      "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Pune", "Chennai",
      "Kolkata", "Jaipur", "Lucknow", "Patna", "Bhopal", "Chandigarh", "Ahmedabad",
    ].map((city, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Library near me ${city}`,
      url: `${baseUrl}/#partner-libraries`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citiesListSchema) }}
      />
    </>
  );
}
