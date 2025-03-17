export function SkillsSection() {
    const skills = {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
      backend: ["Node.js", "Express", "REST APIs"],
      tools: ["Git", "VS Code", "Figma", "npm/yarn"]
    }
  
    return (
      <section id="skills" className="min-h-screen py-16">
        <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Frontend</h3>
            <ul className="space-y-2">
              {skills.frontend.map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Backend</h3>
            <ul className="space-y-2">
              {skills.backend.map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Tools & Software</h3>
            <ul className="space-y-2">
              {skills.tools.map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    )
  }