import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS, COMPANY_DETAILS } from '../data/companyData';
import { Phone, ArrowUpRight } from 'lucide-react';

interface ProductsProps {
  onSelectProduct?: (productName: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onSelectProduct }) => {
  return (
    <section id="products" className="py-20 sm:py-32 bg-[#0A0A0A] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-[#C5B358] mb-3 sm:mb-4 block"
          >
            Essential Commodities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-6xl font-serif font-light text-[#F5F5F4] tracking-tight mb-4"
          >
            What We Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-lg text-[#F5F5F4]/50 font-light leading-relaxed"
          >
            Focused specialization in high-volume seed commodities. We prioritize processing precision, cleanliness, and bulk supply consistency.
          </motion.p>
        </div>

        {/* Product Cards: Sleek architectural layout */}
        <div className="space-y-10 sm:space-y-16">
          {PRODUCTS.map((product, index) => {
            const isEven = index % 2 === 1;
            const productWhatsappUrl = `https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=${encodeURIComponent(
              `Hello KVNS Company, I would like to enquire about wholesale supply for ${product.name}.`
            )}`;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 bg-[#0F110F] relative overflow-hidden group hover:border-[#C5B358]/30 transition-colors"
              >
                {/* Visual Image Presentation */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-2 border-t lg:border-t-0 lg:border-l border-white/10' : 'lg:order-1 border-b lg:border-b-0 lg:border-r border-white/10'
                  } relative overflow-hidden bg-[#0A0A0A]`}
                >
                  <div className="aspect-[16/10] sm:aspect-[16/10] w-full overflow-hidden relative">
                    <img
                      src={product.imageSrc}
                      alt={`${product.name} commodity visual`}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 contrast-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F110F] via-transparent to-transparent opacity-80" />
                    
                    {/* Index Badge */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1 bg-[#0A0A0A]/85 border border-white/10 text-[10px] font-mono tracking-widest text-[#C5B358]">
                      COMMODITY {product.number}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} p-6 sm:p-12 flex flex-col justify-between`}>
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl sm:text-4xl font-serif font-light text-[#F5F5F4] mb-1">
                          {product.name}
                        </h3>
                        <div className="text-xs font-mono uppercase tracking-widest text-[#C5B358]">
                          {product.tagline}
                        </div>
                      </div>
                      <span className="text-xs font-mono text-[#F5F5F4]/30">{product.number}</span>
                    </div>

                    <p className="text-xs sm:text-base text-[#F5F5F4]/60 font-light leading-relaxed mb-6 sm:mb-8">
                      {product.description}
                    </p>

                    {/* Processing Specs Grid */}
                    <div className="space-y-3 mb-6 sm:mb-8">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5B358]">
                        Processing Standards
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                        {product.details.map((detail, dIdx) => (
                          <div
                            key={dIdx}
                            className="p-2.5 sm:p-3 bg-white/[0.02] border border-white/5 flex items-center gap-2.5 text-xs text-[#F5F5F4]/80 font-light"
                          >
                            <div className="w-1.5 h-1.5 bg-[#C5B358]/80 shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                    <a
                      href={productWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1A2E21] border border-[#C5B358]/30 py-3.5 px-6 text-xs font-bold uppercase tracking-widest text-[#F5F5F4] hover:bg-[#243d2c] transition-all flex items-center justify-center gap-2.5 min-h-[44px]"
                    >
                      <div className="w-1.5 h-1.5 bg-[#C5B358] rounded-full animate-pulse" />
                      <span>WhatsApp Enquiry</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C5B358]" />
                    </a>

                    <a
                      href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                      className="bg-transparent border border-white/10 py-3.5 px-6 text-xs font-mono tracking-wider text-[#F5F5F4]/80 hover:text-[#C5B358] hover:border-[#C5B358]/40 transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C5B358]" />
                      <span>{COMPANY_DETAILS.phone}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


