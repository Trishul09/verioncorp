import { VisionSection } from "@/components/VisionSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionTheme } from "@/components/SectionThemes";

const VisionPage = () => {
  return (
    <>
      <Header />
      <div className="pt-16 min-h-screen">
        <SectionTheme theme="steel" sectionId="vision">
          <VisionSection />
        </SectionTheme>
        <Footer />
      </div>
    </>
  );
};

export default VisionPage;
