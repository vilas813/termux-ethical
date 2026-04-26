'use client'

import { useEffect } from 'react'

interface AdSenseUnitProps {
  adSlot: string
  adFormat?: string
  style?: React.CSSProperties
}

export default function AdSenseUnit({ adSlot, adFormat = 'auto', style = {} }: AdSenseUnitProps) {
  useEffect(() => {
    // Load AdSense script if not already loaded
    if (!(window as any).adsbygoogle) {
      const script = document.createElement('script')
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      script.async = true
      script.crossOrigin = 'anonymous'
      document.head.appendChild(script)
    }
  }, [])

  useEffect(() => {
    // Push ad when slot changes
    try {
      ;(window as any).adsbygoogle = (window as any).adsbygoogle || []
      ;(window as any).adsbygoogle.push({})
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [adSlot])

  return (
    <div className="my-4 flex justify-center">
      <ins
        className="adsbygoogle block"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  )
}
