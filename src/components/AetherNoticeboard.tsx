import { motion } from "framer-motion";
import { AlertTriangle, ExternalLink } from "lucide-react";

const incidents = [
  {
    title: "AI agent deleted production database without notice",
    source: "Business Today",
    date: "April 27, 2026",
    summary:
      "It took 9 seconds — an AI agent running on Anthropic's Claude Opus 4.6 wiped a company's critical database.",
    href: "https://www.businesstoday.in/technology/story/it-took-9-seconds-ai-agent-running-on-anthropics-claude-opus-46-wipes-critical-database-527552-2026-04-27",
  },
];

export const AetherNoticeboard = () => {
  return (
    <section id="protect" className="py-32 relative">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-destructive font-mono text-xs uppercase tracking-widest mb-4"
        >
          Noticeboard
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-wide"
        >
          What We Protect Against
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 tracking-wide"
        >
          Real incidents. Real consequences. The reason agentic IAM matters.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {incidents.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-destructive/40 hover:shadow-lg transition-all duration-500 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-3 leading-snug group-hover:text-destructive transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {item.summary}
              </p>
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-muted-foreground/80 pt-4 border-t border-border/40">
                <span>{item.source}</span>
                <span>{item.date}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
