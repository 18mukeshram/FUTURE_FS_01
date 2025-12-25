import HeroSection from "./components/hero/HeroSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import TechStackSection from "./components/tech/TechStackSection";
import AboutSection from "./components/about/AboutSection";

export default function App() {
  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <TechStackSection />
      <AboutSection />
    </div>
  );
}
