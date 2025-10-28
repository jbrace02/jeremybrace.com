import './globals.css'

export const metadata = {
  title: 'Jeremy Brace - Full-Stack Developer × AI × Blockchain',
  description: 'Building at the intersection of AI and blockchain. Bitcoin Ordinals pioneer (550+ inscriptions). Creator of Verafy (AI × Blockchain research lab) and ShopReFit (decentralized marketplace). Integrated autonomous AI agents (Eliza framework) for social engagement. Specialized in on-chain innovation and AI consensus mechanisms.',
  keywords: 'Next.js, React, Blockchain, Web3, Solana, Bitcoin, Ordinals, AI, LLMs, Eliza, AI Agents, Full-Stack Developer, JavaScript, TypeScript, Smart Contracts, Rust, Anchor, Multi-Sig',
  openGraph: {
    title: 'Jeremy Brace - Full-Stack Developer × AI × Blockchain',
    description: 'Bitcoin Ordinals pioneer. Creator of Verafy and ShopReFit. Building at the intersection of AI and blockchain.',
    url: 'https://jeremybrace.vercel.app',
    siteName: 'Jeremy Brace Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeremy Brace - Full-Stack Developer × AI × Blockchain',
    description: 'Bitcoin Ordinals pioneer. Creator of Verafy and ShopReFit. Building at the intersection of AI and blockchain.',
    creator: '@JeremyBrace',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
