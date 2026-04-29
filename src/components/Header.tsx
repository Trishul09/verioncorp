import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const anchorItems = [
    { label: "About", href: "#about" },
    { label: "Download", href: "#download" },
    { label: "Contact", href: "#contact" },
  ];

  const handleAnchor = (href: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + href);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/30">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg text-foreground hover:text-primary transition-colors">
            <div className="w-7 h-7 rounded-lg gradient-primary flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary-foreground" />
            </div>
            Aether
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {anchorItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleAnchor(item.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/noticeboard"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Noticeboard
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button size="sm" className="gradient-primary text-primary-foreground font-semibold hover:shadow-glow" onClick={() => handleAnchor("#contact")}>
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
              {anchorItems.map((item) => (
                <button key={item.href} onClick={() => handleAnchor(item.href)} className="text-sm text-muted-foreground hover:text-foreground py-2 text-left">
                  {item.label}
                </button>
              ))}
              <Link
                to="/noticeboard"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground py-2 text-left"
              >
                Noticeboard
              </Link>
              <Button size="sm" className="gradient-primary text-primary-foreground mt-2" onClick={() => handleAnchor("#contact")}>
                Book a Demo
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
