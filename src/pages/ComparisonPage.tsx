import { ComparisonSection } from "@/components/ComparisonSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionTheme } from "@/components/SectionThemes";

const ComparisonPage = () => {
  return (
    <>
      <Header />
      <div className="pt-16 min-h-screen">
        <SectionTheme theme="matrix" sectionId="comparison">
          <ComparisonSection />
        </SectionTheme>
        <Footer />
      </div>
    </>
  );
};

export default ComparisonPage;
