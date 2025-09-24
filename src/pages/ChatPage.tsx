import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContactList } from '@/components/chat/ContactList';
import { ChatArea } from '@/components/chat/ChatArea';
import { TokenFaucet } from '@/components/chat/TokenFaucet';
import { DataSharingModal } from '@/components/chat/DataSharingModal';
import { FloatingParticles } from '@/components/chat/FloatingParticles';

export interface Contact {
  id: string;
  username: string;
  avatar: string;
  isOnline: boolean;
  lastSeen?: Date;
  hasUnread: boolean;
  unreadCount: number;
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  type: 'text' | 'media' | 'file' | 'voice';
  timestamp: Date;
  isPreview: boolean;
  canStore: boolean;
  readReceipts: { userId: string; readAt: Date }[];
  translatedContent?: { [lang: string]: string };
}

export interface DataRequest {
  id: string;
  fromUserId: string;
  toUserId: string;
  dataType: 'realPic' | 'realName' | 'country' | 'gender';
  cost: number;
  expiresAt: Date;
  status: 'pending' | 'accepted' | 'declined' | 'expired';
}

const ChatPage = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [xbitsBalance, setXbitsBalance] = useState(1250);
  const [showDataModal, setShowDataModal] = useState(false);
  const [dataRequests, setDataRequests] = useState<DataRequest[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatBgRef = useRef<HTMLDivElement>(null);

  // Mock data initialization
  useEffect(() => {
    const mockContacts: Contact[] = [
      {
        id: '1',
        username: 'alice_secure',
        avatar: '/api/placeholder/40/40',
        isOnline: true,
        hasUnread: true,
        unreadCount: 3
      },
      {
        id: '2', 
        username: 'bob_privacy',
        avatar: '/api/placeholder/40/40',
        isOnline: false,
        lastSeen: new Date(Date.now() - 300000),
        hasUnread: false,
        unreadCount: 0
      },
      {
        id: '3',
        username: 'carol_anon',
        avatar: '/api/placeholder/40/40',
        isOnline: true,
        hasUnread: false,
        unreadCount: 0
      }
    ];
    setContacts(mockContacts);
    setSelectedContact(mockContacts[0]);
  }, []);

  const handleSendMessage = (content: string, type: 'text' | 'media' | 'file' | 'voice' = 'text') => {
    if (!selectedContact) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: 'current-user',
      content,
      type,
      timestamp: new Date(),
      isPreview: false,
      canStore: true,
      readReceipts: [],
      translatedContent: {}
    };

    setMessages(prev => [...prev, newMessage]);
  };

  const handleTokenRequest = (contactId: string, dataType: string, cost: number) => {
    if (xbitsBalance >= cost) {
      setXbitsBalance(prev => prev - cost);
      const newRequest: DataRequest = {
        id: Date.now().toString(),
        fromUserId: 'current-user',
        toUserId: contactId,
        dataType: dataType as any,
        cost,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
        status: 'pending'
      };
      setDataRequests(prev => [...prev, newRequest]);
    }
  };

  return (
    <div className="h-screen w-full chat-bg-primary relative overflow-hidden">
      <FloatingParticles />
      
      {/* Background gradient overlay */}
      <div 
        ref={chatBgRef}
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, hsl(270 40% 15% / 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, hsl(180 30% 15% / 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, hsl(240 35% 10% / 0.4) 0%, transparent 50%)
          `
        }}
      />

      <div className="relative z-10 h-full flex">
        {/* Left Sidebar - Contacts */}
        <motion.div 
          className="w-80 h-full chat-glass-lavender chat-glass border-r border-white/5"
          initial={{ x: -320 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ContactList 
            contacts={contacts}
            selectedContact={selectedContact}
            onSelectContact={setSelectedContact}
            xbitsBalance={xbitsBalance}
            onTokenRequest={handleTokenRequest}
            onDataRequest={() => setShowDataModal(true)}
          />
        </motion.div>

        {/* Main Chat Area */}
        <div className="flex-1 h-full flex flex-col">
          {selectedContact ? (
            <ChatArea
              contact={selectedContact}
              messages={messages}
              onSendMessage={handleSendMessage}
              isTyping={isTyping}
              onTypingChange={setIsTyping}
            />
          ) : (
            <motion.div 
              className="flex-1 flex items-center justify-center chat-glass-blue chat-glass m-4 rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full chat-glass-lavender chat-glass mx-auto flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--chat-accent-lavender)] to-[var(--chat-accent-teal)]" />
                </div>
                <h3 className="text-xl font-medium text-[var(--chat-text-primary)]">
                  Select a contact to start chatting
                </h3>
                <p className="text-[var(--chat-text-muted)] max-w-md">
                  Your conversations are private and secure. Choose who to share your data with.
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Token Faucet - Fixed position */}
        <TokenFaucet 
          balance={xbitsBalance}
          onClaim={(amount) => setXbitsBalance(prev => prev + amount)}
        />
      </div>

      {/* Data Sharing Modal */}
      <AnimatePresence>
        {showDataModal && (
          <DataSharingModal
            isOpen={showDataModal}
            onClose={() => setShowDataModal(false)}
            contact={selectedContact}
            balance={xbitsBalance}
            onRequest={handleTokenRequest}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatPage;