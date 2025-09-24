import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Contact, Message } from '@/pages/ChatPage';
import { MessageBubble } from './MessageBubble';
import { TypingBar } from './TypingBar';
import { 
  Phone, 
  Video, 
  MoreVertical, 
  Shield, 
  Globe,
  Trash2
} from 'lucide-react';

interface ChatAreaProps {
  contact: Contact;
  messages: Message[];
  onSendMessage: (content: string, type?: 'text' | 'media' | 'file' | 'voice') => void;
  isTyping: boolean;
  onTypingChange: (typing: boolean) => void;
}

export const ChatArea = ({
  contact,
  messages,
  onSendMessage,
  isTyping,
  onTypingChange
}: ChatAreaProps) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isContactTyping, setIsContactTyping] = useState(false);

  // Mock typing simulation
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.95) {
        setIsContactTyping(true);
        setTimeout(() => setIsContactTyping(false), 2000 + Math.random() * 3000);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' }
  ];

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Chat Header */}
      <motion.div 
        className="p-4 chat-glass-blue chat-glass border-b border-white/5"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Avatar className="h-10 w-10">
                <AvatarImage src={contact.avatar} />
                <AvatarFallback className="bg-gradient-to-br from-[var(--chat-accent-lavender)] to-[var(--chat-accent-teal)] text-white font-medium">
                  {contact.username.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              {contact.isOnline && (
                <motion.div
                  className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-[var(--background)]"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </div>
            
            <div>
              <h3 className="font-semibold text-[var(--chat-text-primary)]">
                {contact.username}
              </h3>
              <div className="flex items-center space-x-2 text-sm text-[var(--chat-text-muted)]">
                <Shield className="h-3 w-3 text-[var(--chat-accent-teal)]" />
                <span>
                  {contact.isOnline ? 'Online' : 'Offline'} • End-to-end encrypted
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Translation Toggle */}
            <motion.div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className={`p-2 ripple-effect ${
                  showTranslation 
                    ? 'bg-[var(--chat-accent-teal)]/20 text-[var(--chat-accent-teal)]' 
                    : 'text-[var(--chat-text-muted)] hover:text-[var(--chat-text-primary)]'
                }`}
                onClick={() => setShowTranslation(!showTranslation)}
              >
                <Globe className="h-4 w-4" />
              </Button>
              
              <AnimatePresence>
                {showTranslation && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-48 chat-glass-lavender chat-glass rounded-lg p-2 z-50 chat-shadow-soft"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedLanguage === lang.code
                            ? 'bg-[var(--chat-accent-teal)]/20 text-[var(--chat-accent-teal)]'
                            : 'text-[var(--chat-text-primary)] hover:bg-white/5'
                        }`}
                        onClick={() => setSelectedLanguage(lang.code)}
                      >
                        <span className="mr-2">{lang.flag}</span>
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Call Buttons */}
            <Button
              variant="ghost"
              size="sm"
              className="p-2 text-[var(--chat-text-muted)] hover:text-[var(--chat-text-primary)] ripple-effect"
            >
              <Phone className="h-4 w-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="p-2 text-[var(--chat-text-muted)] hover:text-[var(--chat-text-primary)] ripple-effect"
            >
              <Video className="h-4 w-4" />
            </Button>

            {/* More Options */}
            <Button
              variant="ghost"
              size="sm"
              className="p-2 text-[var(--chat-text-muted)] hover:text-[var(--chat-text-primary)] ripple-effect"
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 relative">
        <div className="floating-particles" />
        
        <AnimatePresence>
          {messages.map((message, index) => (
            <MessageBubble
              key={message.id}
              message={message}
              isOwn={message.senderId === 'current-user'}
              showTranslation={showTranslation}
              selectedLanguage={selectedLanguage}
              delay={index * 0.1}
            />
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        <AnimatePresence>
          {isContactTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center space-x-2 px-4 py-2"
            >
              <Avatar className="h-6 w-6">
                <AvatarImage src={contact.avatar} />
                <AvatarFallback className="bg-gradient-to-br from-[var(--chat-accent-lavender)] to-[var(--chat-accent-teal)] text-white text-xs">
                  {contact.username.substring(0, 1).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="chat-glass-lavender chat-glass px-4 py-2 rounded-2xl">
                <div className="flex space-x-1">
                  {[0, 1, 2].map((dot) => (
                    <motion.div
                      key={dot}
                      className="w-2 h-2 bg-[var(--chat-accent-lavender)] rounded-full"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: dot * 0.2
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div ref={messagesEndRef} />
      </div>

      {/* Typing Bar */}
      <TypingBar
        onSendMessage={onSendMessage}
        onTypingChange={onTypingChange}
        showTranslation={showTranslation}
        selectedLanguage={selectedLanguage}
      />
    </div>
  );
};