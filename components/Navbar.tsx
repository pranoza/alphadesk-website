'use client';

import React, { useState, useEffect } from 'react';
import {
  Layers,
  ChevronDown,
  Menu,
  X,
  LogIn,
  Sparkles,
  ShieldCheck,
  CalendarCheck,
  Clock,
  ArrowLeft,
  Building2,
  Calculator,
  HelpCircle,
  BarChart3,
  Flame,
  CheckCircle2,
} from 'lucide-react';

interface NavbarProps {
  onOpenDemoModal: () => void;
  onOpenLoginModal: () => void;
}

export default function Navbar({ onOpenDemoModal, onOpenLoginModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ویژگی‌ها', href: '#features' },
    { label: 'چالش‌ها', href: '#comparison' },
    { label: 'حوضچه آزاد', href: '#free-pool-showcase' },
    { label: 'محاسبه سود', href: '#roi-calculator' },
    { label: 'تعرفه‌ها', href: '#pricing' },
    { label: 'پرسش‌ها', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#121212]/95 backdrop-blur-md border-b border-[#242424] py-3 shadow-xl'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2.5 shrink-0 group focus:outline-none"
            >
              <div className="w-8 h-8 rounded-lg bg-[#1DB954] flex items-center justify-center shadow-lg shadow-[#1DB954]/20 group-hover:scale-105 transition-transform">
                <Layers className="w-4 h-4 text-black" strokeWidth={2.4} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base font-black tracking-tight text-white group-hover:text-[#1ED760] transition-colors whitespace-nowrap">
                  آلفادسک
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#1DB954]/15 text-[#1DB954] font-bold border border-[#1DB954]/30 whitespace-nowrap">
                  سامانه فروش
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links - Single line strictly guaranteed */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-2.5 xl:px-3 py-1.5 text-xs font-medium text-[#B3B3B3] hover:text-white transition-colors whitespace-nowrap rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={onOpenLoginModal}
                className="px-3 py-1.5 text-xs font-medium text-[#CCC] hover:text-white bg-[#181818] hover:bg-[#222222] border border-[#282828] rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <LogIn className="w-3.5 h-3.5 text-[#1DB954]" />
                <span>ورود</span>
              </button>

              <a
                href="#pricing"
                className="px-3.5 py-1.5 text-xs font-bold text-black bg-[#1DB954] hover:bg-[#1ED760] active:scale-95 rounded-lg transition-all flex items-center gap-1.5 shadow-md shadow-[#1DB954]/20 cursor-pointer whitespace-nowrap"
              >
                <span>مشاهده تعرفه‌ها</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="#pricing"
                className="sm:hidden px-2.5 py-1 text-xs font-bold text-black bg-[#1DB954] rounded-lg whitespace-nowrap"
              >
                تعرفه‌ها
              </a>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#B3B3B3] hover:text-white hover:bg-[#181818] rounded-lg transition-colors border border-transparent hover:border-[#282828]"
                aria-label="منو"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#181818] border-b border-[#282828] px-4 pt-3 pb-5 mt-2 space-y-2 shadow-2xl">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-medium text-[#B3B3B3] hover:text-white hover:bg-[#222222] rounded-lg transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-[#282828] flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenLoginModal();
                }}
                className="w-full py-2 text-xs font-medium text-white bg-[#222222] border border-[#282828] rounded-lg flex items-center justify-center gap-2"
              >
                <LogIn className="w-3.5 h-3.5 text-[#1DB954]" />
                <span>ورود به سامانه</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
