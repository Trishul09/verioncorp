import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ComingSoonProps {
  title: string;
  onBack: () => void;
}

export const ComingSoon = ({ title, onBack }: ComingSoonProps) => {
  return (
    <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="glass-morphism rounded-2xl p-12 max-w-md mx-4 text-center"
      >
        <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">🚀</span>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          We're working hard to bring you this feature. Stay tuned for updates as we build the future of privacy-first connections.
        </p>
        
        <Button 
          onClick={onBack}
          variant="outline" 
          className="w-full"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </motion.div>
    </div>
  );
};