import { ArchitectureSection } from "@/components/ArchitectureSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionTheme } from "@/components/SectionThemes";

const ArchitecturePage = () => {
  return (
    <>
      <Header />
      <div className="pt-16 min-h-screen">
        <SectionTheme theme="carbon" sectionId="architecture">
          <ArchitectureSection />
        </SectionTheme>
        <Footer />
      </div>
    </>
  );
};

export default ArchitecturePage;
