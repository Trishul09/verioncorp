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
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: ShieldCheck,
      title: "Zero Surveillance",
      description: "No server-side tracking, no content analysis, no behavioral profiling. Your activity stays yours.",
      technologies: ["E2EE", "Zero-Knowledge"],
      gradient: "from-green-500 to-emerald-500"
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
    <section id="features" className="py-32 px-4 relative overflow-hidden" style={{ background: 'var(--gradient-warm)' }}>
      {/* Artistic Background Elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-gradient-to-l from-accent-earth-brown/10 to-transparent organic-shape"></div>
      <div className="absolute bottom-0 left-0 w-2/5 h-3/4 bg-gradient-to-tr from-accent-deep-teal/8 to-transparent asymmetric-layout"></div>
      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Artistic Header */}
        <div className="text-center mb-20 relative">
          <motion.div 
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-accent-warm-gold/10 blur-2xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          ></motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 artistic-text-shadow relative">
            <span className="relative">
              Core <span className="text-gradient">Features</span>
              <motion.div 
                className="absolute -top-6 -right-6 w-4 h-4 rounded-full bg-accent-warm-gold"
                animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with cutting-edge technology to ensure your privacy, security, and sovereignty 
            in the digital world.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group layered-card gradient-subtle border-border/50 p-6 hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 hover-glow organic-shape"
            >
              {/* Icon with Gradient Background */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {feature.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Built for the <span className="text-gradient">Next Generation</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Every feature is designed with privacy-first principles. We use the latest 
              cryptographic techniques, decentralized technologies, and user-centric design 
              to create an experience that puts you back in control.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-primary-foreground" />
                </div>
                <span>End-to-end encryption by default</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                  <Key className="w-4 h-4 text-primary-foreground" />
                </div>
                <span>Your keys, your data, your control</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary-foreground" />
                </div>
                <span>Lightning-fast, seamless interactions</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-morphism rounded-2xl p-8 relative overflow-hidden">
              <div className="network-bg absolute inset-0 opacity-30"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-semibold mb-4">Technical Excellence</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient mb-1">99.9%</div>
                    <div className="text-xs text-muted-foreground">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient mb-1">&lt;100ms</div>
                    <div className="text-xs text-muted-foreground">Latency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient mb-1">256-bit</div>
                    <div className="text-xs text-muted-foreground">Encryption</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient mb-1">0</div>
                    <div className="text-xs text-muted-foreground">Data Leaks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};