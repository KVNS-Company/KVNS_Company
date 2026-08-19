import React from 'react';
import { motion } from 'motion/react';
import { SeedCanvas } from './SeedCanvas';
import { COMPANY_DETAILS } from '../data/companyData';
import { ArrowDown, MessageCircle, ArrowRight } from 'lucide-react';
import bgFlowImg from '../assets/images/abstract_seed_flow_1787152337629.jpg';

interface HeroProps {
  onOpenEnquiry?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=${encodeURIComponent(
    COMPANY_DETAILS.whatsappMessage
  )}`;

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92svh] flex flex-col justify-between pt-32 pb-16 overflow-hidden bg-[#0A0A0A] border-b border-white/10"
    >
      {/* Background Graphic & Concentric Circles */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2E21]/60 via-[#0A0A0A]/90 to-[#0A0A0A]" />
        
        {/* Sleek Concentric Wireframe Rings */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] border-[0.5px] border-[#C5B358]/20 rounded-full translate-x-1/3 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[700px] h-[700px] sm:w-[950px] sm:h-[950px] border-[0.5px] border-[#C5B358]/10 rounded-full translate-x-1/3 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[900px] h-[900px] sm:w-[1200px] sm:h-[1200px] border-[0.5px] border-white/5 rounded-full translate-x-1/3 -translate-y-1/2" />
        
        <img
          src={bgFlowImg}
          alt="Abstract background texture"
          className="w-full h-full object-cover object-center opacity-15 filter brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-sleek-grid opacity-30" />
      </div>

      {/* Floating Canvas Particles */}
      <SeedCanvas className="z-0" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12 w-full my-auto">
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6"
          >
            <div className="w-1.5 h-1.5 bg-[#C5B358] animate-pulse shrink-0" />
            <span className="text-[#C5B358] text-[11px] sm:text-xs font-mono font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase">
              EST. 1997 · VIRUDHUNAGAR · TAMIL NADU
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-7xl lg:text-[5.5rem] font-serif leading-[1.0] sm:leading-[0.95] mb-6 sm:mb-8 font-light text-[#F5F5F4]"
          >
            Generations of <br />
            <span className="italic text-[#C5B358] font-normal">Seed Expertise.</span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-lg text-[#F5F5F4]/60 leading-relaxed max-w-xl mb-8 sm:mb-10 font-light"
          >
            KVNS Company processes and supplies quality cotton and sesame seeds, combining industrial precision with generations of family experience built for modern South Indian wholesale.
          </motion.p>

          {/* CTA Buttons & Metric Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5 mb-10 sm:mb-14"
          >
            <button
              onClick={() => handleScrollTo('products')}
              className="bg-[#F5F5F4] text-[#0A0A0A] px-7 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#C5B358] transition-colors cursor-pointer flex items-center justify-center gap-3 min-h-[48px]"
              id="hero-explore-cta"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1A2E21] border border-[#C5B358]/30 text-[#F5F5F4] px-7 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#243d2c] transition-all flex items-center justify-center gap-3 min-h-[48px]"
              id="hero-talk-cta"
            >
              <div className="w-2 h-2 bg-[#C5B358] rounded-full animate-pulse" />
              <span>WhatsApp KVNS</span>
            </a>
          </motion.div>

          {/* Sleek Hero Metric Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="grid grid-cols-2 sm:flex sm:items-center gap-6 sm:gap-12 pt-6 sm:pt-8 border-t border-white/10"
          >
            <div className="flex flex-col">
              <span className="text-2xl sm:text-4xl font-serif text-[#C5B358]">50,000</span>
              <span className="text-[10px] uppercase tracking-widest text-[#F5F5F4]/40 mt-1">
                Bags Per Year
              </span>
            </div>

            <div className="w-px h-10 bg-white/10 hidden sm:block" />

            <div className="flex flex-col">
              <span className="text-2xl sm:text-4xl font-serif text-[#C5B358]">1997</span>
              <span className="text-[10px] uppercase tracking-widest text-[#F5F5F4]/40 mt-1">
                Founded Year
              </span>
            </div>

            <div className="w-px h-10 bg-white/10 hidden sm:block" />

            <div className="col-span-2 sm:col-span-1 flex flex-col pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
              <span className="text-2xl sm:text-4xl font-serif text-[#C5B358]">South India</span>
              <span className="text-[10px] uppercase tracking-widest text-[#F5F5F4]/40 mt-1">
                Wholesale Reach
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar: Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12 w-full pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono text-[#F5F5F4]/40 uppercase tracking-widest"
      >
        <div className="flex items-center gap-2 text-center">
          <span>VIRUDHUNAGAR, TN</span>
          <span>·</span>
          <span>COTTON & SESAME SEEDS</span>
        </div>

        <button
          onClick={() => handleScrollTo('about')}
          className="flex items-center gap-2 hover:text-[#C5B358] transition-colors focus:outline-none cursor-pointer py-1"
          aria-label="Scroll to introduction"
        >
          <span>SCROLL</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#C5B358] animate-bounce" />
        </button>
      </motion.div>

    </section>
  );
};

