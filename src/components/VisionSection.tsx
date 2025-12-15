import { Card } from "@/components/ui/card";
import { Eye, Shield, Users, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const VisionSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const problems = [
    {
      icon: Eye,
      title: "Zero-Knowledge Farming",
      description: "Current platforms read everything you post. Our server holds encrypted blobs with NO keys."
    },
    {
      icon: Users,
      title: "Identity Exploitation",
      description: "Platforms track you forever. We use 30-day Epoch Tokens - new month, new digital identity."
    },
    {
      icon: Zap,
      title: "Algorithmic Control",
      description: "They decide what you see. Our on-device TensorFlow Lite puts YOU in control of your feed."
    }
  ];

  const solutions = [
    {
      icon: Shield,
      title: "Blind Vault Architecture",
      description: "Server stores content it cannot read. Zero-knowledge hosting with client-side encryption."
    },
    {
      icon: Users,
      title: "Polymorphic Communities",
      description: "One backend powers Reddit-style threads, YouTube-style video, and Spotify-style audio."
    },
    {
      icon: Zap,
      title: "Sovereign Governance",
      description: "Blind DAO voting without Web3 wallets. Ban bad actors without revealing identities."
    }
  ];

  return (
    <motion.section 
      ref={ref}
      id="vision" 
      className="py-32 px-4 relative overflow-hidden bg-background"
    >
      {/* Dynamic Background - matching Architecture/Features sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.1),transparent_50%)]"></div>
      
      {/* Ambient light effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <div className="container max-w-7xl mx-auto">
        {/* Header - matching Architecture/Features style */}
        <motion.div 
          className="text-center mb-20 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Vision
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Why Privacy-First{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Matters
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The current social architecture is broken. We're building something fundamentally different.
          </p>
        </motion.div>

        {/* Problem Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-destructive">The Problem</h3>
            <p className="text-muted-foreground">What's wrong with current platforms</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/30 p-8 hover:border-destructive/30 transition-all duration-300 hover:shadow-lg hover:shadow-destructive/5 group">
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <problem.icon className="w-8 h-8 text-destructive group-hover:scale-110 transition-transform" />
                    </motion.div>
                    <h4 className="text-xl font-semibold mb-4">{problem.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Our Solution</h3>
            <p className="text-muted-foreground">A new paradigm for digital interaction</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/30 p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
                  <div className="flex flex-col items-center text-center">
                    <motion.div 
                      className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.1, rotate: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <solution.icon className="w-8 h-8 text-primary-foreground group-hover:scale-110 transition-transform" />
                    </motion.div>
                    <h4 className="text-xl font-semibold mb-4">{solution.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-12 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02, borderColor: 'hsl(var(--primary) / 0.3)' }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready for Change?</h3>
            <p className="text-muted-foreground">
              Join thousands building the future of digital interaction.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};