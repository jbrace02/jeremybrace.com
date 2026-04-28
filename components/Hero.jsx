'use client'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center fade-in">
        {/* Profile Photo - Add your photo to /public/profile.jpg */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-700 hover:border-primary transition-colors">
            <img
              src="/profile.jpg"
              alt="Jeremy Brace"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.display = 'none' }}
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          Jeremy Brace
        </h1>

        {/* Title */}
        <h2 className="text-xl md:text-2xl text-gray-400 mb-8 font-light">
          Full-Stack Developer
        </h2>

        {/* Bio */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Full-stack developer building AI × blockchain products. Former Zoom support engineer and community builder (2,500+ users).
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/Brace_Jeremy_Resume.pdf"
            download="Brace_Jeremy_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-lg font-medium w-full sm:w-auto text-center"
          >
            Download Resume
          </a>
          <a
            href="mailto:jeremy@shoprefit.com"
            className="px-8 py-4 border border-gray-700 hover:border-gray-500 text-white rounded-lg font-medium w-full sm:w-auto text-center"
          >
            Get in Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center items-center mt-12 text-gray-400 ml-3">
          <a
            href="https://github.com/jbrace02"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="https://x.com/JeremyBrace"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="X (Twitter)"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
