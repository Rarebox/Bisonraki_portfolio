// data/portfolio-data.js - Complete dynamic data for the portfolio

const portfolioData = {
  profile: {
    name: "Caglar Usta",
    title: "Web3 Full Stack Developer",
    tagline: "Building the Decentralized Future",
    profileImage: "/projects/caglardev2.jpg",
    location: "Turkey, TR",
    email: "info@birsonraki.net",
    phone: "+905461185531",
    linkedin: "https://tr.linkedin.com/in/caglar-usta-931671204",
    github: "https://github.com/rarebox",
    twitter: "https://x.com/crypterminal",
    discord: "",
  },

  hero: {
    title: "Shaping the Future of Web3 with NextDrop",
    subtitle:
      "Full-stack blockchain & AI developer focused on scalable, secure, and innovative decentralized applications – tailored for startups, brands, and creators.",
    cta1: "View Projects",
    cta2: "Contact Me",
    stats: [
      { label: "Projects Completed", value: "25+" },
      { label: "Smart Contracts", value: "50+" },
      { label: "DApps Deployed", value: "15+" },
      { label: "TVL Managed", value: "$2M+" },
    ],
  },

 about: {
  title: "About Me",
  description:
    "With over 8 years of experience in software development since 2018, I have built end-to-end solutions across Web3, e-commerce, AI, and no-code ecosystems. My core expertise lies in blockchain development — from smart contracts to full-stack DApps on all major EVM networks, as well as Solana and TON. I’ve delivered NFT marketplaces, DEXs, CEXs, staking platforms, swap forks, real estate DApps, Telegram game bots, and AI-powered Web3 products. My background also includes extensive work in WooCommerce, WordPress, and performance/security optimization.",
  skills: [
    "Smart Contract Development (Solidity, Vyper)",
    "Full-Stack Web3 DApp Development (Next.js, Tailwind, Ethers.js, Web3.js)",
    "DEX, CEX, Swap, Staking & Liquidity Solutions",
    "NFT Marketplace Design & Minting Engines",
    "AI Integrations & No-Code Automations",
    "WordPress/WooCommerce Custom Development",
    "Real Estate & Fintech DApp Architectures",
    "Multichain Development (EVM, Solana, TON)"
  ],
  experience: [
    {
      company: "Freelance / Remote Clients",
      position: "Full-Stack Web Developer",
      period: "2018 - 2020",
      description:
        "Built custom websites and e-commerce platforms using WordPress, WooCommerce, and PHP. Delivered secure, optimized solutions for SMEs and startups across various industries."
    },
    {
      company: "Blockchain Startup",
      position: "Blockchain & Smart Contract Developer",
      period: "2020 - 2021",
      description:
        "Developed and audited smart contracts on Ethereum and BSC. Designed and deployed staking systems, tokenomics models, and P2E game contracts."
    },
    {
      company: "NFT Studios",
      position: "Web3 Developer",
      period: "2021 - 2022",
      description:
        "Delivered multiple NFT marketplaces, minting systems, and Web3 dashboards. Worked on frontend/backend integration and wallet auth flows using Ethers.js & Moralis."
    },
    {
      company: "DeFi Labs",
      position: "Senior Blockchain Developer",
      period: "2022 - 2023",
      description:
        "Led development of DEX and Swap forks with custom liquidity pools. Built CEX dashboards with volume bots and implemented full-stack staking solutions."
    },
    {
      company: "NextDrop",
      position: "Founder & Web3 Innovator",
      period: "2023 - Present",
      description:
        "Building cutting-edge AI-powered blockchain apps and real estate DApps. Managing all layers of development including UI, smart contracts, on-chain/off-chain syncing, and deployment pipelines."
    }
  ]
}
,

  projects: [
  {
    id: 1,
    title: "ICO Presale Dapp (ERC20)",
    category: "DeFi",
    description:
      "A new-generation level system supporting all EVM networks (ETH, BSC, Polygon, Base...) for presales, i.e., ICO platforms",
    image: "/projects/icodapp.webp",
    technologies: ["Solidity", "React", "Web3.js", "Hardhat", "OpenZeppelin"],
    features: [
      "Level system",
      "Admin Panel",
      "Smart Contracts",
      "EVM supported",
      "Full code",
    ],
    links: {
      youtube: "https://www.youtube.com/watch?v=6p4p3qgSX7Y&t=2s",
      demo: "https://ico-ndrop.vercel.app/",
      docs: "https://github.com/", // Dikkat: Bu URL eksik, tam link olmalı
      buyNow: "https://birsonraki.lemonsqueezy.com/buy/8fee93ad-a318-4a0a-8f2f-f471d82999c4", // 👈 Buraya LemonSqueezy linkini yaz!
    },
    metrics: {
      tvl: "$2.5M",
      volume: "$50M+",
      users: "10k+",
    },
  },
    {
      id: 2,
      title: "Token Staking DApp with Referral System | Like Ethereum, BSC, Polygon",
      category: "DeFi",
      description:
        "The Referral-Based Token Staking Application supports all EVM networks and provides ready-to-use integration for your project. Smart contracts are included in the code.",
      image: "/projects/stake.webp",
      technologies: ["Solidity", "Three.js", "IPFS", "Next.js", "Ethers.js"],
      features: [
        "Referral-Based Token Staking",
        "Full EVM supported",
        "Smart contracts",
       
      ],
       links: {
        youtube: "", // Replace with actual YouTube video
        demo: "https://birsonraki.net",
        docs: "https://github.com/",
      },
      metrics: {
        nfts: "5k+",
        volume: "100 ETH",
        artists: "200+",
      },
    },
    {
      id: 3,
      title: "Blockchain Crowdfunding DApp",
      category: "DeFi",
      description:
        "Revolutionize the way projects and ideas are funded with our blockchain crowdfunding DApp. This innovative platform leverages the power of blockchain technology to create a decentralized, transparent, and secure environment for fundraising",
      image: "/projects/3.jpeg",
      technologies: ["Solidity", "Chainlink", "1inch", "React", "TypeScript"],
      features: [
        "Auto-compounding yields",
        "Multi-protocol integration",
        "Gas optimization",
        "Risk management strategies",
        "Real-time analytics",
      ],
      links: {
        youtube: "", // Replace with actual YouTube video
        demo: "https://birsonraki.net",
        docs: "https://github.com/",
      },
      metrics: {
        apy: "25% AVG",
        protocols: "12+",
        automated: "100%",
      },
    },
    {
      id: 4,
      title: "Voting Dapp (Decentralized)",
      category: "Governance",
      description:
        "Complete Web3 Dapp App, Build blockchain voting app, Web3 Project | Blockchain Voting App With Voting Smart Contract Solidity, Complete Project, voting smart contract solidity, solidity projects for beginners, solidity programming tutorial",
      image: "/projects/4.jpeg",
      technologies: ["Solidity", "React", "Snapshot", "IPFS", "Aragon"],
      features: [
        "Quadratic voting",
        "Multi-sig treasury",
        "Proposal automation",
        "Delegation system",
        "Governance analytics",
      ],
      links: {
        youtube: "", // Replace with actual YouTube video
        demo: "https://birsonraki.net",
        docs: "https://github.com/",
      },
      metrics: {
        daos: "15+",
        proposals: "500+",
        members: "5k+",
      },
    },
    {
      id: 5,
      title: "Web3 Chat Application (DApp)",
      category: "Governance",
      description:
        "Our Web3 Chat Application enables users to engage in secure and private conversations directly on the Ethereum blockchain. By utilizing decentralized technologies, we ensure that user data remains encrypted and inaccessible to third parties, offering a level of privacy and security unmatched by centralized messaging platforms",
      image: "/projects/5.jpeg",
      technologies: ["Solidity", "React", "Snapshot", "IPFS", "Aragon"],
      features: [
        "Quadratic voting",
        "Multi-sig treasury",
        "Proposal automation",
        "Delegation system",
        "Governance analytics",
      ],
      links: {
        youtube: "", // Replace with actual YouTube video
        demo: "https://birsonraki.net",
        docs: "https://github.com/",
      },
      metrics: {
        daos: "15+",
        proposals: "500+",
        members: "5k+",
      },
    },
    {
      id: 6,
      title: "Uniswap DeFI Clone",
      category: "DeFi",
      description:
        "Decentralized autonomous organization framework with advanced voting mechanisms and treasury management.",
      image: "/projects/6.jpeg",
      technologies: ["Solidity", "React", "Snapshot", "IPFS", "Aragon"],
      features: [
        "Quadratic voting",
        "Multi-sig treasury",
        "Proposal automation",
        "Delegation system",
        "Governance analytics",
      ],
      links: {
        youtube: "", // Replace with actual YouTube video
        demo: "https://birsonraki.net",
        docs: "https://github.com/",
      },
      metrics: {
        daos: "15+",
        proposals: "500+",
        members: "5k+",
      },
    },
  ],

  technologies: {
    blockchain: [
      { name: "Ethereum", icon: "FaEthereum", level: 90 },
      { name: "Solidity", icon: "SiSolidity", level: 95 },
      { name: "Web3.js", icon: "SiWeb3dotjs", level: 90 },
      { name: "Hardhat", icon: "SiHardhat", level: 85 },
      { name: "IPFS", icon: "SiIpfs", level: 80 },
      { name: "Chainlink", icon: "SiChainlink", level: 85 },
    ],
    frontend: [
      { name: "React", icon: "FaReact", level: 95 },
      { name: "Next.js", icon: "SiNextdotjs", level: 90 },
      { name: "Three.js", icon: "SiThreedotjs", level: 85 },
      { name: "TypeScript", icon: "SiTypescript", level: 80 },
      { name: "Tailwind CSS", icon: "SiTailwindcss", level: 90 },
      { name: "Redux", icon: "SiRedux", level: 85 },
    ],
    tools: [
      { name: "Git", icon: "FaGit", level: 90 },
      { name: "Docker", icon: "FaDocker", level: 80 },
      { name: "AWS", icon: "FaAws", level: 75 },
      { name: "MongoDB", icon: "SiMongodb", level: 85 },
      { name: "GraphQL", icon: "SiGraphql", level: 80 },
      { name: "Jest", icon: "SiJest", level: 85 },
    ],
  },

  faq: [
    {
      question: "What blockchain networks do you work with?",
      answer:
        "I primarily work with Ethereum, Polygon, BSC, and Solana. I have experience with both EVM-compatible chains and layer-2 solutions. My expertise allows me to adapt to any blockchain network based on project requirements.",
    },
    {
      question: "How do you ensure smart contract security?",
      answer:
        "I follow best practices including thorough testing with Hardhat/Foundry, code audits, formal verification where possible, and adherence to OpenZeppelin standards. All my contracts undergo extensive testing on testnets before mainnet deployment.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, I offer comprehensive post-launch support including monitoring, bug fixes, feature updates, and emergency response. I believe in long-term partnerships with my clients and ensure their projects remain secure and up-to-date.",
    },
    {
      question: "What's your typical project timeline?",
      answer:
        "Timeline varies based on complexity. Simple DApps typically take 4-6 weeks, while complex DeFi protocols can take 3-6 months. This includes development, testing, auditing, and deployment phases.",
    },
    {
      question: "How do you handle gas optimization?",
      answer:
        "I employ various optimization techniques including storage layout optimization, function modifiers, batch processing, and assembly optimization where necessary. Gas efficiency is always a priority in my development process.",
    },
  ],

  contact: {
    title: "Let's Build Something Amazing",
    description:
      "I'm always open to discussing new projects, creative ideas, or opportunities to create something great together.",
    form: {
      nameLabel: "Your Name",
      emailLabel: "Your Email",
      subjectLabel: "Project Type",
      messageLabel: "Tell me about your project",
      submitText: "Send Message",
      subjects: [
        "DeFi Protocol",
        "NFT Marketplace",
        "DAO Platform",
        "DApp Development",
        "Smart Contract Audit",
        "Other",
      ],
    },
    social: {
      discord: { label: "Discord", value: "" },
      telegram: { label: "Telegram", value: "@CapellaGPT" },
      calendly: {
        label: "Schedule Call",
        value: "https://calendly.com/birsonraki-info/30min",
      },
    },
  },

  footer: {
    copyright: "© 2025 Caglar Usta. All rights reserved.",
    links: [
     
    ],
  },

  theme: {
    colors: {
      primary: "#6366f1", // Indigo
      secondary: "#14b8a6", // Teal
      accent: "#f59e0b", // Amber
      dark: "#0f172a", // Slate dark
      light: "#f8fafc", // Slate light
    },
    gradients: {
      primary: "linear-gradient(135deg, #6366f1 0%, #14b8a6 100%)",
      secondary: "linear-gradient(135deg, #14b8a6 0%, #f59e0b 100%)",
      dark: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    },
  },
};

export default portfolioData;
