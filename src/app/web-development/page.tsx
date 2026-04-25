'use client'

import Link from 'next/link'
import { ArrowLeft, Globe, Server, Code2, Database, Terminal, Layout, Cloud } from 'lucide-react'

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 pb-20">
        {/* Back Button */}
        <Link href="/learning" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Learning Tools
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-green-500 p-4 rounded-2xl">
              <Globe className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Web Development & Hosting
          </h1>
          <p className="text-xl text-green-200">
            Termux पर Website बनाएं, Localhost चलाएं, और वेबसाइट होस्ट करें
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          
          {/* 1. Web Server Setup */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-500 p-3 rounded-xl">
                <Server className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">1. Web Server Setup</h2>
                <p className="text-green-200">Termux पर Web Server इनस्टॉल करें</p>
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-white mb-3">PHP Server Setup:</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> pkg update && pkg upgrade</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> pkg install php</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> mkdir ~/mywebsite</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> cd ~/mywebsite</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> echo '&lt;?php echo "Hello from Termux!"; ?&gt;' &gt; index.php</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> php -S 0.0.0.0:8080</span>
                </div>
              </div>
            </div>
            <p className="text-yellow-300 text-sm">
              📱 ब्राउज़र में: <code className="bg-yellow-500/20 px-2 py-1 rounded">http://localhost:8080</code> खोलें
            </p>
          </div>

          {/* 2. Node.js Server */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-500 p-3 rounded-xl">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">2. Node.js Server</h2>
                <p className="text-blue-200">Node.js से Express Server चलाएं</p>
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-white mb-3">Express Server Setup:</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> pkg install nodejs npm</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> mkdir ~/nodeapp && cd ~/nodeapp</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> npm init -y</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> npm install express</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> cat &gt; server.js &lt;&lt;'EOF'</span>
                  <pre className="text-gray-300 ml-4 text-sm">
{'const express = require("express");\n' +
'const app = express();\n' +
'const PORT = 3000;\n' +
'\n' +
'app.get("/", (req, res) => {\n' +
'  res.send("Hello from Termux Node.js!");\n' +
'});\n' +
'\n' +
'app.listen(PORT, "0.0.0.0", () => {\n' +
'  console.log(`Server running on http://0.0.0.0:${PORT}`);\n' +
'});'}
                  </pre>
                  <span className="text-gray-300">EOF</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> node server.js</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. HTML/CSS/JavaScript */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-500 p-3 rounded-xl">
                <Layout className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">3. Frontend Development</h2>
                <p className="text-purple-200">HTML, CSS, JavaScript फाइलें बनाएं</p>
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-white mb-3">Project Structure:</h3>
              <pre className="text-gray-300 text-sm">
mywebsite/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── images/
    └── fonts/
              </pre>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">HTML Example (index.html):</h3>
              <pre className="text-gray-300 text-sm overflow-x-auto">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
  &lt;title&gt;My Website&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hello from Termux!&lt;/h1&gt;
  &lt;p&gt;Building websites on Android.&lt;/p&gt;
  &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
              </pre>
            </div>
          </div>

          {/* 4. Database Integration */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-yellow-500 p-3 rounded-xl">
                <Database className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">4. Database Integration</h2>
                <p className="text-yellow-200">MySQL, PostgreSQL, SQLite डेटाबेस का उपयोग करें</p>
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-white mb-3">SQLite Setup:</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> pkg install sqlite</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> sqlite3 mydb.db</span>
                </div>
                <div>
                  <span className="text-green-400">sqlite&gt;</span>
                  <span className="text-gray-300"> CREATE TABLE users (id INTEGER, name TEXT);</span>
                </div>
                <div>
                  <span className="text-green-400">sqlite&gt;</span>
                  <span className="text-gray-300"> INSERT INTO users VALUES (1, 'John');</span>
                </div>
                <div>
                  <span className="text-green-400">sqlite&gt;</span>
                  <span className="text-gray-300"> SELECT * FROM users;</span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              PHP में: <code className="bg-white/10 px-2 py-1 rounded">new SQLite3('mydb.db')</code>
            </p>
          </div>

          {/* 5. Nginx Server */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-orange-500 p-3 rounded-xl">
                <Terminal className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">5. Nginx Web Server</h2>
                <p className="text-orange-200">Professional Nginx Server चलाएं</p>
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-white mb-3">Nginx Installation:</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> pkg install nginx</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> nginx</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> # Default location: $PREFIX/share/nginx/html</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> # Stop: nginx -s stop</span>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Deployment & Hosting */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-cyan-500 p-3 rounded-xl">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">6. Deployment & Hosting</h2>
                <p className="text-cyan-200">वेबसाइट को ऑनलाइन होस्ट करें</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">🚀 Free Hosting Options:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>GitHub Pages</strong> - Static websites के लिए free</li>
                  <li>• <strong>Vercel</strong> - Next.js, React, Static sites</li>
                  <li>• <strong>Netlify</strong> - Static & Jamstack hosting</li>
                  <li>• <strong>Render</strong> - Free tier for web services</li>
                  <li>• <strong>Replit</strong> - Online development & hosting</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">📦 Deploy from Termux:</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install git</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> git init</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> git add .</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> git commit -m "Initial commit"</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> git remote add origin https://github.com/username/repo.git</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> git push -u origin main</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Important Note */}
        <div className="mt-8 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
          <h3 className="text-xl font-bold text-yellow-300 mb-2">⚠️ Important Note</h3>
          <p className="text-gray-300">
            सिर्फ Educational Purpose के लिए सीखें। किसी भी Website को Hack करने की कोशिश न करें।
            सिर्फ अपनी वेबसाइट बनाएं और Hosting सीखें।
          </p>
        </div>

      </div>
    </div>
  )
}
