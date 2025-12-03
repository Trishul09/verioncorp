import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Shield, Lock, Key, Eye, Users, Globe, Zap, 
  Server, Database, Smartphone, Brain, Network
} from "lucide-react";

export const TechStackSection = () => {
  const techStack = [
    {
      category: "Authentication",
      icon: Key,
      tech: "Institution OAuth + App Attest",
      purpose: "Sybil-resistant entry + Anti-Reverse Engineering",
      privacy: "Real humans, un-tampered app, no personal data",
      color: "from-emerald-500 to-teal-500"
    },
    {
      category: "Identity",
      icon: Users,
      tech: "Epoch-Based Blind Tokens",
      purpose: "Anonymous ID that resets every 30 days",
      privacy: "New month = New digital identity",
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Moderation",
      icon: Shield,
      tech: "Linkable Ring Signatures",
      purpose: "Banning bad actors without doxxing",
      privacy: "Community policed, privacy preserved",
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Governance",
      icon: Lock,
      tech: "Blind Voting Protocol",
      purpose: "DAO-like voting without Web3 wallets",
      privacy: "One person, one vote, zero surveillance",
      color: "from-cyan-500 to-blue-500"
    },
    {
      category: "Communities",
      icon: Globe,
      tech: "Polymorphic Rendering",
      purpose: "Reddit/YouTube/Spotify views from blobs",
      privacy: "Infinite app types, one privacy model",
      color: "from-warm-gold to-warm-orange"
    },
    {
      category: "Storage",
      icon: Database,
      tech: "Postgres + Client-Side Encryption",
      purpose: "Dumb Vault for encrypted content",
      privacy: "Server cannot see content it hosts",
      color: "from-indigo-500 to-purple-500"
    },
    {
      category: "Algorithm",
      icon: Brain,
      tech: "TensorFlow Lite",
      purpose: "Personal feed control on-device",
      privacy: "No manipulation, you control your feed",
      color: "from-pink-500 to-rose-500"
    },
    {
      category: "Network",
      icon: Network,
      tech: "Privacy Relays (MASQUE)",
      purpose: "Hiding User IPs",
      privacy: "Server sees Relay IP, not User IP",
      color: "from-teal-500 to-emerald-500"
    }
  ];

  const privacyGuarantees = [
    { aspect: "Zero Farming", how: "Server holds encrypted blobs + holds NO keys", better: "Facebook/Google" },
    { aspect: "Moderation", how: "Epoch Banning: Block token, not person", better: "Reddit/Discord" },
    { aspect: "Metadata", how: "Relay Servers hide IP; Blind Signatures hide ID", better: "Signal" },
    { aspect: "Sybil Defense", how: "Institutional Trust (University Email)", better: "Worldcoin" },
    { aspect: "User Control", how: "Polymorphic UI: You choose feed or forum", better: "Instagram" },
    { aspect: "Govt Backdoors", how: "Open Source + Forward Secrecy", better: "WhatsApp/Telegram" }
  ];

  return (
    <section id="tech-stack" className="py-32 px-4 relative overflow-hidden" style={{ background: 'var(--gradient-organic)' }}>
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-3/4 bg-gradient-to-tr from-warm-gold/5 to-transparent"></div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 artistic-text-shadow">
            Complete <span className="text-gradient-warm">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every component designed with privacy as the foundation, not an afterthought.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {techStack.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Card className="glass-warm border-border/30 p-6 h-full hover:shadow-organic transition-all duration-500 hover:-translate-y-2">
                <motion.div 
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-md`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </motion.div>
                <span className="text-xs font-mono text-muted-foreground uppercase">{item.category}</span>
                <h3 className="text-lg font-bold mb-2">{item.tech}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.purpose}</p>
                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <Shield className="w-3 h-3" />
                  <span>{item.privacy}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="glass-warm border-primary/20 p-10">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Key Privacy <span className="text-gradient">Guarantees</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {privacyGuarantees.map((item, index) => (
                <motion.div
                  key={index}
                  className="glass-morphism rounded-xl p-5"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="font-bold text-primary mb-2">{item.aspect}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{item.how}</p>
                  <p className="text-xs text-emerald-400">
                    Better than: <span className="text-muted-foreground">{item.better}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
