import { Card } from "@/components/ui/card";
import { Check, X, Shield, Eye, Brain, Coins } from "lucide-react";

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
    <section className="py-32 px-4">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why We're <span className="text-gradient">Different</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A honest comparison with existing platforms. See how privacy-first architecture 
            changes everything about digital interaction.
          </p>
        </div>

        {/* Comparison Tables */}
        <div className="space-y-12">
          {comparisons.map((comparison, index) => (
            <Card key={index} className="gradient-subtle border-border/50 p-8">
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
                        <th key={platformIndex} className={`text-center py-4 px-2 ${platform.highlight ? 'bg-primary/5 rounded-t-lg' : ''}`}>
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
                        <td className={`text-center py-4 px-2`}>
                          {renderStatusIcon(feature.whatsapp)}
                        </td>
                        <td className={`text-center py-4 px-2`}>
                          {renderStatusIcon(feature.instagram)}
                        </td>
                        <td className={`text-center py-4 px-2`}>
                          {renderStatusIcon(feature.telegram)}
                        </td>
                        <td className={`text-center py-4 px-2 bg-primary/5`}>
                          {renderStatusIcon(feature.ours)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Differentiator */}
        <div className="mt-20">
          <Card className="gradient-subtle border-primary/20 p-12 text-center">
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
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-gradient mb-2">0%</div>
                  <div className="text-sm text-muted-foreground">Revenue from ads</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">User-owned data</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold text-gradient mb-2">∞</div>
                  <div className="text-sm text-muted-foreground">Privacy protection</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};