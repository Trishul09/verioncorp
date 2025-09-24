import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Send, 
  Paperclip, 
  Mic, 
  Image, 
  FileText,
  Smile,
  Globe
} from 'lucide-react';

interface TypingBarProps {
  onSendMessage: (content: string, type?: 'text' | 'media' | 'file' | 'voice') => void;
  onTypingChange: (typing: boolean) => void;
  showTranslation: boolean;
  selectedLanguage: string;
}

export const TypingBar = ({
  onSendMessage,
  onTypingChange,
  showTranslation,
  selectedLanguage
}: TypingBarProps) => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout>();

  const handleInputChange = (value: string) => {
    setMessage(value);
    
    if (!isTyping && value.length > 0) {
      setIsTyping(true);
      onTypingChange(true);
    }

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
      onTypingChange(false);
    }, 1000);
  };

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
      setIsTyping(false);
      onTypingChange(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleVoiceRecord = () => {
    if (!isRecording) {
      setIsRecording(true);
      // Start recording logic here
      setTimeout(() => {
        setIsRecording(false);
        onSendMessage('Voice message recorded', 'voice');
      }, 3000);
    }
  };

  const attachmentOptions = [
    { icon: Image, label: 'Photo', type: 'media' as const },
    { icon: FileText, label: 'Document', type: 'file' as const },
    { icon: Paperclip, label: 'File', type: 'file' as const }
  ];

  return (
    <div className="p-4 chat-glass-blue chat-glass border-t border-white/5">
      <div className="flex items-end space-x-3">
        {/* Attachment Menu */}
        <div className="relative">
          <motion.button
            className={`p-2 rounded-full transition-colors ripple-effect ${
              showAttachMenu 
                ? 'bg-[var(--chat-accent-teal)]/20 text-[var(--chat-accent-teal)]' 
                : 'text-[var(--chat-text-muted)] hover:text-[var(--chat-text-primary)] hover:bg-white/5'
            }`}
            onClick={() => setShowAttachMenu(!showAttachMenu)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: showAttachMenu ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <Paperclip className="h-5 w-5" />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {showAttachMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                className="absolute bottom-full left-0 mb-2 w-40 chat-glass-lavender chat-glass rounded-xl p-2 chat-shadow-soft"
              >
                {attachmentOptions.map((option, index) => (
                  <motion.button
                    key={option.label}
                    className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-[var(--chat-text-primary)] hover:bg-white/5 transition-colors"
                    onClick={() => {
                      setShowAttachMenu(false);
                      // Handle file selection logic
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <option.icon className="h-4 w-4 text-[var(--chat-accent-teal)]" />
                    <span>{option.label}</span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Message Input */}
        <div className="flex-1 relative">
          <Input
            value={message}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={`Message${showTranslation ? ` (${selectedLanguage.toUpperCase()})` : ''}...`}
            className="bg-white/5 border-white/10 text-[var(--chat-text-primary)] placeholder:text-[var(--chat-text-muted)] focus:border-[var(--chat-accent-teal)]/30 pr-20"
          />
          
          {/* Emoji and Translation indicators */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
            {showTranslation && (
              <motion.div
                className="px-2 py-1 bg-[var(--chat-accent-teal)]/20 text-[var(--chat-accent-teal)] text-xs rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                <Globe className="h-3 w-3" />
              </motion.div>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-[var(--chat-text-muted)] hover:text-[var(--chat-text-primary)]"
            >
              <Smile className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Voice/Send Button */}
        <div className="flex space-x-2">
          {message.trim() ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <Button
                onClick={handleSend}
                className="h-10 w-10 p-0 bg-gradient-to-r from-[var(--chat-accent-teal)] to-[var(--chat-accent-lavender)] hover:from-[var(--chat-accent-teal)]/80 hover:to-[var(--chat-accent-lavender)]/80 text-white ripple-effect"
              >
                <Send className="h-4 w-4" />
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <motion.button
                className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors ripple-effect ${
                  isRecording
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-[var(--chat-accent-gold)]/20 text-[var(--chat-accent-gold)] hover:bg-[var(--chat-accent-gold)]/30'
                }`}
                onClick={handleVoiceRecord}
                animate={isRecording ? { 
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(239, 68, 68, 0.4)",
                    "0 0 0 10px rgba(239, 68, 68, 0)",
                    "0 0 0 0 rgba(239, 68, 68, 0)"
                  ]
                } : {}}
                transition={isRecording ? { 
                  duration: 1.5, 
                  repeat: Infinity 
                } : {}}
              >
                <Mic className="h-4 w-4" />
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Recording indicator */}
      <AnimatePresence>
        {isRecording && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-3 flex items-center justify-center space-x-2 text-red-400"
          >
            <motion.div
              className="w-2 h-2 bg-red-400 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="text-sm">Recording voice message...</span>
          </motion.div>
        )}
      </AnimatePresence>

      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            onSendMessage(file.name, 'file');
          }
        }}
      />
    </div>
  );
};