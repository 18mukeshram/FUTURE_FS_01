import HeroSection from "./components/hero/HeroSection";
import ProjectsSection from "./components/projects/ProjectsSection";

export default function App() {
  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen">
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}
