import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import ScrollProgress from "./components/ScrollProgress";
import MouseSpotlight from "./components/MouseSpotlight";

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
    default:
      "Library Near Me — Find & Book Study Seats Instantly | NearestLibrary",
    template: "%s | NearestLibrary — Library Near Me",
  },
  description:
    "Find the nearest library near you, book study seats online in seconds, and manage attendance with QR check-in. India's #1 library near me app — discover study spaces, reading rooms & co-working libraries near your location. Free for students!",
  keywords: [
    // ─── Primary High-Volume Keywords ───
    "library near me",
    "nearest library",
    "library near me open now",
    "study library near me",
    "reading library near me",
    "public library near me",
    // ─── Intent-Based Keywords ───
    "find library near me",
    "book library seat online",
    "library seat booking app",
    "study space near me",
    "study room near me",
    "study hall near me",
    "reading room near me",
    "co-working library near me",
    // ─── Long-Tail Transactional Keywords ───
    "book study seat near me",
    "reserve library seat online",
    "library seat reservation app India",
    "online library booking system",
    "study table booking app",
    "library management system",
    "library management app",
    // ─── Hindi / Hinglish / Regional Intent ───
    "nearest library kahan hai",
    "paas mein library",
    "library pass me",
    "padhai ki jagah near me",
    // ─── Student & Location Intent ───
    "best library for students near me",
    "cheapest library near me",
    "24 hour library near me",
    "AC library near me",
    "library with wifi near me",
    "silent study zone near me",
    // ─── Library Owner Keywords ───
    "library owner dashboard",
    "QR attendance system for library",
    "digital library management India",
    "how to list library online",
    "library billing software",
  ],
  authors: [{ name: "Shivam Kumar", url: siteUrl }],
  creator: "Shivam Kumar",
  publisher: "NearestLibrary",
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
    title:
      "Library Near Me — Find Nearest Library & Book Study Seats Instantly ✨",
    description:
      "Discover nearest libraries near you, reserve study seats in real-time, and manage attendance effortlessly. India's #1 library near me app for students.",
    url: siteUrl,
    siteName: "NearestLibrary",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "NearestLibrary — Find Library Near Me & Book Study Seats Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Library Near Me — Find & Book Study Seats Instantly",
    description:
      "Find nearest libraries, reserve your study seat in seconds, and track attendance via QR scan. Free for students!",
    creator: "@nearestlibrary",
    images: [`${siteUrl}/opengraph-image`],
  },
  icons: {
    icon: [{ url: "/icon.svg?v=2", type: "image/svg+xml" }],
    shortcut: "/icon.svg?v=2",
    apple: "/icon.svg?v=2",
  },
  category: "Education",
  verification: {
    google: "Nbn4KFds2Tz6HmiD32zIk1uZBRSSWA6KR3BwRmV0VQ0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bricolage.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg?v=2" />
        <link rel="shortcut icon" type="image/svg+xml" href="/icon.svg?v=2" />
        <link rel="canonical" href={siteUrl} />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
        <meta name="ICBM" content="20.5937, 78.9629" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <StructuredData />
        <ScrollProgress />
        <MouseSpotlight />
        {children}
      </body>
    </html>
  );
}
