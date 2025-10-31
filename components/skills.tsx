export default function Skills() {
  const skills = [
    { name: "Python", level: 90, category: "Language", icon: "🐍" },
    { name: "SQL", level: 85, category: "Database", icon: "🗄️" },
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-white">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill) => (
            <div key={skill.name} className="group">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
                    <p className="text-sm text-gray-400 mt-2">{skill.category}</p>
                  </div>
                  <span className="text-4xl">{skill.icon}</span>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-teal-400 font-semibold">{skill.level}% Proficiency</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-teal-500 to-teal-400 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>

                <p className="text-sm text-gray-400">Industry standard expertise</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technical Competencies */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-white">Other Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "JavaScript",
              "Git",
              "Linux",
              "Microcontrollers",
              "Circuit Design",
              "Algorithms",
              "Statistics",
              "Debugging",
            ].map((item) => (
              <div
                key={item}
                className="p-4 bg-gray-900/50 border border-gray-700 rounded-lg text-center hover:bg-gray-800 hover:border-teal-500/50 transition-all duration-300 cursor-pointer"
              >
                <p className="font-medium text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
