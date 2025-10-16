import { Shield, Github, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ComingSoon } from "@/components/ComingSoon";

export const Footer = () => {
  const [showComingSoon, setShowComingSoon] = useState<string | null>(null);

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleNavigation = (href: string, name: string) => {
    if (href.startsWith('/')) {
      // Handle internal routes
      window.location.href = href;
    } else if (href.startsWith('#') && !['#privacy', '#terms', '#security'].includes(href)) {
      const sectionId = href.replace('#', '');
      smoothScrollTo(sectionId);
    } else if (['#privacy', '#terms', '#security'].includes(href)) {
      setShowComingSoon(name);
    }
  };

  const links = {
    platform: [
      { name: "Vision", href: "#vision" },
      { name: "Architecture", href: "#architecture" },
      { name: "Features", href: "#features" },
      { name: "Careers", href: "/careers" },
      { name: "Roadmap", href: "#roadmap" }
    ],
    community: [
      { name: "Discord", href: "#", icon: MessageCircle },
      { name: "Twitter", href: "https://x.com/VerionPT?t=5Wjl3g3uSERu1Uk6KpO-iQ&s=08", icon: Twitter },
      { name: "GitHub", href: "#", icon: Github }
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Security", href: "#security" }
    ]
  };

  return (
    <footer className="border-t border-border/50 py-20">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Verion</h3>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Building the future of digital identity and connections. 
              Privacy-first, user-owned, and designed for human flourishing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="gradient-primary hover:shadow-glow"
                onClick={() => smoothScrollTo('waitlist')}
              >
                Join Waitlist
              </Button>
              <Button 
                variant="secondary" 
                className="glass-morphism"
                onClick={() => setShowComingSoon('Read Whitepaper')}
              >
                Read Whitepaper
              </Button>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              {links.platform.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleNavigation(link.href, link.name)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

           {/* Community Links */}
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-3">
              {links.community.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="glass-morphism rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">Privacy-First Notice</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This website respects your privacy. We don't use cookies for tracking, 
                don't collect personal data without consent, and don't share information 
                with third parties. Our commitment to privacy starts here.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 Verion. Building the decentralized future.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            {links.legal.map((link, index) => (
              <button 
                key={index}
                onClick={() => setShowComingSoon(link.name)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        {/* Extra Privacy Info */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            🔒 This site is hosted on decentralized infrastructure and uses zero tracking technologies
          </p>
        </div>
      </div>
      
      {showComingSoon && (
        <ComingSoon 
          title={showComingSoon}
          onBack={() => setShowComingSoon(null)}
        />
      )}
    </footer>
  );
};