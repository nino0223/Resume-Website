import FloatingMenu from "./components/FloatingMenu";
import AboutSection from "./sections/AboutSection";
import HomeSection from "./sections/HomeSection";
import PortfolioSection from "./sections/PortfolioSection";
import Skills from "./sections/SkillsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <FloatingMenu />
      <main>
        <HomeSection />
        <AboutSection />
        <Skills />
        <PortfolioSection />
        {/* Add other sections like ContactSection here */}
      </main>
    </div>
  );
}
