import React from 'react';
import { motion } from 'motion/react';
import { STATS } from '../data/companyData';

export const Stats: React.FC = () => {
  return (
    <section className="bg-[#0A0A0A] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 py-12 sm:py-24">
        <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-white/10">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#C5B358] block mb-2">
              Scale & Operational Volume
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-light text-[#F5F5F4]">
              Verified Wholesale Capacity
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#F5F5F4]/50 max-w-md font-light leading-relaxed">
            Continuous throughput supporting agricultural, commercial, and oilseed wholesale networks across South India.
          </p>
        </div>

        {/* 4-column Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/10 divide-y sm:divide-y-0 sm:divide-x divide-white/10 bg-[#0F110F]">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 sm:p-10 flex flex-col justify-between relative group hover:bg-white/[0.02] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <span className="text-[10px] font-mono tracking-widest text-[#F5F5F4]/30 uppercase">
                    0{idx + 1}
                  </span>
                  <div className="w-1.5 h-1.5 bg-[#C5B358]" />
                </div>

                {/* Stat Value */}
                <div className="text-3xl sm:text-4xl font-serif text-[#C5B358] font-normal tracking-tight mb-1 sm:mb-2">
                  {stat.value}
                </div>

                {/* Labels */}
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F5F4] mb-1 sm:mb-2">
                  {stat.label}
                </div>
              </div>
              
              <div className="text-xs text-[#F5F5F4]/40 font-light leading-relaxed pt-3 sm:pt-4 border-t border-white/5 mt-3 sm:mt-4">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
};

