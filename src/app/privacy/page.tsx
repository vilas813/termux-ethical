'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft, Shield } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Back Button */}
            <Link href="/">
              <Button variant="ghost" size="default" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                वापस जाएं
              </Button>
            </Link>

            {/* Title */}
            <h1 className="text-xl md:text-2xl font-bold text-foreground">
              गोपनीयता नीति
            </h1>

            {/* Spacer for alignment */}
            <div className="w-[110px]"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 mb-6">
              <Shield className="w-8 h-8 text-purple-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              गोपनीयता नीति
            </h2>
            <p className="text-muted-foreground text-lg">
              प्रभावी तिथि: {new Date().toLocaleDateString('hi-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Privacy Policy Content */}
          <div className="space-y-8">
            {/* Section 1: परिचय */}
            <section className="p-6 rounded-lg border bg-card">
              <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 text-sm">1</span>
                परिचय
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Termux Learn ("हम", "हमारा", या "हमें") आपकी गोपनीयता की रक्षा के लिए प्रतिबद्ध है। यह गोपनीयता नीति बताती है कि जब आप हमारी वेबसाइट पर जाते हैं तो हम आपकी जानकारी को कैसे एकत्र, उपयोग, प्रकट और सुरक्षित करते हैं।
              </p>
              <p className="text-muted-foreground leading-relaxed">
                हम आपकी गोपनीयता का सम्मान करते हैं और इस नीति के अनुपालन के माध्यम से इसकी रक्षा के लिए प्रतिबद्ध हैं। यह गोपनीयता नीति उस प्रकार की जानकारी का वर्णन करती है जिसे हम आपसे एकत्र कर सकते हैं या जो आप हमें अपनी वेबसाइट का उपयोग करते समय प्रदान कर सकते हैं।
              </p>
            </section>

            {/* Section 2: जानकारी जो हम एकत्र करते हैं */}
            <section className="p-6 rounded-lg border bg-card">
              <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-500 text-sm">2</span>
                जानकारी जो हम एकत्र करते हैं
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-foreground">2.1 व्यक्तिगत डेटा</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    हम व्यक्तिगत डेटा जैसे नाम, ईमेल पते या फोन नंबर एकत्र नहीं करते जब तक कि आप स्वेच्छा से हमें संपर्क फॉर्म या अन्य संचार चैनलों के माध्यम से प्रदान न करें।
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-foreground">2.2 स्वचालित रूप से एकत्र की गई जानकारी</h4>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    हम स्वचालित रूप से आपके डिवाइस और हमारी वेबसाइट के आपके उपयोग के बारे में कुछ जानकारी एकत्र कर सकते हैं, जिसमें शामिल हैं:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>ब्राउज़र का प्रकार और संस्करण</li>
                    <li>ऑपरेटिंग सिस्टम</li>
                    <li>रेफरिंग वेबसाइट</li>
                    <li>विज़िट का समय और तारीख</li>
                    <li>हमारी वेबसाइट पर देखी गई पेज</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-foreground">2.3 कुकीज़</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    हम अपनी वेबसाइट पर गतिविधि को ट्रैक करने और कुछ जानकारी रखने के लिए कुकीज़ और समान ट्रैकिंग तकनीकों का उपयोग करते हैं। कुकीज़ छोटी मात्रा में डेटा के साथ फाइलें हैं जिनमें एक अनाम अद्वितीय पहचानकर्ता हो सकता है।
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: हम आपकी जानकारी का उपयोग कैसे करते हैं */}
            <section className="p-6 rounded-lg border bg-card">
              <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-sm">3</span>
                हम आपकी जानकारी का उपयोग कैसे करते हैं
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                हम जानकारी का उपयोग निम्नलिखित तरीकों से करते हैं:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>हमारी वेबसाइट को प्रदान, संचालित और बनाए रखने के लिए</li>
                <li>हमारी वेबसाइट पर आपके अनुभव को बेहतर और व्यक्तिगत बनाने के लिए</li>
                <li>विश्लेषण करने और समझने के लिए कि आप हमारी वेबसाइट का उपयोग कैसे करते हैं</li>
                <li>नए उत्पाद, सेवाएं, सुविधाएं और कार्यक्षमता विकसित करने के लिए</li>
                <li>अपडेट, सुरक्षा अलर्ट और सहायता संदेशों के बारे में आपके साथ संवाद करने के लिए</li>
              </ul>
            </section>

            {/* Section 4: जानकारी साझाकरण */}
            <section className="p-6 rounded-lg border bg-card">
              <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 text-sm">4</span>
                जानकारी साझाकरण
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                हम निम्नलिखित मामलों को छोड़कर आपके व्यक्तिगत डेटा को बाहरी पक्षों को बेचते, व्यापार करते या अन्यथा स्थानांतरित नहीं करते:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>आपकी सहमति के साथ, जहां आपने स्पष्ट रूप से हमें अपनी जानकारी साझा करने के लिए कहा है</li>
                <li>जब कानून द्वारा आवश्यक हो, कानूनी दायित्वों का पालन करने के लिए</li>
                <li>हमारे अधिकारों, गोपनीयता, सुरक्षा या संपत्ति की रक्षा करने के लिए</li>
                <li>विलय, अधिग्रहण या संपत्ति की बिक्री के संबंध में</li>
              </ul>
            </section>

            {/* Section 5: तीसरे पक्ष के लिंक */}
            <section className="p-6 rounded-lg border bg-card">
              <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-500 text-sm">5</span>
                तीसरे पक्ष के लिंक
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                हमारी वेबसाइट में GitHub, YouTube, Telegram और अन्य बाहरी संसाधनों जैसे तीसरे पक्ष की वेबसाइटों के लिंक हो सकते हैं। हम इन तीसरे पक्ष की साइटों की गोपनीयता प्रथाओं के लिए जिम्मेदार नहीं हैं। हम आपको आपके द्वारा देखी जाने वाली प्रत्येक तीसरे पक्ष की वेबसाइट की गोपनीयता नीतियों को पढ़ने की सलाह देते हैं।
              </p>
            </section>

            {/* Section 6: डेटा सुरक्षा */}
            <section className="p-6 rounded-lg border bg-card">
              <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-sm">6</span>
                डेटा सुरक्षा
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                हम आपके व्यक्तिगत डेटा की अनधिकृत पहुंच, परिवर्तन, प्रकटीकरण या विनाश के खिलाफ रक्षा के लिए उचित तकनीकी और संगठनात्मक सुरक्षा उपायों को लागू करते हैं। हालांकि, इंटरनेट पर संचरण की कोई भी विधि 100% सुरक्षित नहीं है, और हम पूर्ण सुरक्षा की गारंटी नहीं दे सकते।
              </p>
            </section>

            {/* Section 7: आपकी गोपनीयता अधिकार */}
            <section className="p-6 rounded-lg border bg-card">
              <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 text-sm">7</span>
                आपकी गोपनीयता अधिकार
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                आपके व्यक्तिगत डेटा के संबंध में आपके पास निम्नलिखित अधिकार हैं:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>आपके व्यक्तिगत डेटा तक पहुंच का अधिकार</li>
                <li>गलत डेटा को सुधारने का अधिकार</li>
                <li>अपने व्यक्तिगत डेटा को हटाने का अनुरोध करने का अधिकार</li>
                <li>अपने व्यक्तिगत डेटा की प्रक्रिया के खिलाफ आपत्ति करने का अधिकार</li>
                <li>डेटा पोर्टेबिलिटी का अधिकार</li>
              </ul>
            </section>

            {/* Section 8: बच्चों की गोपनीयता */}
            <section className="p-6 rounded-lg border bg-card">
              <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-500 text-sm">8</span>
                बच्चों की गोपनीयता
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                हमारी वेबसाइट 16 वर्ष से कम आयु के बच्चों के लिए अभिप्रेत नहीं है। हम जानबूझकर बच्चों से व्यक्तिगत जानकारी एकत्र नहीं करते। यदि आप एक अभिभावक या अभिभावक हैं और आपको लगता है कि आपका बच्चा ने हमें व्यक्तिगत डेटा प्रदान किया है, तो कृपया हमसे संपर्क करें, और हम ऐसी जानकारी को हटा देंगे।
              </p>
            </section>

            {/* Section 9: इस गोपनीयता नीति में परिवर्तन */}
            <section className="p-6 rounded-lg border bg-card">
              <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-sm">9</span>
                इस गोपनीयता नीति में परिवर्तन
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                हम समय-समय पर अपनी गोपनीयता नीति को अपडेट कर सकते हैं। हम इस पेज पर नई गोपनीयता नीति पोस्ट करके और शीर्ष पर "प्रभावी तिथि" को अपडेट करके किसी भी परिवर्तन की सूचना देंगे। आपको किसी भी परिवर्तन के लिए समय-समय पर इस गोपनीयता नीति की समीक्षा करने की सलाह दी जाती है।
              </p>
            </section>

            {/* Section 10: संपर्क करें */}
            <section className="p-6 rounded-lg border bg-card">
              <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 text-sm">10</span>
                संपर्क करें
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                यदि आपके पास इस गोपनीयता नीति के बारे में कोई प्रश्न है, तो कृपया हमसे निम्नलिखित चैनलों के माध्यम से संपर्क करें:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>हमारी वेबसाइट पर संपर्क अनुभाग के माध्यम से</li>
                <li>हमारे Telegram चैनल के माध्यम से</li>
              </ul>
            </section>

            {/* Last Updated */}
            <section className="p-6 rounded-lg border bg-gradient-to-r from-purple-500/10 to-pink-500/10">
              <p className="text-center text-sm text-muted-foreground">
                यह गोपनीयता नीति अंतिम बार अपडेट की गई थी: {new Date().toLocaleDateString('hi-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Termux Learn. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              जिम्मेदारी के साथ नैतिक हैकिंग सीखें
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
