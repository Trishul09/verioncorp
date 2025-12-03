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
      title: "Blind Vault Storage",
      description: "Server holds encrypted blobs with ZERO keys. We literally cannot read your data even if forced.",
      technologies: ["PostgreSQL", "Client Encryption"],
      gradient: "from-warm-gold to-warm-orange"
    },
    {
      icon: ShieldCheck,
      title: "Epoch-Based Identity",
      description: "30-day anonymous tokens. New month = new digital identity. Server validates without knowing who.",
      technologies: ["Privacy Pass", "ECC Tokens"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Bot,
      title: "On-Device Algorithm",
      description: "TensorFlow Lite runs on YOUR phone. No central ranking or manipulation. You control your feed.",
      technologies: ["TensorFlow Lite", "Client-Side"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Blind DAO Governance",
      description: "Vote on community rules with cryptographic counters. One person, one vote, zero surveillance.",
      technologies: ["Blind Voting", "No Web3 Wallet"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: HardDrive,
      title: "Polymorphic Rendering",
      description: "Same backend powers Reddit threads, YouTube videos, Spotify audio. Infinite apps, one privacy model.",
      technologies: ["React Native", "Dynamic UI"],
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: Globe,
      title: "Privacy Relays (MASQUE)",
      description: "Optional routing hides your IP from servers. Tor-lite protection without the complexity.",
      technologies: ["IP Masking", "Metadata Defense"],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Key,
      title: "Forward Secrecy (MLS)",
      description: "Compromising a key today reveals ZERO past messages. Military-grade cryptographic protection.",
      technologies: ["MLS Protocol", "Zero-Knowledge"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Users,
      title: "Ring Signature Bans",
      description: "Communities can ban bad actors without revealing their identity. Privacy-preserving moderation.",
      technologies: ["Linkable Ring Sigs", "Epoch Banning"],
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
                Better Than <span className="text-gradient-warm drop-cap-target">Every Alternative</span>
              </h3>
            </div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We don't just match existing platforms—we surpass them in every privacy metric.
              Mathematical guarantees, not policy promises. Open source, not trust-us rhetoric.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: ShieldCheck, text: "Server holds ZERO keys (unlike WhatsApp)" },
                { icon: Key, text: "Epoch tokens reset monthly (unlike Signal)" },
                { icon: Zap, text: "On-device algorithm (unlike Instagram)" }
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
                <h4 className="text-2xl font-serif font-semibold mb-8 text-center">Privacy Guarantees</h4>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "0", label: "Keys on Server", color: "from-emerald-400 to-teal-400" },
                    { value: "30d", label: "Identity Reset", color: "from-warm-gold to-warm-orange" },
                    { value: "MLS", label: "Forward Secrecy", color: "from-purple-500 to-pink-500" },
                    { value: "P2P", label: "Direct Calls", color: "from-primary to-accent" }
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