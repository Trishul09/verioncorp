import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Coins, Users, Plus, Search, Settings } from 'lucide-react';
import { Contact } from '@/pages/ChatPage';
import { Input } from '@/components/ui/input';

interface ContactListProps {
  contacts: Contact[];
  selectedContact: Contact | null;
  onSelectContact: (contact: Contact) => void;
  xbitsBalance: number;
  onTokenRequest: (contactId: string, dataType: string, cost: number) => void;
  onDataRequest: () => void;
}

export const ContactList = ({
  contacts,
  selectedContact,
  onSelectContact,
  xbitsBalance,
  onDataRequest
}: ContactListProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredContact, setHoveredContact] = useState<string | null>(null);

  const filteredContacts = contacts.filter(contact =>
    contact.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatLastSeen = (lastSeen?: Date) => {
    if (!lastSeen) return '';
    const now = new Date();
    const diff = now.getTime() - lastSeen.getTime();
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-[var(--chat-text-primary)] font-['Inter']">
            Contacts
          </h2>
          <Button
            size="sm"
            variant="ghost"
            className="ripple-effect h-9 w-9 p-0 hover:bg-white/5"
          >
            <Settings className="h-4 w-4 text-[var(--chat-text-muted)]" />
          </Button>
        </div>

        {/* Xbits Balance */}
        <motion.div 
          className="chat-glass-gold p-3 rounded-xl border border-[var(--chat-accent-gold)]/20 mb-4"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Coins className="h-5 w-5 text-[var(--chat-accent-gold)]" />
              </motion.div>
              <span className="text-sm font-medium text-[var(--chat-text-primary)]">
                Xbits Balance
              </span>
            </div>
            <span className="text-lg font-bold text-[var(--chat-accent-gold)]">
              {xbitsBalance.toLocaleString()}
            </span>
          </div>
        </motion.div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--chat-text-muted)]" />
          <Input
            placeholder="Search contacts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/5 border-white/10 text-[var(--chat-text-primary)] placeholder:text-[var(--chat-text-muted)] focus:border-[var(--chat-accent-lavender)]/30"
          />
        </div>
      </div>

      {/* Contacts List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        <AnimatePresence>
          {filteredContacts.map((contact, index) => (
            <motion.div
              key={contact.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                selectedContact?.id === contact.id
                  ? 'chat-glass-teal border border-[var(--chat-accent-teal)]/30 chat-shadow-glow'
                  : 'hover:bg-white/5 border border-transparent'
              }`}
              onClick={() => onSelectContact(contact)}
              onMouseEnter={() => setHoveredContact(contact.id)}
              onMouseLeave={() => setHoveredContact(null)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-3">
                {/* Avatar with online indicator */}
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`ring-2 ring-offset-2 ring-offset-transparent rounded-full ${
                      contact.isOnline 
                        ? 'ring-[var(--chat-accent-teal)]/50' 
                        : 'ring-transparent'
                    }`}
                  >
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={contact.avatar} />
                      <AvatarFallback className="bg-gradient-to-br from-[var(--chat-accent-lavender)] to-[var(--chat-accent-teal)] text-white font-medium">
                        {contact.username.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                  
                  {/* Online/Offline indicator */}
                  <motion.div
                    className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[var(--background)] ${
                      contact.isOnline ? 'bg-green-400' : 'bg-gray-400'
                    }`}
                    animate={contact.isOnline ? { 
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Contact Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-[var(--chat-text-primary)] truncate">
                      {contact.username}
                    </h3>
                    {contact.hasUnread && (
                      <motion.div
                        className="bg-[var(--chat-accent-gold)] text-black text-xs font-bold px-2 py-1 rounded-full min-w-[20px] text-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      >
                        {contact.unreadCount}
                      </motion.div>
                    )}
                  </div>
                  
                  <p className="text-sm text-[var(--chat-text-muted)] mt-1">
                    {contact.isOnline ? (
                      <span className="text-[var(--chat-accent-teal)]">Online</span>
                    ) : (
                      `Last seen ${formatLastSeen(contact.lastSeen)}`
                    )}
                  </p>
                </div>
              </div>

              {/* Hover actions */}
              <AnimatePresence>
                {hoveredContact === contact.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute top-2 right-2"
                  >
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-7 w-7 p-0 bg-[var(--chat-accent-gold)]/20 hover:bg-[var(--chat-accent-gold)]/30 text-[var(--chat-accent-gold)]"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDataRequest();
                      }}
                    >
                      <Coins className="h-3 w-3" />
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-white/5 space-y-2">
        <Button 
          className="w-full ripple-effect bg-gradient-to-r from-[var(--chat-accent-lavender)] to-[var(--chat-accent-teal)] hover:from-[var(--chat-accent-lavender)]/80 hover:to-[var(--chat-accent-teal)]/80 text-white border-none"
          size="sm"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Contact
        </Button>
        
        <Button 
          variant="outline"
          className="w-full border-white/10 text-[var(--chat-text-muted)] hover:bg-white/5 hover:text-[var(--chat-text-primary)]"
          size="sm"
        >
          <Users className="h-4 w-4 mr-2" />
          Create Group
        </Button>
      </div>
    </div>
  );
};