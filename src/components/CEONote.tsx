import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export const CEONote = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Artistic Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="backdrop-blur-xl bg-card/80 border-2 border-primary/10 shadow-2xl p-12 md:p-16 relative overflow-hidden">
            {/* Abstract corner decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/10 to-transparent"></div>
            
            <div className="space-y-8 relative z-10">
              {/* Minimalist Header */}
              <div className="space-y-4">
                <motion.div 
                  className="w-16 h-0.5 bg-primary rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                />
                <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">
                  A Vision for Digital Sovereignty
                </h2>
                <p className="text-muted-foreground font-mono text-sm uppercase tracking-wider">
                  Manik K. Sangal — Founder & CEO
                </p>
              </div>

              {/* CEO Note Content */}
              <div className="space-y-8 text-base md:text-lg leading-relaxed text-foreground/80 font-light">
                <p className="first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-2 first-letter:float-left first-letter:leading-tight">
                  The current paradigm is fundamentally broken. Platforms harvest your data, manipulate your attention, and profit from your digital existence. We're building something radically different: a Blind Vault architecture where the server literally cannot read your content, even under court order.
                </p>
                
                <p>
                  Our 5-year roadmap begins with the foundation: MLS Protocol for forward secrecy, Epoch-Based Blind Tokens for anonymous identity, and client-side encryption that keeps your data mathematically unreadable. By Phase 3, we introduce Blind DAO governance—community voting without Web3 wallets, moderation through Ring Signatures that ban bad actors without revealing identities.
                </p>
                
                <p>
                  The Polymorphic UI is our secret weapon: one privacy-first backend that renders as Reddit-style threads, YouTube-style video, or Spotify-style audio. Your phone runs TensorFlow Lite to control your own feed—no central algorithm decides what you see. This is not incremental improvement; this is architectural revolution.
                </p>
                
                <div className="pt-8 border-t border-primary/20 mt-12">
                  <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                    Join us in building the Blind Vault—where your digital life is mathematically sovereign.
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Verion</span>
                    <div className="h-px flex-1 bg-gradient-to-l from-primary/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
