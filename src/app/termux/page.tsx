'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Terminal, ArrowLeft, Menu, X, Home, Shield, Info, Mail } from 'lucide-react'
import Link from 'next/link'

export default function TermuxPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Website Name */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div className="relative w-10 h-10">
                  <img
                    src="/logo.png"
                    alt="Termux Learn Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h1 className="text-xl md:text-2xl font-bold text-foreground">
                  Termux Learn
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              <Link href="/">
                <Button variant="ghost" size="default" className="gap-2">
                  <Home className="w-4 h-4" />
                  Home
                </Button>
              </Link>
              <Link href="/termux">
                <Button variant="ghost" size="default" className="gap-2">
                  <Terminal className="w-4 h-4" />
                  Termux
                </Button>
              </Link>
              <Button variant="ghost" size="default" className="gap-2">
                <Shield className="w-4 h-4" />
                Nethunter
              </Button>
              <Button variant="ghost" size="default" className="gap-2">
                <Info className="w-4 h-4" />
                About
              </Button>
              <Button variant="ghost" size="default" className="gap-2">
                <Mail className="w-4 h-4" />
                Contact
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden flex flex-col gap-2 mt-4 pb-4">
              <Link href="/">
                <Button variant="ghost" size="default" className="justify-start gap-2 w-full">
                  <Home className="w-4 h-4" />
                  Home
                </Button>
              </Link>
              <Link href="/termux">
                <Button variant="ghost" size="default" className="justify-start gap-2 w-full">
                  <Terminal className="w-4 h-4" />
                  Termux
                </Button>
              </Link>
              <Button variant="ghost" size="default" className="justify-start gap-2 w-full">
                <Shield className="w-4 h-4" />
                Nethunter
              </Button>
              <Button variant="ghost" size="default" className="justify-start gap-2 w-full">
                <Info className="w-4 h-4" />
                About
              </Button>
              <Button variant="ghost" size="default" className="justify-start gap-2 w-full">
                <Mail className="w-4 h-4" />
                Contact
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-2 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        {/* Page Title */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent text-sm md:text-base font-mono">
              Termux Mastery
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Start Your Termux Journey
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Termux की दुनिया में कदम रखो और अपने Android फोन को एक पावरफुल Linux टर्मिनल में बदल दो।
          </p>
        </div>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto space-y-8">
          {/* Main Introduction */}
          <div className="p-8 rounded-lg border-2 border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3 text-foreground">
              <Terminal className="w-8 h-8 text-purple-400" />
              Termux क्या है?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Termux एक Android app है जो आपके मोबाइल को एक mini Linux system में बदल देता है। इसका मतलब यह है कि बिना laptop या computer के, आप अपने phone में ही coding, hacking, scripting, server run करना, tools install करना और बहुत कुछ कर सकते हो।
            </p>
          </div>

          {/* Basic Samjho */}
          <div className="p-6 rounded-lg border border-pink-500/20 bg-gradient-to-r from-pink-500/5 to-purple-500/5">
            <h3 className="text-2xl font-bold mb-4 text-foreground">🔰 Basic समझो</h3>
            <p className="text-xl text-purple-500 font-bold mb-3">Termux = Mobile + Linux + Terminal</p>
            <p className="text-muted-foreground mb-3">यह आपको एक ऐसा environment देता है जहाँ आप Linux commands चला सकते हो जैसे:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <code className="p-3 rounded bg-background border border-purple-500/20 text-center">ls</code>
              <code className="p-3 rounded bg-background border border-pink-500/20 text-center">cd</code>
              <code className="p-3 rounded bg-background border border-blue-500/20 text-center">mkdir</code>
              <code className="p-3 rounded bg-background border border-purple-500/20 text-center">rm</code>
              <code className="p-3 rounded bg-background border border-pink-500/20 text-center col-span-2 md:col-span-4">apt install</code>
            </div>
          </div>

          {/* Termux Kyun Important Hai */}
          <div className="p-6 rounded-lg border border-blue-500/20 bg-gradient-to-r from-blue-500/5 to-pink-500/5">
            <h3 className="text-2xl font-bold mb-4 text-foreground">📱 Termux क्यों important है</h3>
            <p className="text-muted-foreground mb-4">आजकल हर किसी के पास laptop नहीं होता, लेकिन smartphone होता है। Termux की मदद से:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ आप coding सीख सकते हो</li>
              <li>✓ ethical hacking सीख सकते हो</li>
              <li>✓ server बना सकते हो</li>
              <li>✓ scripts run कर सकते हो</li>
            </ul>
            <p className="mt-3 text-xl font-bold text-purple-500">मतलब phone = powerful hacking lab</p>
          </div>

          {/* Termux Kaise Kaam Karta Hai */}
          <div className="p-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-blue-500/5">
            <h3 className="text-2xl font-bold mb-4 text-foreground">⚙️ Termux कैसे काम करता है</h3>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li>• Termux एक terminal emulator + Linux environment है</li>
              <li>• यह Android के अंदर ही एक अलग Linux filesystem बना देता है</li>
              <li>• इसमें आप packages install करते हो:</li>
            </ul>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <code className="p-2 rounded bg-background border border-purple-500/20 text-center">python</code>
              <code className="p-2 rounded bg-background border border-pink-500/20 text-center">nodejs</code>
              <code className="p-2 rounded bg-background border border-blue-500/20 text-center">php</code>
              <code className="p-2 rounded bg-background border border-purple-500/20 text-center">git</code>
              <code className="p-2 rounded bg-background border border-pink-500/20 text-center">nmap</code>
              <code className="p-2 rounded bg-background border border-blue-500/20 text-center col-span-2 md:col-span-2">etc</code>
            </div>
          </div>

          {/* Package Install Kaise Hota Hai */}
          <div className="p-6 rounded-lg border border-pink-500/20 bg-gradient-to-r from-pink-500/5 to-purple-500/5">
            <h3 className="text-2xl font-bold mb-4 text-foreground">📦 Package install कैसे होता है</h3>
            <p className="text-muted-foreground mb-4">Termux में software install करने के लिए apt use होता है:</p>
            <div className="bg-background p-4 rounded border border-purple-500/20 space-y-2 font-mono text-sm">
              <code>apt update</code>
              <code>apt upgrade</code>
              <code>apt install python</code>
              <code>apt install git</code>
              <code>apt install nodejs</code>
            </div>
          </div>

          {/* Termux Mein Kya Kya Kar Sakte Ho */}
          <div className="p-6 rounded-lg border border-blue-500/20 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
            <h3 className="text-2xl font-bold mb-4 text-foreground">💻 Termux में क्या-क्या कर सकते हो</h3>
            
            {/* Programming */}
            <div className="mb-6 p-4 rounded bg-background/50 border border-purple-500/20">
              <h4 className="text-xl font-semibold mb-3 text-purple-400">1. Programming</h4>
              <ul className="space-y-1 text-muted-foreground mb-3">
                <li>• Python run कर सकते हो</li>
                <li>• JavaScript (Node.js)</li>
                <li>• PHP</li>
                <li>• C/C++</li>
              </ul>
              <div className="bg-background p-3 rounded border border-pink-500/20 font-mono text-sm space-y-1">
                <code>python test.py</code>
                <code>node app.js</code>
                <code>php index.php</code>
              </div>
            </div>

            {/* Ethical Hacking */}
            <div className="mb-6 p-4 rounded bg-background/50 border border-pink-500/20">
              <h4 className="text-xl font-semibold mb-3 text-pink-400">2. Ethical Hacking</h4>
              <p className="text-muted-foreground mb-3">आप hacking tools चला सकते हो जैसे:</p>
              <div className="grid grid-cols-2 gap-2 font-mono text-sm">
                <code className="p-2 rounded bg-background border border-purple-500/20">nmap → network scan</code>
                <code className="p-2 rounded bg-background border border-pink-500/20">sqlmap → SQL injection</code>
                <code className="p-2 rounded bg-background border border-blue-500/20">hydra → password cracking</code>
                <code className="p-2 rounded bg-background border border-purple-500/20">metasploit → exploitation</code>
              </div>
            </div>

            {/* Website Development */}
            <div className="mb-6 p-4 rounded bg-background/50 border border-blue-500/20">
              <h4 className="text-xl font-semibold mb-3 text-blue-400">3. Website Development</h4>
              <p className="text-muted-foreground mb-3">आप mobile में ही website बना सकते हो:</p>
              <ul className="space-y-1 text-muted-foreground mb-3">
                <li>• HTML</li>
                <li>• CSS</li>
                <li>• JavaScript</li>
                <li>• PHP</li>
              </ul>
              <code className="block p-3 rounded bg-background border border-purple-500/20 font-mono text-sm">php -S localhost:8000</code>
            </div>

            {/* GitHub use karna */}
            <div className="mb-6 p-4 rounded bg-background/50 border border-purple-500/20">
              <h4 className="text-xl font-semibold mb-3 text-purple-400">4. GitHub use करना</h4>
              <p className="text-muted-foreground mb-3">आप code download और upload कर सकते हो:</p>
              <code className="block p-3 rounded bg-background border border-pink-500/20 font-mono text-sm">git clone https://github.com/username/project.git</code>
            </div>

            {/* Automation Scripts */}
            <div className="mb-6 p-4 rounded bg-background/50 border border-pink-500/20">
              <h4 className="text-xl font-semibold mb-3 text-pink-400">5. Automation Scripts</h4>
              <p className="text-muted-foreground">आप automation कर सकते हो जैसे:</p>
              <ul className="space-y-1 text-muted-foreground mt-2">
                <li>• file rename</li>
                <li>• data scraping</li>
                <li>• bots बनाना</li>
              </ul>
            </div>

            {/* Server Banana */}
            <div className="mb-6 p-4 rounded bg-background/50 border border-blue-500/20">
              <h4 className="text-xl font-semibold mb-3 text-blue-400">6. Server बनाना</h4>
              <p className="text-muted-foreground mb-3">आप local server या API बना सकते हो:</p>
              <div className="space-y-1 font-mono text-sm">
                <code className="block p-2 rounded bg-background border border-purple-500/20">Node.js server</code>
                <code className="block p-2 rounded bg-background border border-pink-500/20">Flask server</code>
                <code className="block p-2 rounded bg-background border border-blue-500/20">PHP server</code>
              </div>
            </div>

            {/* Linux Seekhna */}
            <div className="p-4 rounded bg-background/50 border border-purple-500/20">
              <h4 className="text-xl font-semibold mb-3 text-purple-400">7. Linux सीखना</h4>
              <p className="text-muted-foreground mb-3">Termux से आप Linux commands सीख सकते हो:</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>• file management</li>
                <li>• permissions</li>
                <li>• processes</li>
              </ul>
            </div>
          </div>

          {/* File System Samjho */}
          <div className="p-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
            <h3 className="text-2xl font-bold mb-4 text-foreground">📁 File System समझो</h3>
            <p className="text-muted-foreground mb-4">Termux में directories होती हैं:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
              <div className="p-3 rounded bg-background/50 border border-purple-500/20">
                <code className="text-purple-400">/home</code>
                <p className="text-sm text-muted-foreground mt-1">आपका main folder</p>
              </div>
              <div className="p-3 rounded bg-background/50 border border-pink-500/20">
                <code className="text-pink-400">/usr</code>
                <p className="text-sm text-muted-foreground mt-1">installed packages</p>
              </div>
              <div className="p-3 rounded bg-background/50 border border-blue-500/20">
                <code className="text-blue-400">/storage</code>
                <p className="text-sm text-muted-foreground mt-1">phone storage access</p>
              </div>
            </div>
            <div className="bg-background p-4 rounded border border-purple-500/20">
              <p className="text-foreground font-medium mb-2">Storage access:</p>
              <code className="block p-2 rounded bg-purple-500/10 font-mono text-sm">termux-setup-storage</code>
            </div>
          </div>

          {/* Permissions */}
          <div className="p-6 rounded-lg border border-pink-500/20 bg-gradient-to-r from-pink-500/5 to-blue-500/5">
            <h3 className="text-2xl font-bold mb-4 text-foreground">🔐 Permissions</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Android में direct access नहीं होता</li>
              <li>• इसलिए storage permission देना पड़ता है</li>
            </ul>
          </div>

          {/* Termux Ke Fayde */}
          <div className="p-6 rounded-lg border border-green-500/20 bg-gradient-to-r from-green-500/5 to-purple-500/5">
            <h3 className="text-2xl font-bold mb-4 text-foreground">🔥 Termux के फायदे</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✔ Free है</li>
              <li>✔ Lightweight है</li>
              <li>✔ Powerful है</li>
              <li>✔ Offline भी use कर सकते हो</li>
              <li>✔ सीखने के लिए best</li>
            </ul>
          </div>

          {/* Limitations */}
          <div className="p-6 rounded-lg border border-red-500/20 bg-gradient-to-r from-red-500/5 to-pink-500/5">
            <h3 className="text-2xl font-bold mb-4 text-foreground">⚠️ Limitations</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>❌ Heavy tools slow चल सकते हैं</li>
              <li>❌ GPU support limited है</li>
              <li>❌ Android restrictions होते हैं</li>
            </ul>
          </div>

          {/* Termux Install Kahan Se Kare */}
          <div className="p-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-blue-500/5">
            <h3 className="text-2xl font-bold mb-4 text-foreground">📲 Termux install कहाँ से करें</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Play Store वाला version outdated है</li>
              <li>• आपको install करना चाहिए:</li>
            </ul>
            <p className="mt-2 text-xl font-bold text-purple-400">F-Droid से</p>
          </div>

          {/* Beginners Ke Liye Roadmap */}
          <div className="p-6 rounded-lg border border-pink-500/20 bg-gradient-to-r from-pink-500/5 to-purple-500/5">
            <h3 className="text-2xl font-bold mb-4 text-foreground">🧠 Beginners के लिए roadmap</h3>
            <div className="space-y-3">
              <div className="bg-background/50 p-3 rounded border border-purple-500/20">
                <p className="text-foreground font-medium mb-1">Step 1:</p>
                <code className="block p-2 rounded bg-background font-mono text-sm">apt update && apt upgrade</code>
              </div>
              <div className="bg-background/50 p-3 rounded border border-pink-500/20">
                <p className="text-foreground font-medium mb-1">Step 2:</p>
                <code className="block p-2 rounded bg-background font-mono text-sm">apt install python git nodejs</code>
              </div>
              <div className="bg-background/50 p-3 rounded border border-blue-500/20">
                <p className="text-foreground font-medium mb-1">Step 3: Basic commands सीखो</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <code className="px-3 py-1 rounded bg-background border border-purple-500/20">ls</code>
                  <code className="px-3 py-1 rounded bg-background border border-pink-500/20">cd</code>
                  <code className="px-3 py-1 rounded bg-background border border-blue-500/20">pwd</code>
                </div>
              </div>
              <div className="bg-background/50 p-3 rounded border border-purple-500/20">
                <p className="text-foreground font-medium">Step 4: Small scripts बनाओ</p>
              </div>
              <div className="bg-background/50 p-3 rounded border border-pink-500/20">
                <p className="text-foreground font-medium">Step 5: Tools सीखो</p>
              </div>
            </div>
          </div>

          {/* Real-life Use Cases */}
          <div className="p-6 rounded-lg border border-blue-500/20 bg-gradient-to-r from-blue-500/5 to-pink-500/5">
            <h3 className="text-2xl font-bold mb-4 text-foreground">🚀 Real-life use cases</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Mobile से website बनाना</li>
              <li>• Bug bounty practice</li>
              <li>• Coding सीखना</li>
              <li>• CLI tools बनाना</li>
              <li>• AI API use करना</li>
            </ul>
          </div>

          {/* Termux vs PC Table */}
          <div className="p-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-blue-500/5">
            <h3 className="text-2xl font-bold mb-4 text-foreground">🧩 Termux vs PC</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 text-foreground">Feature</th>
                    <th className="text-center p-3 text-purple-400">Termux</th>
                    <th className="text-center p-3 text-pink-400">PC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 text-foreground">Power</td>
                    <td className="p-3 text-center text-muted-foreground">Medium</td>
                    <td className="p-3 text-center text-muted-foreground">High</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 text-foreground">Portability</td>
                    <td className="p-3 text-center text-muted-foreground">High</td>
                    <td className="p-3 text-center text-muted-foreground">Low</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 text-foreground">Cost</td>
                    <td className="p-3 text-center text-muted-foreground">Free</td>
                    <td className="p-3 text-center text-muted-foreground">Expensive</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-foreground">Learning</td>
                    <td className="p-3 text-center text-muted-foreground">Best</td>
                    <td className="p-3 text-center text-muted-foreground">Best</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Useful Commands List */}
          <div className="p-6 rounded-lg border border-pink-500/20 bg-gradient-to-r from-pink-500/5 to-purple-500/5">
            <h3 className="text-2xl font-bold mb-4 text-foreground">🛠️ Useful commands list</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 font-mono text-sm">
              <code className="p-2 rounded bg-background border border-purple-500/20 text-center">ls</code>
              <code className="p-2 rounded bg-background border border-pink-500/20 text-center">cd</code>
              <code className="p-2 rounded bg-background border border-blue-500/20 text-center">pwd</code>
              <code className="p-2 rounded bg-background border border-purple-500/20 text-center">mkdir</code>
              <code className="p-2 rounded bg-background border border-pink-500/20 text-center">rm</code>
              <code className="p-2 rounded bg-background border border-blue-500/20 text-center">cp</code>
              <code className="p-2 rounded bg-background border border-purple-500/20 text-center">mv</code>
              <code className="p-2 rounded bg-background border border-pink-500/20 text-center">cat</code>
              <code className="p-2 rounded bg-background border border-blue-500/20 text-center">nano</code>
              <code className="p-2 rounded bg-background border border-purple-500/20 text-center">vim</code>
              <code className="p-2 rounded bg-background border border-pink-500/20 text-center">clear</code>
              <code className="p-2 rounded bg-background border border-blue-500/20 text-center">history</code>
            </div>
          </div>

          {/* Text Editing */}
          <div className="p-6 rounded-lg border border-blue-500/20 bg-gradient-to-r from-blue-500/5 to-pink-500/5">
            <h3 className="text-2xl font-bold mb-4 text-foreground">✍️ Text editing</h3>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li>• nano → easy</li>
              <li>• vim → advanced</li>
            </ul>
            <code className="block p-3 rounded bg-background border border-purple-500/20 font-mono text-sm">nano file.txt</code>
          </div>

          {/* Internet Tools */}
          <div className="p-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-blue-500/5">
            <h3 className="text-2xl font-bold mb-4 text-foreground">📡 Internet tools</h3>
            <div className="space-y-2">
              <code className="block p-3 rounded bg-background border border-purple-500/20 font-mono text-sm">curl → download data</code>
              <code className="block p-3 rounded bg-background border border-pink-500/20 font-mono text-sm">wget → file download</code>
            </div>
          </div>

          {/* Updates */}
          <div className="p-6 rounded-lg border border-pink-500/20 bg-gradient-to-r from-pink-500/5 to-purple-500/5">
            <h3 className="text-2xl font-bold mb-4 text-foreground">🔄 Updates</h3>
            <div className="bg-background p-4 rounded border border-purple-500/20 space-y-2 font-mono text-sm">
              <code>apt update</code>
              <code>apt upgrade</code>
            </div>
          </div>

          {/* Advanced Use */}
          <div className="p-6 rounded-lg border border-blue-500/20 bg-gradient-to-r from-blue-500/5 to-pink-500/5">
            <h3 className="text-2xl font-bold mb-4 text-foreground">📊 Advanced use</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Docker (limited)</li>
              <li>• SSH server</li>
              <li>• Remote login</li>
              <li>• Cloud connect</li>
            </ul>
          </div>

          {/* Pro Tip */}
          <div className="p-6 rounded-lg border-2 border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
            <h3 className="text-2xl font-bold mb-4 text-foreground">🔥 Pro tip</h3>
            <p className="text-muted-foreground mb-4">अगर आप serious हो:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Python + Linux commands सीखो</li>
              <li>✓ Git सीखो</li>
              <li>✓ Networking सीखो</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div className="p-8 rounded-lg border-2 border-pink-500/30 bg-gradient-to-r from-pink-500/10 to-blue-500/10">
            <h3 className="text-2xl font-bold mb-4 text-foreground">🎯 Conclusion</h3>
            <p className="text-lg text-muted-foreground mb-4">Termux एक powerful tool है जो:</p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li>• Mobile को coding machine बनाता है</li>
              <li>• Beginners के लिए best है</li>
              <li>• Ethical hacking और development दोनों के लिए useful है</li>
            </ul>
          </div>

          {/* Learning Tool Button */}
          <div className="text-center pt-8">
            <Link href="/learning">
              <Button size="lg" className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl shadow-lg hover:shadow-xl transition-all">
                <Terminal className="w-6 h-6" />
                Start Learning Tool
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 mt-auto">
        <div className="container mx-auto px-4 py-6">
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <a
              href="https://github.com/termux/termux-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 hover:bg-accent hover:text-accent-foreground"
            >
              Termux GitHub
            </a>
            <a
              href="https://github.com/offensive-security/kali-nethunter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-3 hover:bg-accent hover:text-accent-foreground"
            >
              Nethunter GitHub
            </a>
            <Button variant="ghost" size="sm" className="gap-2">
              Privacy Policy
            </Button>
          </div>
          {/* Footer Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Termux Learn. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Learn Ethical Hacking Responsibly
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
