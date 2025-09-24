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
        bg: 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950',
        accent: 'from-slate-700/20 to-slate-600/20',
        particles: 'bg-slate-400/20',
        glow: 'hsl(210 25% 35% / 0.1)'
      },
      steel: {
        bg: 'bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950',
        accent: 'from-slate-600/15 to-blue-600/15',
        particles: 'bg-slate-400/15',
        glow: 'hsl(210 25% 35% / 0.1)'
      },
      carbon: {
        bg: 'bg-gradient-to-br from-gray-950 via-slate-950 to-gray-900',
        accent: 'from-gray-600/15 to-slate-600/15',
        particles: 'bg-gray-400/15',
        glow: 'hsl(225 20% 30% / 0.1)'
      },
      quantum: {
        bg: 'bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900',
        accent: 'from-cyan-600/15 to-teal-600/15',
        particles: 'bg-cyan-400/15',
        glow: 'hsl(195 35% 40% / 0.1)'
      },
      matrix: {
        bg: 'bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900',
        accent: 'from-emerald-600/15 to-teal-600/15',
        particles: 'bg-emerald-400/15',
        glow: 'hsl(165 30% 35% / 0.1)'
      },
      neural: {
        bg: 'bg-gradient-to-br from-slate-950 via-amber-950 to-slate-900',
        accent: 'from-amber-600/15 to-yellow-600/15',
        particles: 'bg-amber-400/15',
        glow: 'hsl(45 25% 40% / 0.1)'
      },
      crypto: {
        bg: 'bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900',
        accent: 'from-violet-600/15 to-purple-600/15',
        particles: 'bg-violet-400/15',
        glow: 'hsl(270 25% 35% / 0.1)'
      }
    };
    return themes[theme];
  };

  const themeStyles = getThemeStyles();

  return (
    <motion.div
      className={`relative ${themeStyles.bg} will-change-transform`}
      style={{ opacity }}
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
          className="px-2 py-1 rounded bg-slate-800/60 text-slate-300 border border-slate-600/30 backdrop-blur-sm"
        >
          {point}: {Math.random().toString(36).substr(2, 6)}
        </motion.div>
      ))}
    </div>
  );
};