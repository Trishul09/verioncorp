import { FeaturesSection } from "@/components/FeaturesSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionTheme } from "@/components/SectionThemes";

const FeaturesPage = () => {
  return (
    <>
      <Header />
      <div className="pt-16 min-h-screen">
        <SectionTheme theme="quantum" sectionId="features">
          <FeaturesSection />
        </SectionTheme>
        <Footer />
      </div>
    </>
  );
};

export default FeaturesPage;
