export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-2">Cozadiadora</h3>
          <p className="text-gray-400">Jakarta, Indonesia</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">About Me</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              B.Tech in Electronics and Computer Engineering from VIT Chennai
            </p>
            <p className="text-gray-400 leading-relaxed">
              I'm passionate about technology and engineering. My academic journey has equipped me with strong
              fundamentals in electronics, computer systems, and software development. Active member of technical clubs
              at VIT Chennai, contributing to innovation and emerging technologies.
            </p>
          </div>

          <div>
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-white">The most recent brands I happily worked with</h3>
              <div className="space-y-4">
                {[
                  "VIT Chennai Technical Clubs",
                  "Active in hackathons and competitions",
                  "Open-source contributor",
                  "Tech enthusiast & innovator",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
