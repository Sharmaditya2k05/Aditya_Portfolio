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
        <div className="h-20 bg-gradient-to-b from-[#0C0C0C] to-bg" />
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
