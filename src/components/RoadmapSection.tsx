import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Shield, Lock, Key, Eye, Users, Globe, Zap, 
  Server, Database, Smartphone, Monitor, Rocket
} from "lucide-react";

export const RoadmapSection = () => {
  const phases = [
    {
      phase: 1,
      title: "Foundation & The Blind Vault",
      timeline: "Months 1-6",
      objective: "Build the secure, blinded tunnel and the unreadable storage vault.",
      icon: Shield,
      color: "from-emerald-500 to-teal-500",
      milestones: [
        { name: "Backend Core", tech: "Go + gRPC + App Attestation", privacy: "Anti-Reverse Engineering" },
        { name: "Storage Layer", tech: "PostgreSQL (Encrypted Blobs)", privacy: "Zero-Knowledge Vault" },
        { name: "Auth System", tech: "Institution OAuth", privacy: "No PII Stored" },
        { name: "Privacy Layer", tech: "MLS Protocol", privacy: "Forward Secrecy" }
      ]
    },
    {
      phase: 2,
      title: "Polymorphic Communities",
      timeline: "Months 7-12",
      objective: "The Smart Brain Frontend - transforming encrypted blobs into diverse social experiences.",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      milestones: [
        { name: "Blind Identity", tech: "Privacy Pass + Epoch Tokens", privacy: "Server Blindness" },
        { name: "Polymorphic UI", tech: "React Native + Render Engine", privacy: "Contextual Privacy" },
        { name: "Venn UI", tech: "TensorFlow Lite", privacy: "Client-Side Compute" },
        { name: "Content Host", tech: "Cloud + Client Encryption", privacy: "Zero-Knowledge Hosting" }
      ]
    },
    {
      phase: 3,
      title: "Sovereign Governance",
      timeline: "Months 13-18",
      objective: "Solving the 'Bad Actor' problem with user governance - no Web3 wallets needed.",
      icon: Key,
      color: "from-orange-500 to-red-500",
      milestones: [
        { name: "Blind DAO", tech: "Cryptographic Voting", privacy: "Secret Ballot" },
        { name: "Moderation", tech: "Linkable Ring Signatures", privacy: "Privacy-Preserving Bans" },
        { name: "Sovereign Store", tech: "IPFS / Local Pinning", privacy: "Data Sovereignty" },
        { name: "Network Shield", tech: "Privacy Relays (MASQUE)", privacy: "Metadata Protection" }
      ]
    },
    {
      phase: 4,
      title: "Launch & Growth",
      timeline: "Months 19-24",
      objective: "Scaling the trust model to millions of users.",
      icon: Rocket,
      color: "from-cyan-500 to-blue-500",
      milestones: [
        { name: "Mobile Apps", tech: "React Native (iOS/Android)", privacy: "App Attestation Enforced" },
        { name: "Web App", tech: "Next.js 15 (WASM)", privacy: "Browser Privacy" },
        { name: "Growth", tech: "Viral Loops", privacy: "Anti-Viral Algo" },
        { name: "Partnerships", tech: "SAML Integration", privacy: "Institutional Trust" }
      ]
    },
    {
      phase: 5,
      title: "Global Scale",
      timeline: "Months 25-60",
      objective: "Global distribution and infrastructure independence.",
      icon: Globe,
      color: "from-warm-gold to-warm-orange",
      milestones: [
        { name: "Infrastructure", tech: "Multi-Cloud + Geo-Sharding", privacy: "Jurisdictional Safety" },
        { name: "Direct Connect", tech: "WebRTC P2P", privacy: "Zero-Server Path" },
        { name: "Monetization", tech: "Premium Sovereign Tiers", privacy: "Privacy-First Revenue" }
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-32 px-4 relative overflow-hidden" style={{ background: 'var(--gradient-earth-dark)' }}>
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-primary/5 to-transparent organic-shape"></div>
      <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-warm-gold/5 to-transparent"></div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-warm-gold rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
          <h2 className="text-4xl md:text-6xl font-bold mb-6 artistic-text-shadow">
            Development <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A 5-year journey to build the most private social platform ever created.
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-warm border-border/30 p-8 hover:shadow-organic transition-all duration-500">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div 
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <phase.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <span className="text-sm text-muted-foreground font-mono">Phase {phase.phase}</span>
                        <h3 className="text-xl font-bold">{phase.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-2">{phase.objective}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${phase.color} text-white`}>
                      {phase.timeline}
                    </span>
                  </div>
                  
                  <div className="lg:w-2/3 grid md:grid-cols-2 gap-4">
                    {phase.milestones.map((milestone, mIndex) => (
                      <motion.div
                        key={mIndex}
                        className="glass-morphism rounded-xl p-4"
                        whileHover={{ scale: 1.02 }}
                      >
                        <h4 className="font-semibold mb-2">{milestone.name}</h4>
                        <p className="text-xs text-muted-foreground mb-1">
                          <span className="text-primary">Tech:</span> {milestone.tech}
                        </p>
                        <p className="text-xs text-emerald-400">
                          <Shield className="w-3 h-3 inline mr-1" />
                          {milestone.privacy}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
