export default function StructuredData() {
  const baseUrl = "https://nearestlibrary.com";

  // 1. Software Application Schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NearestLibrary",
    operatingSystem: "Android, iOS, Web",
    applicationCategory: "EducationalApplication",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1240",
      reviewCount: "850",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    description:
      "NearestLibrary is India's leading library seat booking and co-working study space management application.",
    url: baseUrl,
  };

  // 2. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NearestLibrary",
    url: baseUrl,
    logo: `${baseUrl}/icon.png`,
    sameAs: [
      "https://twitter.com/nearestlibrary",
      "https://instagram.com/nearestlibrary",
      "https://linkedin.com/company/nearestlibrary",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9999999999",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  };

  // 3. FAQ Schema for Google Rich Search Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I book a seat in a nearby library using NearestLibrary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Download the NearestLibrary app or browse online, choose your preferred library in your city, select your seat and shift (Morning, Afternoon, Evening, or Full Day), and tap to confirm your booking.",
        },
      },
      {
        "@type": "Question",
        name: "How can library owners list their study space on NearestLibrary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Library owners can register for free by filling out their library details, configuring floor seat maps and shift timings, and gaining access to the digital management dashboard.",
        },
      },
      {
        "@type": "Question",
        name: "Is NearestLibrary free for students?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the NearestLibrary mobile application is completely free for students to download, search libraries, and manage their study seat bookings.",
        },
      },
      {
        "@type": "Question",
        name: "How does QR attendance tracking work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Students scan the QR code displayed at the library desk upon entry and exit. Attendance logs are instantly recorded and visible in their mobile access pass.",
        },
      },
    ],
  };

  // 4. Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
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
        name: "For Libraries",
        item: `${baseUrl}/#for-libraries`,
      },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
