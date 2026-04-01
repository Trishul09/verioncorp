import { motion } from "framer-motion";
import { Fingerprint, Eye, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Fingerprint,
    title: "Identity",
    description: "Every agent gets a verifiable, cryptographic identity — no anonymous actors in your stack.",
  },
  {
    icon: Eye,
    title: "Intent",
    description: "Real-time verification of what an agent is doing and why — before it acts.",
  },
  {
    icon: ShieldCheck,
    title: "Control",
    description: "Secure, temporary access with economic guardrails — revocable in milliseconds.",
  },
];

export const AetherVision = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-primary font-mono text-xs uppercase tracking-widest mb-4"
        >
          The Aether Protocol
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 max-w-2xl mx-auto leading-tight"
        >
          Other platforms govern what agents{" "}
          <span className="text-muted-foreground">can do</span>.
          <br />
          Aether governs{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            why
          </span>
          .
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
