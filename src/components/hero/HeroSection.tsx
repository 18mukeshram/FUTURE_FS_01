import HighlightProjectCard from "./HighlightProjectCard";

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 grid gap-16 md:grid-cols-2">
      {/* Left: Identity */}
      <div className="flex flex-col justify-center gap-6">
        <div className="flex items-center gap-4">
          <img
            src="/profile.jpg"
            alt="Mukesh Ram"
            className="w-20 h-20 rounded-lg object-cover border border-neutral-700"
          />

          <h1 className="text-4xl font-semibold leading-tight">
            Bellamkonda Sai Mukesh Ram
          </h1>
        </div>

        <p className="text-neutral-400 max-w-md">
          I build clean, responsive, and product-focused full stack web
          applications using React on the frontend and Node.js on the backend,
          with strong attention to structure, usability, and real-world
          constraints.
        </p>

        <div className="flex gap-4">
          <a
            href="/Mukesh_ram_resume.pdf"
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

      {/* Right: Highlight Project */}
      <HighlightProjectCard />
    </section>
  );
}
