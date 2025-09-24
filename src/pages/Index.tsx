import { HeroSection } from "@/components/HeroSection";
import { VisionSection } from "@/components/VisionSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";
import { CursorFollower } from "@/components/CursorFollower";
import { ScrollNavigation } from "@/components/ScrollNavigation";
import { SectionTheme, DataStream } from "@/components/SectionThemes";

const Index = () => {
  return (
    <>
      <CursorFollower />
      <ScrollNavigation />
      <div className="min-h-screen text-foreground">
        <SectionTheme theme="hero" sectionId="hero">
          <div id="hero">
            <HeroSection />
          </div>
          <DataStream isVisible={true} theme="steel" />
        </SectionTheme>

        <SectionTheme theme="steel" sectionId="vision">
          <div id="vision">
            <VisionSection />
          </div>
          <DataStream isVisible={true} theme="steel" />
        </SectionTheme>

        <SectionTheme theme="carbon" sectionId="architecture">
          <div id="architecture">
            <ArchitectureSection />
          </div>
          <DataStream isVisible={true} theme="carbon" />
        </SectionTheme>

        <SectionTheme theme="quantum" sectionId="features">
          <div id="features">
            <FeaturesSection />
          </div>
          <DataStream isVisible={true} theme="quantum" />
        </SectionTheme>

        <SectionTheme theme="matrix" sectionId="comparison">
          <div id="comparison">
            <ComparisonSection />
          </div>
          <DataStream isVisible={true} theme="matrix" />
        </SectionTheme>

        <SectionTheme theme="neural" sectionId="waitlist">
          <div id="waitlist">
            <WaitlistSection />
          </div>
          <DataStream isVisible={true} theme="neural" />
        </SectionTheme>

        <Footer />
      </div>
    </>
  );
};

export default Index;
