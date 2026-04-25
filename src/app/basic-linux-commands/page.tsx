'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Terminal, FolderOpen, FileText, Package, Cpu, Globe, Lock, Search, Cog, HardDrive, Archive, Download, Users, Repeat, Key, Zap, Flame, Github, Youtube, Send, Info, Shield } from 'lucide-react'

export default function BasicLinuxCommandsPage() {
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
            🧾 ALL-IN-ONE LINUX COMMAND LIST
          </h1>
          <p className="text-xl text-yellow-200">
            सभी Important Linux Commands के Examples के साथ
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">

          {/* 1. Directory Commands */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-yellow-500 p-3 rounded-xl">
                <FolderOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">📂 Directory Commands</h2>
                <p className="text-yellow-200">Folders और Directories में Navigate करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">pwd</span>
                    <span className="text-gray-500"># Current directory path दिखाए</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">ls</span>
                    <span className="text-gray-500"># Files/folders list करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">ls -la</span>
                    <span className="text-gray-500"># Hidden files के साथ detailed list</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">cd folder</span>
                    <span className="text-gray-500"># Specific folder में जाएं</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">cd ..</span>
                    <span className="text-gray-500"># Parent directory में वापस जाएं</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">cd ~</span>
                    <span className="text-gray-500"># Home directory में जाएं</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. File Management */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-500 p-3 rounded-xl">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">📁 File Management</h2>
                <p className="text-blue-200">Files Create, Delete, Copy, Move करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">touch file.txt</span>
                    <span className="text-gray-500"># New empty file बनाएं</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">mkdir folder</span>
                    <span className="text-gray-500"># New folder बनाएं</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">rm file.txt</span>
                    <span className="text-gray-500"># File delete करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">rm -rf folder</span>
                    <span className="text-gray-500"># Folder और उसकी contents delete (⚠️ Be Careful!)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">cp file1 file2</span>
                    <span className="text-gray-500"># File copy करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">mv file1 file2</span>
                    <span className="text-gray-500"># File rename/move करें</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. File Viewing & Editing */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-500 p-3 rounded-xl">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">📖 File Viewing & Editing</h2>
                <p className="text-green-200">File का Content देखें और Edit करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">cat file.txt</span>
                    <span className="text-gray-500"># File content दिखाए</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">nano file.txt</span>
                    <span className="text-gray-500"># Nano editor में open करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">less file.txt</span>
                    <span className="text-gray-500"># Scrollable view में content देखें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">head file.txt</span>
                    <span className="text-gray-500"># File के पहले 10 lines दिखाएं</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">tail file.txt</span>
                    <span className="text-gray-500"># File के आखिरी 10 lines दिखाएं</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Package Management */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-500 p-3 rounded-xl">
                <Package className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">📦 Package Management (Termux / Linux)</h2>
                <p className="text-purple-200">Software packages install/uninstall करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">apt update</span>
                    <span className="text-gray-500"># Package list update करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">apt upgrade</span>
                    <span className="text-gray-500"># All packages upgrade करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">apt install package</span>
                    <span className="text-gray-500"># New package install करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">apt remove package</span>
                    <span className="text-gray-500"># Package uninstall करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">apt search package</span>
                    <span className="text-gray-500"># Package search करें</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5. System Commands */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-cyan-500 p-3 rounded-xl">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">⚙️ System Commands</h2>
                <p className="text-cyan-200">System की जानकारी प्राप्त करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">clear</span>
                    <span className="text-gray-500"># Terminal screen clear करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">whoami</span>
                    <span className="text-gray-500"># Current user name दिखाए</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">uname -a</span>
                    <span className="text-gray-500"># System info दिखाए</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">top</span>
                    <span className="text-gray-500"># Running processes दिखाए (real-time)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">history</span>
                    <span className="text-gray-500"># Command history दिखाए</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Network Commands */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-500 p-3 rounded-xl">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">🌐 Network Commands</h2>
                <p className="text-green-200">Network और Internet संबंधित कमांड्स</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">ping google.com</span>
                    <span className="text-gray-500"># Internet connection test करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">ifconfig</span>
                    <span className="text-gray-500"># Network interface info दिखाए</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">ip a</span>
                    <span className="text-gray-500"># IP address info दिखाए</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">netstat -tulnp</span>
                    <span className="text-gray-500"># Open ports और connections दिखाए</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">ss -tulnp</span>
                    <span className="text-gray-500"># Socket statistics दिखाए (modern)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 7. Permissions & Ownership */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 p-3 rounded-xl">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">🔐 Permissions & Ownership</h2>
                <p className="text-red-200">File permissions और ownership manage करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">chmod 777 file</span>
                    <span className="text-gray-500"># Full permissions (Read+Write+Execute)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">chmod +x file.sh</span>
                    <span className="text-gray-500"># Execute permission दें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">chown user file</span>
                    <span className="text-gray-500"># File owner change करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">ls -l</span>
                    <span className="text-gray-500"># File permissions detail में देखें</span>
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

          {/* 8. Search Commands */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-orange-500 p-3 rounded-xl">
                <Search className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">🔍 Search Commands</h2>
                <p className="text-orange-200">Files और Text search करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">find . -name file.txt</span>
                    <span className="text-gray-500"># Current directory में file search करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">grep "text" file.txt</span>
                    <span className="text-gray-500"># File में specific text search करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">grep -r "pattern" .</span>
                    <span className="text-gray-500"># Recursive search in all files</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 9. Process Management */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-pink-500 p-3 rounded-xl">
                <Cog className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">📊 Process Management</h2>
                <p className="text-pink-200">Running processes को control करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">ps aux</span>
                    <span className="text-gray-500"># सभी running processes दिखाएं</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">kill PID</span>
                    <span className="text-gray-500"># Process को gracefully stop करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">kill -9 PID</span>
                    <span className="text-gray-500"># Process को forcefully kill करें</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 10. Disk & Storage */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-teal-500 p-3 rounded-xl">
                <HardDrive className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">💾 Disk & Storage</h2>
                <p className="text-teal-200">Disk space और storage info देखें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">df -h</span>
                    <span className="text-gray-500"># Disk space (human-readable format)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">du -sh folder</span>
                    <span className="text-gray-500"># Folder size देखें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">du -sh *</span>
                    <span className="text-gray-500"># सभी items की size देखें</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 11. Compression */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-indigo-500 p-3 rounded-xl">
                <Archive className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">📦 Compression (ZIP / TAR)</h2>
                <p className="text-indigo-200">Files compress और decompress करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">tar -cvf file.tar folder</span>
                    <span className="text-gray-500"># Folder को tar archive में बनाएं</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">tar -xvf file.tar</span>
                    <span className="text-gray-500"># Tar archive extract करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">zip file.zip file</span>
                    <span className="text-gray-500"># File को zip करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">unzip file.zip</span>
                    <span className="text-gray-500"># Zip file extract करें</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 12. Download Commands */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-emerald-500 p-3 rounded-xl">
                <Download className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">⬇️ Download Commands</h2>
                <p className="text-emerald-200">Internet से files download करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">wget URL</span>
                    <span className="text-gray-500"># File download करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">curl -O URL</span>
                    <span className="text-gray-500"># URL से file download करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">curl url</span>
                    <span className="text-gray-500"># URL content दिखाए</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 13. User Management */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-amber-500 p-3 rounded-xl">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">👤 User Management</h2>
                <p className="text-amber-200">User accounts manage करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">adduser name</span>
                    <span className="text-gray-500"># New user add करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">passwd name</span>
                    <span className="text-gray-500"># User password change करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">who</span>
                    <span className="text-gray-500"># Logged-in users देखें</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 14. Pipes & Redirection */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-violet-500 p-3 rounded-xl">
                <Repeat className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">🔁 Pipes & Redirection</h2>
                <p className="text-violet-200">Commands को combine और output redirect करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">ls | grep ".txt"</span>
                    <span className="text-gray-500"># List में .txt files filter करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">echo "Hello" {'>'} file.txt</span>
                    <span className="text-gray-500"># File में text overwrite करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">echo "Hi" {'>>>'} file.txt</span>
                    <span className="text-gray-500"># File में text append करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">cat file.txt | sort</span>
                    <span className="text-gray-500"># File content sort करें</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 15. Automation (Cron Job) */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-rose-500 p-3 rounded-xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">⏰ Automation (Cron Job)</h2>
                <p className="text-rose-200">Scheduled tasks setup करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">crontab -e</span>
                    <span className="text-gray-500"># Edit cron jobs</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <p className="text-yellow-300 font-semibold mb-2">Example:</p>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">* * * * * echo "Hello" {'>>>'} log.txt</span>
                  </div>
                  <p className="text-gray-400 text-xs mt-2"># Har minute "Hello" log.txt में लिखेगा</p>
                </div>
              </div>
            </div>
          </div>

          {/* 16. Remote Access (SSH) */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-sky-500 p-3 rounded-xl">
                <Key className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">🔑 Remote Access (SSH)</h2>
                <p className="text-sky-200">Remote systems से connect करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">ssh user@ip</span>
                    <span className="text-gray-500"># Remote system connect करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">ssh -p 22 user@ip</span>
                    <span className="text-gray-500"># Specific port के साथ connect</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 17. Environment Variables */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-lime-500 p-3 rounded-xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">🌍 Environment Variables</h2>
                <p className="text-lime-200">System environment variables manage करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">echo $PATH</span>
                    <span className="text-gray-500"># PATH variable देखें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">export VAR=value</span>
                    <span className="text-gray-500"># Environment variable set करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-400 font-mono">$</span>
                    <span className="text-gray-300 font-mono">env</span>
                    <span className="text-gray-500"># सभी environment variables देखें</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 18. Shortcuts */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-fuchsia-500 p-3 rounded-xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">⚡ Shortcuts</h2>
                <p className="text-fuchsia-200">Useful keyboard shortcuts</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-300 font-mono">CTRL + C</span>
                    <span className="text-gray-500"># Running command stop करें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-300 font-mono">CTRL + Z</span>
                    <span className="text-gray-500"># Process background में भेजें</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-300 font-mono">TAB</span>
                    <span className="text-gray-500"># Auto-complete command/filename</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-300 font-mono">CTRL + L</span>
                    <span className="text-gray-500"># Screen clear (same as clear)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-300 font-mono">CTRL + A</span>
                    <span className="text-gray-500"># Cursor को line start पर ले जाएं</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-300 font-mono">CTRL + E</span>
                    <span className="text-gray-500"># Cursor को line end पर ले जाएं</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 19. Final Tips */}
          <div className="bg-yellow-500/20 border-2 border-yellow-500/50 rounded-2xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-yellow-500 p-3 rounded-xl">
                <Flame className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">🔥 Final Tips</h2>
                <p className="text-yellow-200">Linux mastery के लिए ये टिप्स follow करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <ul className="space-y-3 text-gray-200 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold">👉</span>
                    <span>ये list = Linux का foundation + power combo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold">👉</span>
                    <span>रोज 15–20 commands practice करो</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold">👉</span>
                    <span>खुद errors solve करो = fastest learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold">👉</span>
                    <span><code className="bg-black/30 px-2 py-1 rounded">man command</code> से manual देखें</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold">👉</span>
                    <span><code className="bg-black/30 px-2 py-1 rounded">command --help</code> से help प्राप्त करें</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-bold">👉</span>
                    <span>History में <code className="bg-black/30 px-2 py-1 rounded">Ctrl+R</code> से commands search करें</span>
                  </li>
                </ul>
              </div>
            </div>
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
              href="https://t.me/termuxethical"
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
