import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Contact } from '@/pages/ChatPage';
import { 
  User, 
  MapPin, 
  Image as ImageIcon, 
  Calendar,
  Coins,
  Clock,
  Shield,
  AlertTriangle
} from 'lucide-react';

interface DataSharingModalProps {
  isOpen: boolean;
  onClose: () => void;
  contact: Contact | null;
  balance: number;
  onRequest: (contactId: string, dataType: string, cost: number) => void;
}

export const DataSharingModal = ({
  isOpen,
  onClose,
  contact,
  balance,
  onRequest
}: DataSharingModalProps) => {
  const [selectedRequest, setSelectedRequest] = useState<string | null>(null);
  const [isRequesting, setIsRequesting] = useState(false);

  if (!contact) return null;

  const dataTypes = [
    {
      id: 'realPic',
      icon: ImageIcon,
      title: 'Real Photo',
      description: 'Request their authentic profile picture',
      cost: 250,
      timeLimit: '24 hours',
      rarity: 'Common'
    },
    {
      id: 'realName',
      icon: User,
      title: 'Real Name',
      description: 'Request their legal name',
      cost: 400,
      timeLimit: '12 hours',
      rarity: 'Uncommon'
    },
    {
      id: 'country',
      icon: MapPin,
      title: 'Country',
      description: 'Request their country of residence',
      cost: 150,
      timeLimit: '48 hours',
      rarity: 'Common'
    },
    {
      id: 'gender',
      icon: User,
      title: 'Gender',
      description: 'Request their gender identity',
      cost: 100,
      timeLimit: '24 hours',
      rarity: 'Common'
    }
  ];

  const handleRequest = async (dataType: string, cost: number) => {
    if (balance < cost || isRequesting) return;

    setIsRequesting(true);
    
    // Simulate request processing
    setTimeout(() => {
      onRequest(contact.id, dataType, cost);
      setIsRequesting(false);
      onClose();
    }, 1500);
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'text-[var(--chat-accent-teal)]';
      case 'Uncommon': return 'text-[var(--chat-accent-gold)]';
      case 'Rare': return 'text-purple-400';
      default: return 'text-[var(--chat-text-muted)]';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl chat-bg-secondary border border-white/10 text-[var(--chat-text-primary)]">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-xl font-semibold text-center">
            Data Sharing Request
          </DialogTitle>
          
          {/* Contact Info */}
          <div className="flex items-center justify-center space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={contact.avatar} />
              <AvatarFallback className="bg-gradient-to-br from-[var(--chat-accent-lavender)] to-[var(--chat-accent-teal)] text-white text-lg font-semibold">
                {contact.username.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="text-center">
              <h3 className="text-lg font-medium">{contact.username}</h3>
              <div className="flex items-center justify-center space-x-2 text-sm text-[var(--chat-text-muted)]">
                <Shield className="h-4 w-4 text-[var(--chat-accent-teal)]" />
                <span>Privacy-protected profile</span>
              </div>
            </div>
          </div>

          {/* Balance Display */}
          <div className="flex items-center justify-center space-x-2 p-3 chat-glass-gold chat-glass rounded-xl">
            <Coins className="h-5 w-5 text-[var(--chat-accent-gold)]" />
            <span className="text-[var(--chat-text-primary)]">Your Balance:</span>
            <span className="font-bold text-[var(--chat-accent-gold)]">
              {balance.toLocaleString()} Xbits
            </span>
          </div>
        </DialogHeader>

        {/* Data Request Options */}
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {dataTypes.map((dataType, index) => (
            <motion.div
              key={dataType.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                selectedRequest === dataType.id
                  ? 'chat-glass-teal border-[var(--chat-accent-teal)]/30 chat-shadow-glow'
                  : 'chat-glass-lavender border-white/10 hover:border-white/20'
              }`}
              onClick={() => setSelectedRequest(dataType.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`p-3 rounded-lg ${
                    selectedRequest === dataType.id
                      ? 'bg-[var(--chat-accent-teal)]/20'
                      : 'bg-white/5'
                  }`}>
                    <dataType.icon className={`h-6 w-6 ${
                      selectedRequest === dataType.id
                        ? 'text-[var(--chat-accent-teal)]'
                        : 'text-[var(--chat-text-muted)]'
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-[var(--chat-text-primary)]">
                        {dataType.title}
                      </h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${getRarityColor(dataType.rarity)}`}>
                        {dataType.rarity}
                      </span>
                    </div>
                    
                    <p className="text-sm text-[var(--chat-text-muted)] mb-3">
                      {dataType.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-xs text-[var(--chat-text-muted)]">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{dataType.timeLimit}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cost */}
                <div className="text-right">
                  <div className="flex items-center space-x-1 mb-1">
                    <Coins className="h-4 w-4 text-[var(--chat-accent-gold)]" />
                    <span className="font-bold text-[var(--chat-accent-gold)]">
                      {dataType.cost}
                    </span>
                  </div>
                  
                  {balance < dataType.cost && (
                    <div className="flex items-center space-x-1 text-red-400">
                      <AlertTriangle className="h-3 w-3" />
                      <span className="text-xs">Insufficient</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Request Button */}
              <AnimatePresence>
                {selectedRequest === dataType.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-white/10"
                  >
                    <Button
                      onClick={() => handleRequest(dataType.id, dataType.cost)}
                      disabled={balance < dataType.cost || isRequesting}
                      className={`w-full ${
                        balance >= dataType.cost
                          ? 'bg-gradient-to-r from-[var(--chat-accent-gold)] to-[var(--chat-accent-teal)] hover:from-[var(--chat-accent-gold)]/80 hover:to-[var(--chat-accent-teal)]/80 text-white'
                          : 'bg-white/5 text-[var(--chat-text-muted)] cursor-not-allowed'
                      }`}
                    >
                      {isRequesting ? (
                        <div className="flex items-center space-x-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Coins className="h-4 w-4" />
                          </motion.div>
                          <span>Sending Request...</span>
                        </div>
                      ) : balance >= dataType.cost ? (
                        `Request ${dataType.title} (${dataType.cost} Xbits)`
                      ) : (
                        'Insufficient Xbits'
                      )}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Privacy Notice */}
        <div className="mt-6 p-4 bg-white/5 rounded-xl">
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-[var(--chat-accent-teal)] mt-0.5" />
            <div>
              <h4 className="font-medium text-[var(--chat-text-primary)] mb-1">
                Privacy & Consent
              </h4>
              <p className="text-sm text-[var(--chat-text-muted)] leading-relaxed">
                Requested users can choose to accept or decline data sharing requests. 
                All transactions are recorded on-chain for transparency and accountability.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};