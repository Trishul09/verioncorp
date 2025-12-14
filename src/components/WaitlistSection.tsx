import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail, Wallet, Users, Zap, Shield, Globe } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const { toast } = useToast();

  // Fetch total registrations count using secure function
  useEffect(() => {
    const fetchCount = async () => {
      const { data, error } = await supabase.rpc('get_registrations_count');
      if (!error && data !== null) {
        setTotalUsers(data);
      }
    };
    fetchCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('register-user', {
        body: { email }
      });

      if (error) throw error;

      if (data?.error) {
        if (data.error === 'Already registered') {
          toast({
            title: "Already registered",
            description: "This email is already on the waitlist!",
            variant: "destructive"
          });
        } else {
          throw new Error(data.error);
        }
      } else {
        setIsSubmitted(true);
        setTotalUsers(data.totalRegistrations);
        toast({
          title: "Success!",
          description: "You've been added to the waitlist."
        });
      }
    } catch (error: any) {
      console.error('Registration error:', error);
      toast({
        title: "Error",
        description: "Failed to register. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleWalletConnect = async () => {
    setIsLoading(true);
    try {
      // Request wallet connection (MetaMask or similar)
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        });
        const walletAddress = accounts[0];

        const { data, error } = await supabase.functions.invoke('register-user', {
          body: { walletAddress }
        });

        if (error) throw error;

        if (data?.error) {
          if (data.error === 'Already registered') {
            toast({
              title: "Already registered",
              description: "This wallet is already on the waitlist!",
              variant: "destructive"
            });
          } else {
            throw new Error(data.error);
          }
        } else {
          setIsSubmitted(true);
          setTotalUsers(data.totalRegistrations);
          toast({
            title: "Success!",
            description: "Wallet connected and added to waitlist."
          });
        }
      } else {
        toast({
          title: "Wallet not found",
          description: "Please install MetaMask or another Web3 wallet.",
          variant: "destructive"
        });
      }
    } catch (error: any) {
      console.error('Wallet connection error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to connect wallet.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
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

  const developmentTimeline = [
    {
      role: "Dev 1",
      title: "Backend Architect",
      quarters: {
        "Q4 2025": "core",
        "Q1 2026": "support",
        "Q2 2026": "support"
      },
      deliverables: [
        "Design and build the core Architecture, Database Schema, and initial APIs",
        "Provide support and consultation to Frontend and Android developers integrating with backend"
      ],
      trl: "TRL 3-5"
    },
    {
      role: "Dev 2",
      title: "Frontend Developer",
      quarters: {
        "Q1 2026": "core",
        "Q2 2026": "core",
        "Q3 2026": "support"
      },
      deliverables: [
        "Build the Web App MVP, including UI component library and onboarding flow",
        "Complete all MVP features and implement fixes based on internal and pilot feedback"
      ],
      trl: "TRL 5-6"
    },
    {
      role: "Dev 3",
      title: "Android Developer",
      quarters: {
        "Q2 2026": "core",
        "Q3 2026": "core",
        "Q4 2026": "support"
      },
      deliverables: [
        "Build the Native Android MVP for the pilot launch",
        "Provide pilot support, fix bugs, and begin implementing advanced features for V1 release"
      ],
      trl: "TRL 6-7"
    },
    {
      role: "Dev 4",
      title: "Security & DevOps",
      quarters: {
        "Q3 2026": "core",
        "Q4 2026": "core",
        "Q1 2027": "support"
      },
      deliverables: [
        "Harden all servers for pilot, set up monitoring, and implement robust security protocols (E2E Encryption)",
        "Manage third-party security audits, conduct penetration testing, and ensure infrastructure is ready to scale"
      ],
      trl: "TRL 7-8"
    },
    {
      role: "Dev 5",
      title: "iOS & Desktop Dev",
      quarters: {
        "Q4 2026": "core",
        "Q1 2027": "core"
      },
      deliverables: [
        "Build the native iOS and Windows Desktop applications for the V1 launch",
        "Finalize the apps, integrate feedback, and manage the App Store submission process"
      ],
      trl: "TRL 8-9"
    },
    {
      role: "Dev 6",
      title: "Backend Scaling",
      quarters: {
        "Q1 2027": "core"
      },
      deliverables: [
        "Refactor and optimize the entire backend for the V1 public launch",
        "Focus on performance, scalability, and efficiency to handle large influx of users"
      ],
      trl: "TRL 9"
    }
  ];

  const timelineQuarters = ["Q4 2025", "Q1 2026", "Q2 2026", "Q3 2026", "Q4 2026", "Q1 2027"];

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
              You're one of {totalUsers} early adopters!
            </Badge>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-32 px-4">
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
          
          {/* Highlighted Offer */}
          <div className="mt-8 inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-accent-warm-gold/20 via-secondary/20 to-accent-warm-gold/20 border-2 border-secondary/50 shadow-glow">
            <p className="text-lg md:text-xl font-bold">
              <span className="bg-gradient-to-r from-accent-warm-gold via-secondary to-accent-warm-gold bg-clip-text text-transparent">
                🎁 First 100 users get lifetime supply of most secure cloud storage
              </span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">Better than best — Zero-knowledge encrypted, truly yours forever</p>
          </div>
          
          {totalUsers > 0 && (
            <Badge variant="secondary" className="mt-6 px-6 py-2 text-lg block mx-auto w-fit">
              <Users className="w-5 h-5 mr-2" />
              {totalUsers} users have registered already!
            </Badge>
          )}
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
                  disabled={!email || isLoading}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {isLoading ? 'Joining...' : 'Join Waitlist'}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Or connect with your wallet
                </p>
                <Button 
                  variant="secondary" 
                  className="glass-morphism hover-glow"
                  onClick={handleWalletConnect}
                  disabled={isLoading}
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  {isLoading ? 'Connecting...' : 'Connect Wallet'}
                </Button>
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
              <p className="text-muted-foreground text-sm">
                Connect with privacy advocates, technologists, and forward-thinkers from around the world.
              </p>
            </Card>
          </div>
        </div>

        {/* Roadmap */}
        <div id="roadmap" className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Development Roadmap</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track our progress from initial architecture to global launch. Technology Readiness Level (TRL) progression: 3 → 9
          </p>
        </div>

        {/* Timeline Overview */}
        <Card className="glass-dark border-accent/20 p-8 mb-8 overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="grid grid-cols-7 gap-2 mb-4">
              <div className="font-semibold text-sm">Developer Role</div>
              {timelineQuarters.map((quarter) => (
                <div key={quarter} className="font-semibold text-sm text-center">
                  {quarter}
                </div>
              ))}
            </div>
            
            {developmentTimeline.map((dev, index) => (
              <div key={index} className="grid grid-cols-7 gap-2 mb-3 items-center">
                <div className="text-sm">
                  <span className="font-mono text-accent">{dev.role}</span>
                  <span className="block text-xs text-muted-foreground mt-1">{dev.title}</span>
                </div>
                {timelineQuarters.map((quarter) => {
                  const status = dev.quarters[quarter];
                  return (
                    <div key={quarter} className="text-center">
                      {status === "core" ? (
                        <div className="h-8 bg-gradient-to-r from-accent/80 to-accent rounded flex items-center justify-center text-xs font-bold">
                          ████
                        </div>
                      ) : status === "support" ? (
                        <div className="h-8 bg-accent/30 rounded flex items-center justify-center text-xs">
                          ░░░░
                        </div>
                      ) : (
                        <div className="h-8"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
            
            <div className="grid grid-cols-7 gap-2 mt-6 pt-4 border-t border-border/50">
              <div className="font-semibold text-sm">TRL Progress</div>
              {["TRL 3", "TRL 5", "TRL 6", "TRL 7", "TRL 8", "TRL 9"].map((trl, idx) => (
                <div key={idx} className="text-center text-xs font-mono text-accent">
                  {trl}
                </div>
              ))}
            </div>
            
            <div className="mt-4 flex gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-8 h-4 bg-gradient-to-r from-accent/80 to-accent rounded"></div>
                <span>Core Development Quarter</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-4 bg-accent/30 rounded"></div>
                <span>Support & Iteration</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Detailed Deliverables */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developmentTimeline.map((dev, index) => (
            <Card key={index} className={`
              gradient-subtle border-border/50 p-6 hover-glow transition-smooth
              ${index === 0 ? 'border-accent/30 shadow-glow' : ''}
            `}>
              {index === 0 && (
                <Badge className="absolute -top-3 left-4 gradient-primary">
                  In Progress
                </Badge>
              )}
              
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-mono text-accent font-semibold">{dev.role}</h4>
                <Badge variant="secondary" className="text-xs">
                  {dev.trl}
                </Badge>
              </div>
              
              <h5 className="text-lg font-bold mb-4">{dev.title}</h5>
              
              <ul className="space-y-3">
                {dev.deliverables.map((deliverable, delIndex) => (
                  <li key={delIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5"></div>
                    <span className="leading-relaxed">{deliverable}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-4 pt-4 border-t border-border/30">
                <div className="text-xs text-muted-foreground">
                  Active: {Object.entries(dev.quarters)
                    .filter(([_, status]) => status === "core")
                    .map(([quarter]) => quarter)
                    .join(", ")}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};