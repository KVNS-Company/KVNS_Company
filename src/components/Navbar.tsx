import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_DETAILS } from '../data/companyData';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Process', href: '#process' },
    { name: 'Sourcing', href: '#sourcing' },
    { name: 'Legacy', href: '#legacy' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      setScrolled(isScrolled);

      const sections = ['hero', 'about', 'products', 'process', 'sourcing', 'legacy', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=${encodeURIComponent(
    COMPANY_DETAILS.whatsappMessage
  )}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-4 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10'
            : 'py-6 bg-transparent border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="focus:outline-none focus:ring-1 focus:ring-[#C5B358]"
            aria-label="KVNS Company Home"
          >
            <Logo size={scrolled ? 'sm' : 'md'} light={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors duration-200 py-1 relative ${
                    isActive
                      ? 'text-[#F5F5F4] opacity-100 font-semibold'
                      : 'text-[#F5F5F4] opacity-60 hover:opacity-100 hover:text-[#C5B358]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5B358]"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-6">
            <span className="text-xs font-mono text-[#C5B358] tracking-tighter hidden md:inline">
              EST. 1997
            </span>

            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
              className="text-xs font-mono text-[#F5F5F4]/70 hover:text-[#C5B358] transition-colors flex items-center gap-2"
              id="navbar-phone-cta"
            >
              <Phone className="w-3 h-3 text-[#C5B358]" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-[#F5F5F4] text-[#0A0A0A] px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5B358] transition-colors"
              id="navbar-contact-cta"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#0A0A0A] bg-[#C5B358] hover:bg-[#ebd594] transition-colors"
              aria-label="WhatsApp KVNS"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F5F5F4] hover:text-[#C5B358] border border-white/10 bg-[#0F110F] focus:outline-none"
              aria-label="Toggle Menu"
              id="navbar-mobile-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-40 bg-[#0A0A0A] border-b border-white/10 p-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 text-sm font-sans tracking-[0.2em] uppercase text-[#F5F5F4]/70 hover:text-[#F5F5F4] hover:bg-white/[0.03] border border-white/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C5B358]" />
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                  className="w-full flex items-center justify-center gap-2.5 py-3 text-xs font-mono tracking-wider text-[#F5F5F4] bg-[#0F110F] border border-white/10"
                >
                  <Phone className="w-4 h-4 text-[#C5B358]" />
                  <span>Call {COMPANY_DETAILS.phone}</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#1A2E21] border border-[#C5B358]/30 py-4 flex items-center justify-center gap-3 hover:bg-[#233b2a] transition-all text-xs tracking-[0.2em] uppercase font-bold text-[#F5F5F4]"
                >
                  <div className="w-2 h-2 bg-[#C5B358] rounded-full animate-pulse" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

