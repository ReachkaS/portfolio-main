import HeroSection from "./components/heroSection";
import NavBar from "./components/navbar";
import AboutSection from "./components/aboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Contact from "./components/Contact";
export default function Home() {
  return (
      <main className="flex flex-col min-h-screen bg-[#D8D2C2]">
        <div className="container mx-auto px-12 py-4">
          <HeroSection />           
          <NavBar />
          <AboutSection />
          <ProjectsSection />        
        </div>
        <Contact/>
      </main>
  );
}
