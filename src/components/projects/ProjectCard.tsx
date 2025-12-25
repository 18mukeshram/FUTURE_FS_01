import type { Project } from "../../data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="bg-neutral-900 rounded-lg p-6 flex flex-col gap-4">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-40 object-cover rounded-md mb-4 border border-neutral-700"
      />

      <h3 className="text-xl font-medium">{project.name}</h3>

      <p className="text-sm text-neutral-400">{project.description}</p>

      <div className="flex flex-wrap gap-2 text-xs text-neutral-500">
        {project.tech.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      <div className="flex gap-4 text-sm pt-2">
        <a href={project.live} className="underline">
          Live
        </a>
        <a href={project.github} className="underline">
          GitHub
        </a>
      </div>
    </div>
  );
}
