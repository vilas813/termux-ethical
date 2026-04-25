'use client'

import Link from 'next/link'
import { ArrowLeft, Code, Globe, Shield, Terminal, Bot, Network, Gamepad2 } from 'lucide-react'

export default function LearningToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 pb-20">
        {/* Back Button */}
        <Link href="/termux" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Termux
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Learning Tools
          </h1>
          <p className="text-xl text-purple-200">
            Termux सीखने के 7 मुख्य कैटेगरीज़
          </p>
        </div>

        {/* Learning Categories */}
        <div className="space-y-8">
          
          {/* 1. Programming & Coding */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-500 p-3 rounded-xl">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">
                  💻 Programming & Coding
                </h2>
                <p className="text-purple-200 mb-4">
                  Termux पर Python, JavaScript, C++, Go, Node.js जैसी भाषाओं में कोडिंग सीखें
                </p>
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Install कमांड्स:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pkg install python</code> - Python</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pkg install nodejs</code> - Node.js</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pkg install golang</code> - Go Lang</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pkg install clang</code> - C/C++</li>
                  </ul>
                </div>
                <p className="text-gray-400 text-sm">
                  Python स्क्रिप्ट्स चला सकते हैं, प्रोग्राम बना सकते हैं, और प्रोजेक्ट्स डेवलप कर सकते हैं
                </p>
              </div>
            </div>
            <Link href="/programming">
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                Start
              </button>
            </Link>
          </div>

          {/* 2. Web Development & Hosting */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-500 p-3 rounded-xl">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">
                  🌐 Web Development & Hosting
                </h2>
                <p className="text-purple-200 mb-4">
                  Termux पर Website बनाएं, Localhost चलाएं, और वेबसाइट होस्ट करें
                </p>
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Tools और कमांड्स:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pkg install php</code> - PHP Server</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pkg install nginx</code> - Nginx Server</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pkg install nodejs</code> - Node.js Apps</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">php -S localhost:8080</code> - Start PHP</li>
                  </ul>
                </div>
                <p className="text-gray-400 text-sm">
                  PHP, HTML, CSS, JavaScript, Node.js Express server चला सकते हैं
                </p>
              </div>
            </div>
            <Link href="/web-development">
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25">
                Start
              </button>
            </Link>
          </div>

          {/* 3. Ethical Hacking (Learning Purpose) */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 p-3 rounded-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">
                  🔐 Ethical Hacking (Learning Purpose)
                </h2>
                <p className="text-purple-200 mb-4">
                  Termux से Ethical Hacking टूल्स सीखें - सिर्फ लर्निंग पर्पज़ के लिए
                </p>
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Populer Tools:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pkg install nmap</code> - Network Scanner</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pkg install metasploit</code> - Penetration Testing</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pkg install sqlmap</code> - SQL Injection Test</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pkg install hydra</code> - Password Cracker</li>
                  </ul>
                </div>
                <p className="text-red-300 text-sm">
                  ⚠️ Disclaimer: सिर्फ अपने सिस्टम पर और परमिशन के साथ practice करें
                </p>
              </div>
            </div>
            <Link href="/ethical-hacking">
              <button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/25">
                Start
              </button>
            </Link>
          </div>

          {/* 4. Linux Commands & System Control */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-yellow-500 p-3 rounded-xl">
                <Terminal className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">
                  📂 Linux Commands & System Control
                </h2>
                <p className="text-purple-200 mb-4">
                  Linux कमांड्स सीखें और System कंट्रोल करें Termux में
                </p>
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Basic Commands:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">ls</code> - Files देखें</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">cd foldername</code> - Folder में जाएं</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">mkdir name</code> - Folder बनाएं</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">rm -rf name</code> - Delete करें</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">chmod +x file</code> - Permission दें</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">top</code> - Process देखें</li>
                  </ul>
                </div>
                <p className="text-gray-400 text-sm">
                  Termux = Full Linux Environment on Android, Linux Expert बन सकते हैं
                </p>
              </div>
            </div>
            <Link href="/linux-commands">
              <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-yellow-500/25">
                Start
              </button>
            </Link>
          </div>

          {/* 5. Automation & Bots */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-500 p-3 rounded-xl">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">
                  🤖 Automation & Bots
                </h2>
                <p className="text-purple-200 mb-4">
                  Termux से WhatsApp बॉट्स, Telegram बॉट्स, और ऑटोमेशन स्क्रिप्ट्स बनाएं
                </p>
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Popular Frameworks:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pip install pytelegrambotapi</code> - Telegram Bot</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pip install selenium</code> - Web Automation</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pip install schedule</code> - Task Scheduler</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">npm install whatsapp-web.js</code> - WhatsApp Bot</li>
                  </ul>
                </div>
                <p className="text-gray-400 text-sm">
                  Python/Node.js से Auto-Reply Bots, Message Bots, Web Scrapers बना सकते हैं
                </p>
              </div>
            </div>
            <Link href="/automation-bots">
              <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Start
              </button>
            </Link>
          </div>

          {/* 6. Networking & Remote Access */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-cyan-500 p-3 rounded-xl">
                <Network className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">
                  📡 Networking & Remote Access
                </h2>
                <p className="text-purple-200 mb-4">
                  Termux से SSH, FTP, VNC, और रिमोट एक्सेस सीखें
                </p>
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Network Tools:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pkg install openssh</code> - SSH Client</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pkg install nmap</code> - Network Scanner</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pkg install wget curl</code> - Download Tools</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">ssh user@ip</code> - Remote Connect</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pkg install termux-api</code> - Android API</li>
                  </ul>
                </div>
                <p className="text-gray-400 text-sm">
                  PC से Termux कंट्रोल कर सकते हैं, फाइल ट्रांसफर कर सकते हैं
                </p>
              </div>
            </div>
            <Link href="/networking">
              <button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                Start
              </button>
            </Link>
          </div>

          {/* 7. Fun & Advanced Use */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-pink-500 p-3 rounded-xl">
                <Gamepad2 className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">
                  🎮 Fun & Advanced Use
                </h2>
                <p className="text-purple-200 mb-4">
                  Termux से गेम खेलें, म्यूज़िक प्लेयर चलाएं, और Fun Tools का उपयोग करें
                </p>
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Fun Tools:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pkg install cmatrix</code> - Matrix Animation</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pkg install cowsay</code> - Talking Cow</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pkg install figlet</code> - ASCII Art</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pkg install neofetch</code> - System Info</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">pkg install htop</code> - System Monitor</li>
                  </ul>
                </div>
                <p className="text-gray-400 text-sm">
                  Terminal में ही Games, ASCII Art, और System Tools उपयोग कर सकते हैं
                </p>
              </div>
            </div>
            <Link href="/fun-advanced">
              <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
                Start
              </button>
            </Link>
          </div>

          {/* 8. Basic Linux Commands */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-yellow-500 p-3 rounded-xl">
                <Terminal className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">
                  📚 Basic Linux Commands
                </h2>
                <p className="text-purple-200 mb-4">
                  All-in-One Linux Commands List - Directory, Files, Network, System & More!
                </p>
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <h3 className="text-lg font-semibold text-white mb-2">What You'll Learn:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">ls, cd, pwd</code> - Directory Commands</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">cat, nano, less</code> - File Viewing</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">chmod, chown</code> - Permissions</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">apt, apt install</code> - Package Management</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">ping, wget, curl</code> - Network & Downloads</li>
                    <li className="text-gray-300">• <code className="bg-black/30 px-2 py-1 rounded">ssh, crontab</code> - Remote & Automation</li>
                  </ul>
                </div>
                <p className="text-gray-400 text-sm">
                  19+ Categories with all commands and examples - Complete Linux Reference!
                </p>
              </div>
            </div>
            <Link href="/basic-linux-commands">
              <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-yellow-500/25">
                🚀 Start Learning Commands
              </button>
            </Link>
          </div>

        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 p-6 bg-white/5 rounded-xl">
          <p className="text-purple-200">
            🚀 सभी कैटेगरीज़ में "Start" बटन पर क्लिक करें और अपनी सीखने की यात्रा शुरू करें!
          </p>
        </div>

      </div>
    </div>
  )
}
