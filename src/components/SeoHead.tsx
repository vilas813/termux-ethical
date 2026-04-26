'use client'

import Script from 'next/script'

export function GoogleSearchConsole() {
  return (
    <>
      <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE_HERE" />
    </>
  )
}

export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Termux Learn',
    url: 'https://termuxlearn.com',
    description: 'फ्री में सीखो Ethical Hacking मोबाइल से - Termux और Kali NetHunter tutorials हिंदी में',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://termuxlearn.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Termux Learn',
      url: 'https://termuxlearn.com',
      logo: 'https://termuxlearn.com/logo.png'
    }
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  )
}

export function ArticleStructuredData({ title, description, url, publishDate }: {
  title: string
  description: string
  url: string
  publishDate: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: 'https://termuxlearn.com/logo.png',
    author: {
      '@type': 'Organization',
      name: 'Termux Learn Team',
      url: 'https://termuxlearn.com/about'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Termux Learn',
      logo: {
        '@type': 'ImageObject',
        url: 'https://termuxlearn.com/logo.png'
      }
    },
    datePublished: publishDate,
    dateModified: publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  }

  return (
    <Script
      id={`structured-data-${title}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  )
}
