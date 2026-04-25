'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Github, Youtube, Send, Info, FileText, Shield } from 'lucide-react'

export function PageFooter({ dark = true }: { dark?: boolean }) {
  return (
    <footer className={`border-t ${dark ? 'bg-black/50' : 'bg-muted/50'} mt-auto`}>
      <div className="container mx-auto px-4 py-6">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <a
            href="https://github.com/termux/termux-app"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 ${dark ? 'hover:bg-white/10 hover:text-white text-white/80' : 'hover:bg-accent hover:text-accent-foreground'}`}
          >
            <Github className="w-4 h-4" />
            Termux GitHub
          </a>
          <a
            href="https://github.com/offensive-security/kali-nethunter"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 ${dark ? 'hover:bg-white/10 hover:text-white text-white/80' : 'hover:bg-accent hover:text-accent-foreground'}`}
          >
            <Github className="w-4 h-4" />
            Nethunter GitHub
          </a>
          <a
            href="https://www.kali.org/docs/nethunter/"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 ${dark ? 'hover:bg-white/10 hover:text-white text-white/80' : 'hover:bg-accent hover:text-accent-foreground'}`}
          >
            <FileText className="w-4 h-4" />
            Nethunter Docs
          </a>
          <a
            href="https://www.youtube.com/results?search_query=termux+tutorials"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 ${dark ? 'hover:bg-white/10 hover:text-white text-white/80' : 'hover:bg-accent hover:text-accent-foreground'}`}
          >
            <Youtube className="w-4 h-4" />
            YouTube
          </a>
          <a
            href="https://t.me/termux"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 ${dark ? 'hover:bg-white/10 hover:text-white text-white/80' : 'hover:bg-accent hover:text-accent-foreground'}`}
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
          <p className={`text-sm ${dark ? 'text-white/70' : 'text-muted-foreground'} text-center md:text-left`}>
            © {new Date().getFullYear()} Termux Learn. All rights reserved.
          </p>
          <p className={`text-sm ${dark ? 'text-white/70' : 'text-muted-foreground'} text-center md:text-right`}>
            Learn Ethical Hacking Responsibly
          </p>
        </div>
      </div>
    </footer>
  )
}
