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
  ]

  const personalProjects = [
    {
      title: 'On-Chain Casino Game',
      techStack: ['Solana', 'Rust', 'IQ Tech', 'React', 'Multi-Sig'],
      description:
        'Fully on-chain heads-or-tails betting game built with IQ Tech. Handles wallet connection, bet placement, automated payouts, and secure vault management with multi-signature custody. All game logic and financial transactions execute on-chain for transparency and fairness.',
      achievements: [
        'Multi-sig vault architecture for secure fund custody',
        'On-chain randomness and provably fair game logic',
        'Automated payout system handling real SOL transactions',
        'Complete financial engineering (betting, odds, treasury management)',
      ],
      github: null,
      live: null,
      status: 'Devnet (Personal Project)',
    },
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
