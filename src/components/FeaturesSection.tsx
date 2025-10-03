import { Card } from "@/components/ui/card";
import { 
  Fingerprint, 
  ShieldCheck, 
  Bot, 
  Zap, 
  HardDrive, 
  Globe,
  Key,
  Users
} from "lucide-react";
import { motion } from "framer-motion";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Fingerprint,
      title: "Identity Ownership",
      description: "DID, Verifiable Credentials, and UCAN tokens give you complete control over your digital identity.",
      technologies: ["DID", "VC", "UCAN"],
      gradient: "from-warm-gold to-warm-orange"
    },
    {
      icon: ShieldCheck,
      title: "Zero Surveillance",
      description: "No server-side tracking, no content analysis, no behavioral profiling. Your activity stays yours.",
      technologies: ["E2EE", "Zero-Knowledge"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Bot,
      title: "AI Assistants",
      description: "Personal AI that learns your preferences privately. Roleplay, translation, and smart automation.",
      technologies: ["Local AI", "Privacy-First"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Gasless Web3",
      description: "Interact with blockchain features without complexity or transaction fees. Seamless crypto integration.",
      technologies: ["Layer 2", "Meta-Transactions"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: HardDrive,
      title: "Offline-First",
      description: "Your personal space works completely offline. Sync when you want, stay private when you don't.",
      technologies: ["Local Storage", "P2P Sync"],
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: Globe,
      title: "Real-Time Translation",
      description: "Communicate across languages instantly with privacy-preserving translation that runs locally.",
      technologies: ["Local Models", "Real-Time"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Key,
      title: "Cryptographic Privacy",
      description: "Military-grade encryption, zero-knowledge proofs, and advanced cryptography protect your data.",
      technologies: ["ZK-Proofs", "AES-256"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Users,
      title: "Social Discovery",
      description: "Find like-minded people and communities without revealing personal information or preferences.",
      technologies: ["Anonymous Matching", "Privacy-Preserving"],
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section id="features" className="py-32 px-4 relative overflow-hidden" style={{ background: 'var(--gradient-organic)' }}>
      {/* Artistic Background Elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-gradient-to-l from-warm-sienna/10 to-transparent organic-shape"></div>
      <div className="absolute bottom-0 left-0 w-2/5 h-3/4 bg-gradient-to-tr from-primary/8 to-transparent asymmetric-clip"></div>
      
      {/* Floating Ambient Lights */}
      <motion.div
        className="absolute top-20 left-1/4 w-40 h-40 rounded-full bg-warm-gold/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-1/3 w-48 h-48 rounded-full bg-primary/8 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.4, 0.15],
          x: [0, -25, 0],
          y: [0, 15, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Artistic Header */}
        <div className="text-center mb-20 relative">
          <motion.div 
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-warm-gold/10 blur-2xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 artistic-text-shadow relative inline-block">
              Core <span className="text-gradient-warm">Features</span>
              <motion.div 
                className="absolute -top-8 -right-8 w-5 h-5 rounded-full bg-warm-gold"
                animate={{ 
                  y: [0, -12, 0], 
                  opacity: [0.4, 1, 0.4],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Built with cutting-edge technology to ensure your privacy, security, and sovereignty 
              in the digital world.
            </p>
          </motion.div>
        </div>

        {/* Features Grid - Asymmetric Staggered Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              style={{ marginTop: index % 2 === 0 ? 0 : '2rem' }}
            >
              <Card 
                className="group layered-depth glass-warm border-border/30 p-6 hover:shadow-organic transition-all duration-500 hover:-translate-y-3 hover-lift organic-shape h-full flex flex-col"
              >
                {/* Artistic Icon Container */}
                <motion.div 
                  className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-md`}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                {/* Title with Artistic Underline */}
                <h3 className="text-lg font-serif font-semibold mb-3 group-hover:text-warm-gold transition-colors relative inline-block">
                  {feature.title}
                  <motion.div
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${feature.gradient} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                  {feature.description}
                </p>

                {/* Technologies - Artistic Pills */}
                <div className="flex flex-wrap gap-2">
                  {feature.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-1 text-xs font-medium bg-gradient-to-r ${feature.gradient} bg-opacity-10 text-foreground rounded-full border border-border/30 backdrop-blur-sm`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlight - Asymmetric Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="diagonal-flow"
          >
            <div className="relative">
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-warm-gold/20 blur-xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <h3 className="text-3xl font-serif font-bold mb-6 relative">
                Built for the <span className="text-gradient-warm drop-cap-target">Next Generation</span>
              </h3>
            </div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every feature is designed with privacy-first principles. We use the latest 
              cryptographic techniques, decentralized technologies, and user-centric design 
              to create an experience that puts you back in control.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: ShieldCheck, text: "End-to-end encryption by default" },
                { icon: Key, text: "Your keys, your data, your control" },
                { icon: Zap, text: "Lightning-fast, seamless interactions" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-warm-gold to-warm-orange flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="artistic-frame layered-depth glass-warm rounded-3xl p-10 relative overflow-hidden texture-overlay">
              <div className="network-bg absolute inset-0 opacity-20"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-serif font-semibold mb-8 text-center">Technical Excellence</h4>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "99.9%", label: "Uptime", color: "from-emerald-400 to-teal-400" },
                    { value: "<100ms", label: "Latency", color: "from-warm-gold to-warm-orange" },
                    { value: "256-bit", label: "Encryption", color: "from-purple-500 to-pink-500" },
                    { value: "0", label: "Data Leaks", color: "from-primary to-accent" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center glass-morphism rounded-2xl p-5"
                    >
                      <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};