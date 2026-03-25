import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GurBani Finder | Shazam for Kirtan - Digital Khalsa",
  description:
    "I built GurBani Finder because I couldn't keep up at Gurdwara. Point your camera, identify shabads in <3 seconds. Built for me, shared with the Sangat.",
  keywords: [
    "gurbani",
    "sikhi",
    "shabad",
    "kirtan",
    "gurmukhi",
    "OCR",
    "AI",
    "sikh app",
    "guru granth sahib",
    "gurbani finder",
    "emotion gurbani",
  ],
  openGraph: {
    title: "GurBani Finder - Built for Me, Shared with the Sangat",
    description:
      "Shazam for Kirtan. Identify shabads in real-time with AI. Find Gurbani by emotion. Watch live kirtan worldwide.",
    url: "https://digitalkhalsa.com",
    siteName: "GurBani Finder by Digital Khalsa",
    images: [
      {
        url: "https://digitalkhalsa.com/dk-og.png",
        width: 1200,
        height: 630,
        alt: "GurBani Finder - AI Tools for the Sangat",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@125kCyberSingh",
    creator: "@125kCyberSingh",
    title: "GurBani Finder - Shazam for Kirtan",
    description:
      "I couldn't keep up at Gurdwara. So I built this. If it helps you, that's Guru Ji's kirpa.",
    images: ["https://digitalkhalsa.com/dk-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Gurmukhi:wght@400;500;600;700&family=Mukta+Mahee:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Persistent Banner */}
        <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#FF9933] to-[#000080] text-white text-center py-2 px-4">
          <p className="text-sm md:text-base font-semibold">
            Free forever. No ads. Open source seva for the Sangat.
          </p>
        </div>
        <Navigation />
        <div className="pt-24 md:pt-28">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
