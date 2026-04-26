'use client'

import { useEffect, useRef } from 'react'

// AdSense Script Component - loads only once
export function AdSenseScript() {
  const scriptLoaded = useRef(false)

  useEffect(() => {
    if (scriptLoaded.current) return
    scriptLoaded.current = true

    const script = document.createElement('script')
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6124052333813612'
    script.async = true
    script.crossOrigin = 'anonymous'

    document.head.appendChild(script)

    return () => {
      // Don't remove script, it's needed for all ads
    }
  }, [])

  return null
}

// Header Ad - Auto format
export function HeaderAd() {
  return (
    <div className="w-full flex justify-center py-4 bg-muted/30">
      <ins
        className="adsbygoogle block"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6124052333813612"
        data-ad-slot="4883455343"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}

// Footer Ad - Auto format
export function FooterAd() {
  return (
    <div className="w-full flex justify-center py-4 bg-muted/30">
      <ins
        className="adsbygoogle block"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6124052333813612"
        data-ad-slot="8581967718"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}

// In-Content Ad - Fluid format
export function InContentAd({ slot }: { slot: string }) {
  return (
    <div className="w-full flex justify-center my-8">
      <ins
        className="adsbygoogle block"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-6124052333813612"
        data-ad-slot={slot}
      />
    </div>
  )
}
