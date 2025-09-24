import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Message } from '@/pages/ChatPage';
import { 
  Download, 
  Eye, 
  EyeOff, 
  Lock, 
  Unlock,
  CheckCheck,
  Clock,
  Globe
} from 'lucide-react';

interface MessageBubbleProps {
  message: Message;
  isOwn: boolean;
  showTranslation: boolean;
  selectedLanguage: string;
  delay?: number;
}

export const MessageBubble = ({
  message,
  isOwn,
  showTranslation,
  selectedLanguage,
  delay = 0
}: MessageBubbleProps) => {
  const [isPreviewAccepted, setIsPreviewAccepted] = useState(!message.isPreview);
  const [showTranslated, setShowTranslated] = useState(false);

  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getTranslatedContent = () => {
    // Mock translation - in real app, this would call translation API
    const translations: { [key: string]: string } = {
      'es': message.content.replace(/hello/gi, 'hola').replace(/how are you/gi, 'cómo estás'),
      'fr': message.content.replace(/hello/gi, 'bonjour').replace(/how are you/gi, 'comment allez-vous'),
      'de': message.content.replace(/hello/gi, 'hallo').replace(/how are you/gi, 'wie geht es dir'),
      'ja': message.content.replace(/hello/gi, 'こんにちは').replace(/how are you/gi, '元気ですか'),
      'ko': message.content.replace(/hello/gi, '안녕하세요').replace(/how are you/gi, '어떻게 지내세요')
    };
    return translations[selectedLanguage] || message.content;
  };

  const handleAcceptPreview = () => {
    setIsPreviewAccepted(true);
  };

  const getReadReceiptStatus = () => {
    if (message.readReceipts.length === 0) return 'sent';
    return 'read';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div className={`max-w-xs lg:max-w-md ${isOwn ? 'order-2' : 'order-1'}`}>
        <div className={`flex items-end space-x-2 ${isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}>
          {!isOwn && (
            <Avatar className="h-7 w-7">
              <AvatarImage src="/api/placeholder/28/28" />
              <AvatarFallback className="bg-gradient-to-br from-[var(--chat-accent-lavender)] to-[var(--chat-accent-teal)] text-white text-xs">
                A
              </AvatarFallback>
            </Avatar>
          )}

          <motion.div
            className={`rounded-2xl px-4 py-3 relative ${
              isOwn
                ? 'chat-glass-teal border border-[var(--chat-accent-teal)]/20'
                : 'chat-glass-lavender border border-[var(--chat-accent-lavender)]/20'
            } chat-glass chat-shadow-soft`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {/* Privacy indicator for preview messages */}
            {message.isPreview && !isPreviewAccepted && (
              <motion.div 
                className="absolute inset-0 chat-glass-blue chat-glass rounded-2xl flex items-center justify-center backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="text-center space-y-2">
                  <div className="flex justify-center">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Lock className="h-5 w-5 text-[var(--chat-accent-teal)]" />
                    </motion.div>
                  </div>
                  <p className="text-xs text-[var(--chat-text-muted)]">Preview only</p>
                  <Button
                    size="sm"
                    onClick={handleAcceptPreview}
                    className="h-6 px-3 text-xs bg-[var(--chat-accent-teal)]/20 hover:bg-[var(--chat-accent-teal)]/30 text-[var(--chat-accent-teal)] border border-[var(--chat-accent-teal)]/30"
                  >
                    <Eye className="h-3 w-3 mr-1" />
                    View
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Message content */}
            <div className="space-y-2">
              {message.type === 'text' && (
                <>
                  <p className="text-[var(--chat-text-primary)] text-sm leading-relaxed">
                    {showTranslated ? getTranslatedContent() : message.content}
                  </p>
                  
                  {/* Translation toggle */}
                  {showTranslation && selectedLanguage !== 'en' && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowTranslated(!showTranslated)}
                      className="h-6 px-2 text-xs text-[var(--chat-text-muted)] hover:text-[var(--chat-text-primary)]"
                    >
                      <Globe className="h-3 w-3 mr-1" />
                      {showTranslated ? 'Original' : 'Translate'}
                    </Button>
                  )}
                </>
              )}

              {message.type === 'file' && (
                <div className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg">
                  <div className="w-8 h-8 bg-[var(--chat-accent-gold)]/20 rounded-lg flex items-center justify-center">
                    <Download className="h-4 w-4 text-[var(--chat-accent-gold)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[var(--chat-text-primary)] truncate">
                      {message.content}
                    </p>
                    <p className="text-xs text-[var(--chat-text-muted)]">File • 2.3 MB</p>
                  </div>
                </div>
              )}

              {message.type === 'voice' && (
                <div className="flex items-center space-x-3 p-2 bg-white/5 rounded-lg">
                  <Button
                    size="sm"
                    className="h-8 w-8 p-0 bg-[var(--chat-accent-teal)]/20 hover:bg-[var(--chat-accent-teal)]/30 text-[var(--chat-accent-teal)]"
                  >
                    ▶
                  </Button>
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[var(--chat-accent-teal)]"
                      style={{ width: '40%' }}
                      initial={{ width: 0 }}
                      animate={{ width: '40%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <span className="text-xs text-[var(--chat-text-muted)]">0:12</span>
                </div>
              )}
            </div>

            {/* Message actions for storage */}
            {!isOwn && message.canStore && isPreviewAccepted && (
              <motion.div 
                className="flex items-center justify-between mt-2 pt-2 border-t border-white/10"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="flex items-center space-x-2">
                  <Lock className="h-3 w-3 text-[var(--chat-text-muted)]" />
                  <span className="text-xs text-[var(--chat-text-muted)]">
                    Store locally?
                  </span>
                </div>
                <div className="flex space-x-1">
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-6 px-2 text-xs border-[var(--chat-accent-teal)]/30 text-[var(--chat-accent-teal)] hover:bg-[var(--chat-accent-teal)]/10"
                  >
                    Store
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 px-2 text-xs text-[var(--chat-text-muted)] hover:text-[var(--chat-text-primary)]"
                  >
                    Ignore
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Message metadata */}
        <div className={`flex items-center space-x-2 mt-1 px-1 ${isOwn ? 'justify-end' : 'justify-start'}`}>
          <span className="text-xs text-[var(--chat-text-muted)]">
            {formatTime(message.timestamp)}
          </span>
          
          {isOwn && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {getReadReceiptStatus() === 'read' ? (
                <CheckCheck className="h-3 w-3 text-[var(--chat-accent-teal)]" />
              ) : (
                <Clock className="h-3 w-3 text-[var(--chat-text-muted)]" />
              )}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};