import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Wallet, Users, Zap, Shield, Globe, MessageSquare, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { AnimatedBackground } from "./AnimatedBackground";
import { motion } from "framer-motion";

export const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [feedback, setFeedback] = useState("");
  const [isFeedbackSubmitting, setIsFeedbackSubmitting] = useState(false);
  const { toast } = useToast();

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    setIsFeedbackSubmitting(true);
    try {
      const { error } = await supabase.from('feedback').insert({ message: feedback.trim() });
      if (error) throw error;
      
      setFeedback("");
      toast({
        title: "Thank you!",
        description: "Your anonymous feedback has been submitted."
      });
    } catch (error) {
      console.error('Feedback error:', error);
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsFeedbackSubmitting(false);
    }
  };

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
      quarters: ["Q4 2025", "Q1 2026"],
      deliverables: [
        "Design and build the core Architecture, Database Schema, and initial APIs",
        "Provide support and consultation to Frontend and Android developers integrating with backend"
      ],
      trl: "TRL 3-5"
    },
    {
      role: "Dev 2",
      title: "Frontend Developer",
      quarters: ["Q1 2026", "Q2 2026"],
      deliverables: [
        "Build the Web App MVP, including UI component library and onboarding flow",
        "Complete all MVP features and implement fixes based on internal and pilot feedback"
      ],
      trl: "TRL 5-6"
    },
    {
      role: "Dev 3",
      title: "Android Developer",
      quarters: ["Q2 2026", "Q3 2026"],
      deliverables: [
        "Build the Native Android MVP for the pilot launch",
        "Provide pilot support, fix bugs, and begin implementing advanced features for V1 release"
      ],
      trl: "TRL 6-7"
    },
    {
      role: "Dev 4",
      title: "Security & DevOps",
      quarters: ["Q3 2026", "Q4 2026"],
      deliverables: [
        "Harden all servers for pilot, set up monitoring, and implement robust security protocols (E2E Encryption)",
        "Manage third-party security audits, conduct penetration testing, and ensure infrastructure is ready to scale"
      ],
      trl: "TRL 7-8"
    },
    {
      role: "Dev 5",
      title: "iOS & Desktop Dev",
      quarters: ["Q4 2026", "Q1 2027"],
      deliverables: [
        "Build the native iOS and Windows Desktop applications for the V1 launch",
        "Finalize the apps, integrate feedback, and manage the App Store submission process"
      ],
      trl: "TRL 8-9"
    },
    {
      role: "Dev 6",
      title: "Backend Scaling",
      quarters: ["Q1 2027"],
      deliverables: [
        "Refactor and optimize the entire backend for the V1 public launch",
        "Focus on performance, scalability, and efficiency to handle large influx of users"
      ],
      trl: "TRL 9"
    }
  ];

  if (isSubmitted) {
    return (
      <section id="waitlist" className="relative py-32 px-4 overflow-hidden">
        {/* Artistic Background */}
        <div className="absolute inset-0 gradient-organic"></div>
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-accent-warm-gold/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-2/5 h-3/4 bg-gradient-to-tl from-accent-deep-teal/5 to-transparent organic-shape"></div>
        <AnimatedBackground />
        
        <div className="container max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-morphism border-secondary/30 p-12 shadow-glow">
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
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="relative py-32 px-4 overflow-hidden">
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
            <span className="text-sm font-medium">Join the Movement</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight artistic-text-shadow"
          >
            Join the{" "}
            <span className="text-gradient relative">
              Revolution
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
            Be part of building the future of digital interaction. Get early access, 
            shape the platform, and help create a more private, user-owned internet.
          </motion.p>
          
          {/* Pioneer Access Package */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 max-w-2xl mx-auto"
          >
            <div className="glass-morphism rounded-2xl p-8 border-2 border-secondary/50 shadow-glow">
              <Badge className="mb-4 bg-gradient-to-r from-accent-warm-gold to-secondary text-background font-bold text-sm px-4 py-1">
                Pioneer Access Package
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gradient">
                Claim Your Identity on the Verion Network.
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                The first 1,000 users to join the waitlist unlock the <span className="text-secondary font-semibold">Pioneer Protocol</span>.
              </p>
              
              <div className="space-y-4 text-left max-w-md mx-auto">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary text-lg">✓</span>
                  </div>
                  <span>Secure your unique <span className="font-mono text-secondary font-bold">@username</span> before public launch.</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary text-lg">✓</span>
                  </div>
                  <span>Unlock the <span className="font-bold text-accent-warm-gold">"3-Year Lockdown"</span> deal <span className="text-secondary font-bold">(60% OFF storage)</span>.</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent-warm-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-warm-gold text-lg">★</span>
                  </div>
                  <span><span className="font-bold text-accent-warm-gold">"Founding Member"</span> Gold Badge on your profile.</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {totalUsers > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Badge variant="secondary" className="mt-6 px-6 py-2 text-lg">
                <Users className="w-5 h-5 mr-2" />
                {totalUsers} users have registered already!
              </Badge>
            </motion.div>
          )}
        </motion.div>

        {/* Main Signup */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Signup Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass-morphism border-primary/20 p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all">
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
                    className="glass-morphism border-border/50"
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
                  className="glass-morphism hover-glow border-border/50"
                  onClick={handleWalletConnect}
                  disabled={isLoading}
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  {isLoading ? 'Connecting...' : 'Connect Wallet'}
                </Button>
              </div>

            </Card>
          </motion.div>

          {/* Benefits */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Why Join Early?</h3>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <Card className="glass-morphism border-border/30 p-6 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 transition-all">
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
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <Card className="glass-morphism border-accent/20 p-6 hover:shadow-2xl hover:shadow-accent/10 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-accent" />
                  <h4 className="font-semibold">Global Community</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Connect with privacy advocates, technologists, and forward-thinkers from around the world.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Anonymous Feedback Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <Card className="glass-morphism border-secondary/30 p-8 max-w-2xl mx-auto shadow-glow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Share Your Feedback</h3>
                <p className="text-sm text-muted-foreground">Your feedback is completely anonymous</p>
              </div>
            </div>
            
            <form onSubmit={handleFeedbackSubmit} className="space-y-4">
              <Textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Tell us what you think, suggest features, or share your ideas..."
                className="min-h-[120px] glass-morphism border-border/50 resize-none"
                maxLength={1000}
              />
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  {feedback.length}/1000 characters
                </p>
                <Button 
                  type="submit" 
                  disabled={!feedback.trim() || isFeedbackSubmitting}
                  className="gradient-primary hover:shadow-glow"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isFeedbackSubmitting ? 'Sending...' : 'Submit Feedback'}
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>

        {/* Roadmap */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          id="roadmap" 
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-4">Development Roadmap</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track our progress from initial architecture to global launch. Technology Readiness Level (TRL) progression: 3 → 9
          </p>
        </motion.div>

        {/* Detailed Deliverables */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developmentTimeline.map((dev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
            >
              <Card className={`
                glass-morphism border-border/30 p-6 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 transition-all relative
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
                
                <h5 className="font-bold mb-2">{dev.title}</h5>
                <p className="text-sm text-muted-foreground mb-4">
                  {dev.quarters.join(" → ")}
                </p>
                
                <ul className="space-y-2">
                  {dev.deliverables.map((deliverable, dIndex) => (
                    <li key={dIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};