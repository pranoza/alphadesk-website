'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PainVsSolution from '@/components/PainVsSolution';
import CoreFeatures from '@/components/CoreFeatures';
import ProductShowcase from '@/components/ProductShowcase';
import RoiCalculator from '@/components/RoiCalculator';
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';

export default function HomePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col selection:bg-[#1DB954] selection:text-black">
      {/* Sticky Header & Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section with Live Mockup */}
        <HeroSection
          onOpenDemoModal={() => setIsDemoModalOpen(true)}
          onScrollToInteractive={() => scrollToSection('interactive-demo')}
        />

        {/* 2. Pain Points vs Solutions */}
        <PainVsSolution />

        {/* 3. Core Architectural Features Grid */}
        <CoreFeatures />

        {/* 4. Interactive Product Showcase with Claim Simulation */}
        <div id="free-pool-showcase">
          <ProductShowcase />
        </div>

        {/* 5. Interactive ROI Calculator */}
        <RoiCalculator onOpenDemoModal={() => setIsDemoModalOpen(true)} />

        {/* 6. Pricing Tiers */}
        <PricingSection onOpenDemoModal={() => setIsDemoModalOpen(true)} />

        {/* 7. FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Rich Footer */}
      <Footer />

      {/* Interactive Modals */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
}
