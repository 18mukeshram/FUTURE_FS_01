export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 grid gap-16 md:grid-cols-2">
      {/* Left: Identity */}
      <div className="flex flex-col justify-center gap-6">
        <h1 className="text-4xl font-semibold leading-tight">
          Bellamkonda Sai Mukesh Ram
        </h1>

        <p className="text-neutral-400 max-w-md">
          I build clean, responsive, and product-focused web interfaces using
          React, with strong attention to structure, usability, and real-world
          constraints.
        </p>

        <div className="flex gap-4">
          <a
            href="/resume.pdf"
            className="px-6 py-3 bg-white text-black rounded-md"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="px-6 py-3 border border-neutral-700 rounded-md"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Right: Reserved for highlight project */}
      <div className="bg-neutral-900 rounded-xl p-8 flex items-center justify-center text-neutral-500">
        Highlight project will live here
      </div>
    </section>
  );
}
