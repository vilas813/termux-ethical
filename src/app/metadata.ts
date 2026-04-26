import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termux Learn - Ethical Hacking in Hindi | Free Mobile Hacking Course',
  description: 'फ्री में सीखो Ethical Hacking मोबाइल से - Termux और Kali NetHunter tutorials हिंदी में. 100% Free कोर्स, हिंदी/हिंग्लिश में सीखें, Real Ethical Hacking सीखें.',
  keywords: [
    'Termux',
    'Kali NetHunter',
    'Ethical Hacking',
    'Mobile Hacking',
    'Linux Terminal',
    'Hindi Hacking Tutorials',
    'Cybersecurity',
    'Penetration Testing',
    'Network Security',
    'Termux Tutorial',
    'Kali NetHunter Tutorial',
    'Free Hacking Course',
    'Hindi Hacking Course',
    'Ethical Hacking in Hindi',
    'Mobile Security',
    'WiFi Hacking',
    'Network Scanning',
    'Termux Commands',
    'Linux Commands',
    'Hacking Tools',
    'Security Tools'
  ],
  authors: [{ name: 'Termux Learn Team', url: 'https://termuxlearn.com/about' }],
  alternates: {
    canonical: 'https://termuxlearn.com',
  },
  openGraph: {
    title: 'Termux Learn - Ethical Hacking in Hindi',
    description: 'फ्री में सीखो Ethical Hacking मोबाइल से - Termux और Kali NetHunter',
    type: 'website',
    url: 'https://termuxlearn.com',
    siteName: 'Termux Learn',
    images: [
      {
        url: 'https://termuxlearn.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Termux Learn - Ethical Hacking Course'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Termux Learn - Ethical Hacking in Hindi',
    description: 'फ्री में सीखो Ethical Hacking मोबाइल से - Termux और Kali NetHunter',
    images: ['https://termuxlearn.com/logo.png'],
    creator: '@termuxlearn'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
