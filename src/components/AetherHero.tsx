import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Calendar, Smartphone } from "lucide-react";
import { useMemo } from "react";
import { detectOS, getPrimaryDownload } from "@/lib/downloads";

const getDownloadLabel = (os: string, primaryLabel: string) => {
  if (os === "macOS" || os === "Windows") return `Download for ${primaryLabel}`;
  if (os === "iOS" || os === "Android") return "Mobile — Coming Soon";
  if (os === "Linux") return "Linux — Coming Soon";
  return "Download App";
};

const isDownloadAvailable = (os: string) =>
  os === "macOS" || os === "Windows" || os === "Unknown";

export const AetherHero = () => {
  const os = useMemo(() => detectOS(), []);
  const primaryDownload = getPrimaryDownload(os);
  const downloadLabel = getDownloadLabel(os, primaryDownload.label);
  const canDownload = isDownloadAvailable(os);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.04] blur-[160px]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono uppercase tracking-[0.2em] mb-8"
        >
          Agentic IAM — Reimagined
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-[-0.01em] mb-6"
        >
          <span className="tracking-[0.02em]">The Identity & Control Layer</span>{" "}
          <span className="italic font-semibold text-primary">
            for AI Agents
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 tracking-wide"
        >
          No anonymous agents. No uncontrolled actions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="gradient-primary text-primary-foreground font-semibold px-8 gap-2 hover:shadow-glow tracking-wide"
            onClick={() => scrollTo("contact")}
          >
            <Calendar className="w-4 h-4" />
            Book a Demo
          </Button>
          {canDownload ? (
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/30 text-foreground hover:bg-primary/10 gap-2 px-8 tracking-wide"
            >
              <a href={primaryDownload.href} download={primaryDownload.filename}>
                <Download className="w-4 h-4" />
                {downloadLabel}
              </a>
            </Button>
          ) : (
            <Button
              size="lg"
              variant="outline"
              className="border-border/50 text-muted-foreground gap-2 px-8 tracking-wide"
              disabled
            >
              <Smartphone className="w-4 h-4" />
              {downloadLabel}
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
};
