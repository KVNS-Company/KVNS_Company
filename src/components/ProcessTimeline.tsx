import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/companyData';
import {
  Sprout,
  Filter,
  Sun,
  Layers,
  Package,
  Warehouse,
  Truck,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Sprout,
  Filter,
  Sun,
  Layers,
  Package,
  Warehouse,
  Truck
};

export const ProcessTimeline: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  return (
    <section id="process" className="py-20 sm:py-32 bg-[#0A0A0A] border-b border-white/10 relative overflow-hidden">
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
            The Workflow
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-6xl font-serif font-light text-[#F5F5F4] tracking-tight mb-4"
          >
            From Raw Seed to Ready Supply
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-lg text-[#F5F5F4]/50 font-light leading-relaxed"
          >
            A disciplined seven-stage seed-processing pipeline executing mechanical cleaning, drying, precision grading, and bulk sack packaging inside our Virudhunagar facility.
          </motion.p>
        </div>

        {/* Desktop Interactive Horizontal Step Navigator */}
        <div className="hidden lg:block mb-12">
          <div className="flex justify-between items-center px-4 py-6 border border-white/10 bg-[#0F110F]">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = selectedStep === idx;
              const isPassed = idx <= selectedStep;

              return (
                <React.Fragment key={step.step}>
                  <button
                    onClick={() => setSelectedStep(idx)}
                    className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none px-2 min-h-[44px]"
                    aria-label={`Step ${step.step}: ${step.title}`}
                  >
                    <div
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#C5B358] ring-4 ring-[#C5B358]/20 scale-125'
                          : isPassed
                          ? 'bg-[#C5B358]/80'
                          : 'bg-white/20 group-hover:bg-white/40'
                      }`}
                    />
                    <span className="text-[10px] font-mono tracking-widest text-[#C5B358]/60 uppercase">
                      0{step.step}
                    </span>
                    <span
                      className={`text-xs font-serif uppercase tracking-wider transition-colors ${
                        isSelected ? 'text-[#F5F5F4] font-semibold' : 'text-[#F5F5F4]/50 group-hover:text-[#F5F5F4]'
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>

                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="flex-grow h-[1px] bg-white/10 mx-3 mb-6" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Step Highlight Interactive Card (Desktop Display) */}
        <div className="hidden lg:block">
          {(() => {
            const current = PROCESS_STEPS[selectedStep];
            const CurrentIcon = iconMap[current.iconName] || Sprout;
            return (
              <motion.div
                key={current.step}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-10 border border-white/10 bg-[#0F110F] grid grid-cols-12 gap-8 items-center"
              >
                <div className="col-span-4 flex items-center gap-6 border-r border-white/10 pr-8">
                  <div className="w-14 h-14 bg-[#1A2E21] border border-[#C5B358]/30 flex items-center justify-center text-[#C5B358] shrink-0">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5B358] font-bold block mb-1">
                      STAGE 0{selectedStep + 1} OF 07
                    </span>
                    <h4 className="text-2xl font-serif text-[#F5F5F4] font-light">
                      {current.title}
                    </h4>
                  </div>
                </div>

                <div className="col-span-5 space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5B358]">
                    Operational Purpose
                  </div>
                  <p className="text-base text-[#F5F5F4]/80 font-light leading-relaxed">
                    {current.description}
                  </p>
                  <p className="text-xs text-[#F5F5F4]/40 font-light">
                    {current.detail}
                  </p>
                </div>

                <div className="col-span-3 flex flex-col justify-center items-end gap-4 pl-6 border-l border-white/10">
                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#F5F5F4]/40">Facility Hub</span>
                    <div className="text-xs font-serif text-[#F5F5F4] mt-0.5">Virudhunagar Processing</div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedStep((prev) => (prev > 0 ? prev - 1 : prev))}
                      disabled={selectedStep === 0}
                      className="px-4 py-2.5 bg-transparent hover:bg-white/[0.05] disabled:opacity-30 text-xs font-mono text-[#F5F5F4] border border-white/10 transition-colors cursor-pointer flex items-center gap-1 min-h-[44px]"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>PREV</span>
                    </button>
                    <button
                      onClick={() => setSelectedStep((prev) => (prev < PROCESS_STEPS.length - 1 ? prev + 1 : prev))}
                      disabled={selectedStep === PROCESS_STEPS.length - 1}
                      className="px-4 py-2.5 bg-[#1A2E21] border border-[#C5B358]/30 hover:bg-[#243d2c] disabled:opacity-30 text-xs font-mono text-[#F5F5F4] font-semibold transition-colors cursor-pointer flex items-center gap-1 min-h-[44px]"
                    >
                      <span>NEXT</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-3 sm:space-y-4">
          {PROCESS_STEPS.map((step, idx) => {
            const StepIcon = iconMap[step.iconName] || Sprout;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-5 sm:p-6 border border-white/10 bg-[#0F110F] flex items-start gap-3.5 sm:gap-4"
              >
                <div className="w-10 h-10 bg-[#1A2E21] border border-[#C5B358]/30 flex items-center justify-center text-[#C5B358] shrink-0 mt-0.5">
                  <StepIcon className="w-5 h-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-[#C5B358] uppercase">
                      STEP 0{step.step}
                    </span>
                  </div>
                  <h4 className="text-lg font-serif font-light text-[#F5F5F4]">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#F5F5F4]/60 font-light leading-relaxed">
                    {step.description}
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


