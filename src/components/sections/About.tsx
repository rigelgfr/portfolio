export function AboutSection() {
  return (
    <section id="about" className="flex items-center">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-white">Hello, I'm John Portfolio</h1>
        <p className="text-xl text-gray-300 mb-6">
          A passionate frontend developer creating beautiful and functional web experiences
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-700 bg-gray-800 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-700"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}