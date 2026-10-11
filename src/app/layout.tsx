import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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
  title: "CodeLab — Write. Run. Ship Code.",
  description:
    "CodeLab is the fast online compiler. Write, compile and run 80+ languages in your browser — no setup.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plexMono.variable} h-full bg-[#0b0b0b] antialiased`}
    >
      <body className="m-0 flex min-h-dvh w-full flex-col bg-[#0b0b0b] p-0 text-white">
        <Navbar />
        <div className="flex w-full flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
