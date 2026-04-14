import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Manrope } from "next/font/google";

import "@/app/globals.css";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { BOOKING_URL, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, TAGLINE } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} | ${TAGLINE}`,
  description: TAGLINE,
  applicationName: SITE_NAME,
  openGraph: {
    title: SITE_NAME,
    description: TAGLINE,
    siteName: SITE_NAME,
    images: [DEFAULT_OG_IMAGE]
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: TAGLINE,
    images: [DEFAULT_OG_IMAGE]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-body">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        <div className="page-shell">
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
            <CTAButton href={BOOKING_URL} label="Book Your Rebuild Call" external className="w-full" />
          </div>
        </div>
      </body>
    </html>
  );
}
