import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface SectionThemeProps {
  children: ReactNode;
  theme: 'hero' | 'purple' | 'blue' | 'green' | 'orange' | 'pink';
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
        bg: 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950',
        accent: 'from-blue-500/10 to-purple-500/10',
        particles: 'bg-blue-500/30'
      },
      purple: {
        bg: 'bg-gradient-to-br from-purple-950 via-indigo-950 to-purple-900',
        accent: 'from-purple-500/10 to-pink-500/10',
        particles: 'bg-purple-500/30'
      },
      blue: {
        bg: 'bg-gradient-to-br from-blue-950 via-cyan-950 to-blue-900',
        accent: 'from-blue-500/10 to-cyan-500/10',
        particles: 'bg-cyan-500/30'
      },
      green: {
        bg: 'bg-gradient-to-br from-emerald-950 via-teal-950 to-emerald-900',
        accent: 'from-emerald-500/10 to-teal-500/10',
        particles: 'bg-emerald-500/30'
      },
      orange: {
        bg: 'bg-gradient-to-br from-orange-950 via-red-950 to-orange-900',
        accent: 'from-orange-500/10 to-red-500/10',
        particles: 'bg-orange-500/30'
      },
      pink: {
        bg: 'bg-gradient-to-br from-pink-950 via-rose-950 to-pink-900',
        accent: 'from-pink-500/10 to-rose-500/10',
        particles: 'bg-pink-500/30'
      }
    };
    return themes[theme];
  };

  const themeStyles = getThemeStyles();

  return (
    <motion.div
      className={`relative min-h-screen ${themeStyles.bg} transition-all duration-1000`}
      style={{ opacity }}
    >
      {/* Animated Background Elements */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${themeStyles.accent} opacity-50`}
        style={{ y: backgroundY }}
        animate={isInView ? { opacity: [0.3, 0.6, 0.3] } : {}}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      {/* Floating Particles */}
      {isInView && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 ${themeStyles.particles} rounded-full`}
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 50,
                opacity: 0
              }}
              animate={isInView ? {
                y: -50,
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.2, 0.5]
              } : {}}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            />
          ))}
        </>
      )}

      {/* Gradient Mesh */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={isInView ? {
          background: [
            `radial-gradient(circle at 20% 30%, ${themeStyles.particles} 0%, transparent 50%)`,
            `radial-gradient(circle at 80% 70%, ${themeStyles.particles} 0%, transparent 50%)`,
            `radial-gradient(circle at 40% 90%, ${themeStyles.particles} 0%, transparent 50%)`
          ]
        } : {}}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Section Transition Effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-current/10 to-transparent"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

// Data Generation Effect Component
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
        const updated = [newPoint, ...prev.slice(0, 4)];
        return updated;
      });
    }, 1500);
    
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div className="absolute top-4 right-4 space-y-2 font-mono text-xs">
      {dataPoints.map((point, index) => (
        <motion.div
          key={`${point}-${index}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1 - (index * 0.2), x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className={`px-2 py-1 rounded bg-${theme}-500/20 text-${theme}-300 border border-${theme}-500/30`}
        >
          {point}: {Math.random().toString(36).substr(2, 8)}
        </motion.div>
      ))}
    </div>
  );
};