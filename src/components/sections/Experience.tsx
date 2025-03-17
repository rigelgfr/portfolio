export function ExperienceSection() {
    const experiences = [
      {
        title: "Frontend Developer",
        company: "Tech Company",
        period: "2023 - Present",
        description: "Developed and maintained modern web applications using React, Next.js and TypeScript. Implemented responsive designs and improved performance."
      },
      {
        title: "Web Developer Intern",
        company: "Startup Inc.",
        period: "2022 - 2023",
        description: "Assisted in building user interfaces, learned industry best practices, and collaborated with senior developers on various projects."
      }
    ]
  
    return (
      <section id="experience" className="min-h-screen py-16">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-10 border-l-2 border-gray-700">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
              <h3 className="text-2xl font-bold">{exp.title}</h3>
              <div className="flex items-center text-gray-400 mb-2">
                <span>{exp.company}</span>
                <span className="mx-2">•</span>
                <span>{exp.period}</span>
              </div>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }