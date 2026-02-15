import "./globals.css";
import Providers from "./providers";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
import { Oswald } from "next/font/google";
import Navbar from "@/components/Navbar";
import ErrorBoundary from "@/components/ErrorBoundary";
import ParticlesBackground from "@/components/ParticlesBackground";
import SkipToContentLink from "@/components/SkipToContentLink";
import {
  SITE_URL,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_OG_IMAGE,
} from "@/utils/constants";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-main",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: SITE_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SITE_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    url: SITE_URL,
    jobTitle: "Software Engineer",
    sameAs: [
      "https://github.com/CristopherAreche",
      "https://www.linkedin.com/in/cristopher-areche-guillen-01a603186/",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${oswald.variable} font-main-font dark:bg-dark_bg`}>
        <Providers>
          <Toaster position="top-center" />
          <SkipToContentLink />
          <ParticlesBackground />
          <Navbar />
          <main id="main-content" className="relative min-h-screen pt-[56px]">
            <ErrorBoundary>
              <div className="min-h-[calc(100vh-56px)] py-10 flex items-start justify-center overflow-x-hidden">
                {children}
              </div>
            </ErrorBoundary>
          </main>
        </Providers>
      </body>
    </html>
  );
}
