'use client';

import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  ShieldCheck,
  Clock,
  ArrowLeft,
  Play,
  Building,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenDemoModal?: () => void;
  onScrollToInteractive: () => void;
  onOpenLoginModal?: () => void;
}

export default function HeroSection({
  onScrollToInteractive,
  onOpenLoginModal,
}: HeroSectionProps) {
  const [secondsRemaining, setSecondsRemaining] = useState(14520);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 14520));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSec: number) => {
    const hours = Math.floor(totalSec / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-56 bg-radial from-[#1DB954]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Minimal Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#262626] text-xs text-[#AAA]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954]" />
            <span>سامانه هوشمند فروش و حوضچه آزاد سرنخ‌ها</span>
          </div>

          {/* Minimal H1 Headline */}
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.3]">
            پایان سوختن سرنخ‌های فروش با{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#1DB954] via-[#1ED760] to-emerald-400">
              آلفادسک
            </span>
          </h1>

          {/* Minimal Subtitle */}
          <p className="text-sm sm:text-base text-[#999] font-normal leading-relaxed max-w-xl mx-auto">
            مدیریت هوشمند مشتریان، حوضچه آزاد سرنخ‌های منقضی و ارزیابی لحظه‌ای عملکرد فروش بدون پیچیدگی و سردرگمی.
          </p>

          {/* 3 Quiet Stat Indicators */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[#BBB]">
            <div className="flex items-center gap-1.5">
              <span className="text-[#1DB954] font-bold">+۳۵٪</span>
              <span>افزایش نرخ بستن فروش</span>
            </div>
            <span className="text-[#444]">·</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[#1DB954] font-bold">صفر</span>
              <span>تداخل در مالکیت شماره‌ها</span>
            </div>
            <span className="text-[#444]">·</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[#F59E0B] font-bold">۴۸ ساعت</span>
              <span>مهلت طلایی پیگیری قبل از آزادسازی</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={onScrollToInteractive}
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-black bg-[#1DB954] hover:bg-[#1ED760] active:scale-95 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-[#1DB954]/20 cursor-pointer"
            >
              <span>مشاهده پیش‌نمایش سامانه</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>

            <a
              href="https://panel.alphadesk.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-[#CCC] hover:text-white bg-[#181818] hover:bg-[#202020] border border-[#282828] rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>ورود به سامانه</span>
            </a>
          </div>
        </div>

        {/* Minimal Clean Product Mockup */}
        <div className="mt-12 md:mt-16 relative mx-auto max-w-4xl">
          <div className="relative rounded-2xl bg-[#161616] border border-[#242424] shadow-2xl overflow-hidden">
            {/* Window Bar */}
            <div className="bg-[#121212] px-4 py-2.5 border-b border-[#202020] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E22134]/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#1DB954]/80 inline-block" />
                <span className="mr-3 text-xs text-[#666]">میز کار سامانه آلفادسک</span>
              </div>

              <div className="flex items-center gap-2 bg-[#1a1a1a] px-2.5 py-0.5 rounded-lg border border-[#262626] text-xs">
                <Building className="w-3 h-3 text-[#1DB954]" />
                <span className="text-[#CCC]">هلدینگ پارس · شعبه تهران</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#888]">
                <span className="w-2 h-2 rounded-full bg-[#1DB954]" />
                <span>پایگاه داده امن</span>
              </div>
            </div>

            {/* Dashboard Mockup Content */}
            <div className="p-4 sm:p-5 bg-[#121212]/95 space-y-4">
              {/* Alert Banner */}
              <div className="bg-[#1a1414] border border-[#E22134]/30 rounded-xl p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#E22134]/20 text-[#E22134] flex items-center justify-center shrink-0">
                    <RotateCcw className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#E22134]">هشدار حوضچه آزاد: </span>
                    <span className="text-[#CCC]">
                      پرونده «پتروشیمی زاگرس» پس از مهلت ۴۸ ساعته آزاد شد و در دسترس همه همکاران قرار گرفت.
                    </span>
                  </div>
                </div>
                <div className="text-[#888] shrink-0">
                  مبلغ: <span className="text-white font-bold">۴۸۰ میلیون تومان</span>
                </div>
              </div>

              {/* 3 Minimal Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                {/* Column 1 */}
                <div className="bg-[#181818] border border-[#242424] rounded-xl p-3 space-y-2.5">
                  <div className="flex items-center justify-between pb-1.5 border-b border-[#222]">
                    <div className="flex items-center gap-1.5 font-bold text-white">
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      <span>مذاکره اولیه</span>
                    </div>
                    <span className="text-[10px] text-[#777]">۴ پرونده</span>
                  </div>

                  <div className="bg-[#202020] p-2.5 rounded-lg border border-[#2a2a2a] space-y-1.5">
                    <div className="flex items-center justify-between font-bold text-white">
                      <span>تجهیزات صنعتی رادمنش</span>
                      <span className="text-[#1DB954] text-[10px]">۱۸۰ م.ت</span>
                    </div>
                    <div className="text-[#888] flex items-center justify-between text-[11px]">
                      <span>نیما امینی</span>
                      <span className="text-[#1DB954]">۳۶ ساعت مانده</span>
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="bg-[#181818] border border-[#242424] rounded-xl p-3 space-y-2.5">
                  <div className="flex items-center justify-between pb-1.5 border-b border-[#222]">
                    <div className="flex items-center gap-1.5 font-bold text-white">
                      <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                      <span>صدور پیش‌فاکتور</span>
                    </div>
                    <span className="text-[10px] text-[#777]">۳ پرونده</span>
                  </div>

                  <div className="bg-[#221c16] p-2.5 rounded-lg border border-[#F59E0B]/30 space-y-1.5">
                    <div className="flex items-center justify-between font-bold text-white">
                      <span>صنایع بهارستان</span>
                      <span className="text-[#F59E0B] text-[10px]">۶۴۰ م.ت</span>
                    </div>
                    <div className="text-[#AAA] flex items-center justify-between text-[11px]">
                      <span>احسان شریفی</span>
                      <div className="flex items-center gap-1 text-[#F59E0B] font-bold">
                        <AlertTriangle className="w-3 h-3" />
                        <span>{formatTimer(secondsRemaining)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="bg-[#181818] border border-[#242424] rounded-xl p-3 space-y-2.5">
                  <div className="flex items-center justify-between pb-1.5 border-b border-[#222]">
                    <div className="flex items-center gap-1.5 font-bold text-white">
                      <span className="w-2 h-2 rounded-full bg-[#1DB954]" />
                      <span>عقد قرارداد و وصول</span>
                    </div>
                    <span className="text-[10px] text-[#1DB954]">موفق</span>
                  </div>

                  <div className="bg-[#152219] p-2.5 rounded-lg border border-[#1DB954]/30 space-y-1.5">
                    <div className="flex items-center justify-between font-bold text-white">
                      <span>فولاد مهرگان</span>
                      <span className="text-[#1DB954] text-[10px]">۱٫۲۵۰ م.ت</span>
                    </div>
                    <div className="text-[#888] flex items-center justify-between text-[11px]">
                      <span>علی رستمی</span>
                      <span className="text-[#1DB954]">وصول شد</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
