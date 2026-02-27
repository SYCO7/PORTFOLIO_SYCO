import About from "./components/About";
import FeaturedBuild from "./components/FeaturedBuild";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import GitHubStatusPanel from "./components/GitHubStatusPanel";
import MissionStatement from "./components/MissionStatement";
import Navbar from "./components/Navbar";
import OperatorStatusBar from "./components/OperatorStatusBar";
import CyberBackdropClient from "@/components/CyberBackdropClient";

type SystemStatusData = {
  status: string;
  focus: string[];
  lastUpdate: string;
};

export default async function Home() {
  const systemData = (await import("@/data/system.json")).default as SystemStatusData;

  return (
    <div className="relative overflow-hidden">
      <CyberBackdropClient />
      <Navbar />
      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 pb-16 pt-28 md:px-10">
        <Hero />
        <OperatorStatusBar systemData={systemData} />
        <GitHubStatusPanel />
        <About />
        <MissionStatement />
        <FeaturedBuild />
      </main>
      <Footer />
    </div>
  );
}
