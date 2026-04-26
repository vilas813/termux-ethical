'use client'

import { useEffect } from 'react'

export function AdSenseScript() {
  useEffect(() => {
    // Load AdSense script only once
    const script = document.createElement('script')
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6124052333813612'
    script.crossOrigin = 'anonymous'
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src*="adsbygoogle.js"]')
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript)
      }
    }
  }, [])

  return null
}

export function HeaderAd() {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        (window as any).adsbygoogle = (window as any).adsbygoogle || []
        ;(window as any).adsbygoogle.push({})
      }
    } catch (error) {
      console.log('AdSense error:', error)
    }
  }, [])

  return (
    <div className="w-full flex justify-center my-4">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6124052333813612"
        data-ad-slot="4883455343"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}

export function InContentAd1() {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        (window as any).adsbygoogle = (window as any).adsbygoogle || []
        ;(window as any).adsbygoogle.push({})
      }
    } catch (error) {
      console.log('AdSense error:', error)
    }
  }, [])

  return (
    <div className="w-full flex justify-center my-8">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-6124052333813612"
        data-ad-slot="9224446023"
      />
    </div>
  )
}

export function InContentAd2() {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        (window as any).adsbygoogle = (window as any).adsbygoogle || []
        ;(window as any).adsbygoogle.push({})
      }
    } catch (error) {
      console.log('AdSense error:', error)
    }
  }, [])

  return (
    <div className="w-full flex justify-center my-8">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-6124052333813612"
        data-ad-slot="5932068278"
      />
    </div>
  )
}

export function InContentAd3() {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        (window as any).adsbygoogle = (window as any).adsbygoogle || []
        ;(window as any).adsbygoogle.push({})
      }
    } catch (error) {
      console.log('AdSense error:', error)
    }
  }, [])

  return (
    <div className="w-full flex justify-center my-8">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-6124052333813612"
        data-ad-slot="6004965325"
      />
    </div>
  )
}

export function FooterAd() {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        (window as any).adsbygoogle = (window as any).adsbygoogle || []
        ;(window as any).adsbygoogle.push({})
      }
    } catch (error) {
      console.log('AdSense error:', error)
    }
  }, [])

  return (
    <div className="w-full flex justify-center my-4">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6124052333813612"
        data-ad-slot="8581967718"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
