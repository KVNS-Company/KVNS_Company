import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, Truck } from 'lucide-react';

export const SourcingRoute: React.FC = () => {
  return (
    <section id="sourcing" className="py-20 sm:py-32 bg-[#0A0A0A] border-b border-white/10 relative overflow-hidden">
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
            Supply Chain Flow
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-6xl font-serif font-light text-[#F5F5F4] tracking-tight mb-4"
          >
            Sourced with Reach. Supplied with Purpose.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-lg text-[#F5F5F4]/50 font-light leading-relaxed"
          >
            Direct agricultural sourcing from Gujarat, centralized mechanical processing in Virudhunagar, and wholesale supply across the South Indian market.
          </motion.p>
        </div>

        {/* 3-Stage Supply Chain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {/* Stage 1: Gujarat Sourcing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="p-6 sm:p-8 border border-white/10 bg-[#0F110F] relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="text-[10px] font-mono tracking-widest text-[#C5B358] uppercase">ORIGIN</span>
                <span className="text-[10px] font-mono text-[#F5F5F4]/40 uppercase">STAGE 01</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#F5F5F4] mb-2 sm:mb-3">Gujarat</h3>
              <p className="text-xs text-[#F5F5F4]/60 font-light leading-relaxed mb-6">
                Raw cotton and sesame seed materials sourced directly from established Gujarat agricultural growing zones.
              </p>
            </div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5B358] flex items-center gap-2 pt-4 border-t border-white/5">
              <span>Primary Raw Sourcing</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </motion.div>

          {/* Stage 2: Virudhunagar Processing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-6 sm:p-8 border border-[#C5B358]/40 bg-[#1A2E21]/50 relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="text-[10px] font-mono tracking-widest text-[#C5B358] uppercase">CENTRAL HUB</span>
                <span className="text-[10px] font-mono text-[#C5B358] uppercase">CORE PROCESSING</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#F5F5F4] mb-2 sm:mb-3">Virudhunagar</h3>
              <p className="text-xs text-[#F5F5F4]/70 font-light leading-relaxed mb-6">
                Our dedicated facility executes cleaning, drying, mechanical grading, bag packing, and organized warehousing.
              </p>
            </div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#F5F5F4] flex items-center gap-2 pt-4 border-t border-white/10">
              <MapPin className="w-3 h-3 text-[#C5B358]" />
              <span>Tamil Nadu · Facility</span>
            </div>
          </motion.div>

          {/* Stage 3: South India Wholesale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="p-6 sm:p-8 border border-white/10 bg-[#0F110F] relative flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="text-[10px] font-mono tracking-widest text-[#C5B358] uppercase">DESTINATION</span>
                <span className="text-[10px] font-mono text-[#F5F5F4]/40 uppercase">STAGE 03</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#F5F5F4] mb-2 sm:mb-3">South India</h3>
              <p className="text-xs text-[#F5F5F4]/60 font-light leading-relaxed mb-6">
                Wholesale distribution in standardized sacks to commercial oil mills, traders, and bulk buyers across South India.
              </p>
            </div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5B358] flex items-center gap-2 pt-4 border-t border-white/5">
              <Truck className="w-3 h-3" />
              <span>Buyer Pickup & Dispatch</span>
            </div>
          </motion.div>
        </div>

        {/* Stylized Regional Supply Route Diagram */}
        <div className="p-6 sm:p-12 border border-white/10 bg-[#0F110F] relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-10">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5B358] block mb-1">
                LOGISTICAL CORRIDOR
              </span>
              <h4 className="text-xl sm:text-3xl font-serif font-light text-[#F5F5F4]">
                Gujarat → Virudhunagar → South India Wholesale
              </h4>
            </div>

            {/* Stylized Vector Route Visual */}
            <div className="relative min-h-[120px] sm:h-48 w-full flex items-center justify-between px-2 sm:px-12">
              <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                <path
                  d="M 60 50% L 94% 50%"
                  fill="none"
                  stroke="rgba(197, 179, 88, 0.3)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              </svg>

              {/* Node 1: Gujarat */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0A0A0A] border border-[#C5B358]/40 flex items-center justify-center text-[#C5B358] mb-2 sm:mb-3">
                  <span className="font-mono text-xs sm:text-sm font-bold">GJ</span>
                </div>
                <div className="font-serif text-xs sm:text-base text-[#F5F5F4]">Gujarat</div>
                <div className="text-[9px] sm:text-[10px] text-[#F5F5F4]/40 font-mono">Raw Sourcing</div>
              </div>

              {/* Node 2: Virudhunagar */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#1A2E21] border border-[#C5B358] flex items-center justify-center text-[#C5B358] mb-2 sm:mb-3">
                  <div className="text-center">
                    <span className="font-serif font-bold text-base sm:text-lg block leading-none">K</span>
                    <span className="text-[7px] sm:text-[8px] uppercase tracking-tighter text-[#C5B358]/80 font-mono">HUB</span>
                  </div>
                </div>
                <div className="font-serif text-sm sm:text-lg text-[#F5F5F4] font-semibold">Virudhunagar</div>
                <div className="text-[9px] sm:text-[10px] text-[#C5B358] font-mono">Central Facility</div>
              </div>

              {/* Node 3: South India */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0A0A0A] border border-white/20 flex items-center justify-center text-[#F5F5F4] mb-2 sm:mb-3">
                  <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5B358]" />
                </div>
                <div className="font-serif text-xs sm:text-base text-[#F5F5F4]">South India</div>
                <div className="text-[9px] sm:text-[10px] text-[#F5F5F4]/40 font-mono">Wholesale Supply</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


