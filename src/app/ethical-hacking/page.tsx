'use client'

import Link from 'next/link'
import { PageFooter } from '@/components/page-footer'
import { ArrowLeft, Shield, Search, Lock, AlertTriangle, Bug, Terminal, Network } from 'lucide-react'

export default function EthicalHackingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 pb-20">
        {/* Back Button */}
        <Link href="/learning" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Learning Tools
        </Link>

        {/* Warning Banner */}
        <div className="bg-red-600/20 border border-red-500 rounded-xl p-4 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-red-300 mb-1">⚠️ IMPORTANT DISCLAIMER</h3>
              <p className="text-red-200 text-sm">
                यह content <strong>सिर्फ Educational Purpose</strong> के लिए है। किसी भी System/Website को बिना Permission के Hack या Attack करना <strong>Illegal</strong> है।
                सिर्फ अपने System या Permission वाली प्रैक्टिस पर ही इन Tools का उपयोग करें।
              </p>
            </div>
          </div>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-red-500 p-4 rounded-2xl">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ethical Hacking
          </h1>
          <p className="text-xl text-red-200">
            Termux से Ethical Hacking टूल्स सीखें - सिर्फ लर्निंग पर्पज़ के लिए
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">

          {/* 1. What is Ethical Hacking */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 p-3 rounded-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">1. Ethical Hacking क्या है?</h2>
                <p className="text-red-200">Security Testing और Vulnerability Assessment का Legal तरीका</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🔍 Ethical Hacker का काम:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>Permission</strong> के साथ System Test करना</li>
                  <li>• <strong>Vulnerabilities</strong> को पहचानना</li>
                  <li>• <strong>Security Gaps</strong> को रिपोर्ट करना</li>
                  <li>• <strong>Security Measures</strong> को सुधारना</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">📜 Legal Requirements:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Written Permission लेना ज़रूरी है</li>
                  <li>• सिर्फ Authorized Scope में Test करें</li>
                  <li>• Findings को Confidential रखें</li>
                  <li>• Local Laws का पालन करें</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. Network Scanning */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-500 p-3 rounded-xl">
                <Search className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">2. Network Scanning</h2>
                <p className="text-blue-200">Network को Scan करना और Devices खोजना</p>
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-white mb-3">Nmap - Network Mapper:</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> pkg install nmap</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> nmap localhost</span>
                  <span className="text-gray-500 text-sm ml-2"># Localhost scan</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> nmap -sP 192.168.1.0/24</span>
                  <span className="text-gray-500 text-sm ml-2"># Network discovery</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> nmap -p 1-1000 192.168.1.1</span>
                  <span className="text-gray-500 text-sm ml-2"># Port range scan</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> nmap -A -T4 target.com</span>
                  <span className="text-gray-500 text-sm ml-2"># Aggressive scan</span>
                </div>
              </div>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
              <p className="text-yellow-300 text-sm">
                ⚠️ सिर्फ अपने Network या Permission वाले Network पर ही Use करें
              </p>
            </div>
          </div>

          {/* 3. Penetration Testing */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-500 p-3 rounded-xl">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">3. Penetration Testing</h2>
                <p className="text-purple-200">System Security Test करना</p>
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-white mb-3">Metasploit Framework:</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> pkg install metasploit</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> msfconsole</span>
                </div>
                <div>
                  <span className="text-green-400">msf6&gt;</span>
                  <span className="text-gray-300"> search exploit</span>
                </div>
                <div>
                  <span className="text-green-400">msf6&gt;</span>
                  <span className="text-gray-300"> use exploit/windows/smb/ms17_010_eternalblue</span>
                </div>
                <div>
                  <span className="text-green-400">msf6&gt;</span>
                  <span className="text-gray-300"> show options</span>
                </div>
                <div>
                  <span className="text-green-400">msf6&gt;</span>
                  <span className="text-gray-300"> set RHOSTS target_ip</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. SQL Injection Testing */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-orange-500 p-3 rounded-xl">
                <Bug className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">4. SQL Injection Testing</h2>
                <p className="text-orange-200">Database Vulnerabilities को Test करना</p>
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-white mb-3">SQLMap - SQL Injection Tool:</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> pkg install sqlmap</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> sqlmap -u "http://example.com/page?id=1"</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> sqlmap -u "url" --dbs</span>
                  <span className="text-gray-500 text-sm ml-2"># List databases</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> sqlmap -u "url" --tables</span>
                  <span className="text-gray-500 text-sm ml-2"># List tables</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> sqlmap -u "url" --dump</span>
                  <span className="text-gray-500 text-sm ml-2"># Dump data</span>
                </div>
              </div>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
              <p className="text-yellow-300 text-sm">
                ⚠️ सिर्फ अपनी Website या Test Environment पर Use करें
              </p>
            </div>
          </div>

          {/* 5. Password Testing */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-yellow-500 p-3 rounded-xl">
                <Terminal className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">5. Password Strength Testing</h2>
                <p className="text-yellow-200">Password Security Test करना</p>
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-white mb-3">Hydra - Password Cracker:</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> pkg install hydra</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> hydra -l username -P wordlist.txt ssh://target_ip</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> hydra -l admin -P common_passwords.txt http-post-form://example.com/login</span>
                </div>
              </div>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
              <p className="text-yellow-300 text-sm">
                ⚠️ सिर्फ अपने Accounts या Permission वाले Systems पर Use करें
              </p>
            </div>
          </div>

          {/* 6. Additional Tools */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-cyan-500 p-3 rounded-xl">
                <Network className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">6. अन्य Useful Tools</h2>
                <p className="text-cyan-200">और भी Security Testing Tools</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🔧 Wireshark - Network Protocol Analyzer:</h3>
                <div className="space-y-1 text-sm">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install wireshark</span>
                  </div>
                  <p className="text-gray-400 mt-2">Network Traffic को Capture और Analyze करें</p>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🔧 John the Ripper - Password Cracker:</h3>
                <div className="space-y-1 text-sm">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install john</span>
                  </div>
                  <p className="text-gray-400 mt-2">Password Hashes को Crack करें</p>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🔧 Aircrack-ng - WiFi Security:</h3>
                <div className="space-y-1 text-sm">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install aircrack-ng</span>
                  </div>
                  <p className="text-gray-400 mt-2">WiFi Networks को Test करें (सिर्फ अपने WiFi पर)</p>
                </div>
              </div>
            </div>
          </div>

          {/* 7. Best Practices */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">7. Best Practices</h2>
            <div className="space-y-3">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-300 mb-2">✅ क्या करें:</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• हमेशा Written Permission लें</li>
                  <li>• Legal Scope में ही Test करें</li>
                  <li>• Security Improve करना ही Goal हो</li>
                  <li>• Documentation और Reporting करें</li>
                  <li>• Professional Ethical Hacker बनें</li>
                </ul>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-red-300 mb-2">❌ क्या न करें:</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• बिना Permission कोई भी Test न करें</li>
                  <li>• किसी की Data चुराने की कोशिश न करें</li>
                  <li>• Malicious Activities में शामिल न हों</li>
                  <li>• Tools का गलत Use न करें</li>
                  <li>• किसी को Harm न करें</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Final Warning */}
        <div className="mt-8 p-6 bg-red-600/20 border border-red-500 rounded-xl">
          <h3 className="text-xl font-bold text-red-300 mb-2">⚠️ FINAL WARNING</h3>
          <p className="text-gray-300">
            Cyber Crime के लिए सख्त सज़ा है। सिर्फ Legal और Authorized Testing करें।
            यह content सिर्फ Educational Purpose के लिए है।
          </p>
        </div>

      </div>
    </div>
  )
}
