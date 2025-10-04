import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export const CEONote = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-gradient-to-br from-secondary to-muted">
      {/* Artistic Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-accent/10 to-transparent organic-shape"></div>
      <div className="absolute bottom-0 left-0 w-2/5 h-2/3 bg-gradient-to-tr from-primary/5 to-transparent organic-shape"></div>
      
      <div className="container max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="glass-morphism shadow-elegant p-12 md:p-16 border-border/30 artistic-border">
            {/* Decorative Top Line */}
            <motion.div 
              className="w-24 h-1 bg-gradient-primary rounded-full mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
            
            <div className="space-y-8">
              {/* CEO Title */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-primary/40"></div>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gradient">A Word from the CEO</h3>
                  <p className="text-muted-foreground text-sm">Founder & Chief Executive Officer</p>
                </div>
              </div>

              {/* CEO Note Content */}
              <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
                <p className="drop-cap">
                  We stand at a crossroads in the evolution of digital society. The current paradigm—where our identities are commodified, our data harvested, and our connections algorithmically manipulated—is fundamentally broken. It erodes the very essence of human autonomy and dignity.
                </p>
                
                <p>
                  Our mission is not merely to build another platform. We are architecting a new foundation for digital existence—one where privacy is paramount, identity is self-sovereign, and connections are authentic. This is deep tech with a human heart; advanced cryptography meeting intuitive design; Web3 principles made accessible to everyone.
                </p>
                
                <p>
                  The road ahead is challenging. We're not just disrupting an industry; we're reimagining the social contract of the digital age. But I believe deeply that technology should empower individuals, not extract from them. That privacy should be a right, not a luxury. That we can build systems that are both technologically sophisticated and beautifully human.
                </p>
                
                <p className="font-semibold text-primary">
                  Join us in building the future we want to see—a future where you truly own your digital life.
                </p>
              </div>

              {/* Signature Section */}
              <div className="mt-12 pt-8 border-t border-border/50">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
                  {/* Artistic Calligraphed Signature */}
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <svg 
                      width="280" 
                      height="100" 
                      viewBox="0 0 280 100" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="signature-svg"
                    >
                      {/* Artistic calligraphed signature "Manik K. Sangal" */}
                      <motion.path
                        d="M10 70 Q 15 40, 25 50 T 40 60 L 45 70 M 50 50 L 50 70 M 55 50 Q 60 48, 65 50 T 75 60 L 75 70 M 80 50 L 80 70 M 85 60 L 95 60 M 100 50 L 100 70 M 105 60 L 115 60 M 125 55 Q 130 50, 135 55 L 140 70 M 145 70 Q 150 60, 155 70"
                        stroke="url(#signature-gradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, delay: 0.7, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="signature-path"
                      />
                      <motion.path
                        d="M165 50 L 165 70 Q 170 75, 175 70 M 180 50 Q 185 48, 190 52 T 200 65 L 200 70 M 205 50 L 205 70 M 210 50 Q 220 45, 230 55 T 245 70 M 250 50 L 250 70 Q 255 75, 260 70 M 265 50 L 270 70"
                        stroke="url(#signature-gradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2.5, delay: 1.2, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="signature-path"
                      />
                      {/* Artistic flourish */}
                      <motion.path
                        d="M 10 75 Q 140 85, 270 75"
                        stroke="url(#signature-gradient)"
                        strokeWidth="1"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.4"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                      <defs>
                        <linearGradient id="signature-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="hsl(24, 88%, 58%)" />
                          <stop offset="50%" stopColor="hsl(18, 80%, 62%)" />
                          <stop offset="100%" stopColor="hsl(35, 80%, 62%)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                  
                  {/* Name & Title */}
                  <motion.div 
                    className="text-right"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-xl font-bold text-primary">Manik K. Sangal</p>
                    <p className="text-sm text-muted-foreground">Founder & CEO</p>
                    <p className="text-xs text-muted-foreground mt-1">Building the Privacy-First Future</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-primary/40"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-accent/30"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
};
