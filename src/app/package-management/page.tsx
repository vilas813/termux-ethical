'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Package, Terminal, Box, Cpu, Smartphone, CheckCircle, Lightbulb, Github, Youtube, Send, Info, FileText, Shield } from 'lucide-react'

export default function PackageManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 pb-20">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-purple-500 p-4 rounded-2xl">
              <Package className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            📦 Package Management
          </h1>
          <p className="text-xl text-purple-200">
            सिस्टम में Software को Install, Update और Remove करना सीखें
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Package className="w-6 h-6 text-purple-400" />
            Package Management क्या है?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Package Management (पैकेज मैनेजमेंट) का मतलब होता है — सिस्टम में software (packages) को install, update, remove और manage करना।
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            अगर तुम Linux या Termux use कर रहे हो, तो package manager बहुत important होता है।
          </p>
        </div>

        {/* What is Package Manager */}
        <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Box className="w-6 h-6 text-pink-400" />
            Package Manager क्या होता है?
          </h2>
          <p className="text-gray-300 text-lg mb-4">Package manager एक tool होता है जो:</p>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <span>Software install करता है</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <span>Dependencies (required files) automatically install करता है</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <span>Update और upgrade करता है</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <span>Uninstall करता है</span>
            </li>
          </ul>
        </div>

        {/* Popular Package Managers */}
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          🔹 Popular Package Managers
        </h2>

        {/* 1. APT */}
        <div className="mb-6 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-orange-500 p-3 rounded-xl flex-shrink-0">
              <Terminal className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">1. APT (Advanced Package Tool)</h3>
              <p className="text-orange-300">Use होता है: Ubuntu, Debian, Kali Linux, Termux</p>
            </div>
          </div>
          <div className="bg-black/30 rounded-lg p-4">
            <p className="text-green-400 font-semibold mb-3">👉 Commands:</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-mono">$</span>
                <span className="text-gray-300 font-mono">apt update</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-mono">$</span>
                <span className="text-gray-300 font-mono">apt upgrade</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-mono">$</span>
                <span className="text-gray-300 font-mono">apt install &lt;package&gt;</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-mono">$</span>
                <span className="text-gray-300 font-mono">apt remove &lt;package&gt;</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-mono">$</span>
                <span className="text-gray-300 font-mono">apt search &lt;package&gt;</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. YUM / DNF */}
        <div className="mb-6 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-red-500 p-3 rounded-xl flex-shrink-0">
              <Terminal className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">2. YUM / DNF</h3>
              <p className="text-red-300">Use होता है: Fedora, CentOS, RHEL</p>
            </div>
          </div>
          <div className="bg-black/30 rounded-lg p-4">
            <p className="text-green-400 font-semibold mb-3">👉 Commands:</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-mono">$</span>
                <span className="text-gray-300 font-mono">dnf install &lt;package&gt;</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-mono">$</span>
                <span className="text-gray-300 font-mono">dnf update</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-mono">$</span>
                <span className="text-gray-300 font-mono">dnf remove &lt;package&gt;</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Pacman */}
        <div className="mb-6 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-blue-500 p-3 rounded-xl flex-shrink-0">
              <Terminal className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">3. Pacman</h3>
              <p className="text-blue-300">Use होता है: Arch Linux, Manjaro</p>
            </div>
          </div>
          <div className="bg-black/30 rounded-lg p-4">
            <p className="text-green-400 font-semibold mb-3">👉 Commands:</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-mono">$</span>
                <span className="text-gray-300 font-mono">pacman -S &lt;package&gt;</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-mono">$</span>
                <span className="text-gray-300 font-mono">pacman -Syu</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-mono">$</span>
                <span className="text-gray-300 font-mono">pacman -R &lt;package&gt;</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Zypper */}
        <div className="mb-6 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-green-500 p-3 rounded-xl flex-shrink-0">
              <Terminal className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">4. Zypper</h3>
              <p className="text-green-300">Use होता है: openSUSE</p>
            </div>
          </div>
          <div className="bg-black/30 rounded-lg p-4">
            <p className="text-green-400 font-semibold mb-3">👉 Commands:</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-mono">$</span>
                <span className="text-gray-300 font-mono">zypper install &lt;package&gt;</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-mono">$</span>
                <span className="text-gray-300 font-mono">zypper update</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-mono">$</span>
                <span className="text-gray-300 font-mono">zypper remove &lt;package&gt;</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Termux (Android) - Highlighted */}
        <div className="mb-8 p-6 bg-yellow-500/20 backdrop-blur-lg rounded-2xl border-2 border-yellow-500/50">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-yellow-500 p-3 rounded-xl flex-shrink-0">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">5. Termux (Android)</h3>
              <p className="text-yellow-300 font-semibold">तुम्हारे लिए सबसे important 👇</p>
            </div>
          </div>
          <div className="bg-black/30 rounded-lg p-4">
            <p className="text-green-400 font-semibold mb-3">👉 Commands:</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-mono">$</span>
                <span className="text-gray-300 font-mono">apt update</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-mono">$</span>
                <span className="text-gray-300 font-mono">apt upgrade</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-mono">$</span>
                <span className="text-gray-300 font-mono">apt install &lt;package&gt;</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-mono">$</span>
                <span className="text-gray-300 font-mono">pkg install &lt;package&gt;</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 font-mono">$</span>
                <span className="text-gray-300 font-mono">pkg uninstall &lt;package&gt;</span>
              </div>
            </div>
          </div>
        </div>

        {/* Example */}
        <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Terminal className="w-6 h-6 text-cyan-400" />
            🔹 Example (Termux में)
          </h2>
          <p className="text-gray-300 mb-4">अगर तुम्हें nmap install करना है:</p>
          <div className="bg-black/30 rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-green-400 font-mono">$</span>
              <span className="text-gray-300 font-mono">apt update</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400 font-mono">$</span>
              <span className="text-gray-300 font-mono">apt upgrade</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-400 font-mono">$</span>
              <span className="text-gray-300 font-mono">apt install nmap</span>
            </div>
          </div>
        </div>

        {/* Why Important */}
        <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-400" />
            🔹 Package Management क्यों जरूरी है?
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <span>Manual installation की जरूरत नहीं</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <span>Time बचाता है</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <span>Errors कम होते हैं</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <span>System clean रहता है</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <span>Security updates आसानी से मिलते हैं</span>
            </li>
          </ul>
        </div>

        {/* Pro Tip */}
        <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl border-2 border-purple-500/50">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-yellow-400" />
            🔹 Pro Tip (Termux / Kali Users)
          </h2>
          <p className="text-gray-300 mb-4">हमेशा ये run करो:</p>
          <div className="bg-black/30 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-green-400 font-mono">$</span>
              <span className="text-gray-300 font-mono text-lg">apt update {'&&'} apt upgrade</span>
            </div>
            <p className="text-yellow-300 text-sm">
              👉 इससे तुम्हारा system latest रहेगा
            </p>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="border-t bg-black/50 mt-auto">
        <div className="container mx-auto px-4 py-6">
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <a
              href="https://github.com/termux/termux-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 hover:bg-white/10 hover:text-white text-white/80"
            >
              <Github className="w-4 h-4" />
              Termux GitHub
            </a>
            <a
              href="https://github.com/offensive-security/kali-nethunter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 hover:bg-white/10 hover:text-white text-white/80"
            >
              <Github className="w-4 h-4" />
              Nethunter GitHub
            </a>
            <a
              href="https://www.kali.org/docs/nethunter/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 hover:bg-white/10 hover:text-white text-white/80"
            >
              <FileText className="w-4 h-4" />
              Nethunter Docs
            </a>
            <a
              href="https://www.youtube.com/results?search_query=termux+tutorials"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 hover:bg-white/10 hover:text-white text-white/80"
            >
              <Youtube className="w-4 h-4" />
              YouTube
            </a>
            <a
              href="https://t.me/termux"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 hover:bg-white/10 hover:text-white text-white/80"
            >
              <Send className="w-4 h-4" />
              Telegram
            </a>
            <Link href="/about">
              <Button variant="ghost" size="sm" className="gap-2 text-white/80 hover:text-white hover:bg-white/10">
                <Info className="w-4 h-4" />
                About
              </Button>
            </Link>
            <Link href="/terms">
              <Button variant="ghost" size="sm" className="gap-2 text-white/80 hover:text-white hover:bg-white/10">
                <FileText className="w-4 h-4" />
                Terms & Conditions
              </Button>
            </Link>
            <Link href="/privacy">
              <Button variant="ghost" size="sm" className="gap-2 text-white/80 hover:text-white hover:bg-white/10">
                <Shield className="w-4 h-4" />
                Privacy Policy
              </Button>
            </Link>
          </div>
          {/* Footer Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/70 text-center md:text-left">
              © {new Date().getFullYear()} Termux Learn. All rights reserved.
            </p>
            <p className="text-sm text-white/70 text-center md:text-right">
              Learn Ethical Hacking Responsibly
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
