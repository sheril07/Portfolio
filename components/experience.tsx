export default function Experience() {
  const experiences = [
    {
      year: "2024",
      title: "Technical Club Member",
      organization: "VIT Chennai",
      description: "Active member contributing to technical initiatives, workshops, and innovation projects",
    },
    {
      year: "2023-2024",
      title: "Engineering Student",
      organization: "VIT Chennai",
      description: "Pursuing B.Tech in Electronics and Computer Engineering with focus on practical applications",
    },
    {
      year: "2023",
      title: "Hackathon Participant",
      organization: "VIT Chennai",
      description: "Participated in multiple hackathons and coding competitions, developing problem-solving skills",
    },
  ]

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-white">Experience & Activities</h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-teal-500/30 hover:border-teal-500 transition-colors pb-12 last:pb-0 group"
            >
              <div className="absolute left-[-9px] top-0 w-5 h-5 bg-teal-500 rounded-full border-4 border-black group-hover:scale-125 transition-transform" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-teal-400 font-semibold mb-3">{exp.organization}</p>
                  <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
                <span className="text-sm font-semibold text-gray-500 flex-shrink-0 bg-gray-900/50 px-3 py-1 rounded-full">
                  {exp.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
