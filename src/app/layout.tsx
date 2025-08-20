import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from '@/components/Providers';
import Footer from '@/components/Footer';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "TumbleCraft",
  description: "Built by software veterans with deep ties to tech creators and gaming culture - TumbleCraft is redefining what SMP should feel like.",
  keywords: "Minecraft, SMP, Survival Multiplayer, Gaming Community, TumbleCraft",
  authors: [{ name: "TumbleCraft Team" }],
  robots: "index, follow",
  openGraph: {
    title: "TumbleCraft | Minecraft SMP",
    description: "Built by software veterans with deep ties to tech creators and gaming culture - TumbleCraft is redefining what SMP should feel like.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TumbleCraft | Minecraft SMP",
    description: "Built by software veterans with deep ties to tech creators and gaming culture - TumbleCraft is redefining what SMP should feel like.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="h-screen flex flex-col">
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
