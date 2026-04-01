import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Download", href: "#download" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/30">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 font-bold text-lg text-foreground hover:text-primary transition-colors">
            <div className="w-7 h-7 rounded-lg gradient-primary flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary-foreground" />
            </div>
            Aether
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button size="sm" className="gradient-primary text-primary-foreground font-semibold hover:shadow-glow" onClick={() => scrollTo("#contact")}>
              Book a Demo
            </Button>
          </div>

          <button className="md:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border/30"
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <button key={item.href} onClick={() => scrollTo(item.href)} className="text-sm text-muted-foreground hover:text-foreground py-2 text-left">
                  {item.label}
                </button>
              ))}
              <Button size="sm" className="gradient-primary text-primary-foreground mt-2" onClick={() => scrollTo("#contact")}>
                Book a Demo
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
