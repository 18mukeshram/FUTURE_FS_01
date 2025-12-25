export type Project = {
  name: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
  image: string;
};

export const projects: Project[] = [
  {
    name: "Weather Information Web App",
    description: "...",
    tech: ["JavaScript", "Tailwind CSS", "REST API"],
    live: "#",
    github: "#",
    image: "/weather-app.png",
  },
  {
    name: "Student Course Management System",
    description: "...",
    tech: ["Angular", "TypeScript", "Tailwind CSS"],
    live: "#",
    github: "#",
    image: "/student-course.png",
  },
];
