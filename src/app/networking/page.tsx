'use client'

import Link from 'next/link'
import { ArrowLeft, Network, Server, Lock, Shield, Globe, Terminal, Wifi, HardDrive, AlertTriangle, Key, Monitor } from 'lucide-react'

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

          {/* 1. Network Types */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-cyan-500 p-3 rounded-xl">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">1. Network Types</h2>
                <p className="text-cyan-200">Different types of Networks</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🌐 LAN (Local Area Network)</h3>
                <p className="text-gray-300 text-sm mb-2">Home या Office में limited area के लिए</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> Example: Home WiFi (192.168.1.x)</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🌍 WAN (Wide Area Network)</h3>
                <p className="text-gray-300 text-sm mb-2">Large geographical area में connect करता है</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> Example: Internet connection</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🏙️ MAN (Metropolitan Area Network)</h3>
                <p className="text-gray-300 text-sm mb-2">City-wide network</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> Example: City-wide cable network</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">📱 PAN (Personal Area Network)</h3>
                <p className="text-gray-300 text-sm mb-2">Personal devices के बीच</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> Example: Bluetooth, NFC</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Network Components */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-500 p-3 rounded-xl">
                <Server className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">2. Network Components</h2>
                <p className="text-blue-200">Networking Hardware और Devices</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🔄 Router</h3>
                <p className="text-gray-300 text-sm">Different networks के बीच data forward करता है</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🔌 Switch</h3>
                <p className="text-gray-300 text-sm">LAN में devices को connect करता है</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🔗 Hub</h3>
                <p className="text-gray-300 text-sm">Multiple devices को single connection पर connect करता है</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🌉 Bridge</h3>
                <p className="text-gray-300 text-sm">दो network segments को connect करता है</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🚪 Gateway</h3>
                <p className="text-gray-300 text-sm">Network को external world से connect करता है</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🛡️ Firewall</h3>
                <p className="text-gray-300 text-sm">Network traffic को filter और block करता है</p>
              </div>
            </div>
          </div>

          {/* 3. IP Addresses */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-500 p-3 rounded-xl">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">3. IP Addresses</h2>
                <p className="text-purple-200">IP Addressing System</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🔢 IPv4 (Internet Protocol version 4)</h3>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm">32-bit address, example: 192.168.1.1</p>
                  <div className="bg-black/30 rounded p-2">
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> Range: 0.0.0.0 to 255.255.255.255</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🔢 IPv6 (Internet Protocol version 6)</h3>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm">128-bit address, example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334</p>
                  <div className="bg-black/30 rounded p-2">
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> More addresses available than IPv4</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🔒 Private IP Addresses</h3>
                <div className="space-y-1 text-sm">
                  <div className="bg-black/30 rounded p-2">
                    <span className="text-gray-300">192.168.0.0 to 192.168.255.255</span>
                  </div>
                  <div className="bg-black/30 rounded p-2">
                    <span className="text-gray-300">10.0.0.0 to 10.255.255.255</span>
                  </div>
                  <div className="bg-black/30 rounded p-2">
                    <span className="text-gray-300">172.16.0.0 to 172.31.255.255</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🌐 Public IP Addresses</h3>
                <p className="text-gray-300 text-sm">Internet पर directly accessible addresses</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> Example: 8.8.8.8 (Google DNS)</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Network Protocols */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-500 p-3 rounded-xl">
                <Network className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">4. Network Protocols</h2>
                <p className="text-green-200">Communication Protocols</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🌊 TCP/IP</h3>
                <p className="text-gray-300 text-sm">Transmission Control Protocol/Internet Protocol</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> Reliable, connection-oriented</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">⚡ UDP</h3>
                <p className="text-gray-300 text-sm">User Datagram Protocol</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> Fast, connectionless (gaming, streaming)</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🌐 HTTP/HTTPS</h3>
                <p className="text-gray-300 text-sm">Web browsing protocol</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> Port 80 (HTTP), 443 (HTTPS)</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">📁 FTP</h3>
                <p className="text-gray-300 text-sm">File Transfer Protocol</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> Port 20, 21</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🔐 SSH</h3>
                <p className="text-gray-300 text-sm">Secure Shell for remote access</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> Port 22, encrypted connection</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🖥️ RDP</h3>
                <p className="text-gray-300 text-sm">Remote Desktop Protocol</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> Port 3389 (Windows)</span>
                </div>
              </div>
            </div>
          </div>

          {/* 5. OSI Model */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-orange-500 p-3 rounded-xl">
                <Server className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">5. OSI Model (7 Layers)</h2>
                <p className="text-orange-200">Open Systems Interconnection Model</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">7</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Application Layer</h3>
                    <p className="text-gray-300 text-sm">User applications (HTTP, FTP, SMTP, SSH)</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">6</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Presentation Layer</h3>
                    <p className="text-gray-300 text-sm">Data translation, encryption (SSL/TLS)</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">5</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Session Layer</h3>
                    <p className="text-gray-300 text-sm">Session management (NetBIOS, RPC)</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">4</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Transport Layer</h3>
                    <p className="text-gray-300 text-sm">End-to-end communication (TCP, UDP)</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <span className="bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded">3</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Network Layer</h3>
                    <p className="text-gray-300 text-sm">Routing and logical addressing (IP, ICMP)</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">2</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Data Link Layer</h3>
                    <p className="text-gray-300 text-sm">Physical addressing (MAC, Ethernet, Switching)</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded">1</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Physical Layer</h3>
                    <p className="text-gray-300 text-sm">Physical transmission (Cables, WiFi, Signals)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Network Security */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 p-3 rounded-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">6. Network Security</h2>
                <p className="text-red-200">Protecting Your Network</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🛡️ Firewall</h3>
                <p className="text-gray-300 text-sm">Network traffic को monitor और block करता है</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> ufw enable (Ubuntu/Linux firewall)</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🔒 VPN (Virtual Private Network)</h3>
                <p className="text-gray-300 text-sm">Encrypted, private connection</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> OpenVPN, WireGuard, NordVPN, etc.</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🔐 Encryption</h3>
                <p className="text-gray-300 text-sm">Data को secure code में convert करना</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> AES, RSA, SSL/TLS protocols</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">👁️ IDS (Intrusion Detection System)</h3>
                <p className="text-gray-300 text-sm">Unauthorized access detect करता है</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> Snort, Suricata</span>
                </div>
              </div>
            </div>
          </div>

          {/* 7. Network Attacks */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-600 p-3 rounded-xl">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">7. Network Attacks (Educational Purpose Only)</h2>
                <p className="text-red-200">Common Attack Types - सिर्फ सीखने के लिए!</p>
              </div>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
              <p className="text-red-300 text-sm">
                ⚠️ IMPORTANT: ये attacks सिर्फ अपने system या authorized testing पर ही करें। बिना permission किसी और system पर test करना illegal है!
              </p>
            </div>
            <div className="space-y-3">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">💥 DDoS (Distributed Denial of Service)</h3>
                <p className="text-gray-300 text-sm">Multiple systems से attack करके service को down करना</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> Mitigation: Firewall, rate limiting, CDN</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🎣 Phishing</h3>
                <p className="text-gray-300 text-sm">Fake websites/emails से sensitive info steal करना</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> Mitigation: Email filters, user awareness, 2FA</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">👥 MITM (Man-in-the-Middle)</h3>
                <p className="text-gray-300 text-sm">दो parties के बीच में घुसकर communication intercept करना</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> Mitigation: End-to-end encryption, HTTPS</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">💉 SQL Injection</h3>
                <p className="text-gray-300 text-sm">Database में malicious SQL commands inject करना</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> Mitigation: Input validation, parameterized queries</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🔗 XSS (Cross-Site Scripting)</h3>
                <p className="text-gray-300 text-sm">Websites में malicious JavaScript inject करना</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> Mitigation: Input sanitization, CSP headers</span>
                </div>
              </div>
            </div>
          </div>

          {/* 8. Network Tools */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-orange-500 p-3 rounded-xl">
                <Terminal className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">8. Network Tools</h2>
                <p className="text-orange-200">Essential Networking Tools in Termux</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🗺️ Nmap (Network Mapper)</h3>
                <p className="text-gray-300 text-sm mb-2">Network discovery और security auditing</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> pkg install nmap</span>
                </div>
                <div className="space-y-1 mt-2">
                  <div className="bg-black/20 rounded p-1">
                    <span className="text-gray-300 text-sm">nmap -sn 192.168.1.0/24  (network discovery)</span>
                  </div>
                  <div className="bg-black/20 rounded p-1">
                    <span className="text-gray-300 text-sm">nmap -sV -p 1-1000 target  (version detection)</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">👁️ Wireshark</h3>
                <p className="text-gray-300 text-sm mb-2">Network protocol analyzer - packets capture और analyze करता है</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> pkg install wireshark</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🔌 Netcat (nc)</h3>
                <p className="text-gray-300 text-sm mb-2">Network utility - read/write network connections</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> pkg install netcat</span>
                </div>
                <div className="space-y-1 mt-2">
                  <div className="bg-black/20 rounded p-1">
                    <span className="text-gray-300 text-sm">nc -l 8080 (listen on port 8080)</span>
                  </div>
                  <div className="bg-black/20 rounded p-1">
                    <span className="text-gray-300 text-sm">echo "hello" | nc localhost 8080</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 9. Remote Access Protocols */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-500 p-3 rounded-xl">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">9. Remote Access Protocols</h2>
                <p className="text-purple-200">Remote System Access Methods</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🖥️ RDP (Remote Desktop Protocol)</h3>
                <p className="text-gray-300 text-sm mb-2">Windows के लिए GUI remote access</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> Port 3389 - Full desktop control</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🔐 SSH (Secure Shell)</h3>
                <p className="text-gray-300 text-sm mb-2">Linux/Unix systems के लिए command-line access</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> Port 22 - Encrypted, secure</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">📺 VNC (Virtual Network Computing)</h3>
                <p className="text-gray-300 text-sm mb-2">Cross-platform GUI remote access</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> Port 5900+ - Any OS compatible</span>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">📞 Telnet</h3>
                <p className="text-gray-300 text-sm mb-2">Unencrypted text-based remote access (NOT secure!)</p>
                <div className="bg-black/30 rounded p-2 mt-2">
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> Port 23 - Avoid using, unencrypted</span>
                </div>
              </div>
            </div>
          </div>

          {/* 10. SSH Setup in Termux */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-500 p-3 rounded-xl">
                <Terminal className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">10. SSH Setup in Termux</h2>
                <p className="text-green-200">SSH Server Install और Configure करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Step 1: Install OpenSSH</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg update && pkg upgrade</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install openssh</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Step 2: Set Password</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> passwd</span>
                  </div>
                  <p className="text-gray-400 text-sm">New password enter करें और confirm करें</p>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Step 3: Start SSH Server</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> sshd</span>
                    <span className="text-gray-500 text-sm ml-2"># Start SSH server</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Step 4: Find Your IP</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> ip addr show wlan0</span>
                    <span className="text-gray-500 text-sm ml-2"># For WiFi</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> ip addr show wlan0 | grep inet</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Step 5: Connect from PC</h3>
                <div className="space-y-2">
                  <div className="bg-black/20 rounded p-2">
                    <span className="text-gray-400"># Windows PowerShell/CMD:</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> ssh termux@192.168.1.100</span>
                  </div>
                  <div className="bg-black/20 rounded p-2 mt-2">
                    <span className="text-gray-400"># Linux/Mac Terminal:</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> ssh termux@192.168.1.100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 11. SSH Key Authentication */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-yellow-500 p-3 rounded-xl">
                <Key className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">11. SSH Key Authentication</h2>
                <p className="text-yellow-200">Password के बिना SSH Access</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Generate SSH Key Pair on PC:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">PC$</span>
                    <span className="text-gray-300"> ssh-keygen -t rsa -b 4096 -C "your_email@example.com"</span>
                  </div>
                  <p className="text-gray-400 text-sm">Enter दबाएं (default path accept करें)</p>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Copy Public Key to Termux:</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-green-400">PC$</span>
                    <span className="text-gray-300"> ssh-copy-id termux@192.168.1.100</span>
                  </div>
                  <div className="text-gray-400 mt-2">OR Manual Method:</div>
                  <div>
                    <span className="text-green-400">PC$</span>
                    <span className="text-gray-300"> cat ~/.ssh/id_rsa.pub</span>
                  </div>
                  <div>
                    <span className="text-green-400">termux$</span>
                    <span className="text-gray-300"> mkdir ~/.ssh</span>
                  </div>
                  <div>
                    <span className="text-green-400">termux$</span>
                    <span className="text-gray-300"> echo "YOUR_PUBLIC_KEY" &gt;&gt; ~/.ssh/authorized_keys</span>
                  </div>
                  <div>
                    <span className="text-green-400">termux$</span>
                    <span className="text-gray-300"> chmod 700 ~/.ssh</span>
                  </div>
                  <div>
                    <span className="text-green-400">termux$</span>
                    <span className="text-gray-300"> chmod 600 ~/.ssh/authorized_keys</span>
                  </div>
                </div>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <p className="text-gray-300 text-sm">
                  ✅ अब password के बिना SSH connect हो जाएगा!
                </p>
              </div>
            </div>
          </div>

          {/* 12. SCP for File Transfer */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-pink-500 p-3 rounded-xl">
                <HardDrive className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">12. SCP for File Transfer</h2>
                <p className="text-pink-200">Secure File Copy Protocol</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Upload to Termux:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">PC$</span>
                    <span className="text-gray-300"> scp file.txt termux@192.168.1.100:~/</span>
                  </div>
                  <div>
                    <span className="text-green-400">PC$</span>
                    <span className="text-gray-300"> scp -r folder/ termux@192.168.1.100:~/</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Download from Termux:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">PC$</span>
                    <span className="text-gray-300"> scp termux@192.168.1.100:~/file.txt ./</span>
                  </div>
                  <div>
                    <span className="text-green-400">PC$</span>
                    <span className="text-gray-300"> scp -r termux@192.168.1.100:~/folder/ ./</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Important Note */}
        <div className="mt-8 p-6 bg-red-500/10 border border-red-500/30 rounded-xl">
          <h3 className="text-xl font-bold text-red-300 mb-2">⚠️ IMPORTANT DISCLAIMER</h3>
          <p className="text-gray-300 mb-3">
            ये content सिर्फ <strong>Educational Purpose</strong> के लिए है।
          </p>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• सिर्फ अपने system या permission वाली practice पर use करें</li>
            <li>• बिना permission किसी system को test/crack करना illegal है</li>
            <li>• Cyber Crime के लिए सख्त सज़ा है</li>
            <li>• सिर्फ Learning और Security Improvement में use करें</li>
            <li>• Local Laws का पालन करें</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
