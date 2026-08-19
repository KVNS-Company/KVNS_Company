import React, { useState } from 'react';
import { motion } from 'motion/react';
import { COMPANY_DETAILS, PRODUCTS } from '../data/companyData';
import { Phone, MessageCircle, MapPin, ExternalLink, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>('Cotton Seeds');
  const [bagEstimate, setBagEstimate] = useState<string>('100 - 300 Bags');
  const [buyerType, setBuyerType] = useState<string>('Oil Mill / Commercial Processor');

  const customWhatsappMessage = `Hello KVNS Company, I would like to enquire about wholesale supply:
- Product: ${selectedProduct}
- Estimated Quantity: ${bagEstimate}
- Buyer Type: ${buyerType}
Please let me know current availability and grades.`;

  const customWhatsappUrl = `https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=${encodeURIComponent(
    customWhatsappMessage
  )}`;

  const directWhatsappUrl = `https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=${encodeURIComponent(
    COMPANY_DETAILS.whatsappMessage
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-32 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-12">
        {/* Main CTA Block */}
        <div className="max-w-3xl mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-[#C5B358] mb-3 sm:mb-4 block"
          >
            Direct Commercial Contact
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-6xl font-serif font-light text-[#F5F5F4] tracking-tight mb-4"
          >
            Looking for Wholesale Seed Supply?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-lg text-[#F5F5F4]/50 font-light leading-relaxed"
          >
            Talk directly with KVNS Company for product availability, grades and wholesale enquiries.
          </motion.p>
        </div>

        {/* 2-Column: Quick Wholesale Enquiry Generator & Interactive Facility Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: Interactive Wholesale Bag Specifier Helper */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 p-6 sm:p-10 border border-white/10 bg-[#0F110F] flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5B358] mb-2">
                Order Configuration
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#F5F5F4] mb-2">
                Specify Seed Requirement
              </h3>
              <p className="text-xs text-[#F5F5F4]/50 font-light mb-6 sm:mb-8">
                Select your required commodity and quantity to generate a direct WhatsApp enquiry message to our desk.
              </p>

              <div className="space-y-5 sm:space-y-6">
                {/* Product Choice */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#F5F5F4]/60 mb-2">
                    Seed Commodity
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PRODUCTS.map((prod) => (
                      <button
                        key={prod.id}
                        type="button"
                        onClick={() => setSelectedProduct(prod.name)}
                        className={`p-3.5 sm:p-4 border text-left transition-colors cursor-pointer min-h-[48px] ${
                          selectedProduct === prod.name
                            ? 'bg-[#1A2E21] border-[#C5B358] text-[#F5F5F4]'
                            : 'bg-[#0A0A0A] border-white/10 text-[#F5F5F4]/60 hover:border-white/20'
                        }`}
                      >
                        <div className="text-sm font-serif font-medium">{prod.name}</div>
                        <div className="text-[10px] font-mono text-[#C5B358]">{prod.packaging}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Estimated Bag Volume */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#F5F5F4]/60 mb-2">
                    Estimated Volume (Bags/Sacks)
                  </label>
                  <select
                    value={bagEstimate}
                    onChange={(e) => setBagEstimate(e.target.value)}
                    className="w-full p-3 bg-[#0A0A0A] border border-white/10 text-xs font-mono text-[#F5F5F4] focus:outline-none focus:border-[#C5B358] min-h-[44px]"
                  >
                    <option value="50 - 100 Bags">50 – 100 Bags (Trial Wholesale)</option>
                    <option value="100 - 300 Bags">100 – 300 Bags (Standard Bulk)</option>
                    <option value="300 - 500 Bags">300 – 500 Bags (Commercial Lot)</option>
                    <option value="500 - 1,000+ Bags">500 – 1,000+ Bags (Continuous Supply)</option>
                  </select>
                </div>

                {/* Buyer Category */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#F5F5F4]/60 mb-2">
                    Buyer Category
                  </label>
                  <select
                    value={buyerType}
                    onChange={(e) => setBuyerType(e.target.value)}
                    className="w-full p-3 bg-[#0A0A0A] border border-white/10 text-xs font-mono text-[#F5F5F4] focus:outline-none focus:border-[#C5B358] min-h-[44px]"
                  >
                    <option value="Oil Mill / Commercial Processor">Oil Mill / Commercial Processor</option>
                    <option value="Agricultural Wholesale Trader">Agricultural Wholesale Trader</option>
                    <option value="Feed / Industrial Manufacturer">Feed / Industrial Manufacturer</option>
                    <option value="Bulk Commodity Buyer">Bulk Commodity Buyer</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/10">
              <a
                href={customWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-[#1A2E21] border border-[#C5B358]/40 hover:bg-[#243d2c] text-[#F5F5F4] text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                id="custom-enquiry-whatsapp"
              >
                <div className="w-1.5 h-1.5 bg-[#C5B358] rounded-full animate-pulse" />
                <span>Send Enquiry via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C5B358]" />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Location & Google Maps Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-6 p-6 sm:p-10 border border-white/10 bg-[#0F110F] flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5B358] mb-2">
                Centralized Processing Facility
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#F5F5F4] mb-1">
                {COMPANY_DETAILS.name}
              </h3>
              <p className="text-sm text-[#F5F5F4]/80 font-light mb-1">
                {COMPANY_DETAILS.location}
              </p>
              <p className="text-xs text-[#F5F5F4]/50 font-light mb-6 sm:mb-8">
                Single centralized seed processing, mechanical grading, and organized warehouse facility. Direct buyer pickup and loading bays.
              </p>

              {/* Verified Phone & WhatsApp Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                <div className="p-3.5 sm:p-4 border border-white/10 bg-[#0A0A0A]">
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[#C5B358] mb-1">Direct Phone</div>
                  <a
                    href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-mono text-[#F5F5F4] hover:text-[#C5B358] transition-colors"
                  >
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
                <div className="p-3.5 sm:p-4 border border-white/10 bg-[#0A0A0A]">
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[#C5B358] mb-1">Wholesale Desk</div>
                  <div className="text-sm font-mono text-[#F5F5F4]">WhatsApp / Voice</div>
                </div>
              </div>

              {/* Map Preview Frame */}
              <div className="relative border border-white/10 bg-[#0A0A0A] aspect-[16/9] w-full">
                <iframe
                  title="KVNS Company Location Map"
                  src="https://maps.google.com/maps?q=Virudhunagar,+Tamil+Nadu,+India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Direct Google Maps Link */}
            <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/10 flex flex-wrap gap-4">
              <a
                href={COMPANY_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 border border-white/10 hover:border-[#C5B358]/40 bg-transparent text-xs font-mono tracking-wider uppercase text-[#F5F5F4] transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                id="google-maps-link"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5B358]" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-[#F5F5F4]/40" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

  );
};

