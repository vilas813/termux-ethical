'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Terminal, Shield, Info, Mail, Home } from 'lucide-react'

export default function Home() {
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
              <Button variant="ghost" size="default" className="gap-2">
                <Terminal className="w-4 h-4" />
                Termux
              </Button>
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
              <Button variant="ghost" size="default" className="justify-start gap-2">
                <Terminal className="w-4 h-4" />
                Termux
              </Button>
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
        {/* Hero Section */}
        <section className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Learn Ethical Hacking with Termux
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Master ethical hacking and cybersecurity skills using Termux on your Android device.
          </p>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Termux Card */}
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <Terminal className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Termux Basics</h3>
            <p className="text-muted-foreground">
              Learn the fundamentals of Termux terminal and Linux commands on Android.
            </p>
          </div>

          {/* Nethunter Card */}
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <Shield className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Nethunter Tools</h3>
            <p className="text-muted-foreground">
              Explore Kali NetHunter tools and penetration testing techniques.
            </p>
          </div>

          {/* Ethical Hacking Card */}
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <Home className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Ethical Hacking</h3>
            <p className="text-muted-foreground">
              Learn ethical hacking principles and responsible security practices.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-12">
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Info className="w-6 h-6" />
              About Us
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Termux Learn is dedicated to teaching ethical hacking and cybersecurity concepts using Termux on Android devices. 
              We believe in responsible learning and promoting ethical practices in the cybersecurity field. 
              Our platform provides comprehensive tutorials, guides, and resources for beginners and advanced users alike.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Mail className="w-6 h-6" />
              Contact Us
            </h3>
            <p className="text-muted-foreground mb-4">
              Have questions or need help? Reach out to us through our contact channels.
            </p>
            <Button size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              Get in Touch
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 mt-auto">
        <div className="container mx-auto px-4 py-6">
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
