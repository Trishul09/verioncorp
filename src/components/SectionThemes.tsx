import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface SectionThemeProps {
  children: ReactNode;
  theme: 'hero' | 'steel' | 'carbon' | 'quantum' | 'matrix' | 'neural' | 'crypto';
  sectionId: string;
}

export const SectionTheme = ({ children, theme, sectionId }: SectionThemeProps) => {
  const [isInView, setIsInView] = useState(false);
  const { scrollY } = useScroll();
  
  // Dynamic background transform based on scroll
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(sectionId);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [sectionId]);

  const getThemeStyles = () => {
    const themes = {
      hero: {
        bg: 'gradient-hero',
        customBg: undefined,
        accent: 'from-warm-orange/20 to-warm-gold/20',
        particles: 'bg-primary/30',
        glow: 'hsl(24 88% 58% / 0.2)',
        textColor: ''
      },
      steel: {
        bg: '',
        customBg: 'var(--theme-steel)',
        accent: 'from-accent-steel/20 to-accent-quantum/20',
        particles: 'bg-accent-steel/30',
        glow: 'hsl(210 35% 45% / 0.15)',
        textColor: 'text-slate-100'
      },
      carbon: {
        bg: '',
        customBg: 'var(--theme-carbon)',
        accent: 'from-accent-luxury-bronze/20 to-accent-luxury-copper/20',
        particles: 'bg-accent-luxury-bronze/30',
        glow: 'hsl(30 60% 45% / 0.15)',
        textColor: 'text-amber-50'
      },
      quantum: {
        bg: '',
        customBg: 'var(--theme-quantum)',
        accent: 'from-accent-quantum/20 to-accent-muted-lavender/20',
        particles: 'bg-accent-quantum/30',
        glow: 'hsl(280 45% 55% / 0.15)',
        textColor: 'text-purple-50'
      },
      matrix: {
        bg: '',
        customBg: 'var(--theme-matrix)',
        accent: 'from-accent-matrix/20 to-accent-deep-teal/20',
        particles: 'bg-accent-matrix/30',
        glow: 'hsl(165 40% 45% / 0.15)',
        textColor: 'text-teal-50'
      },
      neural: {
        bg: '',
        customBg: 'var(--theme-neural)',
        accent: 'from-accent-neural/20 to-accent-warm-gold/20',
        particles: 'bg-accent-neural/30',
        glow: 'hsl(35 45% 50% / 0.15)',
        textColor: 'text-amber-50'
      },
      crypto: {
        bg: '',
        customBg: 'var(--theme-crypto)',
        accent: 'from-accent-crypto/20 to-primary/20',
        particles: 'bg-accent-crypto/30',
        glow: 'hsl(15 55% 48% / 0.15)',
        textColor: 'text-orange-50'
      }
    };
    return themes[theme];
  };

  const themeStyles = getThemeStyles();

  return (
    <motion.div
      className={`relative ${themeStyles.bg} ${themeStyles.textColor || ''} will-change-transform`}
      style={{ 
        opacity,
        background: themeStyles.customBg || undefined
      }}
    >
      {/* Animated Background Elements */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${themeStyles.accent} opacity-50`}
        style={{ y: backgroundY }}
        animate={isInView ? { opacity: [0.3, 0.5, 0.3] } : {}}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating Particles - Reduced for performance */}
      {isInView && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1.5 h-1.5 ${themeStyles.particles} rounded-full will-change-transform`}
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: typeof window !== 'undefined' ? window.innerHeight + 50 : 850,
                opacity: 0
              }}
              animate={isInView ? {
                y: -50,
                opacity: [0, 0.6, 0],
                scale: [0.5, 1, 0.5]
              } : {}}
              transition={{
                duration: 8 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 1.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </>
      )}

      {/* Gradient Mesh - Simplified */}
      <motion.div
        className="absolute inset-0 opacity-20 will-change-auto"
        animate={isInView ? {
          opacity: [0.15, 0.25, 0.15]
        } : {}}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: `radial-gradient(circle at 30% 40%, ${themeStyles.glow}, transparent 60%)`
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Subtle Bottom Glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 opacity-30"
        style={{
          background: `linear-gradient(to top, ${themeStyles.glow}, transparent)`
        }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.3 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />
    </motion.div>
  );
};

// Data Generation Effect Component - Optimized
export const DataStream = ({ isVisible, theme }: { isVisible: boolean; theme: string }) => {
  const [dataPoints, setDataPoints] = useState<string[]>([]);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const dataTypes = [
      'Identity.hash', 'Privacy.level', 'Connection.secure', 'Data.encrypted',
      'Network.distributed', 'Auth.verified', 'Metadata.protected', 'Signal.encoded'
    ];
    
    const interval = setInterval(() => {
      setDataPoints(prev => {
        const newPoint = dataTypes[Math.floor(Math.random() * dataTypes.length)];
        const updated = [newPoint, ...prev.slice(0, 2)]; // Reduced from 4 to 2
        return updated;
      });
    }, 2500); // Increased interval from 1500 to 2500
    
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div className="absolute top-4 right-4 space-y-2 font-mono text-xs will-change-transform">
      {dataPoints.map((point, index) => (
        <motion.div
          key={`${point}-${index}`}
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: Math.max(0.8 - (index * 0.3), 0.2), x: 0 }}
          exit={{ opacity: 0, x: -15 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="px-2 py-1 rounded glass-dark text-orange-100 border border-primary/30 backdrop-blur-sm shadow-warm"
        >
          {point}: {Math.random().toString(36).substr(2, 6)}
        </motion.div>
      ))}
    </div>
  );
};