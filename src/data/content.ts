export const profile = {
  name: 'Ishaan Taneja',
  title: 'SOC Analyst',
  subtitle: 'CompTIA Security+ Certified | Ex-Software Engineer at Bank of America',
  hook: 'A builder who learned how systems are made, then chose to protect them.',
  links: {
    linkedin: 'https://www.linkedin.com/in/ishaantaneja',
    tryhackme: 'https://tryhackme.com/p/ishaan.taneja',
    email: 'mailto:tanejaishaan3@gmail.com',
    emailLabel: 'tanejaishaan3@gmail.com',
  },
}

export const story = [
  {
    phase: '01',
    title: 'Engineering at scale',
    body: 'At Bank of America I shipped backend systems and an Unreal Engine virtual banking prototype — work that earned Global Recognition. Building taught me how systems fail when they are not designed to be defended.',
  },
  {
    phase: '02',
    title: 'The pivot',
    body: 'During a full-stack internship at EazyByts I watched AI collapse the cost of building. The hard problem was no longer shipping features — it was securing what ships.',
  },
  {
    phase: '03',
    title: 'Defense first',
    body: 'CompTIA Security+, TryHackMe SOC L1 (Top 7%), a hybrid SOC home lab, and Codingal SME work to stay sharp while hunting the next seat.',
  },
  {
    phase: '04',
    title: 'Trajectory',
    body: 'Near-term: SOC Analyst. Long-term: red team and security research — learn the attacker by watching first.',
  },
]

export const experience = [
  {
    role: 'Mathematics SME',
    org: 'Codingal',
    dates: 'Jan 2025 – Present',
    location: 'Remote',
    points: [
      'Mentored 100+ students across mathematics and problem-solving tracks.',
      'Sustained a 4.8/5 teaching rating while balancing SOC upskilling.',
    ],
  },
  {
    role: 'Full-stack Developer Intern',
    org: 'EazyByts',
    dates: 'Sep 2025 – Oct 2025',
    location: 'Remote',
    points: [
      'Built a MERN fintech simulator and a high-concurrency event platform serving ~5k users.',
      'Delivered a JWT-backed CMS portfolio stack; reinforced that secure design is the scarce skill.',
    ],
  },
  {
    role: 'Sr. Tech. Associate / Backend',
    org: 'Bank of America',
    dates: 'Jun 2022 – Apr 2023',
    location: 'Hyderabad',
    points: [
      'Designed FastAPI services and contributed to the GBREG banking portal.',
      'Built an Unreal Engine virtual banking prototype — Global Recognition (Innovation).',
      'Produced OWASP-aware API documentation for internal consumers.',
    ],
  },
  {
    role: 'Teacher Assistant',
    org: 'Coding Ninjas',
    dates: 'Sep 2021 – Jan 2022',
    location: 'Remote',
    points: [
      'Supported 200+ learners in DSA with Python and SQL.',
      'Maintained a 4.7/5 learner rating.',
    ],
  },
]

export const projects = [
  {
    title: 'SOC Home Lab — Threat Detection & Adversary Emulation',
    date: 'Apr 2026',
    tags: ['Wazuh', 'Sysmon', 'Metasploit', 'Docker', 'WSL2'],
    summary:
      'Hybrid SOC lab: Wazuh SIEM on Docker/WSL2, Windows 11 endpoints with Sysmon, Metasploit SYN flood and enumeration sims for alerting, triage, and playbook practice.',
  },
  {
    title: 'Mastercard Cybersecurity Analyst Job Simulation — Social Engineering',
    date: 'Mar 2026',
    tags: ['Phishing', 'Risk', 'Awareness'],
    summary:
      'Phishing simulations and risk analysis — ~75% risk exposure in HR vs ~38% in Marketing — plus training decks for awareness uplift.',
  },
  {
    title: 'TryHackMe Path — SOC Analyst L1',
    date: 'Jan 2026+',
    tags: ['Wireshark', 'IOC', 'Alert Triage'],
    summary:
      'Top 7% path ranking. 50+ hours across Wireshark, alert monitoring, case reports, phishing analysis, and IOC hunting.',
  },
]

export const skillGroups = [
  {
    label: 'SIEM',
    items: ['Splunk', 'Wazuh', 'Alert triage', 'Log analysis'],
  },
  {
    label: 'EDR',
    items: ['CrowdStrike', 'Sysmon', 'Windows', 'Linux'],
  },
  {
    label: 'Network',
    items: [
      'TCP/IP',
      'DNS',
      'HTTP/S',
      'OSI',
      'DHCP',
      'SSH',
      'AD',
      'LDAP',
      'Routing',
      'NAT',
      'Firewalls',
      'ACLs',
      'VPNs',
      'Wireshark',
    ],
  },
  {
    label: 'Threat Intel',
    items: [
      'VirusTotal',
      'AbuseIPDB',
      'Any.Run',
      'Hybrid-Analysis',
      'IOC hunting',
      'MITRE ATT&CK',
      'Cyber Kill Chain',
    ],
  },
  {
    label: 'IR',
    items: ['Triaging', 'Investigation', 'Escalation', 'RCA', 'Documentation'],
  },
  {
    label: 'Frameworks',
    items: ['NIST', 'ISO 27001', 'MITRE ATT&CK', 'OWASP Top 10'],
  },
  {
    label: 'Languages',
    items: ['Python', 'SQL', 'Bash', 'PowerShell', 'HTML'],
  },
  {
    label: 'OS & Cloud',
    items: [
      'Windows',
      'Linux',
      'GCP (Compute Engine, Pub/Sub, Cloud Run, Cloud SQL)',
      'VirtualBox',
      'WSL2',
      'Docker',
    ],
  },
]

export type Cert = {
  name: string
  detail: string
  badge?: string
  href?: string
  featured?: boolean
}

export const certs: Cert[] = [
  {
    name: 'CompTIA Security+',
    detail: 'Verification: 5f0359e88964428cab9d5d0fc7e8e3fc',
    badge: 'certs/comptia-security-plus-badge.png',
    featured: true,
  },
  {
    name: 'Forage Cybersecurity Job Simulation',
    detail: 'Mastercard · Completed Mar 2026',
    href: 'certs/forage-cybersecurity-job-simulation.pdf',
  },
  {
    name: 'Programming with DSA',
    detail: 'IBM',
  },
  {
    name: 'Linux Unhatched',
    detail: 'Cisco · ID: d8e9da29',
  },
  {
    name: 'Global Recognition | Innovation',
    detail: 'Bank of America — Unreal Engine virtual banking prototype',
  },
]

export const education = {
  degree: 'B.Tech Computer Science & Engineering',
  school: 'Manipal Institute of Technology',
  dates: 'Aug 2018 – May 2022',
}

export const leadership = {
  title: 'Head of PR — Manipal Information Security Team',
  detail: 'MIT Manipal · AY 2020-21',
  image: 'certs/mist-head-of-pr-certificate.png',
}

export const volunteering = [
  'Head of PR — Manipal Information Security Team (AY 2020-21)',
  'Google Cloud Skills Boost labs & badges',
]

export const nav = [
  { id: 'story', label: 'Story' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certs', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
]

/** Resolve a public asset path with Vite base (GitHub Pages project site). */
export function assetUrl(path: string) {
  const base = import.meta.env.BASE_URL
  const clean = path.replace(/^\//, '')
  return `${base}${clean}`
}
