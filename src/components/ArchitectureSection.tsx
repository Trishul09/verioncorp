import { useState } from "react";
import { Card } from "@/components/ui/card";
import { User, Users, Globe, Lock, Eye, Shield } from "lucide-react";

export const ArchitectureSection = () => {
  const [hoveredLayer, setHoveredLayer] = useState<string | null>(null);

  const layers = [
    {
      id: "personal",
      title: "Personal Space",
      icon: User,
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30",
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
    <section id="architecture" className="py-32 px-4">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Three-Layer <span className="text-gradient">Architecture</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A new model for digital interaction. Each layer provides different privacy levels 
            and social contexts, all under your complete control.
          </p>
        </div>

        {/* Interactive Diagram */}
        <div className="relative mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {layers.map((layer, index) => (
              <Card
                key={layer.id}
                className={`
                  relative p-8 cursor-pointer transition-all duration-500 hover:shadow-elegant
                  ${hoveredLayer === layer.id ? 'scale-105 shadow-glow' : ''}
                  ${layer.bgColor} ${layer.borderColor} border-2
                `}
                onMouseEnter={() => setHoveredLayer(layer.id)}
                onMouseLeave={() => setHoveredLayer(null)}
              >
                {/* Layer Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${layer.bgColor} flex items-center justify-center mb-6 mx-auto`}>
                  <layer.icon className={`w-8 h-8 ${layer.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-center mb-4">{layer.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                  {layer.description}
                </p>

                {/* Privacy Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      Privacy:
                    </span>
                    <span className={`font-semibold ${layer.color}`}>
                      {layer.privacy}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Visible to:
                    </span>
                    <span className="text-muted-foreground">
                      {layer.visibility}
                    </span>
                  </div>
                </div>

                {/* Features - Only show when hovered */}
                <div className={`
                  transition-all duration-300 overflow-hidden
                  ${hoveredLayer === layer.id ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <div className="border-t border-border/50 pt-4">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {layer.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-current"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Connection Lines */}
          <div className="hidden md:flex absolute top-1/2 left-0 right-0 items-center justify-between px-8 pointer-events-none">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent ml-8"></div>
          </div>
        </div>

        {/* Benefits */}
        <div className="text-center">
          <div className="glass-morphism rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">
              Why This Architecture Works
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold mb-3 text-primary">Granular Privacy</h4>
                <p className="text-muted-foreground text-sm">
                  Choose exactly what to share at each layer. Your personal space stays completely private, 
                  while you can selectively engage in communities and public discourse.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-accent">Contextual Interaction</h4>
                <p className="text-muted-foreground text-sm">
                  Different layers serve different social needs. Private reflection, community building, 
                  and public engagement all have their proper place and protection level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};