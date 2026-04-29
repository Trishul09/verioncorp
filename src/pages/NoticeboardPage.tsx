import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AetherNoticeboard } from "@/components/AetherNoticeboard";

const NoticeboardPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen text-foreground pt-24">
        <AetherNoticeboard />
        <Footer />
      </div>
    </>
  );
};

export default NoticeboardPage;
