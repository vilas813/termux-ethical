'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Terminal, Shield, Info, Mail, Home, Github, Youtube, Send, FileText } from 'lucide-react'
import Link from 'next/link'

export default function TermuxLearnPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
              <Link href="/about">
                <Button variant="ghost" size="default" className="gap-2">
                  <Info className="w-4 h-4" />
                  About
                </Button>
              </Link>
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
              <Link href="/about">
                <Button variant="ghost" size="default" className="justify-start gap-2 w-full">
                  <Info className="w-4 h-4" />
                  About
                </Button>
              </Link>
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
            <Link href="/about">
              <Button variant="ghost" size="sm" className="gap-2">
                <Info className="w-4 h-4" />
                About
              </Button>
            </Link>
            <Link href="/terms">
              <Button variant="ghost" size="sm" className="gap-2">
                <FileText className="w-4 h-4" />
                Terms & Conditions
              </Button>
            </Link>
            <Link href="/privacy">
              <Button variant="ghost" size="sm" className="gap-2">
                <Shield className="w-4 h-4" />
                Privacy Policy
              </Button>
            </Link>
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
