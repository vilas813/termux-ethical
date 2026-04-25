'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Code, Terminal, Shield, Copy, CheckCircle } from 'lucide-react'

export default function PythonGitScriptsPage() {
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
              <Code className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🐍 Python, Git & Scripts Setup
          </h1>
          <p className="text-xl text-blue-200">
            Termux/Linux में Python, Git और Scripts Setup सीखें
          </p>
        </div>

        {/* Python Setup */}
        <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-yellow-400" />
            Python Setup
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">🔹 Python क्या है?</h3>
            <p className="text-gray-300 leading-relaxed">
              Python एक powerful programming language है, जिसका इस्तेमाल automation, ethical hacking, AI, web development और scripting में होता है।
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">🔹 Termux / Linux में install कैसे करें</h3>
            <div className="bg-black/30 rounded-lg p-4 space-y-2">
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
                <code className="text-green-400 font-mono break-all flex-1">apt install python</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('apt install python', '2')}
                >
                  {copiedId === '2' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">🔹 Version check करें</h3>
            <div className="bg-black/30 rounded-lg p-4">
              <div className="flex items-start gap-3 justify-between">
                <code className="text-green-400 font-mono break-all flex-1">python --version</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('python --version', '3')}
                >
                  {copiedId === '3' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">🔹 Basic test (Hello World)</h3>
            <div className="bg-black/30 rounded-lg p-4">
              <div className="flex items-start gap-3 justify-between mb-2">
                <code className="text-green-400 font-mono break-all flex-1">python</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('python', '4')}
                >
                  {copiedId === '4' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
              <div className="mt-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/30">
                <p className="text-blue-300 text-sm mb-2">फिर लिखो:</p>
                <div className="flex items-start gap-3 justify-between">
                  <code className="text-gray-300 font-mono break-all flex-1">print("Hello Hacker")</code>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0 flex-shrink-0"
                    onClick={() => copyToClipboard('print("Hello Hacker")', '5')}
                  >
                    {copiedId === '5' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Git Setup */}
        <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Terminal className="w-6 h-6 text-orange-400" />
            Git Setup
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">🔹 Git क्या है?</h3>
            <p className="text-gray-300 leading-relaxed">
              Git एक version control system है, जिससे आप code को manage, backup और GitHub पर upload कर सकते हो।
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">🔹 Install करें</h3>
            <div className="bg-black/30 rounded-lg p-4">
              <div className="flex items-start gap-3 justify-between">
                <code className="text-green-400 font-mono break-all flex-1">apt install git</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('apt install git', '6')}
                >
                  {copiedId === '6' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">🔹 Setup (नाम और email डालें)</h3>
            <div className="bg-black/30 rounded-lg p-4 space-y-2">
              <div className="flex items-start gap-3 justify-between">
                <code className="text-green-400 font-mono break-all flex-1">git config --global user.name "Your Name"</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('git config --global user.name "Your Name"', '7')}
                >
                  {copiedId === '7' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
              <div className="flex items-start gap-3 justify-between">
                <code className="text-green-400 font-mono break-all flex-1">git config --global user.email "your@email.com"</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('git config --global user.email "your@email.com"', '8')}
                >
                  {copiedId === '8' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">🔹 Check करें</h3>
            <div className="bg-black/30 rounded-lg p-4">
              <div className="flex items-start gap-3 justify-between">
                <code className="text-green-400 font-mono break-all flex-1">git --version</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('git --version', '9')}
                >
                  {copiedId === '9' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Script Setup */}
        <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-400" />
            Script Setup (Python Script बनाना)
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">🔹 Script क्या होता है?</h3>
            <p className="text-gray-300 leading-relaxed">
              Script एक छोटा program होता है जो automation के लिए use होता है (जैसे scanning, brute force, data scraping)।
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">🔹 Python script बनाना</h3>
            <div className="bg-black/30 rounded-lg p-4 space-y-2">
              <div className="flex items-start gap-3 justify-between">
                <code className="text-green-400 font-mono break-all flex-1">nano script.py</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('nano script.py', '10')}
                >
                  {copiedId === '10' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
            </div>
            <div className="mt-3 p-3 bg-green-500/10 rounded-lg border border-green-500/30">
              <p className="text-green-300 text-sm mb-2">फिर लिखो:</p>
              <div className="flex items-start gap-3 justify-between">
                <code className="text-gray-300 font-mono break-all flex-1">print("Automation Start")</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('print("Automation Start")', '11')}
                >
                  {copiedId === '11' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
            </div>
            <div className="mt-3 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
              <p className="text-yellow-300 text-sm mb-2">Save करने के लिए:</p>
              <code className="text-gray-300 font-mono break-all text-sm">CTRL + X {'→'} Y {'→'} Enter</code>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">🔹 Script run कैसे करें</h3>
            <div className="bg-black/30 rounded-lg p-4">
              <div className="flex items-start gap-3 justify-between">
                <code className="text-green-400 font-mono break-all flex-1">python script.py</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('python script.py', '12')}
                >
                  {copiedId === '12' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">⚡ Advanced Script (Example)</h3>
            <div className="bg-black/30 rounded-lg p-4">
              <div className="flex items-start gap-3 justify-between mb-2">
                <code className="text-green-400 font-mono break-all flex-1">import os</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('import os', '13')}
                >
                  {copiedId === '13' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
              <div className="flex items-start gap-3 justify-between mb-2">
                <code className="text-gray-300 font-mono break-all flex-1">print("System Info:")</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('print("System Info:")', '14')}
                >
                  {copiedId === '14' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
              <div className="flex items-start gap-3 justify-between">
                <code className="text-gray-300 font-mono break-all flex-1">os.system("uname -a")</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('os.system("uname -a")', '15')}
                >
                  {copiedId === '15' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
            </div>
            <div className="mt-3 p-3 bg-purple-500/10 rounded-lg border border-purple-500/30">
              <p className="text-purple-300 text-sm mb-2">Run:</p>
              <div className="flex items-start gap-3 justify-between">
                <code className="text-gray-300 font-mono break-all flex-1">python script.py</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('python script.py', '16')}
                >
                  {copiedId === '16' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Git + Python Project Setup */}
        <div className="mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-pink-400" />
            Git + Python Project Setup
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">🔹 New project बनाओ</h3>
            <div className="bg-black/30 rounded-lg p-4 space-y-2">
              <div className="flex items-start gap-3 justify-between">
                <code className="text-green-400 font-mono break-all flex-1">mkdir myproject</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('mkdir myproject', '17')}
                >
                  {copiedId === '17' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
              <div className="flex items-start gap-3 justify-between">
                <code className="text-green-400 font-mono break-all flex-1">cd myproject</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('cd myproject', '18')}
                >
                  {copiedId === '18' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">🔹 Git start करो</h3>
            <div className="bg-black/30 rounded-lg p-4">
              <div className="flex items-start gap-3 justify-between">
                <code className="text-green-400 font-mono break-all flex-1">git init</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('git init', '19')}
                >
                  {copiedId === '19' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">🔹 File add करो</h3>
            <div className="bg-black/30 rounded-lg p-4 space-y-2">
              <div className="flex items-start gap-3 justify-between">
                <code className="text-green-400 font-mono break-all flex-1">git add .</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('git add .', '20')}
                >
                  {copiedId === '20' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
              <div className="flex items-start gap-3 justify-between">
                <code className="text-green-400 font-mono break-all flex-1">git commit -m "First Commit"</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('git commit -m "First Commit"', '21')}
                >
                  {copiedId === '21' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="mb-8 p-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-2xl border-2 border-yellow-500/50">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-yellow-400" />
            💡 Pro Tips (Important)
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-black/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <p className="text-white font-semibold">✔ Python packages install करने के लिए:</p>
              </div>
              <div className="flex items-start gap-3 justify-between">
                <code className="text-green-400 font-mono break-all flex-1">pip install requests</code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 flex-shrink-0"
                  onClick={() => copyToClipboard('pip install requests', '22')}
                >
                  {copiedId === '22' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                </Button>
              </div>
            </div>

            <div className="p-4 bg-black/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <p className="text-white font-semibold">✔ Virtual environment:</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-3 justify-between">
                  <code className="text-green-400 font-mono break-all flex-1">pip install virtualenv</code>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0 flex-shrink-0"
                    onClick={() => copyToClipboard('pip install virtualenv', '23')}
                  >
                    {copiedId === '23' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
                <div className="flex items-start gap-3 justify-between">
                  <code className="text-gray-300 font-mono break-all flex-1">virtualenv env</code>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0 flex-shrink-0"
                    onClick={() => copyToClipboard('virtualenv env', '24')}
                  >
                    {copiedId === '24' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
                <div className="flex items-start gap-3 justify-between">
                  <code className="text-gray-300 font-mono break-all flex-1">source env/bin/activate</code>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0 flex-shrink-0"
                    onClick={() => copyToClipboard('source env/bin/activate', '25')}
                  >
                    {copiedId === '25' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-4 bg-black/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                <p className="text-white font-semibold">✔ GitHub upload:</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-3 justify-between">
                  <code className="text-green-400 font-mono break-all flex-1 text-xs">git remote add origin https://github.com/username/repo.git</code>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0 flex-shrink-0"
                    onClick={() => copyToClipboard('git remote add origin https://github.com/username/repo.git', '26')}
                  >
                    {copiedId === '26' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
                <div className="flex items-start gap-3 justify-between">
                  <code className="text-green-400 font-mono break-all flex-1">git push -u origin main</code>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0 flex-shrink-0"
                    onClick={() => copyToClipboard('git push -u origin main', '27')}
                  >
                    {copiedId === '27' ? <CheckCircle className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </Button>
                </div>
              </div>
            </div>
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
