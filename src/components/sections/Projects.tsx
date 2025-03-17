export function ProjectsSection() {
    return (
      <section id="projects" className="min-h-screen py-16">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-muted/50 rounded-lg overflow-hidden">
              <div className="aspect-video bg-muted" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Project {item}</h3>
                <p className="text-muted-foreground mb-4">
                  A brief description of this amazing project and the technologies used.
                </p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-xs font-medium text-primary-foreground"
                  >
                    View Project
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-8 items-center justify-center rounded-md border border-input px-4 text-xs font-medium"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }