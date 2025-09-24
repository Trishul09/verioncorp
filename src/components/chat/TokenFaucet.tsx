import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Coins, Gift, Sparkles } from 'lucide-react';

interface TokenFaucetProps {
  balance: number;
  onClaim: (amount: number) => void;
}

export const TokenFaucet = ({ balance, onClaim }: TokenFaucetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);
  const [lastClaim, setLastClaim] = useState<Date | null>(null);
  const [claimAnimation, setClaimAnimation] = useState(false);

  const canClaim = !lastClaim || (Date.now() - lastClaim.getTime()) > 24 * 60 * 60 * 1000; // 24 hours
  const timeUntilNextClaim = lastClaim ? 
    Math.max(0, 24 * 60 * 60 * 1000 - (Date.now() - lastClaim.getTime())) : 0;

  const formatTimeRemaining = (ms: number) => {
    const hours = Math.floor(ms / (60 * 60 * 1000));
    const minutes = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
    return `${hours}h ${minutes}m`;
  };

  const handleClaim = async () => {
    if (!canClaim || isClaiming) return;

    setIsClaiming(true);
    setClaimAnimation(true);
    
    // Simulate claim process
    setTimeout(() => {
      const claimAmount = Math.floor(Math.random() * 500) + 100; // 100-600 Xbits
      onClaim(claimAmount);
      setLastClaim(new Date());
      setIsClaiming(false);
      
      // Reset animation after a delay
      setTimeout(() => setClaimAnimation(false), 2000);
    }, 1500);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 20 }}
            className="mb-3 w-72 chat-glass-lavender chat-glass rounded-2xl p-6 chat-shadow-soft border border-[var(--chat-accent-gold)]/20"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={claimAnimation ? { 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <Coins className="h-6 w-6 text-[var(--chat-accent-gold)]" />
                </motion.div>
                <h3 className="text-lg font-semibold text-[var(--chat-text-primary)]">
                  Xbits Faucet
                </h3>
              </div>
              <motion.div
                className="text-right"
                animate={claimAnimation ? { scale: [1, 1.1, 1] } : {}}
              >
                <p className="text-xs text-[var(--chat-text-muted)]">Your Balance</p>
                <p className="text-xl font-bold text-[var(--chat-accent-gold)]">
                  {balance.toLocaleString()}
                </p>
              </motion.div>
            </div>

            {/* Claim Section */}
            <div className="space-y-4">
              <div className="text-center">
                <motion.div
                  className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[var(--chat-accent-gold)]/20 to-[var(--chat-accent-teal)]/20 rounded-full flex items-center justify-center"
                  animate={canClaim ? {
                    boxShadow: [
                      "0 0 0 0 rgba(251, 191, 36, 0.4)",
                      "0 0 0 20px rgba(251, 191, 36, 0)",
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Gift className="h-8 w-8 text-[var(--chat-accent-gold)]" />
                </motion.div>

                {canClaim ? (
                  <div>
                    <p className="text-sm text-[var(--chat-text-primary)] mb-2">
                      Daily Xbits Available!
                    </p>
                    <p className="text-xs text-[var(--chat-text-muted)] mb-4">
                      Claim 100-600 Xbits for data requests
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm text-[var(--chat-text-muted)] mb-2">
                      Next claim available in
                    </p>
                    <p className="text-lg font-semibold text-[var(--chat-accent-gold)]">
                      {formatTimeRemaining(timeUntilNextClaim)}
                    </p>
                  </div>
                )}
              </div>

              <Button
                onClick={handleClaim}
                disabled={!canClaim || isClaiming}
                className={`w-full relative overflow-hidden ${
                  canClaim 
                    ? 'bg-gradient-to-r from-[var(--chat-accent-gold)] to-[var(--chat-accent-teal)] hover:from-[var(--chat-accent-gold)]/80 hover:to-[var(--chat-accent-teal)]/80 text-white' 
                    : 'bg-white/5 text-[var(--chat-text-muted)] cursor-not-allowed'
                }`}
              >
                {isClaiming ? (
                  <div className="flex items-center justify-center space-x-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="h-4 w-4" />
                    </motion.div>
                    <span>Claiming...</span>
                  </div>
                ) : canClaim ? (
                  <div className="flex items-center justify-center space-x-2">
                    <Coins className="h-4 w-4" />
                    <span>Claim Daily Xbits</span>
                  </div>
                ) : (
                  <span>Come back later</span>
                )}

                {/* Sparkle animation */}
                <AnimatePresence>
                  {claimAnimation && (
                    <>
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          initial={{ 
                            x: Math.random() * 280,
                            y: Math.random() * 40,
                            opacity: 0,
                            scale: 0
                          }}
                          animate={{
                            y: -20,
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                          }}
                          transition={{
                            duration: 1.5,
                            delay: i * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </Button>
            </div>

            {/* Info */}
            <div className="mt-4 p-3 bg-white/5 rounded-lg">
              <p className="text-xs text-[var(--chat-text-muted)] leading-relaxed">
                Use Xbits to request private data from contacts. Each request type has different costs and time limits.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-br from-[var(--chat-accent-gold)] to-[var(--chat-accent-teal)] rounded-full flex items-center justify-center text-white chat-shadow-token ripple-effect"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={canClaim ? {
          boxShadow: [
            "0 0 15px rgba(251, 191, 36, 0.2)",
            "0 0 25px rgba(251, 191, 36, 0.4)",
            "0 0 15px rgba(251, 191, 36, 0.2)"
          ]
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Coins className="h-6 w-6" />
        </motion.div>
        
        {/* Notification dot for available claims */}
        {canClaim && (
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full border-2 border-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        )}
      </motion.button>
    </div>
  );
};