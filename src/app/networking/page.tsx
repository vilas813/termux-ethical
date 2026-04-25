'use client'

import Link from 'next/link'
import { ArrowLeft, Network, Server, Lock, Shield, Globe, Terminal, Wifi, HardDrive } from 'lucide-react'

export default function NetworkingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 pb-20">
        {/* Back Button */}
        <Link href="/learning" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Learning Tools
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-cyan-500 p-4 rounded-2xl">
              <Network className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Networking & Remote Access
          </h1>
          <p className="text-xl text-cyan-200">
            Termux से SSH, FTP, VNC, और रिमोट एक्सेस सीखें
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">

          {/* 1. Network Basics */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-cyan-500 p-3 rounded-xl">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">1. Network Basics</h2>
                <p className="text-cyan-200">Networking की Basic जानकारी</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🌐 Network Types:</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• <strong>LAN</strong> - Local Area Network (Home/Office)</li>
                  <li>• <strong>WAN</strong> - Wide Area Network (Internet)</li>
                  <li>• <strong>MAN</strong> - Metropolitan Area Network (City)</li>
                  <li>• <strong>PAN</strong> - Personal Area Network (Bluetooth)</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🔢 IP Address Types:</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• <strong>IPv4</strong> - 192.168.1.1 (32-bit)</li>
                  <li>• <strong>IPv6</strong> - 2001:0db8:85a3:0000 (128-bit)</li>
                  <li>• <strong>Private IP</strong> - 192.168.x.x, 10.x.x.x</li>
                  <li>• <strong>Public IP</strong> - Internet पर accessible</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">📡 Network Commands:</h3>
                <div className="space-y-1 text-sm">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> ip addr</span>
                    <span className="text-gray-500 ml-2"># IP address देखें</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> ping 192.168.1.1</span>
                    <span className="text-gray-500 ml-2"># Connection test</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> netstat -tuln</span>
                    <span className="text-gray-500 ml-2"># Open ports</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. SSH Setup */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-500 p-3 rounded-xl">
                <Terminal className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">2. SSH Setup</h2>
                <p className="text-green-200">Remote Access के लिए SSH Configure करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">SSH Installation:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg update && pkg upgrade</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install openssh</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> sshd</span>
                    <span className="text-gray-500 text-sm ml-2"># Start SSH server</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Set Password:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> passwd</span>
                    <span className="text-gray-500 text-sm ml-2"># Set login password</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">New password दर्ज करें और Confirm करें</p>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Find IP Address:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> ip addr show wlan0</span>
                    <span className="text-gray-500 text-sm ml-2"># WiFi IP</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">inet addr को note कर लें (जैसे: 192.168.1.100)</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Connect from PC */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-500 p-3 rounded-xl">
                <Server className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">3. PC से Connect करें</h2>
                <p className="text-blue-200">Computer से Termux तक पहुंचें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Windows (PowerShell/CMD):</h3>
                <pre className="text-gray-300 text-sm overflow-x-auto">
ssh termux@192.168.1.100
                </pre>
                <p className="text-gray-400 text-sm mt-2">Password दर्ज करें जो Termux में set किया</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Linux/Mac:</h3>
                <pre className="text-gray-300 text-sm overflow-x-auto">
ssh termux@192.168.1.100
                </pre>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-300 mb-2">✅ Connected!</h3>
                <p className="text-gray-300 text-sm">
                  अब आप PC से Termux commands चला सकते हैं। Files edit कर सकते हैं और Termux को पूरा control कर सकते हैं।
                </p>
              </div>
            </div>
          </div>

          {/* 4. SSH Key Authentication */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-yellow-500 p-3 rounded-xl">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">4. SSH Key Authentication</h2>
                <p className="text-yellow-200">Password के बिना SSH Access</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">On PC - Generate Key:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> ssh-keygen -t rsa -b 4096</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">Enter दबाएं (default path), Passphrase छोड़ें या दें</p>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Copy Public Key to Termux:</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-green-400">PC$</span>
                    <span className="text-gray-300"> ssh-copy-id termux@192.168.1.100</span>
                  </div>
                  <div className="text-gray-400 mt-2">या Manual Copy:</div>
                  <div>
                    <span className="text-green-400">PC$</span>
                    <span className="text-gray-300"> cat ~/.ssh/id_rsa.pub</span>
                  </div>
                  <div className="text-gray-400 mt-2">In Termux:</div>
                  <div>
                    <span className="text-green-400">termux$</span>
                    <span className="text-gray-300"> mkdir ~/.ssh</span>
                  </div>
                  <div>
                    <span className="text-green-400">termux$</span>
                    <span className="text-gray-300"> echo "PASTE_PUBLIC_KEY_HERE" &gt;&gt; ~/.ssh/authorized_keys</span>
                  </div>
                </div>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <p className="text-gray-300 text-sm">
                  अब Password के बिना SSH Connect हो जाएगा!
                </p>
              </div>
            </div>
          </div>

          {/* 5. File Transfer with SCP */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-500 p-3 rounded-xl">
                <HardDrive className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">5. File Transfer (SCP)</h2>
                <p className="text-purple-200">Termux और PC के बीच Files Transfer करें</p>
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">SCP Commands:</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-400"># PC से Termux में Copy:</span>
                </div>
                <div>
                  <span className="text-green-400">PC$</span>
                  <span className="text-gray-300"> scp file.txt termux@192.168.1.100:/data/data/com.termux/files/home/</span>
                </div>
                <div>
                  <span className="text-gray-400"># Termux से PC में Copy:</span>
                </div>
                <div>
                  <span className="text-green-400">PC$</span>
                  <span className="text-gray-300"> scp termux@192.168.1.100:/path/to/file.txt ./</span>
                </div>
                <div>
                  <span className="text-gray-400"># Folder Copy:</span>
                </div>
                <div>
                  <span className="text-green-400">PC$</span>
                  <span className="text-gray-300"> scp -r folder/ termux@192.168.1.100:~/</span>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Advanced Network Tools */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-orange-500 p-3 rounded-xl">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">6. Advanced Network Tools</h2>
                <p className="text-orange-200">Networking के लिए Useful Tools</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🔧 Nmap - Network Scanner:</h3>
                <div className="space-y-1 text-sm">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install nmap</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> nmap -sn 192.168.1.0/24</span>
                    <span className="text-gray-500 ml-2"># Network discovery</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> nmap localhost</span>
                    <span className="text-gray-500 ml-2"># Scan localhost</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🔧 Netcat (nc) - Network Utility:</h3>
                <div className="space-y-1 text-sm">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install netcat</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> nc -l 8080</span>
                    <span className="text-gray-500 ml-2"># Listen on port 8080</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> echo "test" | nc localhost 8080</span>
                    <span className="text-gray-500 ml-2"># Send message</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🔧 Curl/Wget - Download Tools:</h3>
                <div className="space-y-1 text-sm">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install wget curl</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> wget https://example.com/file.zip</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> curl -O https://example.com/file.zip</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 7. Port Forwarding */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 p-3 rounded-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">7. Port Forwarding</h2>
                <p className="text-red-200">External Access के लिए Port Forwarding</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">⚠️ Security Warning</h3>
                <p className="text-gray-300 text-sm">
                  Port Forwarding risky हो सकता है। सिर्फ trusted networks पर करें और strong passwords/rate limiting use करें।
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Router Settings:</h3>
                <ol className="space-y-2 text-gray-300 text-sm">
                  <li>1. Router के Admin Panel में जाएं (192.168.1.1)</li>
                  <li>2. Port Forwarding/Forwarding section खोलें</li>
                  <li>3. External Port (जैसे 2222) → Internal Port (22)</li>
                  <li>4. Internal IP (Termux का IP) set करें</li>
                  <li>5. Save करें</li>
                </ol>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">External SSH:</h3>
                <pre className="text-gray-300 text-sm overflow-x-auto">
ssh -p 2222 termux@your_public_ip
                </pre>
              </div>
            </div>
          </div>

        </div>

        {/* Important Note */}
        <div className="mt-8 p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
          <h3 className="text-xl font-bold text-cyan-300 mb-2">💡 Important Tips</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Same Network (WiFi) में होना ज़रूरी है</li>
            <li>• अपनी IP address note कर लें</li>
            <li>• Strong password use करें</li>
            <li>• Public Network में SSH Server का use न करें</li>
            <li>• Termux-api package से Android features use कर सकते हैं</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
