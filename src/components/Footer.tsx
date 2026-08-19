import React from 'react';
import { Logo } from './Logo';
import { COMPANY_DETAILS } from '../data/companyData';
import { Phone, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=${encodeURIComponent(
    COMPANY_DETAILS.whatsappMessage
  )}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 text-[#F5F5F4]/60 pt-16 sm:pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 sm:pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4 sm:space-y-5">
            <Logo size="md" light={true} />
            <p className="text-xs sm:text-sm text-[#F5F5F4]/50 font-light max-w-sm leading-relaxed">
              KVNS Company processes and supplies wholesale cotton and sesame seeds, carrying forward generations of seed business knowledge with modern facility operations in Virudhunagar, Tamil Nadu.
            </p>
            <div className="text-[10px] font-mono tracking-widest text-[#C5B358] uppercase">
              ESTABLISHED 1997 · VIRUDHUNAGAR
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#C5B358] font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#about" className="hover:text-[#C5B358] transition-colors">
                  01. About & Legacy
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#C5B358] transition-colors">
                  02. Cotton & Sesame Seeds
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#C5B358] transition-colors">
                  03. 7-Stage Seed Processing
                </a>
              </li>
              <li>
                <a href="#sourcing" className="hover:text-[#C5B358] transition-colors">
                  04. Sourcing & Supply Chain
                </a>
              </li>
              <li>
                <a href="#legacy" className="hover:text-[#C5B358] transition-colors">
                  05. Generational Heritage
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C5B358] transition-colors">
                  06. Wholesale Enquiry & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Wholesale Contact */}
          <div className="md:col-span-4 space-y-3 sm:space-y-4">
            <h4 className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#C5B358] font-bold">
              Wholesale Desk
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-3.5 h-3.5 text-[#C5B358] shrink-0 mt-0.5" />
                <span className="text-[#F5F5F4]/80">{COMPANY_DETAILS.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-3.5 h-3.5 text-[#C5B358] shrink-0" />
                <a
                  href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                  className="font-mono text-[#F5F5F4] hover:text-[#C5B358] transition-colors"
                >
                  {COMPANY_DETAILS.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-3.5 h-3.5 text-[#C5B358] shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F5F5F4]/80 hover:text-[#C5B358] transition-colors"
                >
                  WhatsApp Direct Desk
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={COMPANY_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#C5B358] hover:underline"
              >
                <span>Google Maps Facility Pin</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[#F5F5F4]/40 uppercase tracking-widest text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Virudhunagar, Tamil Nadu</span>
            <button
              onClick={scrollToTop}
              className="text-[#C5B358] hover:text-white transition-colors cursor-pointer py-1"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};


