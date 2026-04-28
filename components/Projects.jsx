import ProjectCard from './ProjectCard'

export default function Projects() {
  const mainProjects = [
    {
      title: 'Verafy',
      techStack: ['Next.js', 'React', 'Solana', 'AI/LLMs', 'Eliza', 'TypeScript'],
      description:
        'AI × Blockchain research lab and innovation platform. Built Swarm Explorer that queries 250+ LLMs simultaneously with AI consensus mechanism and on-chain verification. Integrated autonomous AI agents (Eliza framework) for community engagement across X and Telegram. Decentralized fact-checking with validator network, staking rewards, and transparent AI model performance tracking.',
      achievements: [
        'Integrated 250+ AI models (Claude, GPT, Gemini, Grok, etc.) for consensus',
        'Built and managed community from 0 → 2,500 Telegram users as lead developer and community manager',
        'Deployed autonomous AI agents (Eliza) for social engagement on X and Telegram',
        'Built validator network with SOL-based credit system and staking',
        'Partnerships with Aerō, Paladin, Phase Labs, Jito, and DoubleZero',
      ],
      github: null,
      live: 'https://www.verafy.ai',
      status: 'Live - Testnet',
    },
    {
      title: 'ShopReFit',
      techStack: ['Next.js 15', 'Solana', 'Rust', 'Eliza', 'Supabase', 'Tailwind'],
      description:
        'Production-ready decentralized marketplace with blockchain-backed escrow and NFT product passports. Built smart contract escrow system, implemented compressed NFTs, and integrated multi-currency support (USDC, SOL, credit cards). Deployed autonomous AI agents (Eliza framework) for customer engagement on X and Telegram.',
      achievements: [
        'Optimized NFT minting costs by 99.7% (from $3 → $0.001)',
        'Built trustless escrow handling real financial transactions',
        'Integrated OpenBook DEX for orderbook functionality',
        'Autonomous AI agents for community engagement and support',
      ],
      github: null,
      live: 'https://www.shoprefit.com',
      status: 'Live in Production',
    },
    {
      title: 'InferPrices',
      techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Supabase', 'OpenRouter', 'LiteLLM'],
      description:
        'CoinGecko for AI inference. A live comparison table normalizing 400+ models across 60+ providers to dollars per million tokens. Merges OpenRouter and LiteLLM pricing, refreshes every 5 minutes via ISR, and ships per-model SEO pages plus a public API for programmatic queries.',
      achievements: [
        '400+ models and 60+ providers tracked, normalized to $/M tokens',
        'Blended pricing (3:1 input/output ratio) for fair cost comparison',
        'Daily historical price collection via Supabase + Vercel Cron',
        'Public REST endpoint and SEO-friendly per-model pages',
      ],
      github: null,
      live: 'https://infer-ten.vercel.app',
      status: 'Live in Production',
    },
  ]

  const personalProjects = [
    {
      title: 'Bitcoin Ordinals Pioneer',
      techStack: ['Bitcoin', 'Ordinals', 'Digital Artifacts'],
      description:
        'Early adopter and creator in the Bitcoin Ordinals ecosystem. Inscribed 550+ ordinals with 40+ inscriptions sub-10k, participating in the pioneering wave of Bitcoin digital artifacts and on-chain art.',
      achievements: [
        '550+ total inscriptions created',
        '40+ sub-10k inscriptions (early adopter status)',
        'Contributed to Bitcoin digital artifact ecosystem growth',
        'Expertise in ordinal theory and inscription mechanics',
      ],
      github: null,
      live: null,
      status: 'Bitcoin Mainnet',
    },
    {
      title: 'IQ6900 Explorer',
      techStack: ['Next.js 15', 'React 19', 'PostgreSQL', 'Solana', 'TypeScript'],
      description:
        'First production-ready explorer for IQ6900 inscriptions on Solana. Built comprehensive indexing system with real-time discovery, ASCII art decompression, and SPL-2.0 token support. Indexed 500,000+ inscriptions with advanced search and filtering.',
      achievements: [
        'Indexed 500,000+ on-chain inscriptions',
        'Built custom ASCII art decoder for IQ6900 Base7/RLE compression',
        'Real-time inscription discovery and monitoring',
        'Optimized database architecture with connection pooling',
      ],
      github: 'https://github.com/v3ra-ai/v3raExplorer',
      live: null,
      status: 'Open Source',
    },
    {
      title: 'v3ra Social',
      techStack: ['Rust', 'Anchor', 'Solana', 'React 19', 'Vite'],
      description:
        'On-chain social media platform built on Solana. Twitter-like experience where all posts are stored as on-chain PDAs, ensuring censorship resistance and data permanence. Built with Anchor framework and React frontend.',
      achievements: [
        'Fully on-chain social media (280 char limit)',
        'PDA-based tweet storage with timestamp-based addressing',
        'Wallet-based authentication (no traditional login)',
        'Deployed smart contract on Solana mainnet',
      ],
      github: 'https://github.com/v3ra-ai/v3rasocial',
      live: null,
      status: 'Solana Mainnet',
    },
    {
      title: 'Orioles Moneyball',
      techStack: ['Next.js 15', 'React', 'Tailwind CSS', 'Papa Parse'],
      description:
        "Data-driven coaching tool I built for my son's 11/12U baseball team. Imports GameChanger CSV exports, optimizes pitcher deployment with rest-day calculations and OPAA rule validation, and generates batting orders using youth-weighted formulas balancing OBP, contact rate, and speed.",
      achievements: [
        'Full OPAA rule validation (85 pitch daily max, 1–4 day rest by pitch count bracket)',
        'Auto-grades pitchers (ACE / STARTER / RELIEVER) using strike%, K/BB, WHIP, GO/AO',
        'One-click batting order optimizer with sandwich strategy and youth-weighted scoring',
        'Imports and parses GameChanger CSV exports',
      ],
      github: null,
      live: null,
      status: 'Personal Project',
    },
  ]

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Projects */}
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">
          Featured Work
        </h2>
        <div className="space-y-12 mb-32">
          {mainProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Personal Projects */}
        <h3 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Personal Projects
        </h3>
        <div className="space-y-12">
          {personalProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
