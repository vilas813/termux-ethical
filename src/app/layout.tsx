import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AdSenseScript } from "@/components/ads/AdSense";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Termux Learn - Ethical Hacking in Hindi | Free Mobile Hacking Course",
  description: "फ्री में सीखो Ethical Hacking मोबाइल से - Termux और Kali NetHunter tutorials हिंदी में",
  keywords: ["Termux", "Kali NetHunter", "Ethical Hacking", "Mobile Hacking", "Linux Terminal", "Hindi Hacking Tutorials", "Cybersecurity"],
  authors: [{ name: "Termux Learn Team" }],
  icons: {
    icon: "/logo.png",
  },
  metadataBase: new URL("https://termuxlearn.com"),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Termux Learn - Ethical Hacking in Hindi",
    description: "फ्री में सीखो Ethical Hacking मोबाइल से",
    type: "website",
    url: "https://termuxlearn.com",
    siteName: "Termux Learn",
  },
  twitter: {
    card: "summary_large_image",
    title: "Termux Learn - Ethical Hacking in Hindi",
    description: "फ्री में सीखो Ethical Hacking मोबाइल से",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  verification: {
    google: 'W9lt33jCsJ1Q81pDtHlZ7xVBK8wQipBocLpnzS08KdA',
  },
  other: {
    sitemap: 'https://termuxlearn.com/sitemap.xml',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <AdSenseScript />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
