'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Terminal, ArrowLeft, Menu, X, Home, Shield, Info, Mail, Globe, Lock, Command, Bot, Wifi, Gamepad2, Monitor, Smartphone } from 'lucide-react'
import Link from 'next/link'

export default function LearningPage() {
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
              Learning Tools
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Start Learning Today
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Termux se kuch bhi seekho - yahan sab kuch available hai!
          </p>
        </div>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto space-y-8">
          {/* 1. Programming & Coding */}
          <div className="p-6 rounded-lg border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5 hover:border-purple-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Terminal className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">💻 1. Programming & Coding</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Python, C, C++, Java, JavaScript run kar sakte ho</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Coding practice aur scripts bana sakte ho</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Apps aur tools develop kar sakte ho</span>
              </li>
            </ul>
          </div>

          {/* 2. Web Development & Hosting */}
          <div className="p-6 rounded-lg border-2 border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-blue-500/5 hover:border-pink-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                <Globe className="w-6 h-6 text-pink-400" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">🌐 2. Web Development & Hosting</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-pink-400">•</span>
                <span>Local server bana sakte ho (Apache, Nginx)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400">•</span>
                <span>PHP + MySQL run kar sakte ho</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400">•</span>
                <span>Website testing aur hosting (local ya online)</span>
              </li>
            </ul>
          </div>

          {/* 3. Ethical Hacking (Learning Purpose) */}
          <div className="p-6 rounded-lg border-2 border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5 hover:border-blue-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Lock className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">🔐 3. Ethical Hacking (Learning Purpose)</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Tools jaise Nmap, Metasploit install kar sakte ho</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Network scanning aur security testing seekh sakte ho</span>
              </li>
              <li className="flex items-start gap-2 bg-red-500/10 rounded p-2">
                <span className="text-red-400">⚠️</span>
                <span className="font-medium">Sirf legal aur learning purpose ke liye use karein</span>
              </li>
            </ul>
          </div>

          {/* 4. Linux Commands & System Control */}
          <div className="p-6 rounded-lg border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5 hover:border-purple-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Command className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">📂 4. Linux Commands & System Control</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Basic Linux commands (ls, cd, mkdir, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Bash scripting seekh sakte ho</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Files manage aur automate kar sakte ho</span>
              </li>
            </ul>
          </div>

          {/* 5. Automation & Bots */}
          <div className="p-6 rounded-lg border-2 border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-blue-500/5 hover:border-pink-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                <Bot className="w-6 h-6 text-pink-400" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">🤖 5. Automation & Bots</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-pink-400">•</span>
                <span>Telegram bots bana sakte ho</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400">•</span>
                <span>Auto scripts (cron jobs) run kar sakte ho</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-400">•</span>
                <span>Repetitive tasks automate kar sakte ho</span>
              </li>
            </ul>
          </div>

          {/* 6. Networking & Remote Access */}
          <div className="p-6 rounded-lg border-2 border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5 hover:border-blue-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Wifi className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">📡 6. Networking & Remote Access</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>SSH server/client use kar sakte ho</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>FTP server bana sakte ho</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Dusre devices control kar sakte ho</span>
              </li>
            </ul>
          </div>

          {/* 7. Fun & Advanced Use */}
          <div className="p-6 rounded-lg border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5 hover:border-purple-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">🎮 7. Fun & Advanced Use</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Linux distro install (Ubuntu, Kali)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Terminal customize karna</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">•</span>
                <span>Games & fun scripts run karna</span>
              </li>
            </ul>
          </div>

          {/* Start Learning Tool Button */}
          <div className="text-center pt-8">
            <Link href="/termux">
              <Button size="lg" className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl shadow-lg hover:shadow-xl transition-all">
                <Terminal className="w-6 h-6" />
                Start Learning Tool
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 mt-auto">
        <div className="container mx-auto px-4 py-6">
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
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
