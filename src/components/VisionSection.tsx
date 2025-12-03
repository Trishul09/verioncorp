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
      className="py-32 px-4 relative overflow-hidden"
      style={{ background: 'var(--gradient-artistic)' }}
    >
      {/* Artistic Background Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-accent-earth-brown/8 to-transparent organic-shape"></div>
      <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-accent-warm-gold/5 to-transparent asymmetric-layout"></div>
      {/* Floating Elements */}
      <motion.div
        style={{ y }}
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-accent/10 blur-xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <div className="container max-w-7xl mx-auto">
        {/* Artistic Header */}
        <div className="text-center mb-20 relative">
          <motion.div 
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-accent-warm-gold rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          ></motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 artistic-text-shadow">
            Why Privacy-First <span className="text-gradient relative">Matters
              <motion.div 
                className="absolute -bottom-3 left-0 right-0 h-1 bg-accent-warm-gold/60 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                viewport={{ once: true }}
              ></motion.div>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The current social architecture is broken. We're building something fundamentally different.
          </p>
        </div>

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
                <Card className="layered-card gradient-subtle border-border/50 p-8 hover:shadow-card transition-smooth hover-glow group organic-shape">
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
                <Card className="layered-card gradient-subtle border-primary/20 p-8 hover:shadow-glow transition-smooth hover-glow group organic-shape">
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
            className="glass-morphism rounded-2xl p-12 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold mb-4">Ready for Change?</h3>
            <p className="text-muted-foreground">
              Join thousands building the future of digital interaction.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};