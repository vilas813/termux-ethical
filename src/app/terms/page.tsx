'use client'

import Link from 'next/link'
import { ArrowLeft, FileText, Shield, AlertTriangle, User, CheckCircle, XCircle } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 pb-20">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-500 p-4 rounded-2xl">
              <FileText className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xl text-blue-200">
            कृपया Terms और Conditions को ध्यान से पढ़ें
          </p>
        </div>

        {/* Last Updated */}
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-gray-400 text-sm text-center">
            Last Updated: January 2025
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 max-w-4xl mx-auto">

          {/* 1. Acceptance of Terms */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-500 p-3 rounded-xl">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">1. Acceptance of Terms</h2>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              इस Website का उपयोग करके, आप इन Terms और Conditions से बंधे हो जाते हैं। 
              अगर आप इन Terms से सहमत नहीं हैं, तो कृपया इस Website का उपयोग न करें। 
              हम किसी भी समय इन Terms को Update कर सकते हैं।
            </p>
          </div>

          {/* 2. Educational Purpose */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-500 p-3 rounded-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">2. Educational Purpose Only</h2>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-gray-300 leading-relaxed">
                यह Website केवल Educational Purpose के लिए है। यहाँ दी गई जानकारी और Tools का उपयोग सिर्फ Learning और Self-Improvement के लिए होना चाहिए।
              </p>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-green-300 mb-2">✅ Permitted Use:</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• अपनी Learning के लिए Content पढ़ना</li>
                  <li>• अपने Systems पर Practice करना</li>
                  <li>• Authorized Testing करना</li>
                  <li>• Educational Projects बनाना</li>
                </ul>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-red-300 mb-2">❌ Prohibited Use:</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• बिना Permission किसी System को Hack करना</li>
                  <li>• Cyber Attacks करना</li>
                  <li>• Data Theft या Unauthorized Access</li>
                  <li>• किसी को Harm पहुंचाना</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. User Responsibilities */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-500 p-3 rounded-xl">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">3. User Responsibilities</h2>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>• आप Legal और Ethical तरीके से Content का उपयोग करें</li>
              <li>• अपनी Country के Laws का पालन करें</li>
              <li>• किसी भी Illegal Activity में शामिल न हों</li>
              <li>• सिर्फ Authorized Systems पर Test करें</li>
              <li>• Third Party की Privacy का Respect करें</li>
              <li>• Tools और Information को Irresponsible तरीके से Use न करें</li>
            </ul>
          </div>

          {/* 4. Disclaimer */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-yellow-500 p-3 rounded-xl">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">4. Disclaimer</h2>
              </div>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
              <ul className="space-y-2 text-gray-300">
                <li>• यह Website की Content "As Is" के आधार पर प्रदान की गई है</li>
                <li>• हम किसी भी Content की Accuracy, Completeness या Reliability की गारंटी नहीं देते</li>
                <li>• इस Content के Use से होने वाले किसी भी Direct या Indirect Loss या Damage के लिए हम जिम्मेदार नहीं हैं</li>
                <li>• आप इस Content को अपने Risk पर Use कर रहे हैं</li>
                <li>• किसी भी Tool या Information का Use करने से पहले Professional Advice लें</li>
              </ul>
            </div>
          </div>

          {/* 5. Intellectual Property */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-indigo-500 p-3 rounded-xl">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">5. Intellectual Property</h2>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              इस Website का सभी Content (Text, Images, Code, Design, आदि) हमारी Intellectual Property है या हमारे द्वारा Licensed है।
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Content को Permission के बिना Copy, Modify या Distribute न करें</li>
              <li>• Commercial Purpose के लिए Use न करें</li>
              <li>• किसी भी Content से हमारा Copyright Notice हटा न करें</li>
              <li>• Content को Fair Use के तहत ही Use करें</li>
            </ul>
          </div>

          {/* 6. Age Restriction */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-orange-500 p-3 rounded-xl">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">6. Age Restriction</h2>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              यह Website 18+ के लिए है। अगर आप 18 से कम उम्र के हैं, तो कृपया अपने Parents या Guardians की अनुमति लें।
              Cyber Security और Hacking संबंधी Content Sensitive हो सकता है, इसलिए Minor Users को Guidance के साथ Use करना चाहिए।
            </p>
          </div>

          {/* 7. User Content */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-pink-500 p-3 rounded-xl">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">7. User Content</h2>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>• आप किसी भी Illegal, Harmful, या Offensive Content Post न करें</li>
              <li>• Spam यर Misleading Content Share न करें</li>
              <li>• Others की Privacy Respect करें</li>
              <li>• Copyright Violation न करें</li>
              <li>• हम किसी भी User Content को Monitor और Remove करने का Right रखते हैं</li>
            </ul>
          </div>

          {/* 8. No Warranty */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 p-3 rounded-xl">
                <XCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">8. No Warranty</h2>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              हम इस Website की और इसकी Content की किसी भी प्रकार की Warranty (Express या Implied) नहीं देते।
              इसमें कोई Implicit Warranty of Merchantability, Fitness for a Particular Purpose, या Non-Infringement शामिल नहीं है।
            </p>
          </div>

          {/* 9. Limitation of Liability */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-cyan-500 p-3 rounded-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">9. Limitation of Liability</h2>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              किसी भी स्थिति में हम इस Website के Use या Use न होने से होने वाले किसी भी Direct, Indirect, 
              Incidental, Special, या Consequential Damages के लिए जिम्मेदार नहीं होंगे। इसमें Loss of Data, 
              Loss of Profit, या अन्य Commercial Losses शामिल हैं।
            </p>
          </div>

          {/* 10. Termination */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 p-3 rounded-xl">
                <XCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">10. Termination of Access</h2>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              हम किसी भी समय, किसी भी कारण से, बिना Notice के आपकी Website Access को Terminate कर सकते हैं। 
              इसमें Terms Violation, Illegal Activities, या किसी अन्य Reason शामिल है।
            </p>
          </div>

          {/* 11. Compliance with Laws */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-500 p-3 rounded-xl">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">11. Compliance with Laws</h2>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              आप इस Website का उपयोग करते समय सभी Applicable Local, State, National, और International Laws का पालन करें।
              किसी भी Cyber Law, Information Technology Act, या अन्य Legal Requirements का Violation न करें।
            </p>
          </div>

          {/* 12. Changes to Terms */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-500 p-3 rounded-xl">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">12. Changes to Terms</h2>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              हम किसी भी समय इन Terms और Conditions को Update कर सकते हैं। 
              Updated Terms तुरंत Effect में आ जाते हैं। अपडेट के बाद Website का Use करना Updated Terms को Accept करना माना जाएगा।
            </p>
          </div>

          {/* 13. Contact Information */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-500 p-3 rounded-xl">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">13. Contact Information</h2>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              अगर आपके Terms से संबंधित कोई सवाल या Doubts हैं, तो कृपया हमसे Contact करें:
            </p>
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-blue-300 font-semibold">
                📧 Email: legal@termuxlearning.com
              </p>
            </div>
          </div>

        </div>

        {/* Agreement Notice */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-blue-500/20 border border-blue-500 rounded-xl p-6 text-center">
            <p className="text-blue-200 text-lg">
              इस Website का Continue Use करने का मतलब है कि आप इन Terms और Conditions से सहमत हैं।
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
