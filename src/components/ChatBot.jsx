import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (message.trim()) {
      toast({
        title: "🚧 Chatbot Feature",
        description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      });
      setMessage('');
    }
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[var(--gold)] text-black rounded-full flex items-center justify-center shadow-lg glow z-50 chatbot-attention"
      >
        <MessageCircle size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-gray-900 rounded-lg shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="font-semibold">GROWLOUDER Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto">
              <div className="bg-gray-800 rounded-lg p-3 mb-4">
                <p className="text-sm">
                  Hi! I'm your GROWLOUDER assistant. How can I help you grow your social media presence today?
                </p>
              </div>
            </div>

            <div className="p-4 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-[var(--gold)] text-black px-3 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;