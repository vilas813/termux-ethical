'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Shield, Terminal, CheckCircle, XCircle, Copy, AlertTriangle } from 'lucide-react'

export default function KaliNethunterInstallationPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-x-hidden">
      <div className="container mx-auto px-4 py-8 pb-20 max-w-4xl">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-500 p-4 rounded-2xl">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🛡️ Kali NetHunter Installation
          </h1>
          <p className="text-xl text-blue-200">
            Rooted और Rootless NetHunter Installation Guide
          </p>
        </div>

        {/* Rooted Kali NetHunter */}
        <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-red-400" />
            🔹 Rooted Kali NetHunter क्या है?
          </h2>
          
          <div className="mb-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              👉 Rooted NetHunter वह वर्ज़न है जो root किए हुए Android फोन पर चलता है
            </p>
            <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
              <p className="text-green-300 font-semibold mb-3">✔ इसकी खासियत:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>पूरा सिस्टम एक्सेस मिलता है</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>WiFi Monitoring (Monitor Mode)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>HID Attack (Keyboard Injection)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>USB Attack Support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Advanced Penetration Testing Tools</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
            <p className="text-red-300 font-semibold mb-3">❗ जरूरत:</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span>फोन Root होना चाहिए</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span>Custom Recovery (जैसे TWRP)</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <span>Compatible Kernel</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rootless Kali NetHunter */}
        <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Terminal className="w-6 h-6 text-green-400" />
            🔹 Rootless Kali NetHunter क्या है?
          </h2>
          
          <div className="mb-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              👉 Rootless NetHunter बिना root वाले फोन में चलता है
            </p>
            <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
              <p className="text-green-300 font-semibold mb-3">✔ इसकी खासियत:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Root की जरूरत नहीं</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>आसान installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Basic tools (Nmap, SQLmap आदि)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Safe (फोन damage का risk कम)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/30">
            <p className="text-orange-300 font-semibold mb-3">❌ Limitations:</p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <span>Monitor Mode नहीं मिलेगा</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <span>HID/USB attack नहीं</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                <span>Limited hardware access</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Rooted vs Rootless Comparison */}
        <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl border-2 border-purple-500/30">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-purple-400" />
            ⚡ Rooted vs Rootless (Difference)
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 px-4 text-white font-semibold">Feature</th>
                  <th className="py-3 px-4 text-red-400 font-semibold">Rooted</th>
                  <th className="py-3 px-4 text-green-400 font-semibold">Rootless</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium">Root Required</td>
                  <td className="py-3 px-4"><span className="text-green-400 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Yes</span></td>
                  <td className="py-3 px-4"><span className="text-red-400 flex items-center gap-2"><XCircle className="w-4 h-4" /> No</span></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium">WiFi Monitor Mode</td>
                  <td className="py-3 px-4"><span className="text-green-400 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Yes</span></td>
                  <td className="py-3 px-4"><span className="text-red-400 flex items-center gap-2"><XCircle className="w-4 h-4" /> No</span></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium">HID Attack</td>
                  <td className="py-3 px-4"><span className="text-green-400 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Yes</span></td>
                  <td className="py-3 px-4"><span className="text-red-400 flex items-center gap-2"><XCircle className="w-4 h-4" /> No</span></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium">Easy Install</td>
                  <td className="py-3 px-4"><span className="text-orange-400">❌ थोड़ा कठिन</span></td>
                  <td className="py-3 px-4"><span className="text-green-400 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> बहुत आसान</span></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Full Power</td>
                  <td className="py-3 px-4"><span className="text-green-400 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Yes</span></td>
                  <td className="py-3 px-4"><span className="text-orange-400">❌ Limited</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Rootless Installation */}
        <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Terminal className="w-6 h-6 text-blue-400" />
            🔧 Rootless Kali NetHunter Installation (Termux में)
          </h2>
          
          <div className="mb-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              👉 सबसे आसान तरीका 👇
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Step 1: Termux Install करें</h3>
              <p className="text-gray-400 mb-2">👉 Download from <a href="https://f-droid.org/repo/com.termux/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">F-Droid</a> or <a href="https://github.com/termux/termux-app/releases" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a></p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3">Step 2: Commands चलाएं</h3>
              <div className="bg-black/30 rounded-lg p-4 space-y-3">
                <div className="flex items-start gap-3 justify-between">
                  <code className="text-green-400 font-mono break-all flex-1">apt update {'&&'} apt upgrade -y</code>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0 flex-shrink-0"
                    onClick={() => copyToClipboard('apt update && apt upgrade -y', '1')}
                  >
                    {copiedId === '1' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
                <div className="flex items-start gap-3 justify-between">
                  <code className="text-green-400 font-mono break-all flex-1">apt install wget -y</code>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0 flex-shrink-0"
                    onClick={() => copyToClipboard('apt install wget -y', '2')}
                  >
                    {copiedId === '2' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
                <div className="flex items-start gap-3 justify-between">
                  <code className="text-green-400 font-mono break-all flex-1">wget -O install-nethunter-termux https://offs.ec/2MceZWr</code>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0 flex-shrink-0"
                    onClick={() => copyToClipboard('wget -O install-nethunter-termux https://offs.ec/2MceZWr', '3')}
                  >
                    {copiedId === '3' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
                <div className="flex items-start gap-3 justify-between">
                  <code className="text-green-400 font-mono break-all flex-1">chmod +x install-nethunter-termux</code>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0 flex-shrink-0"
                    onClick={() => copyToClipboard('chmod +x install-nethunter-termux', '4')}
                  >
                    {copiedId === '4' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
                <div className="flex items-start gap-3 justify-between">
                  <code className="text-green-400 font-mono break-all flex-1">./install-nethunter-termux</code>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0 flex-shrink-0"
                    onClick={() => copyToClipboard('./install-nethunter-termux', '5')}
                  >
                    {copiedId === '5' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Step 3: Start NetHunter</h3>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="flex items-start gap-3 justify-between">
                  <code className="text-green-400 font-mono break-all flex-1">nh</code>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0 flex-shrink-0"
                    onClick={() => copyToClipboard('nh', '6')}
                  >
                    {copiedId === '6' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rooted Installation */}
        <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-400" />
            🔧 Rooted Kali NetHunter Installation (Short Guide)
          </h2>
          
          <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/30 mb-6">
            <p className="text-orange-300 leading-relaxed">
              👉 ये थोड़ा advanced है - सिर्फ तब try करें जब आपको Android custom ROMs और rooting के बारे में ज्ञान हो
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <p className="text-white font-semibold">Bootloader unlock करें</p>
                <p className="text-gray-400 text-sm">OEM unlocking के लिए अपने device की official guide follow करें</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <p className="text-white font-semibold">Phone root करें (Magisk)</p>
                <p className="text-gray-400 text-sm">Install Magisk से systemless root पाएं</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <p className="text-white font-semibold">TWRP install करें</p>
                <p className="text-gray-400 text-sm">Custom recovery flash करें</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">4</span>
              </div>
              <div>
                <p className="text-white font-semibold">NetHunter ZIP download करें</p>
                <p className="text-gray-400 text-sm"><a href="https://www.kali.org/get-kali/#kali-nethunter" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Official website</a> से अपने device के लिए सही version download करें</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">5</span>
              </div>
              <div>
                <p className="text-white font-semibold">TWRP से flash करें</p>
                <p className="text-gray-400 text-sm">Recovery mode में NetHunter ZIP flash करें</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="mb-8 p-6 bg-gradient-to-r from-yellow-500/20 to-red-500/20 backdrop-blur-lg rounded-2xl border-2 border-yellow-500/50">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-yellow-400" />
            ⚠ Important Note
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300">
                <span className="text-red-400 font-semibold">Rooted version</span> powerful है लेकिन risky है - phone brick होने का risk है
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300">
                <span className="text-green-400 font-semibold">Rootless</span> beginners के लिए best है - safe और easy है
              </p>
            </div>
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300">
                <span className="text-yellow-400 font-semibold">Ethical hacking</span> सिर्फ learning purpose के लिए करें - unauthorized access गैरकानूनी है
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Terminal className="w-6 h-6 text-purple-400" />
            📚 Additional Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://www.kali.org/docs/nethunter/" target="_blank" rel="noopener noreferrer" className="p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-all cursor-pointer border border-white/10 hover:border-purple-500/50">
              <p className="text-white font-semibold mb-1">📖 Official Documentation</p>
              <p className="text-gray-400 text-sm">Complete NetHunter guides</p>
            </a>
            <a href="https://github.com/offensive-security/kali-nethunter" target="_blank" rel="noopener noreferrer" className="p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-all cursor-pointer border border-white/10 hover:border-purple-500/50">
              <p className="text-white font-semibold mb-1">💻 GitHub Repository</p>
              <p className="text-gray-400 text-sm">Source code & releases</p>
            </a>
            <a href="https://www.kali.org/tools/" target="_blank" rel="noopener noreferrer" className="p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-all cursor-pointer border border-white/10 hover:border-purple-500/50">
              <p className="text-white font-semibold mb-1">🔧 Kali Tools List</p>
              <p className="text-gray-400 text-sm">All available tools</p>
            </a>
            <a href="https://www.youtube.com/results?search_query=kali+nethunter+tutorial" target="_blank" rel="noopener noreferrer" className="p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-all cursor-pointer border border-white/10 hover:border-purple-500/50">
              <p className="text-white font-semibold mb-1">🎬 YouTube Tutorials</p>
              <p className="text-gray-400 text-sm">Video guides & demos</p>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t bg-black/50 mt-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <a href="https://github.com/termux/termux-app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 hover:bg-white/10 hover:text-white text-white/80 break-words">
                Termux GitHub
              </a>
              <a href="https://github.com/offensive-security/kali-nethunter" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 hover:bg-white/10 hover:text-white text-white/80 break-words">
                Nethunter GitHub
              </a>
              <a href="https://www.kali.org/docs/nethunter/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 hover:bg-white/10 hover:text-white text-white/80 break-words">
                Nethunter Docs
              </a>
              <a href="https://www.youtube.com/results?search_query=termux+tutorials" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 hover:bg-white/10 hover:text-white text-white/80 break-words">
                YouTube
              </a>
              <a href="https://t.me/termuxethical" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 hover:bg-white/10 hover:text-white text-white/80 break-words">
                Telegram
              </a>
              <Link href="/about">
                <Button variant="ghost" size="sm" className="gap-2 text-white/80 hover:text-white hover:bg-white/10 whitespace-nowrap">
                  About
                </Button>
              </Link>
              <Link href="/terms">
                <Button variant="ghost" size="sm" className="gap-2 text-white/80 hover:text-white hover:bg-white/10 whitespace-nowrap">
                  Terms & Conditions
                </Button>
              </Link>
              <Link href="/privacy">
                <Button variant="ghost" size="sm" className="gap-2 text-white/80 hover:text-white hover:bg-white/10 whitespace-nowrap">
                  Privacy Policy
                </Button>
              </Link>
            </div>
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
    </div>
  )
}
