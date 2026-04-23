import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RoadmapSection from "@/components/RoadmapSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const TubesBackground = lazy(() => import("@/components/TubesBackground"));

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Suspense fallback={null}>
        <TubesBackground className="fixed inset-0 z-0" />
      </Suspense>
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <RoadmapSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
