'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Monitor, Terminal, Copy, CheckCircle, Cpu, Smartphone, Settings, Play, Pause, Maximize, LayoutGrid, Eye, Code, HardDrive, Zap, XCircle, Clock } from 'lucide-react'
import { HeaderAd, InContentAd1, InContentAd2, InContentAd3, FooterAd } from '@/components/ads/AdSense'

export default function KaliNethunterKexPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      <div className="container mx-auto px-4 py-8 pb-20 max-w-4xl">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-purple-500 p-4 rounded-2xl">
              <Monitor className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🖥️ Kali NetHunter KeX
          </h1>
          <p className="text-xl text-purple-200">
            Android पर पूरा Linux Desktop चलाएं
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl border-2 border-purple-500/30">
          <p className="text-lg text-gray-200 leading-relaxed">
            Kali NetHunter में <span className="text-purple-400 font-semibold">KeX (Kali Xfce Desktop)</span> एक ऐसा फीचर है जिससे आप अपने Android फोन पर पूरा Linux Desktop चला सकते हो — बिल्कुल PC जैसा GUI इंटरफेस।
          </p>
        </div>

        {/* 1. What is KeX */}
        <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Terminal className="w-6 h-6 text-purple-400" />
            🔹 1. Kali NetHunter KeX क्या है?
          </h2>
          
          <div className="mb-6">
            <p className="text-gray-300 leading-relaxed mb-4">
              Kali NetHunter का KeX एक remote desktop system है जो Kali Linux के XFCE Desktop Environment को मोबाइल पर दिखाता है।
            </p>
            <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
              <p className="text-purple-300 font-semibold mb-3">👉 इसका मतलब:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>Phone पर GUI (Graphical Interface)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>Mouse/Keyboard जैसा experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>Kali tools को GUI में use कर सकते हो</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2. KeX Types */}
        <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-blue-400" />
            🔹 2. KeX के Types
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
              <h3 className="text-lg font-semibold text-green-400 mb-3">1. KeX (Rootless)</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Root की जरूरत नहीं</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Normal user के लिए safe</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Termux के अंदर चलता है</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
              <h3 className="text-lg font-semibold text-red-400 mb-3">2. KeX (Rooted)</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Full hardware access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>WiFi hacking जैसे advanced features</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Better performance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Desktop Environment */}
        <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <LayoutGrid className="w-6 h-6 text-pink-400" />
            🔹 3. Desktop Environment कौन सा होता है?
          </h2>
          
          <div className="p-4 bg-pink-500/10 rounded-lg border border-pink-500/30">
            <p className="text-pink-300 font-semibold mb-3">Kali NetHunter KeX में default Desktop होता है:</p>
            <div className="text-center my-4">
              <div className="inline-block p-4 bg-black/30 rounded-lg">
                <p className="text-2xl font-bold text-white">👉 XFCE Desktop Environment</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                <span>Light-weight (कम RAM use)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                <span>Fast performance</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                <span>Mobile के लिए best</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Install and Start */}
        <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Settings className="w-6 h-6 text-yellow-400" />
            🔹 4. Install और Start कैसे करें
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Step 1: KeX install</h3>
            <div className="bg-black/30 rounded-lg p-4 space-y-3">
              <div className="flex items-start gap-3 justify-between">
                <code className="text-green-400 font-mono break-all flex-1">apt update {'&&'} apt upgrade</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('apt update && apt upgrade', '1')}
                >
                  {copiedId === '1' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
              <div className="flex items-start gap-3 justify-between">
                <code className="text-green-400 font-mono break-all flex-1">apt install kali-linux-default</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('apt install kali-linux-default', '2')}
                >
                  {copiedId === '2' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
              <div className="flex items-start gap-3 justify-between">
                <code className="text-green-400 font-mono break-all flex-1">apt install kali-win-kex</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('apt install kali-win-kex', '3')}
                >
                  {copiedId === '3' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>

          <InContentAd2 />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Step 2: KeX start</h3>
            <div className="bg-black/30 rounded-lg p-4 space-y-3">
              <div className="flex items-start gap-3 justify-between">
                <code className="text-green-400 font-mono break-all flex-1">kex passwd</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('kex passwd', '4')}
                >
                  {copiedId === '4' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
              <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30">
                <p className="text-blue-300 text-sm">👉 यह command KeX password set करने के लिए</p>
              </div>
              <div className="flex items-start gap-3 justify-between">
                <code className="text-green-400 font-mono break-all flex-1">kex</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('kex', '5')}
                >
                  {copiedId === '5' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
              <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                <p className="text-green-300 text-sm">👉 इससे GUI start होगा</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Step 3: Stop करना</h3>
            <div className="bg-black/30 rounded-lg p-4">
              <div className="flex items-start gap-3 justify-between">
                <code className="text-green-400 font-mono break-all flex-1">kex stop</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('kex stop', '6')}
                >
                  {copiedId === '6' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

          <InContentAd1 />

        {/* 5. Modes */}
        <div className="mb-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl border-2 border-blue-500/30">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <LayoutGrid className="w-6 h-6 text-blue-400" />
            🔹 5. Modes (बहुत important)
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <LayoutGrid className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">1. Window Mode</h3>
                <div className="bg-black/40 rounded-lg p-3 mb-2">
                  <div className="flex items-start gap-3 justify-between">
                    <code className="text-green-400 font-mono break-all flex-1">kex {'&'}</code>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 w-6 p-0 flex-shrink-0"
                      onClick={() => copyToClipboard('kex &', '7')}
                    >
                      {copiedId === '7' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    </Button>
                  </div>
                </div>
                <p className="text-gray-400">App के अंदर window open होती है</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Maximize className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">2. Full Screen Mode</h3>
                <div className="bg-black/40 rounded-lg p-3 mb-2">
                  <div className="flex items-start gap-3 justify-between">
                    <code className="text-green-400 font-mono break-all flex-1">kex --fullscreen</code>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 w-6 p-0 flex-shrink-0"
                      onClick={() => copyToClipboard('kex --fullscreen', '8')}
                    >
                      {copiedId === '8' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    </Button>
                  </div>
                </div>
                <p className="text-gray-400">पूरा desktop screen पर</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-black/30 rounded-lg">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <LayoutGrid className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">3. Seamless Mode</h3>
                <div className="bg-black/40 rounded-lg p-3 mb-2">
                  <div className="flex items-start gap-3 justify-between">
                    <code className="text-green-400 font-mono break-all flex-1">kex --seamless</code>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-6 w-6 p-0 flex-shrink-0"
                      onClick={() => copyToClipboard('kex --seamless', '9')}
                    >
                      {copiedId === '9' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    </Button>
                  </div>
                </div>
                <p className="text-gray-400">Android apps + Kali apps साथ में</p>
              </div>
            </div>
          </div>
        </div>

        {/* 6. KeX Viewer App */}
        <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Eye className="w-6 h-6 text-cyan-400" />
            🔹 6. KeX Viewer App
          </h2>
          
          <div className="p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
            <p className="text-cyan-300 font-semibold mb-3">KeX देखने के लिए आप use करते हो:</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">👉 NetHunter KeX</p>
                  <p className="text-gray-400 text-sm">Play Store / Kali site से मिलता है</p>
                </div>
              </div>
              <div className="p-3 bg-black/30 rounded-lg">
                <p className="text-gray-300">VNC based viewer है</p>
              </div>
            </div>
          </div>
        </div>

        {/* 7. Use Cases */}
        <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-green-400" />
            🔹 7. Use Cases
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <p className="text-gray-300">GUI hacking tools (Burp Suite, Wireshark)</p>
            </div>
            <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/30 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Code className="w-5 h-5 text-white" />
              </div>
              <p className="text-gray-300">Coding (VS Code)</p>
            </div>
            <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/30 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <p className="text-gray-300">Linux practice</p>
            </div>
            <div className="p-4 bg-pink-500/10 rounded-lg border border-pink-500/30 flex items-center gap-3">
              <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <p className="text-gray-300">Web development</p>
            </div>
          </div>
        </div>

        {/* 8. Important Tips */}
        <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-400" />
            🔹 8. Important Tips
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
              <HardDrive className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold">Minimum RAM: 4GB recommended</p>
                <p className="text-gray-400 text-sm">Better performance के लिए 6GB+ best है</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
              <Cpu className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold">Storage: 10GB+ free</p>
                <p className="text-gray-400 text-sm">Kali tools के लिए जगह चाहिए</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold">Rooted phone → best performance</p>
                <p className="text-gray-400 text-sm">Direct hardware access</p>
              </div>
            </div>

            <div className="p-4 bg-orange-500/10 rounded-lg border border-orange-500/30">
              <div className="flex items-start gap-2 mb-3">
                <XCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <p className="text-orange-300 font-semibold">Lag हो तो resolution कम करो:</p>
              </div>
              <div className="bg-black/40 rounded-lg p-3">
                <div className="flex items-start gap-3 justify-between">
                  <code className="text-green-400 font-mono break-all flex-1 text-sm">kex --win -s 1280x720</code>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0 flex-shrink-0"
                    onClick={() => copyToClipboard('kex --win -s 1280x720', '10')}
                  >
                    {copiedId === '10' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Short Summary */}
        <div className="mb-8 p-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-2xl border-2 border-yellow-500/50">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-400" />
            🔥 Short Summary
          </h2>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300">
                <span className="text-yellow-400 font-semibold">👉 Kali NetHunter KeX</span> = Mobile में PC जैसा Linux Desktop
              </p>
            </div>
            <div className="flex items-start gap-3">
              <LayoutGrid className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300">
                <span className="text-pink-400 font-semibold">👉 XFCE</span> = fast और lightweight
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300">
                <span className="text-green-400 font-semibold">👉 Rooted</span> → powerful, <span className="text-purple-400 font-semibold">Rootless</span> → safe
              </p>
            </div>
          </div>
        </div>

          <InContentAd3 />

        {/* Footer */}
                <FooterAd />

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
