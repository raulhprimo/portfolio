import { LanguageProvider } from "@/components/language-provider";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const siteUrl = DATA.url;
const googleAnalyticsId = "G-402EK01TNB";
const title = `${DATA.name} | AI Engineer and Software Engineer`;
const description =
  "Portfolio of Raul Primo, an AI Engineer and Software Engineer in Sao Paulo building products with Next.js, TypeScript, Python, data, automation, and applied AI.";

const fontSans = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: DATA.name,
  title: {
    default: title,
    template: `%s | ${DATA.name}`,
  },
  description,
  keywords: [
    "Raul Primo",
    "AI Engineer",
    "Software Engineer",
    "Next.js developer",
    "TypeScript developer",
    "Python developer",
    "AI products",
    "portfolio",
    "Sao Paulo",
  ],
  authors: [{ name: DATA.name, url: siteUrl }],
  creator: DATA.name,
  publisher: DATA.name,
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      en: "/",
    },
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: DATA.name,
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${DATA.name} portfolio preview`,
      },
    ],
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
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@_primotech",
    images: ["/og.png"],
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: DATA.name,
        url: siteUrl,
        image: `${siteUrl}${DATA.avatarUrl}`,
        jobTitle: "AI Engineer and Software Engineer",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sao Paulo",
          addressCountry: "BR",
        },
        sameAs: [
          DATA.contact.social.GitHub.url,
          DATA.contact.social.LinkedIn.url,
          DATA.contact.social.X.url,
        ],
        knowsAbout: [
          "Artificial intelligence",
          "Software engineering",
          "Next.js",
          "TypeScript",
          "Python",
          "Automation",
          "Data analysis",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: DATA.name,
        description,
        inLanguage: ["pt-BR", "en"],
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>
            <TooltipProvider delayDuration={0}>
              {children}
              <Navbar />
            </TooltipProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
