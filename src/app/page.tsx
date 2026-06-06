import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  HeroSection,
  MarqueeSection,
  AboutSection,
  ExperienceSection,
  SkillsDashboard,
  ProjectsShowcase,
  CertificationsSection,
  EducationSection,
  ContactFormSection,
} from "@/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <div className="h-2 bg-gradient-to-b from-[#0C0C0C] to-[#060909]" />
        <AboutSection />
        <ExperienceSection />
        <SkillsDashboard />
        <ProjectsShowcase />
        <CertificationsSection />
        <EducationSection />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
