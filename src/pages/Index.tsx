import { HeroSection } from "@/components/HeroSection";
import { CEONote } from "@/components/CEONote";
import { VisionSection } from "@/components/VisionSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { TechStackSection } from "@/components/TechStackSection";
import { Footer } from "@/components/Footer";
import { CursorFollower } from "@/components/CursorFollower";
import { Header } from "@/components/Header";
import { SectionTheme } from "@/components/SectionThemes";
import { SplashScreen } from "@/components/SplashScreen";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Check if this is the first load in this session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (hasSeenSplash) {
      setShowSplash(false);
      setIsInitialLoad(false);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem("hasSeenSplash", "true");
    setShowSplash(false);
  };

  if (isInitialLoad && showSplash) {
    return (
      <AnimatePresence>
        <SplashScreen onComplete={handleSplashComplete} />
      </AnimatePresence>
    );
  }

  return (
    <>
      <CursorFollower />
      <Header />
      <div className="min-h-screen text-foreground">
        <SectionTheme theme="hero" sectionId="hero">
          <HeroSection />
        </SectionTheme>

        <CEONote />

        <SectionTheme theme="steel" sectionId="vision">
          <VisionSection />
        </SectionTheme>

        <SectionTheme theme="carbon" sectionId="architecture">
          <ArchitectureSection />
        </SectionTheme>

        <SectionTheme theme="quantum" sectionId="features">
          <FeaturesSection />
        </SectionTheme>

        <RoadmapSection />

        <TechStackSection />

        <Footer />
      </div>
    </>
  );
};

export default Index;
