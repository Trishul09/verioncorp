import { Card } from "@/components/ui/card";
import { Eye, Shield, Users, Zap } from "lucide-react";

export const VisionSection = () => {
  const problems = [
    {
      icon: Eye,
      title: "Surveillance Economy",
      description: "Your data becomes their profit while you lose privacy and control."
    },
    {
      icon: Users,
      title: "Fake Connections",
      description: "Algorithmic feeds prioritize engagement over authentic relationships."
    },
    {
      icon: Zap,
      title: "Mental Manipulation",
      description: "Designed addiction patterns harm mental health and autonomy."
    }
  ];

  const solutions = [
    {
      icon: Shield,
      title: "User-Owned Identity",
      description: "Your identity, your keys, your data. Complete ownership and control."
    },
    {
      icon: Users,
      title: "Privacy Layers",
      description: "Granular control over what's shared, when, and with whom."
    },
    {
      icon: Zap,
      title: "Seamless UX",
      description: "Privacy-first doesn't mean complex. Simple, intuitive interactions."
    }
  ];

  return (
    <section className="py-32 px-4">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why Privacy-First <span className="text-gradient">Matters</span>
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
              <Card key={index} className="gradient-subtle border-border/50 p-8 hover:shadow-card transition-smooth hover-glow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
                    <problem.icon className="w-8 h-8 text-destructive" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">{problem.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              </Card>
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
              <Card key={index} className="gradient-subtle border-primary/20 p-8 hover:shadow-glow transition-smooth hover-glow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-6">
                    <solution.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">{solution.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="glass-morphism rounded-2xl p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready for Change?</h3>
            <p className="text-muted-foreground">
              Join thousands building the future of digital interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};