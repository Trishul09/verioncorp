import { WaitlistSection } from "@/components/WaitlistSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionTheme } from "@/components/SectionThemes";

const WaitlistPage = () => {
  return (
    <>
      <Header />
      <div className="pt-16 min-h-screen">
        <SectionTheme theme="neural" sectionId="waitlist">
          <WaitlistSection />
        </SectionTheme>
        <Footer />
      </div>
    </>
  );
};

export default WaitlistPage;
