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
          <DataStream isVisible={true} theme="blue" />
        </SectionTheme>

        <SectionTheme theme="purple" sectionId="vision">
          <div id="vision">
            <VisionSection />
          </div>
          <DataStream isVisible={true} theme="purple" />
        </SectionTheme>

        <SectionTheme theme="blue" sectionId="architecture">
          <div id="architecture">
            <ArchitectureSection />
          </div>
          <DataStream isVisible={true} theme="blue" />
        </SectionTheme>

        <SectionTheme theme="green" sectionId="features">
          <div id="features">
            <FeaturesSection />
          </div>
          <DataStream isVisible={true} theme="green" />
        </SectionTheme>

        <SectionTheme theme="orange" sectionId="comparison">
          <div id="comparison">
            <ComparisonSection />
          </div>
          <DataStream isVisible={true} theme="orange" />
        </SectionTheme>

        <SectionTheme theme="pink" sectionId="waitlist">
          <div id="waitlist">
            <WaitlistSection />
          </div>
          <DataStream isVisible={true} theme="pink" />
        </SectionTheme>

        <Footer />
      </div>
    </>
  );
};

export default Index;
