import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CREATOR_NAME, OG_IMAGE, SITE_DESCRIPTION, SITE_URL } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CodeLab — Write. Run. Ship Code.",
    template: "%s — CodeLab",
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: CREATOR_NAME }],
  creator: CREATOR_NAME,
  publisher: CREATOR_NAME,
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "CodeLab",
    locale: "en_US",
    url: "/",
    title: "CodeLab — Write. Run. Ship Code.",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 512,
        height: 512,
        alt: "CodeLab logo — free online compiler",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "CodeLab — Write. Run. Ship Code.",
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plexMono.variable} h-full bg-[#0b0b0b] antialiased`}
    >
      <body className="m-0 flex min-h-dvh w-full flex-col bg-[#0b0b0b] p-0 text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-black"
        >
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content" className="flex w-full flex-1 flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
