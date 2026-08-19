import React from 'react';
import { motion } from 'motion/react';
import { PRINCIPLES } from '../data/companyData';
import { ShieldCheck, Repeat, Award, Target } from 'lucide-react';

const icons = [ShieldCheck, Repeat, Award, Target];

export const WhyKVNS: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-[#0A0A0A] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-[#C5B358] block mb-3 sm:mb-4"
          >
            Operational Pillars
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-6xl font-serif font-light text-[#F5F5F4] tracking-tight mb-3 sm:mb-4"
          >
            Why KVNS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-lg text-[#F5F5F4]/50 font-light leading-relaxed"
          >
            Four foundational disciplines guiding our seed intake, processing workflows, and wholesale fulfillment.
          </motion.p>
        </div>

        {/* 4 Clean Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {PRINCIPLES.map((principle, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 sm:p-8 bg-[#0F110F] hover:bg-[#141814] transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <div className="w-10 h-10 bg-[#1A2E21] border border-[#C5B358]/30 flex items-center justify-center text-[#C5B358]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-[#F5F5F4]/30">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-light text-[#F5F5F4] mb-1">
                    {principle.title}
                  </h3>

                  <div className="text-[10px] uppercase font-mono tracking-wider text-[#C5B358] mb-3 sm:mb-4">
                    {principle.tagline}
                  </div>

                  <p className="text-xs text-[#F5F5F4]/60 font-light leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


