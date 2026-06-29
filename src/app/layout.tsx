import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const signature = Great_Vibes({
  variable: "--font-signature",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Achraf Ghazal — Full-Stack Developer",
  description:
    "Portfolio d'Achraf Ghazal, développeur Full-Stack basé à Rabat, Maroc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${signature.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
