import { Card } from "@/components/ui/card";
import { Check, X, Shield, Eye, Brain } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";
import { motion } from "framer-motion";

export const ComparisonSection = () => {
  const platforms = [
    {
      name: "WhatsApp",
      logo: "💬",
      color: "text-green-500"
    },
    {
      name: "Instagram", 
      logo: "📷",
      color: "text-pink-500"
    },
    {
      name: "Telegram",
      logo: "✈️", 
      color: "text-blue-500"
    },
    {
      name: "Our Platform",
      logo: "🛡️",
      color: "text-gradient",
      highlight: true
    }
  ];

  const comparisons = [
    {
      category: "Privacy & Ownership",
      icon: Shield,
      features: [
        {
          name: "End-to-End Encryption",
          whatsapp: true,
          instagram: false,
          telegram: "partial",
          ours: true
        },
        {
          name: "Zero Data Collection",
          whatsapp: false,
          instagram: false,
          telegram: false,
          ours: true
        },
        {
          name: "Own Your Identity",
          whatsapp: false,
          instagram: false,
          telegram: false,
          ours: true
        },
        {
          name: "No Content Farming",
          whatsapp: "partial",
          instagram: false,
          telegram: "partial",
          ours: true
        }
      ]
    },
    {
      category: "Surveillance & Tracking",
      icon: Eye,
      features: [
        {
          name: "No Behavioral Tracking",
          whatsapp: false,
          instagram: false,
          telegram: false,
          ours: true
        },
        {
          name: "No Ad Profiling",
          whatsapp: false,
          instagram: false,
          telegram: "partial",
          ours: true
        },
        {
          name: "Government Backdoors",
          whatsapp: "unknown",
          instagram: "yes",
          telegram: "unknown",
          ours: false
        }
      ]
    },
    {
      category: "Mental Health",
      icon: Brain,
      features: [
        {
          name: "No Addictive Algorithms",
          whatsapp: "partial",
          instagram: false,
          telegram: "partial",
          ours: true
        },
        {
          name: "User Control Priority",
          whatsapp: "partial",
          instagram: false,
          telegram: "partial",
          ours: true
        },
        {
          name: "Authentic Connections",
          whatsapp: "partial",
          instagram: false,
          telegram: "partial",
          ours: true
        }
      ]
    }
  ];

  const renderStatusIcon = (status: boolean | string) => {
    if (status === true) {
      return <Check className="w-4 h-4 text-green-500" />;
    } else if (status === false) {
      return <X className="w-4 h-4 text-red-500" />;
    } else if (status === "partial") {
      return (
        <div className="w-4 h-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
        </div>
      );
    } else {
      return <span className="text-xs text-muted-foreground">{status}</span>;
    }
  };

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Artistic Background Layers - matching HeroSection */}
      <div className="absolute inset-0 gradient-organic"></div>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-accent-warm-gold/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-2/5 h-3/4 bg-gradient-to-tl from-accent-deep-teal/5 to-transparent organic-shape"></div>
      <AnimatedBackground />
      
      {/* Artistic Floating Elements */}
      <motion.div
        className="absolute top-20 left-1/4 w-16 h-16 artistic-circle bg-accent-warm-gold/10"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-32 right-1/4 w-24 h-24 organic-shape bg-accent-deep-teal/10"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute bottom-40 left-1/6 w-12 h-32 bg-accent-muted-lavender/20 organic-shape"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 15, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/6 w-8 h-8 rounded-full bg-primary/40"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism mb-8 hover-glow"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Platform Comparison</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight artistic-text-shadow"
          >
            Why We're{" "}
            <span className="text-gradient relative">
              Different
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent-warm-gold to-accent-deep-teal rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 1 }}
              />
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A honest comparison with existing platforms. See how privacy-first architecture 
            changes everything about digital interaction.
          </motion.p>
        </motion.div>

        {/* Comparison Tables */}
        <div className="space-y-12">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <Card className="glass-morphism border-border/30 p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                    <comparison.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">{comparison.category}</h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="text-left py-4 px-2">Feature</th>
                        {platforms.map((platform, platformIndex) => (
                          <th key={platformIndex} className={`text-center py-4 px-2 ${platform.highlight ? 'bg-primary/10 rounded-t-lg' : ''}`}>
                            <div className="flex flex-col items-center gap-2">
                              <span className="text-2xl">{platform.logo}</span>
                              <span className={`text-sm font-medium ${platform.color}`}>
                                {platform.name}
                              </span>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {comparison.features.map((feature, featureIndex) => (
                        <tr key={featureIndex} className="border-b border-border/30 hover:bg-card/50 transition-colors">
                          <td className="py-4 px-2 font-medium">{feature.name}</td>
                          <td className="text-center py-4 px-2">
                            {renderStatusIcon(feature.whatsapp)}
                          </td>
                          <td className="text-center py-4 px-2">
                            {renderStatusIcon(feature.instagram)}
                          </td>
                          <td className="text-center py-4 px-2">
                            {renderStatusIcon(feature.telegram)}
                          </td>
                          <td className="text-center py-4 px-2 bg-primary/10">
                            {renderStatusIcon(feature.ours)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key Differentiator */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <Card className="glass-morphism border-secondary/30 p-12 text-center shadow-glow">
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-6">
                The Fundamental Difference
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                While other platforms treat you as the product, we treat you as the owner. 
                Your data, identity, and connections belong to you—not to advertisers, 
                not to governments, not to corporations.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-morphism rounded-2xl p-6 hover:shadow-2xl hover:shadow-accent-warm-gold/20 transition-all"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent-warm-gold/20 flex items-center justify-center">
                    <div className="text-xl font-bold text-accent-warm-gold">0%</div>
                  </div>
                  <div className="text-sm text-muted-foreground">Revenue from ads</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-morphism rounded-2xl p-6 hover:shadow-2xl hover:shadow-accent-deep-teal/20 transition-all"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent-deep-teal/20 flex items-center justify-center">
                    <div className="text-xl font-bold text-accent-deep-teal">100%</div>
                  </div>
                  <div className="text-sm text-muted-foreground">User-owned data</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-morphism rounded-2xl p-6 hover:shadow-2xl hover:shadow-accent-muted-lavender/20 transition-all"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent-muted-lavender/20 flex items-center justify-center">
                    <div className="text-xl font-bold text-accent-muted-lavender">∞</div>
                  </div>
                  <div className="text-sm text-muted-foreground">Privacy protection</div>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};