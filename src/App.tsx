import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ChatPage from "./pages/ChatPage";
import VisionPage from "./pages/VisionPage";
import ArchitecturePage from "./pages/ArchitecturePage";
import FeaturesPage from "./pages/FeaturesPage";
import ComparisonPage from "./pages/ComparisonPage";
import WaitlistPage from "./pages/WaitlistPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/comparison" element={<ComparisonPage />} />
          <Route path="/waitlist" element={<WaitlistPage />} />
          <Route path="/chat" element={<ChatPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
