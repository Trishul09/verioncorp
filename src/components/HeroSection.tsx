import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Artistic Background Layers */}
      <div className="absolute inset-0 gradient-organic"></div>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-accent-warm-gold/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-2/5 h-3/4 bg-gradient-to-tl from-accent-deep-teal/5 to-transparent organic-shape"></div>
      <AnimatedBackground />
      
      {/* Artistic Floating Elements */}
      <motion.div
        className="absolute top-20 left-1/4 w-16 h-16 artistic-circle bg-accent-warm-gold/10"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-32 right-1/4 w-24 h-24 organic-shape bg-accent-deep-teal/10"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute bottom-40 left-1/6 w-12 h-32 bg-accent-muted-lavender/20 organic-shape"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 15, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/6 w-8 h-8 rounded-full bg-primary/40"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Main Content */}
      <div className="container relative z-10 text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism mb-8 hover-glow"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Privacy-First Platform</span>
          </motion.div>

          {/* Main Headline with Artistic Typography */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight artistic-text-shadow"
          >
            <div className="relative inline-block">
              Redefining{" "}
              <div className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-accent-warm-gold animate-pulse"></div>
            </div>
            <br />
            <span className="text-gradient relative">
              Digital Identity
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent-warm-gold to-accent-deep-teal rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 1 }}
              ></motion.div>
            </span>{" "}
            <br className="hidden sm:block" />
            & Connections
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Own your identity. Connect without compromise. 
            A new social architecture for the future of human interaction.
          </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="font-bold px-8 shadow-lg hover:shadow-xl transition-all"
                onClick={() => navigate('/waitlist')}
              >
                Join Waitlist
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="font-semibold px-8 border border-primary/20 hover:border-primary/40"
                onClick={() => navigate('/vision')}
              >
                Read Technical Vision
              </Button>
            </div>

          {/* Artistic Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto perspective-1000"
          >
            <motion.div 
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="layered-card glass-morphism rounded-2xl p-6 text-center transform-gpu hover:shadow-2xl hover:shadow-primary/20 transition-all"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent-warm-gold/20 flex items-center justify-center">
                <div className="text-xl font-bold text-accent-warm-gold">100%</div>
              </div>
              <div className="text-sm text-muted-foreground">Privacy Owned</div>
            </motion.div>
            <motion.div 
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateX: 5,
                rotateY: -5,
                transition: { duration: 0.3 }
              }}
              className="layered-card glass-morphism rounded-2xl p-6 text-center transform-gpu hover:shadow-2xl hover:shadow-accent-deep-teal/20 transition-all"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent-deep-teal/20 flex items-center justify-center">
                <div className="text-xl font-bold text-accent-deep-teal">0</div>
              </div>
              <div className="text-sm text-muted-foreground">Data Tracking</div>
            </motion.div>
            <motion.div 
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="layered-card glass-morphism rounded-2xl p-6 text-center transform-gpu hover:shadow-2xl hover:shadow-accent-muted-lavender/20 transition-all"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent-muted-lavender/20 flex items-center justify-center">
                <div className="text-xl font-bold text-accent-muted-lavender">∞</div>
              </div>
              <div className="text-sm text-muted-foreground">Possibilities</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};