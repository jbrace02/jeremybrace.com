export default function Skills() {
  const skills = [
    'Next.js 15',
    'React 19',
    'TypeScript',
    'AI/LLMs',
    'Claude (Anthropic Certified)',
    'Eliza Agents',
    'Solana',
    'Bitcoin',
    'Smart Contracts',
    'Rust',
    'Anchor',
    'PostgreSQL',
    'Multi-Sig',
  ]

  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Technologies
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-6 py-4 bg-surface border border-gray-800 hover:border-primary rounded-lg text-center font-medium transition-all hover:scale-105"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
