import "./globals.css";
import Providers from "./providers";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ErrorBoundary from "@/components/ErrorBoundary";
import {
  SITE_URL,
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_NAME,
} from "@/utils/constants";

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
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="dark:bg-dark_bg">
        <Providers>
          <Toaster position="top-center" />
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          <Navbar />
          <main
            id="main-content"
            className="relative xsPhone:overflow-auto xsPhone:h-screen phone:min-h-screen phone:overflow-hidden"
          >
            <ErrorBoundary>
              <div className="h-full py-20 flex items-start justify-center overflow-y-auto overflow-x-hidden">
                {children}
              </div>
            </ErrorBoundary>
          </main>
        </Providers>
      </body>
    </html>
  );
}
