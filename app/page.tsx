import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import EducationPreview from "@/components/sections/EducationPreview";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <AboutPreview />
      <EducationPreview />
      <ProjectsPreview />
      <ContactCTA />
    </div>
  );
}