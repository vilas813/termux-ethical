'use client'

import Link from 'next/link'
import { PageFooter } from '@/components/page-footer'
import { ArrowLeft, Terminal, FileText, Cpu, HardDrive, Users, Cog, Lock } from 'lucide-react'
import { HeaderAd, InContentAd1, InContentAd2, InContentAd3, FooterAd } from '@/components/ads/AdSense'

export default function LinuxCommandsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 pb-20">
        {/* Back Button */}
        <Link href="/learning" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Learning Tools
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-yellow-500 p-4 rounded-2xl">
              <Terminal className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Linux Commands & System Control
          </h1>
          <p className="text-xl text-yellow-200">
            Linux कमांड्स सीखें और System कंट्रोल करें Termux में
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          <HeaderAd />

          {/* 1. Basic File Commands */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-yellow-500 p-3 rounded-xl">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">1. Basic File Commands</h2>
                <p className="text-yellow-200">Files और Folders को Manage करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">📁 File & Directory Commands:</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> ls</span>
                    <span className="text-gray-500 ml-2"># Files list करें</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> ls -la</span>
                    <span className="text-gray-500 ml-2"># Hidden files के साथ list</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> cd foldername</span>
                    <span className="text-gray-500 ml-2"># Folder में जाएं</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> cd ..</span>
                    <span className="text-gray-500 ml-2"># Back जाएं</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> cd ~</span>
                    <span className="text-gray-500 ml-2"># Home directory</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pwd</span>
                    <span className="text-gray-500 ml-2"># Current path देखें</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> mkdir name</span>
                    <span className="text-gray-500 ml-2"># Folder बनाएं</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> mkdir -p path/to/folder</span>
                    <span className="text-gray-500 ml-2"># Nested folders</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> rm filename</span>
                    <span className="text-gray-500 ml-2"># File delete करें</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> rm -rf foldername</span>
                    <span className="text-gray-500 ml-2"># Folder delete (be careful!)</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> cp source dest</span>
                    <span className="text-gray-500 ml-2"># Copy file</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> mv old new</span>
                    <span className="text-gray-500 ml-2"># Move/Rename file</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> touch filename</span>
                    <span className="text-gray-500 ml-2"># New file बनाएं</span>
                  </div>
                </div>
              </div>
            </div>

          <InContentAd1 />
          </div>

          {/* 2. File Content Commands */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-500 p-3 rounded-xl">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">2. File Content Commands</h2>
                <p className="text-blue-200">File का Content देखें और Edit करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">📄 Content Commands:</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> cat filename</span>
                    <span className="text-gray-500 ml-2"># File content देखें</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> less filename</span>
                    <span className="text-gray-500 ml-2"># Scrollable view</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> head filename</span>
                    <span className="text-gray-500 ml-2"># First 10 lines</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> tail filename</span>
                    <span className="text-gray-500 ml-2"># Last 10 lines</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> grep "pattern" file</span>
                    <span className="text-gray-500 ml-2"># Text search</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> nano filename</span>
                    <span className="text-gray-500 ml-2"># Nano editor</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> vim filename</span>
                    <span className="text-gray-500 ml-2"># Vim editor</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> echo "text" &gt; file</span>
                    <span className="text-gray-500 ml-2"># Write to file</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. System Information */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-500 p-3 rounded-xl">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">3. System Information</h2>
                <p className="text-purple-200">System की जानकारी प्राप्त करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">🖥️ System Commands:</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> uname -a</span>
                    <span className="text-gray-500 ml-2"># System info</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> df -h</span>
                    <span className="text-gray-500 ml-2"># Disk space</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> free -h</span>
                    <span className="text-gray-500 ml-2"># Memory usage</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> top</span>
                    <span className="text-gray-500 ml-2"># Running processes</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> htop</span>
                    <span className="text-gray-500 ml-2"># Interactive process viewer</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> ps aux</span>
                    <span className="text-gray-500 ml-2"># All processes list</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> uptime</span>
                    <span className="text-gray-500 ml-2"># System uptime</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> neofetch</span>
                    <span className="text-gray-500 ml-2"># System info display</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Permissions & Ownership */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 p-3 rounded-xl">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">4. Permissions & Ownership</h2>
                <p className="text-red-200">File Permissions Manage करें</p>
              </div>
            </div>

          <InContentAd2 />
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">🔐 Permission Commands:</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> ls -l filename</span>
                    <span className="text-gray-500 ml-2"># View permissions</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> chmod +x file</span>
                    <span className="text-gray-500 ml-2"># Execute permission</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> chmod 755 file</span>
                    <span className="text-gray-500 ml-2"># Set permissions (rwxr-xr-x)</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> chmod -R 755 folder</span>
                    <span className="text-gray-500 ml-2"># Recursive permission</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> chown user:group file</span>
                    <span className="text-gray-500 ml-2"># Change owner</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> whoami</span>
                    <span className="text-gray-500 ml-2"># Current user</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> id</span>
                    <span className="text-gray-500 ml-2"># User ID info</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">📋 Permission Codes:</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-300"><code className="bg-black/30 px-2 py-1 rounded">4</code> = Read</div>
                  <div className="text-gray-300"><code className="bg-black/30 px-2 py-1 rounded">2</code> = Write</div>
                  <div className="text-gray-300"><code className="bg-black/30 px-2 py-1 rounded">1</code> = Execute</div>
                  <div className="text-gray-300"><code className="bg-black/30 px-2 py-1 rounded">7</code> = Read+Write+Execute</div>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Process Management */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-cyan-500 p-3 rounded-xl">
                <Cog className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">5. Process Management</h2>
                <p className="text-cyan-200">Running Processes को Manage करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">⚙️ Process Commands:</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> top</span>
                    <span className="text-gray-500 ml-2"># View processes</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> htop</span>
                    <span className="text-gray-500 ml-2"># Interactive process viewer</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> ps aux</span>
                    <span className="text-gray-500 ml-2"># List all processes</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> kill PID</span>
                    <span className="text-gray-500 ml-2"># Stop process by ID</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> killall processname</span>
                    <span className="text-gray-500 ml-2"># Stop all by name</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkill name</span>
                    <span className="text-gray-500 ml-2"># Kill by pattern</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> bg</span>
                    <span className="text-gray-500 ml-2"># Background process</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> fg</span>
                    <span className="text-gray-500 ml-2"># Foreground process</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> jobs</span>
                    <span className="text-gray-500 ml-2"># List background jobs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Network Commands */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-500 p-3 rounded-xl">
                <HardDrive className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">6. Network Commands</h2>
                <p className="text-green-200">Network और Internet संबंधित कमांड्स</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">🌐 Network Commands:</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> ping google.com</span>
                    <span className="text-gray-500 ml-2"># Check connection</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> ip addr</span>
                    <span className="text-gray-500 ml-2"># IP address</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> ifconfig</span>
                    <span className="text-gray-500 ml-2"># Network interface</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> netstat -tuln</span>
                    <span className="text-gray-500 ml-2"># Open ports</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> wget url</span>
                    <span className="text-gray-500 ml-2"># Download file</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> curl url</span>
                    <span className="text-gray-500 ml-2"># URL content</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> nslookup domain.com</span>
                    <span className="text-gray-500 ml-2"># DNS lookup</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> traceroute url</span>
                    <span className="text-gray-500 ml-2"># Route trace</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 7. User Management */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-orange-500 p-3 rounded-xl">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">7. User & Environment</h2>
                <p className="text-orange-200">User settings और Environment Variables</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">👤 User Commands:</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> whoami</span>
                    <span className="text-gray-500 ml-2"># Current user</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> users</span>
                    <span className="text-gray-500 ml-2"># Logged in users</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> env</span>
                    <span className="text-gray-500 ml-2"># Environment variables</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> export VAR=value</span>
                    <span className="text-gray-500 ml-2"># Set variable</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> echo $PATH</span>
                    <span className="text-gray-500 ml-2"># View PATH</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> history</span>
                    <span className="text-gray-500 ml-2"># Command history</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> alias name='command'</span>
                    <span className="text-gray-500 ml-2"># Create alias</span>
                  </div>
                </div>

          <InContentAd3 />
              </div>
            </div>
          </div>

        </div>

        {/* Tips */}
        <div className="mt-8 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
          <h3 className="text-xl font-bold text-yellow-300 mb-3">💡 Tips & Tricks</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• <strong>Tab</strong> दबाने से Auto-complete होता है</li>
            <li>• <strong>Ctrl+C</strong> से Running command बंद होता है</li>
            <li>• <strong>Ctrl+Z</strong> से Process Background जाता है</li>
            <li>• <strong>man command</strong> से Manual देखें</li>
            <li>• <strong>command --help</strong> से Help देखें</li>
            <li>• <strong>!</strong> से Previous commands रन करें (जैसे !ls)</li>
            <li>• <strong>sudo</strong> Termux में नहीं काम करता</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
