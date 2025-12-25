export default function HighlightProjectCard() {
  return (
    <div className="bg-neutral-900 rounded-xl p-8 flex flex-col gap-4">
      <h2 className="text-2xl font-medium">SkillBridge</h2>

      <p className="text-neutral-400">
        A frontend-driven learning roadmap platform built with a real product
        mindset.
      </p>

      <ul className="text-sm text-neutral-400 list-disc pl-4 space-y-1">
        <li>Structured learning paths for Frontend, Backend, and Full-Stack</li>
        <li>Clear step-level progress tracking</li>
        <li>Persistent user notes tied to each roadmap step</li>
        <li>Responsive UI built with React and Tailwind CSS</li>
        <li>AI-assisted explanations integrated at the step level</li>
      </ul>

      <div className="flex flex-wrap gap-2 text-xs text-neutral-500 pt-2">
        <span>React</span>
        <span>Tailwind CSS</span>
        <span>REST APIs</span>
        <span>Node.js</span>
        <span>MongoDB</span>
      </div>

      <div className="flex gap-4 pt-4 text-sm">
        <a
          href="https://skillbridge-silk.vercel.app"
          target="_blank"
          className="underline"
        >
          Live
        </a>
        <a
          href="https://github.com/18mukeshram/skillbridge"
          target="_blank"
          className="underline"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
