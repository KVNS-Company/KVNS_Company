import React from 'react';
import { motion } from 'motion/react';

export const BrandStatement: React.FC = () => {
  return (
    <section className="py-20 sm:py-36 bg-[#0A0A0A] border-b border-white/10 relative overflow-hidden text-center">
      {/* Background wireframe accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full border border-[#C5B358]/30 animate-[spin_120s_linear_infinite]" />
        <div className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-full border border-dashed border-white/20" />
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5B358] block mb-4 sm:mb-6">
            EST. 1997 · VIRUDHUNAGAR, TAMIL NADU
          </span>

          <h2 className="text-3xl sm:text-6xl md:text-7xl font-serif font-light text-[#F5F5F4] leading-[1.1] tracking-tight mb-6 sm:mb-8">
            Rooted in Legacy.{' '}
            <span className="text-[#C5B358] italic font-normal">
              Driven by Precision.
            </span>
          </h2>

          <p className="text-sm sm:text-xl text-[#F5F5F4]/60 font-light max-w-2xl mx-auto leading-relaxed">
            Experience built across generations. Processing adapted for today. Wholesale supply built around consistency.
          </p>
        </motion.div>
      </div>
    </section>
  );
};


