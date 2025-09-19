import { HeroSection } from "@/components/HeroSection";
import { VisionSection } from "@/components/VisionSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";
import { CursorFollower } from "@/components/CursorFollower";

const Index = () => {
  return (
    <>
      <CursorFollower />
      <div className="min-h-screen bg-background text-foreground">
        <HeroSection />
        <VisionSection />
        <ArchitectureSection />
        <FeaturesSection />
        <ComparisonSection />
        <WaitlistSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
