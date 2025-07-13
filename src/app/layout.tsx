import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TumbleCraft | Minecraft SMP & Prison Server",
  description: "Join TumbleCraft's epic Minecraft adventure! Experience our thriving SMP community and challenging Prison gamemode. Modern survival, custom features, active community.",
  keywords: "Minecraft, SMP, Prison Server, Survival Multiplayer, Gaming Community, TumbleCraft",
  authors: [{ name: "TumbleCraft Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "TumbleCraft | Minecraft SMP & Prison Server",
    description: "Join TumbleCraft's epic Minecraft adventure! Experience our thriving SMP community and challenging Prison gamemode.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TumbleCraft | Minecraft SMP & Prison Server",
    description: "Join TumbleCraft's epic Minecraft adventure! Experience our thriving SMP community and challenging Prison gamemode.",
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
        {children}
      </body>
    </html>
  );
}
