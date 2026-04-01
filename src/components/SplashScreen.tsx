import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import verionLogoV from "@/assets/verion-logo-v.png";

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [stars, setStars] = useState<Array<{ x: number; y: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generate random stars
    const generatedStars = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3,
    }));
    setStars(generatedStars);

    // Auto-complete after animation
    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background overflow-hidden"
    >
      {/* Network Background Pattern - Similar to Index */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(var(--primary-rgb),0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(var(--accent-rgb),0.1),transparent_40%)]" />
      </div>

      {/* Animated Network Lines */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            background: 'hsl(var(--primary))',
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}

      {/* Main Logo Container */}
      <div className="relative">
        {/* Glow Effect - Using Design System Colors */}
        <motion.div
          className="absolute inset-0 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 0.5, 0.3], scale: [0.8, 1.2, 1] }}
          transition={{ duration: 2, times: [0, 0.5, 1] }}
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.4), transparent 70%)'
          }}
        />

        {/* Logo - Only V visible */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
          animate={{ 
            opacity: [0, 1, 1, 1],
            scale: [0.5, 1.1, 1, 1],
            rotateY: [-180, 0, 0, 0]
          }}
          transition={{ 
            duration: 2.5,
            times: [0, 0.4, 0.6, 1],
            ease: "easeOut"
          }}
          className="relative z-10"
        >
          <img 
            src={verionLogoV} 
            alt="Verion" 
            className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl"
            style={{
              filter: 'drop-shadow(0 0 30px hsl(var(--primary) / 0.5))'
            }}
          />
        </motion.div>

        {/* Pulsing Ring - Using Design System Colors */}
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ 
            scale: [1, 1.5, 2],
            opacity: [0, 0.4, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            delay: 1
          }}
          style={{
            border: '2px solid hsl(var(--primary) / 0.3)'
          }}
        />
      </div>

      {/* Loading Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-5 h-5 rounded-full"
            style={{
              border: '2px solid hsl(var(--primary) / 0.3)',
              borderTopColor: 'hsl(var(--primary))'
            }}
          />
          <span className="text-foreground/80 text-sm font-mono uppercase tracking-widest">
            Loading Aether
          </span>
        </div>
      </motion.div>

      {/* Bottom Gradient - Using Design System */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </motion.div>
  );
};
