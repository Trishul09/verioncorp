import { motion } from "framer-motion";
import { Download, MonitorSmartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";
import { DOWNLOADS, detectOS, getPrimaryDownload } from "@/lib/downloads";

export const AetherDownload = () => {
  const os = useMemo(() => detectOS(), []);
  const primaryDownload = getPrimaryDownload(os);

  return (
    <section id="download" className="py-24 relative">
      <div className="container max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <MonitorSmartphone className="w-7 h-7 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Download Aether
          </h2>
          <p className="text-muted-foreground mb-8">
            {os !== "Unknown"
              ? `Detected: ${os} - your best available installer is ready below.`
              : "Desktop installers are ready for macOS and Windows."}
          </p>

          <div className="flex justify-center mb-4">
            <Button
              asChild
              size="lg"
              className="gradient-primary text-primary-foreground gap-2 min-w-[220px]"
            >
              <a href={primaryDownload.href} download={primaryDownload.filename}>
                <Download className="w-4 h-4" />
                Download for {primaryDownload.label}
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {Object.entries(DOWNLOADS).map(([platform, config]) =>
              config.available ? (
                <Button
                  key={platform}
                  asChild
                  variant={platform === primaryDownload.label ? "default" : "outline"}
                  className={
                    platform === primaryDownload.label
                      ? "gradient-primary text-primary-foreground gap-2"
                      : "border-border/50 text-foreground hover:text-foreground gap-2"
                  }
                >
                  <a href={config.href} download={config.filename}>
                    <Download className="w-4 h-4" />
                    {platform}
                  </a>
                </Button>
              ) : (
                <Button
                  key={platform}
                  variant="outline"
                  className="border-border/50 text-muted-foreground gap-2"
                  disabled
                >
                  <Download className="w-4 h-4" />
                  {platform}
                </Button>
              ),
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            macOS and Windows installers are delivered from GitHub Releases. Mobile and Linux builds are not published yet.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
