'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Code, Flame, Zap, Github, Youtube, Send, Info, FileText, Shield } from 'lucide-react'
import { HeaderAd, InContentAd1, InContentAd2, InContentAd3, FooterAd } from '@/components/ads/AdSense'

export default function ProgrammingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <div className="container mx-auto px-4 py-8 pb-20">
        {/* Back Button */}
        <Link href="/learning" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Learning Tools
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Programming & Coding
          </h1>
          <p className="text-xl text-blue-200">
            प्रोग्रामिंग और कोडिंग की पूरी गाइड - Termux में सीखें
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          <HeaderAd />
          
          {/* Programming Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <Flame className="w-8 h-8 text-orange-500" />
              <h2 className="text-3xl font-bold text-white">
                🔥 प्रोग्रामिंग (Programming)
              </h2>
            </div>
            
            <p className="text-white/90 text-lg mb-6">
              प्रोग्रामिंग का मतलब होता है कंप्यूटर को निर्देश देना ताकि वह कोई काम कर सके। यह एक पूरा प्रोसेस है जिसमें सोचना, योजना बनाना, लॉजिक बनाना और कोड लिखना शामिल होता है।
            </p>

            {/* Section 1 */}
            <div className="bg-orange-500/20 rounded-xl p-5 mb-6">
              <h3 className="text-xl font-bold text-orange-400 mb-3">🔹 1. प्रोग्रामिंग क्या है?</h3>
              <p className="text-white/90 mb-4 font-semibold">
                प्रोग्रामिंग = समस्या को समझना + उसका समाधान बनाना + उसे कंप्यूटर को समझाना
              </p>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-yellow-300 font-semibold mb-2">उदाहरण:</p>
                <ul className="space-y-2 text-white/80">
                  <li>• वेबसाइट बनाना</li>
                  <li>• मोबाइल ऐप बनाना</li>
                  <li>• गेम बनाना</li>
                  <li>• ऑटोमेशन करना</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-blue-500/20 rounded-xl p-5 mb-6">
              <h3 className="text-xl font-bold text-blue-400 mb-3">🔹 2. प्रोग्रामिंग के मुख्य भाग</h3>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">(1) समस्या समझना</h4>
                  <p className="text-white/80">सबसे पहले यह समझना कि करना क्या है</p>
                  <div className="bg-black/30 rounded p-3 mt-2">
                    <p className="text-gray-300 text-sm">उदाहरण: लॉगिन सिस्टम बनाना, सर्च फीचर बनाना</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">(2) लॉजिक बनाना</h4>
                  <p className="text-white/80">यह सबसे महत्वपूर्ण भाग है</p>
                  <div className="bg-black/30 rounded p-3 mt-2">
                    <p className="text-gray-300 text-sm">उदाहरण (लॉगिन):</p>
                    <ul className="text-gray-400 text-sm mt-2 space-y-1">
                      <li>• यूज़र से डेटा लो</li>
                      <li>• डेटाबेस से मिलाओ</li>
                      <li>• सही हो तो लॉगिन</li>
                      <li>• गलत हो तो एरर</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">(3) एल्गोरिथ्म बनाना</h4>
                  <p className="text-white/80">स्टेप-बाय-स्टेप तरीका लिखना</p>
                  <div className="bg-black/30 rounded p-3 mt-2">
                    <p className="text-gray-300 text-sm">उदाहरण:</p>
                    <ul className="text-gray-400 text-sm mt-2 space-y-1">
                      <li>• यूज़रनेम लो</li>
                      <li>• पासवर्ड लो</li>
                      <li>• डेटाबेस में चेक करो</li>
                      <li>• रिज़ल्ट दिखाओ</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">(4) फ्लोचार्ट (डायग्राम)</h4>
                  <p className="text-white/80">डायग्राम से समझाना (ऑप्शनल)</p>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">(5) कोड लिखना</h4>
                  <p className="text-white/80">यहीं पर Coding आती है</p>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">(6) टेस्टिंग</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• बग है या नहीं</li>
                    <li>• सही आउटपुट आ रहा है या नहीं</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">(7) डिबगिंग</h4>
                  <p className="text-white/80">गलतियों को ठीक करना</p>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">(8) डिप्लॉयमेंट</h4>
                  <p className="text-white/80">प्रोजेक्ट को लाइव करना</p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-green-500/20 rounded-xl p-5 mb-6">
              <h3 className="text-xl font-bold text-green-400 mb-3">🔹 3. प्रोग्रामिंग के प्रकार</h3>
              <ul className="space-y-2 text-white/90">
                <li>• <span className="text-green-300">वेब डेवलपमेंट</span> - HTML, CSS, JavaScript, PHP</li>
                <li>• <span className="text-green-300">ऐप डेवलपमेंट</span> - Java, Kotlin</li>
                <li>• <span className="text-green-300">सिस्टम प्रोग्रामिंग</span> - C, C++</li>
                <li>• <span className="text-green-300">एथिकल हैकिंग / AI</span> - Python</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="bg-purple-500/20 rounded-xl p-5 mb-6">
              <h3 className="text-xl font-bold text-purple-400 mb-3">🔹 4. प्रोग्रामिंग में जरूरी कॉन्सेप्ट</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <p className="text-white font-semibold">वेरिएबल</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <p className="text-white font-semibold">डेटा टाइप</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <p className="text-white font-semibold">कंडीशन (if-else)</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <p className="text-white font-semibold">लूप (for, while)</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <p className="text-white font-semibold">फंक्शन</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <p className="text-white font-semibold">ऐरे</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 text-center col-span-2">
                  <p className="text-white font-semibold">ऑब्जेक्ट</p>
                </div>

          <InContentAd2 />
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-yellow-500/20 rounded-xl p-5 mb-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">🔹 5. उदाहरण (लॉजिक)</h3>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white font-semibold mb-2">काम: नंबर even है या नहीं</p>
                <p className="text-white/90">लॉजिक:</p>
                <ul className="text-yellow-200 mt-2 space-y-1">
                  <li>• नंबर लो</li>
                  <li>• 2 से भाग करो</li>
                  <li>• अगर remainder 0 → even</li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div className="bg-pink-500/20 rounded-xl p-5 mb-6">
              <h3 className="text-xl font-bold text-pink-400 mb-3">🔹 6. प्रोग्रामिंग माइंडसेट</h3>
              <ul className="space-y-2 text-white/90">
                <li>• लॉजिकल सोच</li>
                <li>• समस्या सुलझाने की क्षमता</li>
                <li>• धैर्य</li>
                <li>• एरर समझना</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div className="bg-cyan-500/20 rounded-xl p-5 mb-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">🔹 7. प्रोग्रामिंग से क्या बना सकते हो</h3>
              <ul className="space-y-2 text-white/90">
                <li>• वेबसाइट</li>
                <li>• हैकिंग टूल</li>
                <li>• ऑटोमेशन स्क्रिप्ट</li>
                <li>• AI टूल</li>
              </ul>
            </div>
          </div>

          {/* Coding Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-yellow-500" />
              <h2 className="text-3xl font-bold text-white">
                ⚡ कोडिंग (Coding)
              </h2>
            </div>
            
            <p className="text-white/90 text-lg mb-6">
              कोडिंग का मतलब है प्रोग्रामिंग भाषा में कोड लिखना। यह प्रोग्रामिंग का एक हिस्सा है।
            </p>

            {/* Coding Section 1 */}
            <div className="bg-yellow-500/20 rounded-xl p-5 mb-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">🔹 1. कोडिंग क्या है?</h3>
              <ul className="space-y-2 text-white/90">
                <li>• कंप्यूटर भाषा में लिखना</li>
                <li>• सिंटैक्स फॉलो करना</li>
                <li>• निर्देश देना</li>
              </ul>
            </div>

            {/* Coding Section 2 */}
            <div className="bg-indigo-500/20 rounded-xl p-5 mb-6">
              <h3 className="text-xl font-bold text-indigo-400 mb-3">🔹 2. कोडिंग के मुख्य भाग</h3>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-indigo-300 mb-2">(1) सिंटैक्स</h4>
                  <p className="text-white/80 mb-2">हर भाषा के अपने नियम होते हैं</p>
                  <div className="space-y-2">
                    <div className="bg-black/30 rounded p-3">
                      <p className="text-green-400 text-sm mb-1">Python:</p>
                      <code className="text-white text-sm">print("Hello")</code>
                    </div>
                    <div className="bg-black/30 rounded p-3">
                      <p className="text-purple-400 text-sm mb-1">PHP:</p>
                      <code className="text-white text-sm">echo "Hello";</code>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-indigo-300 mb-2">(2) कीवर्ड</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded text-sm">if</span>
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded text-sm">else</span>
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded text-sm">for</span>
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded text-sm">function</span>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-indigo-300 mb-2">(3) वेरिएबल</h4>
                  <p className="text-white/80 mb-2">डेटा स्टोर करने के लिए</p>
                  <div className="bg-black/30 rounded p-3">
                    <p className="text-green-400 text-sm mb-1">Python:</p>
                    <code className="text-white text-sm">name = "Vilas"</code>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-indigo-300 mb-2">(4) ऑपरेटर</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded text-sm">+</span>
                    <span className="bg-orange-600 text-white px-3 py-1 rounded text-sm">-</span>
                    <span className="bg-orange-600 text-white px-3 py-1 rounded text-sm">*</span>
                    <span className="bg-orange-600 text-white px-3 py-1 rounded text-sm">/</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">जोड़, घटाना, गुणा, भाग</p>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-indigo-300 mb-2">(5) कंडीशन</h4>
                  <div className="bg-black/30 rounded p-3">
                    <p className="text-green-400 text-sm mb-1">Python:</p>
                    <pre className="text-white text-sm">
{`if age > 18:
    print("Adult")`}
                    </pre>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-indigo-300 mb-2">(6) लूप</h4>
                  <div className="bg-black/30 rounded p-3">
                    <p className="text-green-400 text-sm mb-1">Python:</p>
                    <pre className="text-white text-sm">
{`for i in range(5):
    print(i)`}
                    </pre>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-indigo-300 mb-2">(7) फंक्शन</h4>
                  <div className="bg-black/30 rounded p-3">
                    <p className="text-green-400 text-sm mb-1">Python:</p>
                    <pre className="text-white text-sm">
{`def add(a, b):
    return a + b`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

          <InContentAd1 />

            {/* Coding Section 3 */}
            <div className="bg-green-500/20 rounded-xl p-5 mb-6">
              <h3 className="text-xl font-bold text-green-400 mb-3">🔹 3. कोडिंग भाषाएँ</h3>
              <ul className="space-y-2 text-white/90">
                <li>• <span className="text-yellow-300">Python</span> - आसान</li>
                <li>• <span className="text-yellow-300">JavaScript</span> - वेब</li>
                <li>• <span className="text-yellow-300">PHP</span> - बैकएंड</li>
                <li>• <span className="text-yellow-300">C / C++</span> - एडवांस</li>
              </ul>
            </div>

            {/* Coding Section 4 */}
            <div className="bg-blue-500/20 rounded-xl p-5 mb-6">
              <h3 className="text-xl font-bold text-blue-400 mb-3">🔹 4. कोडिंग टूल</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Termux</li>
                <li>• VS Code</li>
                <li>• Notepad</li>
              </ul>
            </div>

            {/* Coding Section 5 */}
            <div className="bg-red-500/20 rounded-xl p-5 mb-6">
              <h3 className="text-xl font-bold text-red-400 mb-3">🔹 5. कोडिंग एरर</h3>
              <ul className="space-y-2 text-white/90">
                <li>• <span className="text-red-300">Syntax Error</span> - गलत लिखना</li>
                <li>• <span className="text-red-300">Runtime Error</span> - चलते समय क्रैश</li>
                <li>• <span className="text-red-300">Logical Error</span> - आउटपुट गलत</li>
              </ul>
            </div>

            {/* Coding Section 6 */}
            <div className="bg-teal-500/20 rounded-xl p-5 mb-6">
              <h3 className="text-xl font-bold text-teal-400 mb-3">🔹 6. प्रैक्टिस कैसे करें</h3>
              <ul className="space-y-2 text-white/90">
                <li>• रोज़ कोड लिखो</li>
                <li>• छोटे प्रोजेक्ट बनाओ</li>
                <li>• एरर सॉल्व करो</li>
              </ul>
            </div>

            {/* Coding Section 7 - Examples */}
            <div className="bg-purple-500/20 rounded-xl p-5 mb-6">
              <h3 className="text-xl font-bold text-purple-400 mb-3">🔹 7. उदाहरण</h3>
              <p className="text-white/90 mb-4">Even/Odd चेक करने का उदाहरण</p>
              
              <div className="space-y-4">
                <div className="bg-black/40 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-green-400 text-sm ml-2">Python</span>
                  </div>
                  <pre className="text-white text-sm overflow-x-auto">
{`num = 10

if num % 2 == 0:
    print("Even")
else:
    print("Odd")`}
                  </pre>
                </div>

                <div className="bg-black/40 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-purple-400 text-sm ml-2">PHP</span>
                  </div>
                  <pre className="text-white text-sm overflow-x-auto">
{`$num = 10;

if ($num % 2 == 0) {
    echo "Even";
} else {
    echo "Odd";
}`}
                  </pre>
                </div>

                <div className="bg-black/40 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-yellow-400 text-sm ml-2">JavaScript</span>
                  </div>
                  <pre className="text-white text-sm overflow-x-auto">
{`let num = 10;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Difference Section */}
          <div className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              🔥 अंतिम अंतर (Difference)
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-white">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 text-orange-400">प्रोग्रामिंग</th>
                    <th className="text-left py-3 px-4 text-purple-400">कोडिंग</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">पूरा प्रोसेस</td>
                    <td className="py-3 px-4">सिर्फ कोड लिखना</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">लॉजिक + प्लानिंग</td>
                    <td className="py-3 px-4">सिंटैक्स + लिखना</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">बड़ा कॉन्सेप्ट</td>
                    <td className="py-3 px-4">छोटा हिस्सा</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Final Example */}
          <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">
              🚀 आसान उदाहरण
            </h2>
            <p className="text-white/90 text-lg">
              अगर तुम WhatsApp जैसा ऐप बनाते हो:
            </p>
            <div className="mt-4 space-y-3">
              <div className="bg-blue-500/30 rounded-lg p-4">
                <p className="text-white">
                  <span className="text-blue-300 font-semibold">प्रोग्रामिंग</span> → पूरा सिस्टम सोचोगे
                </p>
              </div>
              <div className="bg-purple-500/30 rounded-lg p-4">
                <p className="text-white">
                  <span className="text-purple-300 font-semibold">कोडिंग</span> → कोड लिखोगे
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-12 p-6 bg-white/5 rounded-xl">
          <p className="text-white text-lg">
            🎯 अब आप प्रोग्रामिंग और कोडिंग का difference समझ गए होंगे!
            <br />
            <span className="text-blue-300">Termux में रोज़ प्रैक्टिस करें और coding सीखें! 🚀</span>
          </p>
        </div>

      </div>

          <InContentAd3 />

      {/* Footer */}
              <FooterAd />

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
