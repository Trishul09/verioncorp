import { useState } from "react";
import { Card } from "@/components/ui/card";
import { User, Users, Globe, Lock, Eye, Shield } from "lucide-react";
import { motion } from "framer-motion";

export const ArchitectureSection = () => {
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);

  const layers = [
    {
      id: "personal",
      title: "Personal Space",
      icon: User,
      color: "text-warm-gold",
      bgColor: "bg-warm-gold/10",
      borderColor: "border-warm-gold/30",
      accentGradient: "from-warm-gold to-warm-orange",
      description: "Your private realm. Complete control, end-to-end encryption.",
      features: [
        "Private conversations",
        "Personal AI assistants",
        "Encrypted file storage",
        "Offline-first architecture"
      ],
      privacy: "100% Private",
      visibility: "Only you"
    },
    {
      id: "crowds",
      title: "Crowds",
      icon: Users,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30",
      accentGradient: "from-primary to-accent",
      description: "Curated groups with selective sharing and privacy controls.",
      features: [
        "Interest-based communities",
        "Selective data sharing",
        "Group AI collaboration",
        "Reputation-based access"
      ],
      privacy: "Selective Sharing",
      visibility: "Chosen groups"
    },
    {
      id: "townsquare",
      title: "Town Square",
      icon: Globe,
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
      borderColor: "border-emerald-400/30",
      accentGradient: "from-emerald-400 to-teal-400",
      description: "Public interactions with privacy-preserving social discovery.",
      features: [
        "Public discussions",
        "Content discovery",
        "Pseudonymous interactions",
        "Zero-knowledge proofs"
      ],
      privacy: "Pseudonymous",
      visibility: "Public (anonymous)"
    }
  ];

  return (
    <section id="architecture" className="py-32 px-4 relative overflow-hidden" style={{ background: 'var(--gradient-earth-dark)' }}>
      {/* Artistic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-warm-orange/8 to-transparent organic-shape"></div>
      <div className="absolute bottom-0 left-0 w-2/5 h-3/5 bg-gradient-to-tr from-primary/5 to-transparent"></div>
      
      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-20 left-1/4 w-32 h-32 rounded-full bg-warm-gold/5 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-1/4 w-40 h-40 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />
      
      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Artistic Header */}
        <div className="text-center mb-20 relative">
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-warm-gold rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          />
          <h2 className="text-4xl md:text-6xl font-bold mb-6 artistic-text-shadow">
            Three-Layer <span className="text-gradient-warm">Architecture</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A new model for digital interaction. Each layer provides different privacy levels 
            and social contexts, all under your complete control.
          </p>
        </div>

        {/* Interactive Circular Diagram */}
        <div className="relative mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`
                    artistic-frame relative p-8 cursor-pointer transition-all duration-500 
                    ${hoveredLayer === layer.id ? 'scale-105 shadow-organic' : 'shadow-warm'}
                    ${layer.bgColor} ${layer.borderColor} border-2
                    glass-warm hover-lift organic-shape
                  `}
                  onMouseEnter={() => setHoveredLayer(layer.id)}
                  onMouseLeave={() => setHoveredLayer(null)}
                >
                  {/* Decorative Number Badge */}
                  <motion.div 
                    className={`absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br ${layer.accentGradient} flex items-center justify-center text-sm font-bold shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Organic Icon Container */}
                  <motion.div 
                    className={`w-20 h-20 rounded-full ${layer.bgColor} border-2 ${layer.borderColor} flex items-center justify-center mb-6 mx-auto`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <layer.icon className={`w-10 h-10 ${layer.color}`} />
                  </motion.div>

                  {/* Title with Decorative Underline */}
                  <h3 className="text-2xl font-serif font-bold text-center mb-4 relative">
                    {layer.title}
                    <motion.div
                      className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r ${layer.accentGradient} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: hoveredLayer === layer.id ? "80%" : "40%" }}
                      transition={{ duration: 0.4 }}
                    />
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-center mb-6 leading-relaxed text-sm">
                    {layer.description}
                  </p>

                  {/* Privacy Info Cards */}
                  <div className="space-y-3 mb-6">
                    <div className="glass-morphism rounded-lg p-3 flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm">
                        <Lock className="w-4 h-4" />
                        Privacy:
                      </span>
                      <span className={`font-semibold text-sm ${layer.color}`}>
                        {layer.privacy}
                      </span>
                    </div>
                    <div className="glass-morphism rounded-lg p-3 flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm">
                        <Eye className="w-4 h-4" />
                        Visible to:
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {layer.visibility}
                      </span>
                    </div>
                  </div>

                  {/* Features - Expandable */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: hoveredLayer === layer.id ? "auto" : 0,
                      opacity: hoveredLayer === layer.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border/50 pt-4">
                      <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm">
                        <Shield className="w-4 h-4" />
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {layer.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="text-sm text-muted-foreground flex items-center gap-2"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${layer.accentGradient}`}></div>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Organic Connection Lines */}
          <div className="hidden md:flex absolute top-1/2 left-0 right-0 items-center justify-between px-12 pointer-events-none">
            <svg className="w-full h-1" preserveAspectRatio="none">
              <motion.path
                d="M 0 0 Q 50 -10, 100 0"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              />
              <defs>
                <linearGradient id="gradient1">
                  <stop offset="0%" stopColor="hsl(var(--warm-gold))" stopOpacity="0" />
                  <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Benefits - Artistic Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="layered-depth glass-warm rounded-3xl p-12 max-w-4xl mx-auto texture-overlay">
            <h3 className="text-3xl font-serif font-bold mb-8">
              Why This Architecture Works
            </h3>
            <div className="grid md:grid-cols-2 gap-10 text-left">
              <motion.div
                whileHover={{ x: 5 }}
                className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-warm-gold before:to-warm-orange before:rounded-full"
              >
                <h4 className="font-semibold mb-3 text-warm-gold text-lg">Granular Privacy</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Choose exactly what to share at each layer. Your personal space stays completely private, 
                  while you can selectively engage in communities and public discourse.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-primary before:to-accent before:rounded-full"
              >
                <h4 className="font-semibold mb-3 text-primary text-lg">Contextual Interaction</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Different layers serve different social needs. Private reflection, community building, 
                  and public engagement all have their proper place and protection level.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};