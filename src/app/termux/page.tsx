'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Terminal, ArrowLeft, Menu, X, Home, Shield, Info, Mail } from 'lucide-react'
import Link from 'next/link'

export default function TermuxPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Website Name */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="relative w-10 h-10">
                  <img
                    src="/logo.png"
                    alt="Termux Learn Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h1 className="text-xl md:text-2xl font-bold text-foreground">
                  Termux Learn
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              <Link href="/">
                <Button variant="ghost" size="default" className="gap-2">
                  <Home className="w-4 h-4" />
                  Home
                </Button>
              </Link>
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
              <Link href="/">
                <Button variant="ghost" size="default" className="justify-start gap-2 w-full">
                  <Home className="w-4 h-4" />
                  Home
                </Button>
              </Link>
              <Link href="/termux">
                <Button variant="ghost" size="default" className="justify-start gap-2 w-full">
                  <Terminal className="w-4 h-4" />
                  Termux
                </Button>
              </Link>
              <Button variant="ghost" size="default" className="justify-start gap-2 w-full">
                <Shield className="w-4 h-4" />
                Nethunter
              </Button>
              <Button variant="ghost" size="default" className="justify-start gap-2 w-full">
                <Info className="w-4 h-4" />
                About
              </Button>
              <Button variant="ghost" size="default" className="justify-start gap-2 w-full">
                <Mail className="w-4 h-4" />
                Contact
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-2 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        {/* Page Title */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent text-sm md:text-base font-mono">
              Termux Mastery
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Start Your Termux Journey
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Termux की दुनिया में कदम रखो और अपने Android फोन को एक पावरफुल Linux टर्मिनल में बदल दो।
          </p>
        </div>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto">
          <div className="p-8 rounded-lg border-2 border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 text-foreground">
              <Terminal className="w-8 h-8 text-purple-400" />
              Termux क्या है?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Termux एक powerful terminal emulator है जो Android पर Linux environment provide करता है। इसकी मदद से तुम अपने phone पर Linux commands चला सकते हो, packages install कर सकते हो, और programming कर सकते हो।
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-lg border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5 hover:border-purple-500/40 transition-all">
              <Terminal className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Basic Linux Commands</h3>
              <p className="text-muted-foreground">
                Linux terminal के basic commands सीखो जो cybersecurity में use होते हैं।
              </p>
            </div>

            <div className="p-6 rounded-lg border-2 border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-blue-500/5 hover:border-pink-500/40 transition-all">
              <Terminal className="w-12 h-12 mb-4 text-pink-400" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Package Management</h3>
              <p className="text-muted-foreground">
                apt और pkg package manager का use करके software install करना सीखो।
              </p>
            </div>

            <div className="p-6 rounded-lg border-2 border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5 hover:border-blue-500/40 transition-all">
              <Terminal className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Python Programming</h3>
              <p className="text-muted-foreground">
                Python setup करो और hacking scripts लिखना सीखो।
              </p>
            </div>

            <div className="p-6 rounded-lg border-2 border-green-500/20 bg-gradient-to-br from-green-500/5 to-purple-500/5 hover:border-green-500/40 transition-all">
              <Terminal className="w-12 h-12 mb-4 text-green-400" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Git & Version Control</h3>
              <p className="text-muted-foreground">
                Git सीखो और GitHub पर projects manage करना सीखो।
              </p>
            </div>
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-12 p-6 rounded-lg border border-dashed border-purple-500/30 bg-purple-500/5 text-center">
            <p className="text-lg font-medium text-foreground mb-2">
              🔜 More Content Coming Soon!
            </p>
            <p className="text-muted-foreground">
              Detailed tutorials और practical examples जल्द ही add होंगे। Stay tuned!
            </p>
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
              Termux GitHub
            </a>
            <a
              href="https://github.com/offensive-security/kali-nethunter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 hover:bg-accent hover:text-accent-foreground"
            >
              Nethunter GitHub
            </a>
            <Button variant="ghost" size="sm" className="gap-2">
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
