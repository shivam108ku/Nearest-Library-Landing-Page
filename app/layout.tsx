import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const siteUrl = "https://nearestlibrary.com";

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NearestLibrary — Smart Library Seat Booking & Study Space Management",
    template: "%s | NearestLibrary",
  },
  description:
    "Discover nearby libraries, book study seats instantly, and manage attendance with QR check-in. The #1 library management and seat reservation app for students and library owners across India.",
  keywords: [
    "nearest library",
    "library seat booking",
    "book library seat online",
    "study space near me",
    "co-working library",
    "student study hall",
    "library management system",
    "QR library attendance",
    "library owner dashboard",
    "study seat app India",
  ],
  authors: [{ name: "NearestLibrary Team", url: siteUrl }],
  creator: "NearestLibrary",
  publisher: "NearestLibrary Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
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
    title: "NearestLibrary — Your Perfect Study Spot, One Tap Away ✨",
    description:
      "Find nearby study halls, reserve seats in real-time, and manage library attendance effortlessly.",
    url: siteUrl,
    siteName: "NearestLibrary",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "NearestLibrary — Smart Library Seat Booking & Study Space App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NearestLibrary — Smart Library Seat Booking App",
    description:
      "Find nearby libraries, reserve your seat in seconds, and track attendance via QR scan.",
    creator: "@nearestlibrary",
    images: [`${siteUrl}/opengraph-image`],
  },
  icons: {
    icon: [
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg?v=2",
    apple: "/icon.svg?v=2",
  },
  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg?v=2" />
        <link rel="shortcut icon" type="image/svg+xml" href="/icon.svg?v=2" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
