import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Stats } from './components/Stats';
import { Products } from './components/Products';
import { ProcessTimeline } from './components/ProcessTimeline';
import { SourcingRoute } from './components/SourcingRoute';
import { LegacyTimeline } from './components/LegacyTimeline';
import { BrandStatement } from './components/BrandStatement';
import { WhyKVNS } from './components/WhyKVNS';
import { ContactSection } from './components/ContactSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F4] selection:bg-[#C5B358] selection:text-[#0A0A0A] font-sans antialiased">
      {/* Top Floating Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main id="main-content">
        {/* 1. Cinematic Hero Section */}
        <Hero />

        {/* 2. Editorial Introduction Section */}
        <Introduction />

        {/* 3. Scale / Trust Statistics Section */}
        <Stats />

        {/* 4. Products: Cotton Seeds & Sesame Seeds */}
        <Products />

        {/* 5. 7-Stage Process Pipeline */}
        <ProcessTimeline />

        {/* 6. Supply Chain Sourcing & South India Reach */}
        <SourcingRoute />

        {/* 7. Generational Legacy Chronology */}
        <LegacyTimeline />

        {/* 8. Full-screen Brand Statement */}
        <BrandStatement />

        {/* 9. Why KVNS Core Principles */}
        <WhyKVNS />

        {/* 10. Direct Wholesale Contact & Interactive Google Maps */}
        <ContactSection />
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Premium Dark Footer */}
      <Footer />
    </div>
  );
}

