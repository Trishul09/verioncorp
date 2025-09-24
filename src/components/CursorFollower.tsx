import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [data-cursor="pointer"]')) {
        setIsHovering(true);
        setCursorVariant('hover');
      } else if (target.matches('h1, h2, h3, .text-gradient')) {
        setIsHovering(true);
        setCursorVariant('text');
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [data-cursor="pointer"], h1, h2, h3, .text-gradient')) {
        setIsHovering(false);
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 1,
      backgroundColor: "hsl(210 25% 35% / 0.3)",
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 2,
      backgroundColor: "hsl(195 35% 40% / 0.5)",
    },
    text: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      scale: 1.5,
      backgroundColor: "hsl(165 30% 35% / 0.4)",
    }
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={variants[cursorVariant as keyof typeof variants]}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Trailing cursor with tech pattern */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border rounded-full pointer-events-none z-40"
        style={{
          borderColor: "hsl(210 25% 35% / 0.2)",
          borderWidth: "1px",
        }}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2.5 : 1,
          rotate: isHovering ? 45 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
        }}
      />
      
      {/* Data trail effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-30"
        animate={{
          x: mousePosition.x - 1,
          y: mousePosition.y - 1,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
        }}
      >
        {isHovering && (
          <motion.div
            className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            exit={{ scale: 0, opacity: 0 }}
          />
        )}
      </motion.div>
    </>
  );
};