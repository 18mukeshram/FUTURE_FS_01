import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-semibold mb-12">Projects</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
