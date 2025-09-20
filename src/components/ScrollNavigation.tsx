import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight, Menu, X } from 'lucide-react';

const navigationItems = [
  { id: 'hero', label: 'Home', theme: 'dark' },
  { id: 'vision', label: 'Vision', theme: 'purple' },
  { id: 'architecture', label: 'Architecture', theme: 'blue' },
  { id: 'features', label: 'Features', theme: 'green' },
  { id: 'comparison', label: 'Compare', theme: 'orange' },
  { id: 'waitlist', label: 'Join', theme: 'pink' }
];

export const ScrollNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const { scrollY } = useScroll();
  
  // Navigation appearance based on scroll
  const navOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const navY = useTransform(scrollY, [0, 100], [-100, 0]);
  
  // Animated background based on active section
  const currentTheme = navigationItems.find(item => item.id === activeSection)?.theme || 'dark';

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 200;
      
      // Show nav after scrolling past hero
      setIsVisible(window.scrollY > 100);
      
      // Determine active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const getThemeClasses = (theme: string) => {
    const themes = {
      dark: 'from-gray-900/90 to-gray-800/90 border-gray-700/30',
      purple: 'from-purple-900/90 to-indigo-900/90 border-purple-500/30',
      blue: 'from-blue-900/90 to-cyan-900/90 border-blue-500/30',
      green: 'from-emerald-900/90 to-teal-900/90 border-emerald-500/30',
      orange: 'from-orange-900/90 to-red-900/90 border-orange-500/30',
      pink: 'from-pink-900/90 to-rose-900/90 border-pink-500/30'
    };
    return themes[theme as keyof typeof themes] || themes.dark;
  };

  return (
    <motion.nav
      style={{ opacity: navOpacity, y: navY }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
    >
      <div className="container mx-auto px-4 py-4">
        <motion.div
          className={`glass-morphism rounded-2xl backdrop-blur-xl bg-gradient-to-r ${getThemeClasses(currentTheme)} border shadow-2xl`}
          animate={{ 
            scale: isVisible ? 1 : 0.95,
            opacity: isVisible ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg">Verion</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant={activeSection === item.id ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => scrollToSection(item.id)}
                    className={`relative group transition-all duration-300 ${
                      activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-primary/10 rounded-md"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    
                    {/* Hover data reveal */}
                    <motion.div
                      className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-background/95 backdrop-blur-sm border rounded-lg px-3 py-2 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                      initial={{ opacity: 0, y: -10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Navigate to {item.label}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-background/95 border-t border-l rotate-45" />
                    </motion.div>
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Join Waitlist Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="hidden md:block"
            >
              <Button 
                onClick={() => scrollToSection('waitlist')}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium px-6"
              >
                Join Waitlist
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            className={`md:hidden border-t border-border/30 ${mobileMenuOpen ? 'block' : 'hidden'}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: mobileMenuOpen ? 1 : 0, 
              height: mobileMenuOpen ? 'auto' : 0 
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className="w-full justify-start"
                >
                  {item.label}
                </Button>
              ))}
              <Button 
                onClick={() => scrollToSection('waitlist')}
                className="w-full bg-gradient-to-r from-primary to-accent text-white mt-4"
              >
                Join Waitlist
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};