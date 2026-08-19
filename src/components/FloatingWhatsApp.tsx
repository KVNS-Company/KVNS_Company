import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/companyData';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=${encodeURIComponent(
    COMPANY_DETAILS.whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3" id="floating-whatsapp-container">
      {/* Friendly Quick Prompt Bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 10 }}
            className="hidden sm:flex items-center gap-3 py-3 px-4 bg-[#0F110F] border border-white/10 text-xs shadow-2xl text-[#F5F5F4] max-w-xs"
          >
            <span className="w-2 h-2 bg-[#C5B358] animate-pulse shrink-0" />
            <span className="font-mono text-[11px]">Wholesale Desk: <strong>94438 73424</strong></span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#F5F5F4]/40 hover:text-white p-0.5 cursor-pointer"
              aria-label="Close message"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button: Sleek Interface Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 bg-[#1A2E21] text-[#C5B358] hover:bg-[#243d2c] flex items-center justify-center border border-[#C5B358]/40 shadow-2xl transition-colors relative group"
        aria-label="Chat with KVNS Company on WhatsApp"
        id="floating-whatsapp-button"
      >
        <MessageCircle className="w-5 h-5 fill-[#C5B358]" />
        <span className="sr-only">WhatsApp KVNS Company</span>
      </motion.a>
    </div>
  );
};

