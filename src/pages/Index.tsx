import { HeroSection } from "@/components/HeroSection";
import { CEONote } from "@/components/CEONote";
import { Footer } from "@/components/Footer";
import { CursorFollower } from "@/components/CursorFollower";
import { Header } from "@/components/Header";
import { SectionTheme } from "@/components/SectionThemes";

const Index = () => {
  return (
    <>
      <CursorFollower />
      <Header />
      <div className="min-h-screen text-foreground">
        <SectionTheme theme="hero" sectionId="hero">
          <HeroSection />
        </SectionTheme>

        <CEONote />

        <Footer />
      </div>
    </>
  );
};

export default Index;
