export type Project = {
  name: string,
  description: string,
  tech: string[],
  live: string,
  github: string,
};

export const projects: Project[] = [
  {
    name: "Weather Information Web App",
    description:
      "A responsive weather dashboard with real-time data fetching and user-friendly error handling.",
    tech: ["JavaScript", "Tailwind CSS", "REST API"],
    live: "#",
    github: "#",
  },
  {
    name: "Student Course Management System",
    description:
      "A modular Angular single-page application for managing courses and student enrollments.",
    tech: ["Angular", "TypeScript", "Tailwind CSS"],
    live: "#",
    github: "#",
  },
];
