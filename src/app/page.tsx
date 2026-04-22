'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Menu, X, Terminal, Shield, Info, Mail, Home, Github, Youtube, Send, FileText } from 'lucide-react'
import Link from 'next/link'

export default function TermuxLearnPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [privacyDialogOpen, setPrivacyDialogOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Website Name */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <img
                  src="/logo.png"
                  alt="Termux Learn Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                Termux Learn
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="default" className="gap-2">
                <Home className="w-4 h-4" />
                Home
              </Button>
              <Link href="/termux">
                <Button variant="ghost" size="default" className="gap-2">
                  <Terminal className="w-4 h-4" />
                  Termux
                </Button>
              </Link>
              <Button variant="ghost" size="default" className="gap-2">
                <Shield className="w-4 h-4" />
                Nethunter
              </Button>
              <Button variant="ghost" size="default" className="gap-2">
                <Info className="w-4 h-4" />
                About
              </Button>
              <Button variant="ghost" size="default" className="gap-2">
                <Mail className="w-4 h-4" />
                Contact
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden flex flex-col gap-2 mt-4 pb-4">
              <Button variant="ghost" size="default" className="justify-start gap-2">
                <Home className="w-4 h-4" />
                Home
              </Button>
              <Link href="/termux">
                <Button variant="ghost" size="default" className="justify-start gap-2 w-full">
                  <Terminal className="w-4 h-4" />
                  Termux
                </Button>
              </Link>
              <Button variant="ghost" size="default" className="justify-start gap-2">
                <Shield className="w-4 h-4" />
                Nethunter
              </Button>
              <Button variant="ghost" size="default" className="justify-start gap-2">
                <Info className="w-4 h-4" />
                About
              </Button>
              <Button variant="ghost" size="default" className="justify-start gap-2">
                <Mail className="w-4 h-4" />
                Contact
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        {/* Cyberpunk Terminal Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent text-sm md:text-base font-mono">
              Cyberpunk टर्मिनल ग्रिड
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            System Ready // Learn Ethical Hacking
          </h2>

          <p className="text-lg md:text-2xl text-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            प्रो की तरह हैक करना सीखो — मोबाइल से
          </p>

          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            बड़े लैपटॉप या महंगे कोर्स की ज़रूरत नहीं। तुम्हारे Android फोन में ही एक पावरफुल हैकिंग लैब छुपी हुई है। Termux और Kali NetHunter सीखो, वो भी बिल्कुल फ्री और हिंदी में।
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/termux">
              <Button size="lg" className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg">
                <Terminal className="w-5 h-5" />
                Start Termux
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="gap-2 border-2 border-purple-500/50 hover:bg-purple-500/10 px-8 py-6 text-lg">
              <Shield className="w-5 h-5" />
              Nethunter Setup
            </Button>
          </div>
        </section>

        {/* Why Learn Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {'>'} क्यों सीखें?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ethical Hacking का भविष्य मोबाइल है। यहां तुम्हें ऐसे प्रैक्टिकल स्किल्स मिलेंगे जो रियल वर्ल्ड में काम आते हैं।
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 100% Free Card */}
            <div className="p-6 rounded-lg border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5 hover:border-purple-500/40 transition-all">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 mx-auto">
                <Terminal className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-center text-foreground">
                100% फ्री नॉलेज
              </h4>
              <p className="text-muted-foreground text-center leading-relaxed">
                Cybersecurity एजुकेशन सबका हक है। यहां कोई hidden charges या premium course नहीं है। सब कुछ फ्री और ओपन है।
              </p>
            </div>

            {/* Hindi/Hinglish Card */}
            <div className="p-6 rounded-lg border-2 border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-blue-500/5 hover:border-pink-500/40 transition-all">
              <div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center mb-4 mx-auto">
                <Info className="w-8 h-8 text-pink-400" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-center text-foreground">
                हिंदी / हिंग्लिश में
              </h4>
              <p className="text-muted-foreground text-center leading-relaxed">
                Complex topics को आसान भाषा में समझाया गया है। जैसे कोई दोस्त तुम्हें टर्मिनल इस्तेमाल करना सिखा रहा हो।
              </p>
            </div>

            {/* Real Ethical Hacking Card */}
            <div className="p-6 rounded-lg border-2 border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5 hover:border-blue-500/40 transition-all">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-center text-foreground">
                रियल Ethical Hacking
              </h4>
              <p className="text-muted-foreground text-center leading-relaxed">
                सही रास्ता चुनो। हम black-hat hacking को बढ़ावा नहीं देते। सिस्टम को secure करना सीखो, तोड़ना नहीं।
              </p>
            </div>
          </div>
        </section>

        {/* Termux Mastery Section */}
        <section className="mb-16">
          <div className="p-8 rounded-lg border-2 border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 text-foreground">
              <Terminal className="w-8 h-8 text-purple-400" />
              Termux Mastery
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Termux तुम्हारे फोन को एक छोटे Linux PC में बदल देता है। बिना root के भी तुम bash commands, package manager और basic scripts चला सकते हो। शुरुआत यहीं से होती है।
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded bg-background/50 border border-purple-500/20">
                <p className="text-foreground font-medium">Basic Linux Commands</p>
              </div>
              <div className="p-4 rounded bg-background/50 border border-pink-500/20">
                <p className="text-foreground font-medium">Package Management (apt/pkg)</p>
              </div>
              <div className="p-4 rounded bg-background/50 border border-blue-500/20">
                <p className="text-foreground font-medium">Python, Git & Scripts Setup</p>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/termux">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  <Terminal className="w-5 h-5" />
                  Explore Termux
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Kali NetHunter Section */}
        <section className="mb-16">
          <div className="p-8 rounded-lg border-2 border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3 text-foreground">
              <Shield className="w-8 h-8 text-blue-400" />
              Kali NetHunter
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              जब basics clear हो जाएं, तब Kali NetHunter की दुनिया में कदम रखो। यह एक advanced penetration testing platform है जो मोबाइल पर चलता है।
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded bg-background/50 border border-blue-500/20">
                <p className="text-foreground font-medium">Rootless / Rooted Installation</p>
              </div>
              <div className="p-4 rounded bg-background/50 border border-purple-500/20">
                <p className="text-foreground font-medium">KeX Desktop Environment</p>
              </div>
              <div className="p-4 rounded bg-background/50 border border-pink-500/20">
                <p className="text-foreground font-medium">Pentesting Tools & Labs</p>
              </div>
            </div>
            <div className="mt-6">
              <Button size="lg" variant="outline" className="gap-2 border-2 border-blue-500/50 hover:bg-blue-500/10">
                <Shield className="w-5 h-5" />
                Explore Nethunter
              </Button>
            </div>
          </div>
        </section>

      </main>

      {/* Privacy Policy Dialog */}
      <Dialog open={privacyDialogOpen} onOpenChange={setPrivacyDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <Shield className="w-6 h-6 text-purple-500" />
              Privacy Policy
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 space-y-6 text-sm">
            <section>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Effective Date</h3>
              <p className="text-muted-foreground">This Privacy Policy is effective as of {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}.</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-foreground">1. Introduction</h3>
              <p className="text-muted-foreground mb-3">
                Termux Learn ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
              <p className="text-muted-foreground">
                We respect your privacy and are committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you use our website.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-foreground">2. Information We Collect</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-foreground mb-1">2.1 Personal Data</h4>
                  <p className="text-muted-foreground">We do not collect personal data such as names, email addresses, or phone numbers unless you voluntarily provide it to us through contact forms or other communication channels.</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">2.2 Automatically Collected Information</h4>
                  <p className="text-muted-foreground">We may automatically collect certain information about your device and your use of our website, including:</p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Referring website</li>
                    <li>Time and date of visit</li>
                    <li>Pages visited on our website</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">2.3 Cookies</h4>
                  <p className="text-muted-foreground">We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-foreground">3. How We Use Your Information</h3>
              <p className="text-muted-foreground mb-3">We use the information we collect in the following ways:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>To provide, operate, and maintain our website</li>
                <li>To improve and personalize your experience on our website</li>
                <li>To analyze and understand how you use our website</li>
                <li>To develop new products, services, features, and functionality</li>
                <li>To communicate with you about updates, security alerts, and support messages</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-foreground">4. Information Sharing</h3>
              <p className="text-muted-foreground mb-3">We do not sell, trade, or otherwise transfer your personal data to outside parties except in the following cases:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>With your consent, where you have explicitly asked us to share your information</li>
                <li>When required by law, to comply with legal obligations</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-foreground">5. Third-Party Links</h3>
              <p className="text-muted-foreground">
                Our website may contain links to third-party websites such as GitHub, YouTube, Telegram, and other external resources. We are not responsible for the privacy practices of these third-party sites. We encourage you to read the privacy policies of each third-party website you visit.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-foreground">6. Data Security</h3>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-foreground">7. Your Privacy Rights</h3>
              <p className="text-muted-foreground mb-3">You have the following rights regarding your personal data:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>The right to access your personal data</li>
                <li>The right to correct inaccurate data</li>
                <li>The right to request deletion of your personal data</li>
                <li>The right to object to processing of your personal data</li>
                <li>The right to data portability</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-foreground">8. Children's Privacy</h3>
              <p className="text-muted-foreground">
                Our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal data, please contact us, and we will delete such information.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-foreground">9. Changes to This Privacy Policy</h3>
              <p className="text-muted-foreground">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2 text-foreground">10. Contact Us</h3>
              <p className="text-muted-foreground mb-3">
                If you have any questions about this Privacy Policy, please contact us through the following channels:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Through the Contact section on our website</li>
                <li>Via our Telegram channel</li>
              </ul>
            </section>

            <section className="pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                This Privacy Policy was last updated on {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}.
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="border-t bg-muted/50 mt-auto">
        <div className="container mx-auto px-4 py-6">
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <a
              href="https://github.com/termux/termux-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 hover:bg-accent hover:text-accent-foreground"
            >
              <Github className="w-4 h-4" />
              Termux GitHub
            </a>
            <a
              href="https://github.com/offensive-security/kali-nethunter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 hover:bg-accent hover:text-accent-foreground"
            >
              <Github className="w-4 h-4" />
              Nethunter GitHub
            </a>
            <a
              href="https://www.kali.org/docs/nethunter/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 hover:bg-accent hover:text-accent-foreground"
            >
              <FileText className="w-4 h-4" />
              Nethunter Docs
            </a>
            <a
              href="https://www.youtube.com/results?search_query=termux+tutorials"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 hover:bg-accent hover:text-accent-foreground"
            >
              <Youtube className="w-4 h-4" />
              YouTube
            </a>
            <a
              href="https://t.me/termux"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 hover:bg-accent hover:text-accent-foreground"
            >
              <Send className="w-4 h-4" />
              Telegram
            </a>
            <Button variant="ghost" size="sm" className="gap-2">
              <Info className="w-4 h-4" />
              About
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="gap-2"
              onClick={() => setPrivacyDialogOpen(true)}
            >
              <Shield className="w-4 h-4" />
              Privacy Policy
            </Button>
          </div>
          {/* Footer Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Termux Learn. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Learn Ethical Hacking Responsibly
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
