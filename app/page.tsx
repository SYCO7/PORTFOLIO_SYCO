import About from "./components/About";
import Certifications from "./components/Certifications";
import ContactSection from "./components/ContactSection";
import FeaturedBuild from "./components/FeaturedBuild";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MissionStatement from "./components/MissionStatement";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import TerminalCommandSection from "./components/TerminalCommandSection";
import ToolsProficiencyGrid from "./components/ToolsProficiencyGrid";
import CyberBackdropClient from "@/components/CyberBackdropClient";

export default async function Home() {
  return (
    <div className="relative overflow-hidden">
      <CyberBackdropClient />
      <div className="pointer-events-none fixed inset-0 z-1 animated-grid-bg opacity-[0.14]" />
      <Navbar />
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-16 pt-28 md:px-10">
        <Hero />
        <TerminalCommandSection />
        <About />
        <Skills />
        <ToolsProficiencyGrid />
        <FeaturedBuild />
        <MissionStatement />
        <Certifications />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
