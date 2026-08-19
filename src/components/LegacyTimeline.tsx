import React from 'react';
import { motion } from 'motion/react';
import { LEGACY_MILESTONES } from '../data/companyData';

export const LegacyTimeline: React.FC = () => {
  return (
    <section id="legacy" className="py-20 sm:py-32 bg-[#0A0A0A] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-[#C5B358] mb-3 sm:mb-4 block"
          >
            Generational Heritage
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-6xl font-serif font-light text-[#F5F5F4] tracking-tight mb-4 sm:mb-6"
          >
            A Legacy That Started Before the Company.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3 sm:space-y-4 text-sm sm:text-lg text-[#F5F5F4]/60 font-light leading-relaxed"
          >
            <p>
              The seed business runs deeper than a company name. Generations of family experience laid the foundation for KVNS, formally established in 1997 by <strong className="text-[#F5F5F4] font-medium">Natarajan Rajesekaran</strong>.
            </p>
            <p className="text-xs sm:text-base text-[#F5F5F4]/40">
              The business has continued to evolve with changing technology while remaining rooted in the knowledge and discipline passed down through generations.
            </p>
          </motion.div>
        </div>

        {/* Chronological Milestone Journey */}
        <div className="relative border-l border-white/10 ml-2.5 sm:ml-6 space-y-6 sm:space-y-12 pl-4 sm:pl-10">
          {LEGACY_MILESTONES.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="relative group"
            >
              {/* Timeline Marker Point */}
              <div
                className={`absolute -left-[23px] sm:-left-[47px] top-1.5 w-3 h-3 sm:w-3.5 sm:h-3.5 border transition-all duration-300 ${
                  milestone.highlight
                    ? 'bg-[#C5B358] border-[#C5B358] shadow-[0_0_12px_rgba(197,179,88,0.4)]'
                    : 'bg-[#0A0A0A] border-white/40'
                }`}
              />

              <div
                className={`p-5 sm:p-8 border transition-colors ${
                  milestone.highlight
                    ? 'bg-[#1A2E21]/60 border-[#C5B358]/40'
                    : 'bg-[#0F110F] border-white/10'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#C5B358] uppercase">
                    {milestone.era}
                  </span>
                  {milestone.highlight && (
                    <span className="px-2.5 py-0.5 bg-[#C5B358]/10 text-[#C5B358] text-[9px] font-mono uppercase tracking-widest border border-[#C5B358]/30">
                      Landmark Era
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-2xl font-serif font-light text-[#F5F5F4] mb-2 sm:mb-3">
                  {milestone.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#F5F5F4]/60 font-light leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


