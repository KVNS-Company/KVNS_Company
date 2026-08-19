import React from 'react';
import { motion } from 'motion/react';
import { History } from 'lucide-react';

export const Introduction: React.FC = () => {
  return (
    <section id="about" className="relative py-20 sm:py-32 bg-[#0A0A0A] border-b border-white/10 overflow-hidden">
      {/* Sleek background wireframe linework */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border-[0.5px] border-[#C5B358]/10 rounded-full translate-x-1/2 pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] border-[0.5px] border-white/5 rounded-full translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Large Typography with Italic Accent */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-[0.4em] text-[#C5B358] mb-4 sm:mb-6">
                <History className="w-3.5 h-3.5" />
                <span>Foundational Heritage</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light text-[#F5F5F4] leading-[1.05] tracking-tight">
                Built on generations of <br />
                <span className="italic text-[#C5B358] font-normal">seed business experience.</span>
              </h2>
            </motion.div>
          </div>

          {/* Right Column: Editorial Company Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 sm:space-y-6"
            >
              <p className="text-base sm:text-lg text-[#F5F5F4]/80 leading-relaxed font-light">
                KVNS Company was established in 1997 by{' '}
                <strong className="text-[#F5F5F4] font-medium">Natarajan Rajesekaran</strong>, carrying forward a family legacy deeply rooted in the seed business.
              </p>
              
              <p className="text-xs sm:text-sm text-[#F5F5F4]/50 leading-relaxed font-light">
                Today, KVNS combines that generational wisdom with modern seed-processing machinery and dependable wholesale operations across South India. We operate from our single centralized facility in Virudhunagar, maintaining disciplined quality control from raw Gujarat sourcing to final buyer pickup.
              </p>

              {/* Verified Key Pillars */}
              <div className="pt-2 sm:pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 sm:p-5 bg-[#0F110F] border border-white/10">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5B358] font-semibold mb-1">Founder</div>
                  <div className="text-sm sm:text-base font-serif font-semibold text-[#F5F5F4]">Natarajan Rajesekaran</div>
                </div>
                <div className="p-4 sm:p-5 bg-[#0F110F] border border-white/10">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5B358] font-semibold mb-1">Established</div>
                  <div className="text-sm sm:text-base font-serif font-semibold text-[#F5F5F4]">1997 · Virudhunagar</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

  );
};

