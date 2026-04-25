'use client'

import Link from 'next/link'
import { PageFooter } from '@/components/page-footer'
import { ArrowLeft, Book, Shield, Heart, Target, MessageSquare, Globe } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 pb-20">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-xl text-purple-200">
            हमारे बारे में जानें
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 max-w-4xl mx-auto">

          {/* Mission */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-purple-500 p-3 rounded-xl">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Our Mission</h2>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              हमारा मिशन हर Termux User को Free, Accessible, और Comprehensive शिक्षा प्रदान करना है। 
              इस Platform के माध्यम से हम सभी को Termux की Power को समझने और उपयोग करने में मदद करते हैं। 
              हमारा लक्ष्य है कि भारत में हर Developer और Tech Enthusiast Termux का उपयोग कर सके।
            </p>
          </div>

          {/* What We Teach */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-500 p-3 rounded-xl">
                <Book className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">What We Teach</h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">📚 Core Topics:</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Programming & Coding</li>
                  <li>• Linux Commands</li>
                  <li>• Web Development</li>
                  <li>• Network Security</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">🚀 Advanced Skills:</h3>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Ethical Hacking</li>
                  <li>• Automation & Bots</li>
                  <li>• Remote Access</li>
                  <li>• System Control</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-green-500 p-3 rounded-xl">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Why Choose Us</h2>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-white">100% Free Content</h3>
                  <p className="text-gray-300 text-sm">सभी Tutorials और Guides Free हैं</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-white">Hindi & English</h3>
                  <p className="text-gray-300 text-sm">Content दोनों भाषाओं में उपलब्ध है</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-white">Step-by-Step Guides</h3>
                  <p className="text-gray-300 text-sm">Easy to follow instructions with examples</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-white">Regular Updates</h3>
                  <p className="text-gray-300 text-sm">नए Features और Tools की जानकारी</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-white">Community Support</h3>
                  <p className="text-gray-300 text-sm">Doubts resolution और discussions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ethical Approach */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-yellow-500 p-3 rounded-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Ethical Approach</h2>
              </div>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
              <p className="text-gray-300 mb-3">
                हम केवल Educational Purpose के लिए Content provide करते हैं। हमारा किसी भी 
                Illegal Activity को promote करने का कोई इरादा नहीं है।
              </p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• सिर्फ Authorized Testing सिखाते हैं</li>
                <li>• Security को Improve करना ही हमारा Goal है</li>
                <li>• Legal Guidelines का पालन ज़रूरी है</li>
                <li>• Cyber Crime को हम Support नहीं करते</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-pink-500 p-3 rounded-xl">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Get in Touch</h2>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              अगर आपके कोई सवाल हैं या सुझाव देना चाहते हैं, तो हमसे Contact करें। 
              हम आपकी Feedback का स्वागत करते हैं।
            </p>
            <div className="bg-white/5 rounded-lg p-4">
              <p className="text-purple-300 font-semibold mb-2">
                📧 Email: contact@termuxlearning.com
              </p>
              <p className="text-gray-400 text-sm">
                हम जल्द से जल्द आपके Questions का Answer देंगे।
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-red-500 p-3 rounded-xl">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Important Disclaimer</h2>
              </div>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <p className="text-gray-300 leading-relaxed">
                यह Website और इसका Content केवल Educational और Learning Purpose के लिए है। 
                किसी भी Tool, Technique या Knowledge का Illegal या Harmful उपयोग न करें। 
                किसी भी System, Network या Device को बिना Written Permission के Attack या Hack 
                करना Criminal Offense है। इस Website की Content से होने वाले किसी भी Loss या Damage 
                के लिए हम जिम्मेदार नहीं हैं। कृपया Legal और Ethical तरीके से सीखें और काम करें।
              </p>
            </div>
          </div>

        </div>

        {/* Thank You */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-purple-200 text-lg">
            <Heart className="w-5 h-5 text-pink-400" />
            <span>Thank you for being part of our community!</span>
            <Heart className="w-5 h-5 text-pink-400" />
          </div>
        </div>

      </div>
    </div>
  )
}
