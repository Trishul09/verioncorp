import { RoadmapSection } from "@/components/RoadmapSection";
import { TechStackSection } from "@/components/TechStackSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const RoadmapPage = () => {
  return (
    <>
      <Header />
      <div className="pt-16 min-h-screen">
        <RoadmapSection />
        <TechStackSection />
        <Footer />
      </div>
    </>
  );
};

export default RoadmapPage;
