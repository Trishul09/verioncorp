import { motion } from "framer-motion";

export const AetherClosing = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[120px]" />
      </div>
      <div className="container max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/90 italic tracking-wide"
        >
          "In the future, companies won't manage employees — they'll manage AI agents.{" "}
          <span className="not-italic font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Aether becomes the identity layer for that world.
          </span>
          "
        </motion.blockquote>
      </div>
    </section>
  );
};
