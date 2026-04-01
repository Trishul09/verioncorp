import { Shield } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold">Aether</span>
          </div>

          <div className="text-center md:text-right space-y-1">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Verion Privacy and Tech LLP. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Founded by Manik K. Sangal
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8 text-xs text-muted-foreground">
          <a
            href="https://x.com/VerionPT"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Twitter / X
          </a>
          <span className="text-border">•</span>
          <a href="mailto:contact@aether.security" className="hover:text-foreground transition-colors">
            Contact
          </a>
          <span className="text-border">•</span>
          <span>Privacy Policy</span>
          <span className="text-border">•</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
};
