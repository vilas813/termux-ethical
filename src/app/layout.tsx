import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

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
  metadataBase: new URL("https://termux-learn.vercel.app"),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Termux Learn - Ethical Hacking in Hindi",
    description: "फ्री में सीखो Ethical Hacking मोबाइल से - Termux और Kali NetHunter tutorials हिंदी में",
    type: "website",
    url: "https://termux-learn.vercel.app",
    siteName: "Termux Learn",
  },
  twitter: {
    card: "summary_large_image",
    title: "Termux Learn - Ethical Hacking in Hindi",
    description: "फ्री में सीखो Ethical Hacking मोबाइल से - Termux और Kali NetHunter tutorials हिंदी में",
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
    google: 'googlef41b88e7a41622af.html',
  },
  other: {
    sitemap: 'https://termux-learn.vercel.app/sitemap.xml',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script
        async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6124052333813612"
          crossOrigin="anonymous"
          strategy="afterInteractive"
      />
      <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="googlef41b88e7a41622af.html"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
    </>
  );
}
