'use client'

import Link from 'next/link'
import { ArrowLeft, Gamepad2, Terminal, Music, BarChart2, Clock, Smile, Film } from 'lucide-react'

export default function FunAdvancedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 pb-20">
        {/* Back Button */}
        <Link href="/learning" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Learning Tools
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-pink-500 p-4 rounded-2xl">
              <Gamepad2 className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fun & Advanced Use
          </h1>
          <p className="text-xl text-pink-200">
            Termux से गेम खेलें, म्यूज़िक प्लेयर चलाएं, और Fun Tools का उपयोग करें
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">

          {/* 1. Terminal Games */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-pink-500 p-3 rounded-xl">
                <Gamepad2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">1. Terminal Games</h2>
                <p className="text-pink-200">Terminal में Games खेलें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Install Games:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install nsnake</span>
                    <span className="text-gray-500 text-sm ml-2"># Snake Game</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> nsnake</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Other Terminal Games:</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install moon-buggy</span>
                    <span className="text-gray-500 text-sm ml-2"># Moon buggy game</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install pacman</span>
                    <span className="text-gray-500 text-sm ml-2"># Pacman</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install bastet</span>
                    <span className="text-gray-500 text-sm ml-2"># Tetris</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install sudoku</span>
                    <span className="text-gray-500 text-sm ml-2"># Sudoku</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. ASCII Art */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-500 p-3 rounded-xl">
                <Terminal className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">2. ASCII Art</h2>
                <p className="text-purple-200">Text से Cool Art बनाएं</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Figlet - Text to ASCII:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install figlet</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> figlet "Hello Termux"</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Toilet - Colorful ASCII:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install toilet</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> toilet -f mono12 -F gay "Fun Terminal"</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Cowsay - Talking Cow:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install cowsay</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> cowsay "Moo! I'm from Termux!"</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> cowthink "Hmm... What to do today?"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Matrix Animation */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-500 p-3 rounded-xl">
                <Terminal className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">3. Matrix Animation</h2>
                <p className="text-green-200">Matrix Movie का Cool Effect</p>
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Cmatrix - Matrix Rain:</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> pkg install cmatrix</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> cmatrix</span>
                  <span className="text-gray-500 text-sm ml-2"># Green matrix rain</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> cmatrix -C red</span>
                  <span className="text-gray-500 text-sm ml-2"># Red matrix rain</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> cmatrix -C blue</span>
                  <span className="text-gray-500 text-sm ml-2"># Blue matrix rain</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-3">
                Press <code className="bg-white/10 px-2 py-1 rounded">Ctrl+C</code> to exit
              </p>
            </div>
          </div>

          {/* 4. Music Player */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-yellow-500 p-3 rounded-xl">
                <Music className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">4. Music Player</h2>
                <p className="text-yellow-200">Terminal में Music सुनें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">MPlayer - Music Player:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install mplayer</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> mplayer music.mp3</span>
                    <span className="text-gray-500 text-sm ml-2"># Play single file</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> mplayer *.mp3</span>
                    <span className="text-gray-500 text-sm ml-2"># Play all MP3</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">MPV Player - Modern Player:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install mpv</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> mpv music.mp3</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> mpv video.mp4</span>
                    <span className="text-gray-500 text-sm ml-2"># Play video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5. System Monitor */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-cyan-500 p-3 rounded-xl">
                <BarChart2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">5. System Monitor</h2>
                <p className="text-cyan-200">System Stats को देखें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Neofetch - System Info Display:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install neofetch</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> neofetch</span>
                    <span className="text-gray-500 text-sm ml-2"># Display system info with ASCII art</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Htop - Interactive Process Viewer:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install htop</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> htop</span>
                    <span className="text-gray-500 text-sm ml-2"># Colorful process viewer</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Bpytop - Modern Monitor:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install bpytop</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> bpytop</span>
                    <span className="text-gray-500 text-sm ml-2"># Beautiful system monitor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Fun Tools */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-orange-500 p-3 rounded-xl">
                <Smile className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">6. Fun Tools</h2>
                <p className="text-orange-200">Entertainment के लिए Fun Commands</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Fortune - Random Quotes:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install fortune</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> fortune</span>
                    <span className="text-gray-500 text-sm ml-2"># Show random quote</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> fortune -s</span>
                    <span className="text-gray-500 text-sm ml-2"># Short quotes</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Sl - Steam Locomotive:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install sl</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> sl</span>
                    <span className="text-gray-500 text-sm ml-2"># Fun train animation (typo of ls)</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Oneko - Cat Following Cursor:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install oneko</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> oneko</span>
                    <span className="text-gray-500 text-sm ml-2"># Cat follows mouse (needs X11/VNC)</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Ascioquarium - ASCII Aquarium:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install asciiquarium</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> asciiquarium</span>
                    <span className="text-gray-500 text-sm ml-2"># Animated aquarium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 7. Time & Date */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 p-3 rounded-xl">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">7. Time & Calendar</h2>
                <p className="text-red-200">Time और Calendar से related commands</p>
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Time Commands:</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> date</span>
                  <span className="text-gray-500 ml-2"># Current date & time</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> cal</span>
                  <span className="text-gray-500 ml-2"># Current month calendar</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> cal 2024</span>
                  <span className="text-gray-500 ml-2"># Full year calendar</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> cal 12 2024</span>
                  <span className="text-gray-500 ml-2"># Specific month</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> ncal</span>
                  <span className="text-gray-500 ml-2"># Vertical calendar</span>
                </div>
              </div>
            </div>
          </div>

          {/* 8. Terminal Customization */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-indigo-500 p-3 rounded-xl">
                <Terminal className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">8. Terminal Customization</h2>
                <p className="text-indigo-200">Terminal को customize करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Zsh Shell - Better Terminal:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install zsh</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> chsh -s zsh</span>
                    <span className="text-gray-500 text-sm ml-2"># Set zsh as default</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Oh-My-Zsh - Framework for Zsh:</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Powerline - Cool Status Bar:</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pip install powerline-status</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> Edit ~/.zshrc and add powerline config</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Tips */}
        <div className="mt-8 p-6 bg-pink-500/10 border border-pink-500/30 rounded-xl">
          <h3 className="text-xl font-bold text-pink-300 mb-3">🎮 Fun Tips</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Matrix animation को दिखाकर friends को impress करें</li>
            <li>• Neofetch के output को screenshot लेकर share करें</li>
            <li>• Terminal में games खेलकर time pass करें</li>
            <li>• ASCII art से cool banners बनाएं</li>
            <li>• Custom terminal setup से developer vibe पाएं</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
