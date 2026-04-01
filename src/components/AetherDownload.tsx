import { motion } from "framer-motion";
import { Download, Apple, MonitorSmartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";

const detectOS = (): string => {
  const ua = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(ua)) return "iOS";
  if (/android/.test(ua)) return "Android";
  if (/mac/.test(ua)) return "macOS";
  if (/win/.test(ua)) return "Windows";
  if (/linux/.test(ua)) return "Linux";
  return "Unknown";
};

export const AetherDownload = () => {
  const os = useMemo(() => detectOS(), []);

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
              ? `Detected: ${os} — download coming soon.`
              : "Available soon on all platforms."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {["Windows", "macOS", "Linux", "iOS", "Android"].map((platform) => (
              <Button
                key={platform}
                variant={platform === os ? "default" : "outline"}
                className={
                  platform === os
                    ? "gradient-primary text-primary-foreground gap-2"
                    : "border-border/50 text-muted-foreground hover:text-foreground gap-2"
                }
                disabled
              >
                <Download className="w-4 h-4" />
                {platform}
              </Button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            Coming soon — join the waitlist to get early access.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
