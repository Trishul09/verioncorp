import { Header } from "@/components/Header";
import { AetherHero } from "@/components/AetherHero";
import { AetherVision } from "@/components/AetherVision";
import { AetherNoticeboard } from "@/components/AetherNoticeboard";
import { AetherClosing } from "@/components/AetherClosing";
import { AetherContact } from "@/components/AetherContact";
import { AetherDownload } from "@/components/AetherDownload";
import { Footer } from "@/components/Footer";
import { SplashScreen } from "@/components/SplashScreen";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
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
      <Header />
      <div className="min-h-screen text-foreground pt-16">
        <AetherHero />
        <AetherVision />
        <AetherNoticeboard />
        <AetherClosing />
        <AetherDownload />
        <AetherContact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
