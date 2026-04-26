import { Metadata } from 'next'

interface ToolSEOConfig {
  name: string
  description: string
  keywords: string[]
  category: string
}

// Tool descriptions and keywords
const toolDescriptions: Record<string, ToolSEOConfig> = {
  nmap: {
    name: 'Nmap',
    description: 'Nmap (Network Mapper) Tutorial in Hindi - Learn network scanning, port discovery, service detection, and security auditing. Complete guide with examples for Termux and Kali NetHunter.',
    keywords: ['Nmap tutorial', 'Nmap commands', 'network scanning', 'port scanning', 'service detection', 'Nmap in Termux', 'Nmap Kali NetHunter', 'network security', 'pentesting tool', 'OS detection', 'vulnerability scan', 'Nmap examples', 'ethical hacking tools'],
    category: 'Network Scanning'
  },
  metasploit: {
    name: 'Metasploit',
    description: 'Metasploit Framework Tutorial in Hindi - Learn penetration testing, exploitation, and security testing. Complete guide with commands and examples for Termux and Kali NetHunter.',
    keywords: ['Metasploit tutorial', 'Metasploit framework', 'penetration testing', 'exploitation framework', 'Metasploit commands', 'Metasploit in Termux', 'Metasploit Kali NetHunter', 'exploit database', 'payload generator', 'ethical hacking', 'security testing', 'Metasploit examples'],
    category: 'Exploitation'
  },
  burpsuite: {
    name: 'Burp Suite',
    description: 'Burp Suite Tutorial in Hindi - Learn web application security testing, vulnerability assessment, and manual testing. Complete guide for penetration testers.',
    keywords: ['Burp Suite tutorial', 'Burp Suite guide', 'web security testing', 'vulnerability scanner', 'web pentesting', 'Burp Suite in Termux', 'Burp Suite Kali NetHunter', 'web application security', 'penetration testing tool', 'security testing'],
    category: 'Web Security'
  },
  sqlmap: {
    name: 'SQLMap',
    description: 'SQLMap Tutorial in Hindi - Learn SQL injection testing and database hacking. Complete guide with commands, examples, and best practices for ethical hacking.',
    keywords: ['SQLMap tutorial', 'SQL injection', 'database hacking', 'SQLMap commands', 'SQLMap in Termux', 'SQLMap Kali NetHunter', 'web security', 'pentesting', 'vulnerability assessment', 'ethical hacking', 'SQL injection examples'],
    category: 'Web Security'
  },
  wireshark: {
    name: 'Wireshark',
    description: 'Wireshark Tutorial in Hindi - Learn network packet analysis, protocol inspection, and network troubleshooting. Complete guide for network security professionals.',
    keywords: ['Wireshark tutorial', 'packet analysis', 'network protocol analysis', 'Wireshark commands', 'Wireshark in Termux', 'Wireshark Kali NetHunter', 'network monitoring', 'network security', 'packet capture', 'protocol inspection', 'ethical hacking'],
    category: 'Network Analysis'
  },
  aircrackng: {
    name: 'Aircrack-ng',
    description: 'Aircrack-ng Tutorial in Hindi - Learn WiFi security testing, WPA2 cracking, and wireless network auditing. Complete guide with commands and examples.',
    keywords: ['Aircrack-ng tutorial', 'WiFi hacking', 'WPA2 cracking', 'wireless security', 'Aircrack-ng commands', 'Aircrack-ng in Termux', 'Aircrack-ng Kali NetHunter', 'WiFi pentesting', 'network security', 'ethical hacking', 'wireless auditing'],
    category: 'Wireless Security'
  },
  nikto: {
    name: 'Nikto',
    description: 'Nikto Tutorial in Hindi - Learn web server vulnerability scanning. Complete guide for detecting outdated servers, dangerous files, and security issues.',
    keywords: ['Nikto tutorial', 'web scanner', 'vulnerability scanning', 'web server security', 'Nikto commands', 'Nikto in Termux', 'Nikto Kali NetHunter', 'web pentesting', 'security assessment', 'ethical hacking'],
    category: 'Web Security'
  },
  hydra: {
    name: 'Hydra',
    description: 'Hydra Tutorial in Hindi - Learn password cracking and brute-force attacks. Complete guide with commands, examples, and security testing practices.',
    keywords: ['Hydra tutorial', 'password cracking', 'brute force attack', 'Hydra commands', 'Hydra in Termux', 'Hydra Kali NetHunter', 'password security', 'penetration testing', 'security testing', 'ethical hacking', 'brute force examples'],
    category: 'Password Security'
  },
  wifite: {
    name: 'Wifite',
    description: 'Wifite Tutorial in Hindi - Learn automated wireless penetration testing. Complete guide for WEP, WPA, and WPA2 WiFi security testing.',
    keywords: ['Wifite tutorial', 'WiFi pentesting', 'wireless security', 'WEP cracking', 'WPA cracking', 'Wifite commands', 'Wifite in Termux', 'Wifite Kali NetHunter', 'automated hacking', 'network security', 'ethical hacking'],
    category: 'Wireless Security'
  },
  johnripper: {
    name: 'John the Ripper',
    description: 'John the Ripper Tutorial in Hindi - Learn password cracking and hash decryption. Complete guide with commands, examples, and security best practices.',
    keywords: ['John the Ripper tutorial', 'password cracking', 'hash cracking', 'John commands', 'John in Termux', 'John Kali NetHunter', 'password security', 'hash decryption', 'ethical hacking', 'security testing', 'password cracking examples'],
    category: 'Password Security'
  },
  hashcat: {
    name: 'Hashcat',
    description: 'Hashcat Tutorial in Hindi - Learn GPU-accelerated password cracking. Complete guide with commands, rules, and advanced techniques for security testing.',
    keywords: ['Hashcat tutorial', 'GPU password cracking', 'hash recovery', 'Hashcat commands', 'Hashcat in Termux', 'Hashcat Kali NetHunter', 'password security', 'hash cracking', 'ethical hacking', 'security testing', 'GPU acceleration'],
    category: 'Password Security'
  },
  ettercap: {
    name: 'Ettercap',
    description: 'Ettercap Tutorial in Hindi - Learn MITM (Man-in-the-Middle) attacks and network sniffing. Complete guide with commands and security testing practices.',
    keywords: ['Ettercap tutorial', 'MITM attack', 'network sniffing', 'ARP spoofing', 'Ettercap commands', 'Ettercap in Termux', 'Ettercap Kali NetHunter', 'network security', 'pentesting', 'ethical hacking', 'network analysis'],
    category: 'Network Attacks'
  },
  bettercap: {
    name: 'Bettercap',
    description: 'Bettercap Tutorial in Hindi - Learn network monitoring, MITM attacks, and WiFi reconnaissance. Complete guide with commands and examples.',
    keywords: ['Bettercap tutorial', 'MITM attack', 'network monitoring', 'WiFi reconnaissance', 'Bettercap commands', 'Bettercap in Termux', 'Bettercap Kali NetHunter', 'network security', 'pentesting', 'ethical hacking', 'network analysis'],
    category: 'Network Security'
  },
  gobuster: {
    name: 'Gobuster',
    description: 'Gobuster Tutorial in Hindi - Learn directory and DNS enumeration. Complete guide for web discovery and penetration testing.',
    keywords: ['Gobuster tutorial', 'directory brute force', 'DNS enumeration', 'web discovery', 'Gobuster commands', 'Gobuster in Termux', 'Gobuster Kali NetHunter', 'web pentesting', 'security testing', 'ethical hacking', 'directory scanning'],
    category: 'Web Security'
  },
  dirb: {
    name: 'Dirb',
    description: 'Dirb Tutorial in Hindi - Learn directory brute forcing and web content discovery. Complete guide with commands and examples for penetration testing.',
    keywords: ['Dirb tutorial', 'directory scanning', 'web discovery', 'brute force', 'Dirb commands', 'Dirb in Termux', 'Dirb Kali NetHunter', 'web pentesting', 'security testing', 'ethical hacking', 'directory enumeration'],
    category: 'Web Security'
  },
  whatweb: {
    name: 'WhatWeb',
    description: 'WhatWeb Tutorial in Hindi - Learn web technology identification and fingerprinting. Complete guide for reconnaissance and security testing.',
    keywords: ['WhatWeb tutorial', 'web fingerprinting', 'technology identification', 'reconnaissance', 'WhatWeb commands', 'WhatWeb in Termux', 'WhatWeb Kali NetHunter', 'web pentesting', 'security testing', 'ethical hacking', 'web reconnaissance'],
    category: 'Web Security'
  },
  wpscan: {
    name: 'WPScan',
    description: 'WPScan Tutorial in Hindi - Learn WordPress security testing and vulnerability scanning. Complete guide for WordPress penetration testing.',
    keywords: ['WPScan tutorial', 'WordPress security', 'WordPress pentesting', 'vulnerability scanner', 'WPScan commands', 'WPScan in Termux', 'WPScan Kali NetHunter', 'web security', 'ethical hacking', 'WordPress hacking', 'security testing'],
    category: 'Web Security'
  },
  theharvester: {
    name: 'theHarvester',
    description: 'theHarvester Tutorial in Hindi - Learn OSINT gathering, email harvesting, and subdomain discovery. Complete guide for reconnaissance.',
    keywords: ['theHarvester tutorial', 'OSINT gathering', 'email harvesting', 'subdomain discovery', 'theHarvester commands', 'theHarvester in Termux', 'theHarvester Kali NetHunter', 'reconnaissance', 'information gathering', 'ethical hacking', 'security testing'],
    category: 'Reconnaissance'
  },
  sublist3r: {
    name: 'Sublist3r',
    description: 'Sublist3r Tutorial in Hindi - Learn subdomain enumeration and discovery. Complete guide for reconnaissance and security testing.',
    keywords: ['Sublist3r tutorial', 'subdomain enumeration', 'subdomain discovery', 'Sublist3r commands', 'Sublist3r in Termux', 'Sublist3r Kali NetHunter', 'reconnaissance', 'information gathering', 'ethical hacking', 'security testing', 'DNS enumeration'],
    category: 'Reconnaissance'
  },
  amass: {
    name: 'Amass',
    description: 'Amass Tutorial in Hindi - Learn advanced network reconnaissance and subdomain enumeration. Complete guide for security testing and OSINT.',
    keywords: ['Amass tutorial', 'advanced reconnaissance', 'subdomain enumeration', 'network mapping', 'Amass commands', 'Amass in Termux', 'Amass Kali NetHunter', 'OSINT', 'information gathering', 'ethical hacking', 'security testing'],
    category: 'Reconnaissance'
  },
  dnsenum: {
    name: 'DNSenum',
    description: 'DNSenum Tutorial in Hindi - Learn DNS enumeration and information gathering. Complete guide for reconnaissance and security testing.',
    keywords: ['DNSenum tutorial', 'DNS enumeration', 'DNS reconnaissance', 'information gathering', 'DNSenum commands', 'DNSenum in Termux', 'DNSenum Kali NetHunter', 'network security', 'ethical hacking', 'security testing', 'DNS scanning'],
    category: 'Reconnaissance'
  },
  maltego: {
    name: 'Maltego',
    description: 'Maltego Tutorial in Hindi - Learn OSINT analysis and information gathering. Complete guide for reconnaissance and cyber investigations.',
    keywords: ['Maltego tutorial', 'OSINT analysis', 'information gathering', 'cyber investigation', 'Maltego commands', 'Maltego in Termux', 'Maltego Kali NetHunter', 'reconnaissance', 'ethical hacking', 'security testing', 'link analysis'],
    category: 'Reconnaissance'
  },
  reconng: {
    name: 'Recon-ng',
    description: 'Recon-ng Tutorial in Hindi - Learn automated reconnaissance and OSINT gathering. Complete guide for information gathering and security testing.',
    keywords: ['Recon-ng tutorial', 'automated reconnaissance', 'OSINT gathering', 'information gathering', 'Recon-ng commands', 'Recon-ng in Termux', 'Recon-ng Kali NetHunter', 'reconnaissance', 'ethical hacking', 'security testing', 'cyber investigation'],
    category: 'Reconnaissance'
  },
  openvas: {
    name: 'OpenVAS',
    description: 'OpenVAS Tutorial in Hindi - Learn vulnerability scanning and security assessment. Complete guide for network security testing.',
    keywords: ['OpenVAS tutorial', 'vulnerability scanner', 'security assessment', 'network scanning', 'OpenVAS commands', 'OpenVAS in Termux', 'OpenVAS Kali NetHunter', 'penetration testing', 'ethical hacking', 'security testing', 'vulnerability assessment'],
    category: 'Vulnerability Scanning'
  },
  nessus: {
    name: 'Nessus',
    description: 'Nessus Tutorial in Hindi - Learn vulnerability assessment and security scanning. Complete guide for penetration testing and security auditing.',
    keywords: ['Nessus tutorial', 'vulnerability assessment', 'security scanning', 'Nessus commands', 'Nessus in Termux', 'Nessus Kali NetHunter', 'penetration testing', 'ethical hacking', 'security testing', 'vulnerability scanner'],
    category: 'Vulnerability Scanning'
  },
  lynis: {
    name: 'Lynis',
    description: 'Lynis Tutorial in Hindi - Learn security auditing and system hardening. Complete guide for Linux/Unix security testing.',
    keywords: ['Lynis tutorial', 'security auditing', 'system hardening', 'Lynis commands', 'Lynis in Termux', 'Lynis Kali NetHunter', 'security testing', 'ethical hacking', 'security assessment', 'Linux security', 'Unix security'],
    category: 'Security Auditing'
  },
  beef: {
    name: 'BeEF',
    description: 'BeEF Tutorial in Hindi - Learn browser exploitation framework and client-side attacks. Complete guide for web security testing.',
    keywords: ['BeEF tutorial', 'browser exploitation', 'client-side attacks', 'BeEF commands', 'BeEF in Termux', 'BeEF Kali NetHunter', 'web security', 'ethical hacking', 'security testing', 'browser hacking', 'XSS testing'],
    category: 'Web Security'
  },
  searchsploit: {
    name: 'SearchSploit',
    description: 'SearchSploit Tutorial in Hindi - Learn exploit database searching and vulnerability research. Complete guide for penetration testing.',
    keywords: ['SearchSploit tutorial', 'exploit database', 'vulnerability research', 'SearchSploit commands', 'SearchSploit in Termux', 'SearchSploit Kali NetHunter', 'penetration testing', 'ethical hacking', 'security testing', 'exploit searching'],
    category: 'Exploitation'
  },
  routersploit: {
    name: 'RouterSploit',
    description: 'RouterSploit Tutorial in Hindi - Learn router exploitation and firmware security testing. Complete guide for network security assessment.',
    keywords: ['RouterSploit tutorial', 'router exploitation', 'firmware security', 'RouterSploit commands', 'RouterSploit in Termux', 'RouterSploit Kali NetHunter', 'network security', 'ethical hacking', 'security testing', 'router hacking', 'IoT security'],
    category: 'Network Security'
  },
  mimikatz: {
    name: 'Mimikatz',
    description: 'Mimikatz Tutorial in Hindi - Learn Windows credential extraction and security testing. Complete guide for penetration testing.',
    keywords: ['Mimikatz tutorial', 'credential extraction', 'Windows security', 'Mimikatz commands', 'Mimikatz in Termux', 'Mimikatz Kali NetHunter', 'password security', 'ethical hacking', 'security testing', 'Windows hacking', 'credential dumping'],
    category: 'Windows Security'
  },
  empire: {
    name: 'Empire',
    description: 'Empire Tutorial in Hindi - Learn post-exploitation framework and PowerShell penetration testing. Complete guide for security assessment.',
    keywords: ['Empire tutorial', 'post-exploitation', 'PowerShell hacking', 'Empire commands', 'Empire in Termux', 'Empire Kali NetHunter', 'penetration testing', 'ethical hacking', 'security testing', 'Windows hacking', 'post-exploitation framework'],
    category: 'Post-Exploitation'
  },
  powersploit: {
    name: 'PowerSploit',
    description: 'PowerSploit Tutorial in Hindi - Learn PowerShell penetration testing modules. Complete guide for Windows security testing.',
    keywords: ['PowerSploit tutorial', 'PowerShell hacking', 'Windows security', 'PowerSploit commands', 'PowerSploit in Termux', 'PowerSploit Kali NetHunter', 'penetration testing', 'ethical hacking', 'security testing', 'Windows hacking', 'PowerShell modules'],
    category: 'Windows Security'
  },
  tcpdump: {
    name: 'tcpdump',
    description: 'tcpdump Tutorial in Hindi - Learn packet capture and network analysis. Complete guide for network monitoring and security testing.',
    keywords: ['tcpdump tutorial', 'packet capture', 'network analysis', 'tcpdump commands', 'tcpdump in Termux', 'tcpdump Kali NetHunter', 'network monitoring', 'ethical hacking', 'security testing', 'packet analysis', 'network security'],
    category: 'Network Analysis'
  },
  kismet: {
    name: 'Kismet',
    description: 'Kismet Tutorial in Hindi - Learn wireless network monitoring and WiFi reconnaissance. Complete guide for wireless security testing.',
    keywords: ['Kismet tutorial', 'wireless monitoring', 'WiFi reconnaissance', 'Kismet commands', 'Kismet in Termux', 'Kismet Kali NetHunter', 'wireless security', 'ethical hacking', 'security testing', 'WiFi scanning', 'network monitoring'],
    category: 'Wireless Security'
  },
  reaver: {
    name: 'Reaver',
    description: 'Reaver Tutorial in Hindi - Learn WPS pin cracking and WiFi security testing. Complete guide with commands and examples.',
    keywords: ['Reaver tutorial', 'WPS cracking', 'WiFi security', 'Reaver commands', 'Reaver in Termux', 'Reaver Kali NetHunter', 'wireless security', 'ethical hacking', 'security testing', 'WPS attack', 'WiFi hacking'],
    category: 'Wireless Security'
  },
  autopsy: {
    name: 'Autopsy',
    description: 'Autopsy Tutorial in Hindi - Learn digital forensics and file recovery. Complete guide for forensic analysis and investigation.',
    keywords: ['Autopsy tutorial', 'digital forensics', 'file recovery', 'forensic analysis', 'Autopsy commands', 'Autopsy in Termux', 'Autopsy Kali NetHunter', 'computer forensics', 'ethical hacking', 'security testing', 'forensic investigation'],
    category: 'Digital Forensics'
  },
  volatility: {
    name: 'Volatility',
    description: 'Volatility Tutorial in Hindi - Learn memory forensics and RAM analysis. Complete guide for forensic investigation.',
    keywords: ['Volatility tutorial', 'memory forensics', 'RAM analysis', 'Volatility commands', 'Volatility in Termux', 'Volatility Kali NetHunter', 'digital forensics', 'ethical hacking', 'security testing', 'memory analysis', 'forensic investigation'],
    category: 'Digital Forensics'
  },
  foremost: {
    name: 'Foremost',
    description: 'Foremost Tutorial in Hindi - Learn file recovery and forensic carving. Complete guide for digital forensics.',
    keywords: ['Foremost tutorial', 'file recovery', 'forensic carving', 'Foremost commands', 'Foremost in Termux', 'Foremost Kali NetHunter', 'digital forensics', 'ethical hacking', 'security testing', 'data recovery', 'forensic analysis'],
    category: 'Digital Forensics'
  },
  ghidra: {
    name: 'Ghidra',
    description: 'Ghidra Tutorial in Hindi - Learn reverse engineering and binary analysis. Complete guide for malware analysis and security research.',
    keywords: ['Ghidra tutorial', 'reverse engineering', 'binary analysis', 'Ghidra commands', 'Ghidra in Termux', 'Ghidra Kali NetHunter', 'malware analysis', 'ethical hacking', 'security testing', 'reverse engineering', 'binary analysis'],
    category: 'Reverse Engineering'
  },
  radare2: {
    name: 'Radare2',
    description: 'Radare2 Tutorial in Hindi - Learn reverse engineering and binary analysis framework. Complete guide for security research.',
    keywords: ['Radare2 tutorial', 'reverse engineering', 'binary analysis', 'Radare2 commands', 'Radare2 in Termux', 'Radare2 Kali NetHunter', 'malware analysis', 'ethical hacking', 'security testing', 'reverse engineering', 'framework'],
    category: 'Reverse Engineering'
  },
  apktool: {
    name: 'APKTool',
    description: 'APKTool Tutorial in Hindi - Learn Android app reverse engineering and APK analysis. Complete guide for mobile security testing.',
    keywords: ['APKTool tutorial', 'Android reverse engineering', 'APK analysis', 'APKTool commands', 'APKTool in Termux', 'APKTool Kali NetHunter', 'mobile security', 'ethical hacking', 'security testing', 'Android hacking', 'app analysis'],
    category: 'Mobile Security'
  },
  hping3: {
    name: 'hping3',
    description: 'hping3 Tutorial in Hindi - Learn packet crafting and network testing. Complete guide for network security assessment.',
    keywords: ['hping3 tutorial', 'packet crafting', 'network testing', 'hping3 commands', 'hping3 in Termux', 'hping3 Kali NetHunter', 'network security', 'ethical hacking', 'security testing', 'packet analysis', 'network scanning'],
    category: 'Network Security'
  },
  slowloris: {
    name: 'Slowloris',
    description: 'Slowloris Tutorial in Hindi - Learn DDoS attacks and web server testing. Complete guide for security assessment.',
    keywords: ['Slowloris tutorial', 'DDoS attack', 'web server testing', 'Slowloris commands', 'Slowloris in Termux', 'Slowloris Kali NetHunter', 'network security', 'ethical hacking', 'security testing', 'stress testing', 'DoS attack'],
    category: 'Network Attacks'
  },
  arduino: {
    name: 'Arduino',
    description: 'Arduino Tutorial in Hindi - Learn hardware hacking and IoT security testing. Complete guide for embedded systems security.',
    keywords: ['Arduino tutorial', 'hardware hacking', 'IoT security', 'Arduino commands', 'Arduino in Termux', 'Arduino Kali NetHunter', 'embedded security', 'ethical hacking', 'security testing', 'hardware security', 'IoT hacking'],
    category: 'Hardware Security'
  },
  firmadyne: {
    name: 'Firmadyne',
    description: 'Firmadyne Tutorial in Hindi - Learn firmware emulation and IoT security testing. Complete guide for embedded systems analysis.',
    keywords: ['Firmadyne tutorial', 'firmware emulation', 'IoT security', 'Firmadyne commands', 'Firmadyne in Termux', 'Firmadyne Kali NetHunter', 'embedded security', 'ethical hacking', 'security testing', 'firmware analysis', 'IoT testing'],
    category: 'Hardware Security'
  },
  owaspzap: {
    name: 'OWASP ZAP',
    description: 'OWASP ZAP Tutorial in Hindi - Learn web application security testing and vulnerability scanning. Complete guide for penetration testing.',
    keywords: ['OWASP ZAP tutorial', 'web security testing', 'vulnerability scanner', 'OWASP ZAP commands', 'OWASP ZAP in Termux', 'OWASP ZAP Kali NetHunter', 'web pentesting', 'ethical hacking', 'security testing', 'application security', 'vulnerability assessment'],
    category: 'Web Security'
  },
  cewl: {
    name: 'Cewl',
    description: 'Cewl Tutorial in Hindi - Learn custom wordlist generation for password cracking. Complete guide for penetration testing.',
    keywords: ['Cewl tutorial', 'wordlist generation', 'custom wordlist', 'Cewl commands', 'Cewl in Termux', 'Cewl Kali NetHunter', 'password security', 'ethical hacking', 'security testing', 'password cracking', 'wordlist tools'],
    category: 'Password Security'
  },
  crunch: {
    name: 'Crunch',
    description: 'Crunch Tutorial in Hindi - Learn wordlist generation and password dictionary creation. Complete guide for penetration testing.',
    keywords: ['Crunch tutorial', 'wordlist generation', 'password dictionary', 'Crunch commands', 'Crunch in Termux', 'Crunch Kali NetHunter', 'password security', 'ethical hacking', 'security testing', 'password cracking', 'wordlist tools'],
    category: 'Password Security'
  }
}

export function generateToolMetadata(toolKey: string): Metadata {
  const tool = toolDescriptions[toolKey]

  if (!tool) {
    // Fallback for unknown tools
    return {
      title: `${toolKey} - Termux Learn`,
      description: `Learn ${toolKey} for penetration testing and security assessment in Hindi.`,
    }
  }

  return {
    title: `${tool.name} Tutorial in Hindi - ${tool.category} | Termux Learn`,
    description: tool.description,
    keywords: [
      ...tool.keywords,
      `${tool.name} in Hindi`,
      `${tool.name} tutorial`,
      `${tool.name} commands`,
      'Termux hacking',
      'Kali NetHunter',
      'Ethical Hacking',
      'Penetration Testing',
      'Cybersecurity'
    ],
    authors: [{ name: 'Termux Learn Team', url: 'https://termuxlearn.com/about' }],
    alternates: {
      canonical: `https://termuxlearn.com/pentesting-tools-${toolKey}`,
    },
    openGraph: {
      title: `${tool.name} Tutorial in Hindi - ${tool.category}`,
      description: tool.description,
      type: 'article',
      url: `https://termuxlearn.com/pentesting-tools-${toolKey}`,
      siteName: 'Termux Learn',
      images: [
        {
          url: 'https://termuxlearn.com/logo.png',
          width: 1200,
          height: 630,
          alt: `${tool.name} Tutorial - Termux Learn`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.name} Tutorial in Hindi`,
      description: tool.description,
      images: ['https://termuxlearn.com/logo.png'],
      creator: '@termuxlearn'
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function getPageMetadata(page: string): Metadata {
  const pageMetadata: Record<string, Metadata> = {
    'about': {
      title: 'About Us - Termux Learn | Ethical Hacking in Hindi',
      description: 'Learn about Termux Learn mission - providing free ethical hacking education in Hindi through Termux and Kali NetHunter tutorials.',
    },
    'privacy': {
      title: 'Privacy Policy - Termux Learn',
      description: 'Privacy Policy for Termux Learn - How we handle your data and protect your privacy while learning ethical hacking.',
    },
    'terms': {
      title: 'Terms & Conditions - Termux Learn',
      description: 'Terms and Conditions for using Termux Learn - Read our guidelines and policies for ethical hacking education.',
    },
    'termux': {
      title: 'Termux Complete Guide - Ethical Hacking in Hindi | Mobile Terminal',
      description: 'Complete Termux tutorial in Hindi - Learn Linux commands, package management, Python setup, Git, and shell scripting on your Android phone.',
    },
    'basic-linux-commands': {
      title: 'Basic Linux Commands Tutorial in Hindi | Termux Guide',
      description: 'Learn basic Linux commands for Termux - file operations, navigation, permissions, and system commands in Hindi with examples.',
    },
    'package-management': {
      title: 'Package Management in Termux - apt/pkg Tutorial in Hindi',
      description: 'Learn apt and pkg package management in Termux - install, update, remove packages and repositories management in Hindi.',
    },
    'python-git-scripts': {
      title: 'Python, Git & Scripts Setup in Termux - Tutorial in Hindi',
      description: 'Complete guide to setup Python, Git, and run scripts in Termux for ethical hacking and automation in Hindi.',
    },
    'kali-nethunter-installation': {
      title: 'Kali NetHunter Installation Guide - Rootless & Rooted | Hindi',
      description: 'Complete Kali NetHunter installation tutorial in Hindi - step by step guide for rooted and non-rooted Android phones.',
    },
    'kali-nethunter-kex': {
      title: 'Kali NetHunter KeX - Desktop Environment Setup in Hindi',
      description: 'Learn Kali NetHunter KeX desktop environment setup - run full Kali Linux desktop on your Android phone in Hindi.',
    },
    'pentesting-tools-labs': {
      title: 'Pentesting Tools & Labs - Complete Hacking Tools Guide | Termux',
      description: 'Complete guide to penetration testing tools for Termux and Kali NetHunter - Nmap, Metasploit, Burp Suite, Aircrack-ng and more in Hindi.',
    },
    'ethical-hacking': {
      title: 'Ethical Hacking Complete Course - Free Tutorial in Hindi',
      description: 'Learn ethical hacking from scratch in Hindi - complete course covering reconnaissance, scanning, exploitation, and post-exploitation.',
    },
    'learning': {
      title: 'Learning Resources - Ethical Hacking & Cybersecurity in Hindi',
      description: 'Collection of learning resources for ethical hacking and cybersecurity in Hindi - articles, tutorials, and practical guides.',
    },
    'linux-commands': {
      title: 'Linux Commands Reference - Complete Guide in Hindi',
      description: 'Complete Linux commands reference guide for Termux and ethical hacking - all essential commands explained in Hindi with examples.',
    },
    'networking': {
      title: 'Networking Fundamentals for Hackers - Tutorial in Hindi',
      description: 'Learn networking basics for ethical hacking - IP addresses, ports, protocols, DNS, and network security in Hindi.',
    },
    'automation-bots': {
      title: 'Automation Bots with Termux - Python Scripts in Hindi',
      description: 'Learn to create automation bots using Python in Termux - chat bots, social media bots, and task automation in Hindi.',
    },
    'programming': {
      title: 'Programming for Hacking - Python, Bash & Scripting in Hindi',
      description: 'Learn programming languages for ethical hacking - Python, Bash scripting, and automation in Termux in Hindi.',
    },
    'fun-advanced': {
      title: 'Advanced Hacking Projects - Fun & Educational in Hindi',
      description: 'Advanced ethical hacking projects and experiments - fun and educational learning activities for Termux in Hindi.',
    },
    'web-development': {
      title: 'Web Development for Hackers - HTML, CSS, JS in Hindi',
      description: 'Learn web development for ethical hacking - understand web applications, vulnerabilities, and security testing in Hindi.',
    },
  }

  return pageMetadata[page] || {
    title: `${page} - Termux Learn`,
    description: `Learn ${page} on Termux Learn - Ethical hacking tutorials in Hindi.`,
  }
}
