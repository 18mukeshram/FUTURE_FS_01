import { techStack } from "../../data/techStack";

export default function TechStackSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-semibold mb-12">Tech Stack</h2>

      <div className="grid gap-10 md:grid-cols-2">
        {Object.entries(techStack).map(([group, items]) => (
          <div key={group}>
            <h3 className="mb-3 font-medium text-neutral-200">{group}</h3>

            <div className="flex flex-wrap gap-2 text-sm text-neutral-400">
              {items.map((item) => (
                <span key={item} className="px-3 py-1 bg-neutral-900 rounded">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
