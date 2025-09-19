import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Wallet, Users, Zap, Shield, Globe } from "lucide-react";

export const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would integrate with your actual waitlist service
    }
  };

  const benefits = [
    {
      icon: Users,
      title: "Early Access",
      description: "Be among the first to experience the future of digital identity"
    },
    {
      icon: Zap,
      title: "Beta Testing",
      description: "Help shape the platform with your feedback and suggestions"
    },
    {
      icon: Shield,
      title: "Founder Perks",
      description: "Exclusive benefits and recognition as a founding community member"
    }
  ];

  const milestones = [
    {
      phase: "Phase 1",
      title: "Private Beta",
      status: "In Progress",
      features: ["Core architecture", "Personal Space", "Basic encryption"],
      timeline: "Q1 2024"
    },
    {
      phase: "Phase 2", 
      title: "Community Beta",
      status: "Coming Soon",
      features: ["Crowds layer", "Group privacy", "AI assistants"],
      timeline: "Q2 2024"
    },
    {
      phase: "Phase 3",
      title: "Public Launch",
      status: "Planned",
      features: ["Town Square", "Full decentralization", "Global network"],
      timeline: "Q3 2024"
    }
  ];

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-32 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <Card className="gradient-subtle border-primary/20 p-12">
            <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Welcome to the Future!</h2>
            <p className="text-lg text-muted-foreground mb-8">
              You're now on the waitlist. We'll notify you as soon as early access becomes available.
            </p>
            <Badge variant="secondary" className="px-6 py-2">
              <Users className="w-4 h-4 mr-2" />
              Position #2,847 in queue
            </Badge>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="roadmap" className="py-32 px-4">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Join the <span className="text-gradient">Revolution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of building the future of digital interaction. Get early access, 
            shape the platform, and help create a more private, user-owned internet.
          </p>
        </div>

        {/* Main Signup */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Signup Form */}
          <div>
            <Card className="gradient-subtle border-primary/20 p-8">
              <h3 className="text-2xl font-bold mb-6">Get Early Access</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="glass-morphism"
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    We'll never share your email. Privacy-first, always.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full gradient-primary hover:shadow-glow text-lg py-6"
                  disabled={!email}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Join Waitlist
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Or connect with your wallet
                </p>
                <Button variant="secondary" className="glass-morphism hover-glow">
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Wallet
                </Button>
              </div>

              <div className="mt-8 p-4 glass-morphism rounded-lg">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Current waitlist:</span>
                  <span className="font-bold text-gradient">12,847 people</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Why Join Early?</h3>
            {benefits.map((benefit, index) => (
              <Card key={index} className="gradient-subtle border-border/50 p-6 hover-glow hover:shadow-card transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
            
            <Card className="gradient-subtle border-accent/20 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-accent" />
                <h4 className="font-semibold">Global Community</h4>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Connect with privacy advocates, technologists, and forward-thinkers from around the world.
              </p>
              <div className="flex gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>127 countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>50+ languages</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Roadmap */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Development Roadmap</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track our progress and see what's coming next in the journey toward digital sovereignty.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {milestones.map((milestone, index) => (
            <Card key={index} className={`
              gradient-subtle border-border/50 p-6 relative
              ${index === 0 ? 'border-primary/30 shadow-glow' : ''}
            `}>
              {index === 0 && (
                <Badge className="absolute -top-3 left-4 gradient-primary">
                  Current
                </Badge>
              )}
              
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">{milestone.phase}</h4>
                <Badge variant={index === 0 ? "default" : "secondary"} className="text-xs">
                  {milestone.status}
                </Badge>
              </div>
              
              <h5 className="text-lg font-bold mb-3">{milestone.title}</h5>
              
              <ul className="space-y-2 mb-4">
                {milestone.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-current flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="text-xs text-primary font-medium">
                {milestone.timeline}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};