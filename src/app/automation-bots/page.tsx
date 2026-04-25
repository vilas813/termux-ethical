'use client'

import Link from 'next/link'
import { ArrowLeft, Bot, MessageSquare, Globe, Clock, Zap, Smartphone, Code } from 'lucide-react'

export default function AutomationBotsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 pb-20">
        {/* Back Button */}
        <Link href="/learning" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Learning Tools
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-purple-500 p-4 rounded-2xl">
              <Bot className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Automation & Bots
          </h1>
          <p className="text-xl text-purple-200">
            Termux से WhatsApp बॉट्स, Telegram बॉट्स, और ऑटोमेशन स्क्रिप्ट्स बनाएं
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">

          {/* 1. Python Automation */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-500 p-3 rounded-xl">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">1. Python Automation Setup</h2>
                <p className="text-purple-200">Python और Automation Libraries इनस्टॉल करें</p>
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-semibold text-white mb-3">Installation:</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> pkg update && pkg upgrade</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> pkg install python</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> pip install pyautogui</span>
                  <span className="text-gray-500 text-sm ml-2"># GUI automation (needs VNC)</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> pip install selenium</span>
                  <span className="text-gray-500 text-sm ml-2"># Web automation</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> pip install schedule</span>
                  <span className="text-gray-500 text-sm ml-2"># Task scheduler</span>
                </div>
                <div>
                  <span className="text-green-400">$</span>
                  <span className="text-gray-300"> pip install requests</span>
                  <span className="text-gray-500 text-sm ml-2"># HTTP requests</span>
                </div>
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Simple Automation Example:</h3>
              <pre className="text-gray-300 text-sm overflow-x-auto">
import schedule
import time

def job():
    print("Automation running...")

schedule.every(10).seconds.do(job)
while True:
    schedule.run_pending()
    time.sleep(1)
              </pre>
            </div>
          </div>

          {/* 2. Telegram Bot */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-500 p-3 rounded-xl">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">2. Telegram Bot</h2>
                <p className="text-blue-200">Telegram Bot बनाएं और Control करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Step 1: Get Bot Token</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-purple-400">1.</span>
                    <span className="text-gray-300"> Telegram में @BotFather खोजें</span>
                  </div>
                  <div>
                    <span className="text-purple-400">2.</span>
                    <span className="text-gray-300"> /newbot कमांड भेजें</span>
                  </div>
                  <div>
                    <span className="text-purple-400">3.</span>
                    <span className="text-gray-300"> Bot का नाम और Username दें</span>
                  </div>
                  <div>
                    <span className="text-purple-400">4.</span>
                    <span className="text-gray-300"> Token कॉपी करें</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Step 2: Install Library</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pip install pytelegrambotapi</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Step 3: Bot Code</h3>
                <pre className="text-gray-300 text-sm overflow-x-auto">
import telebot

bot = telebot.TeleBot('YOUR_BOT_TOKEN')

@bot.message_handler(commands=['start'])
def send_welcome(message):
    bot.reply_to(message, "Hello! I'm a bot from Termux")

@bot.message_handler(commands=['help'])
def send_help(message):
    bot.reply_to(message, "Commands: /start, /help")

bot.polling()
                </pre>
              </div>
            </div>
          </div>

          {/* 3. WhatsApp Bot */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-500 p-3 rounded-xl">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">3. WhatsApp Bot</h2>
                <p className="text-green-200">WhatsApp Bot बनाएं Node.js से</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Setup whatsapp-web.js:</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install nodejs</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> mkdir wabot && cd wabot</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> npm init -y</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> npm install whatsapp-web.js qrcode-terminal</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">WhatsApp Bot Code:</h3>
                <pre className="text-gray-300 text-sm overflow-x-auto">
const { Client } = require('whatsapp-web.js');

const client = new Client();

client.on('qr', (qr) => {
    console.log('Scan QR with WhatsApp:');
    console.log(qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', msg => {
    if (msg.body === '!ping') {
        msg.reply('pong');
    }
});

client.initialize();
                </pre>
              </div>
            </div>
          </div>

          {/* 4. Web Scraping */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-orange-500 p-3 rounded-xl">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">4. Web Scraping</h2>
                <p className="text-orange-200">Websites से Data Extract करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Setup Libraries:</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pip install beautifulsoup4 requests</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pip install selenium</span>
                    <span className="text-gray-500 text-sm ml-2"># For JS sites</span>
                  </div>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Simple Scraper:</h3>
                <pre className="text-gray-300 text-sm overflow-x-auto">
import requests
from bs4 import BeautifulSoup

url = 'https://example.com'
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

titles = soup.find_all('h1')
for title in titles:
    print(title.text)
                </pre>
              </div>
            </div>
          </div>

          {/* 5. Task Scheduling */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-yellow-500 p-3 rounded-xl">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">5. Task Scheduling</h2>
                <p className="text-yellow-200">Automated Tasks को Schedule करें</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Python Schedule Library:</h3>
                <pre className="text-gray-300 text-sm overflow-x-auto">
import schedule
import time

def morning_task():
    print("Good morning!")

def night_task():
    print("Good night!")

# Every day at 8 AM
schedule.every().day.at("08:00").do(morning_task)
# Every day at 10 PM
schedule.every().day.at("22:00").do(night_task)

while True:
    schedule.run_pending()
    time.sleep(60)
                </pre>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Cron Jobs (Termux-Task):</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> pkg install termux-services</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> sv-enable termux-task</span>
                  </div>
                  <div>
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300"> termux-task</span>
                    <span className="text-gray-500 text-sm ml-2"># Edit cron jobs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Auto Reply Bots */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-pink-500 p-3 rounded-xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">6. Auto Reply Bots</h2>
                <p className="text-pink-200">Messages का Auto Reply बनाएं</p>
              </div>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white mb-3">Telegram Auto Reply Bot:</h3>
              <pre className="text-gray-300 text-sm overflow-x-auto">
import telebot

bot = telebot.TeleBot('YOUR_TOKEN')

@bot.message_handler(func=lambda message: True)
def echo_all(message):
    if message.text.lower() == 'hello':
        bot.reply_to(message, "Hi! How can I help?")
    elif message.text.lower() == 'time':
        from datetime import datetime
        bot.reply_to(message, f"Time: {datetime.now()}")
    else:
        bot.reply_to(message, "Send 'hello' or 'time'")

bot.polling()
              </pre>
            </div>
          </div>

        </div>

        {/* Important Note */}
        <div className="mt-8 p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl">
          <h3 className="text-xl font-bold text-purple-300 mb-2">⚠️ Important Notes</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• सिर्फ Educational Purpose के लिए Use करें</li>
            <li>• WhatsApp Bot के लिए Device को Online रखना पड़ता है</li>
            <li>• Bot Token को Secure रखें</li>
            <li>• Spam या Harassment के लिए न Use करें</li>
            <li>• Platform की Terms का पालन करें</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
