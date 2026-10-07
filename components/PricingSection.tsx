'use client';

import React, { useState } from 'react';
import {
  Check,
  Sparkles,
  ArrowLeft,
  Building,
  ShieldCheck,
  Server,
  Zap,
  PhoneCall,
  Database,
  Users,
} from 'lucide-react';

interface PricingSectionProps {
  onOpenDemoModal: () => void;
}

export default function PricingSection({ onOpenDemoModal }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually');

  const plans = [
    {
      id: 'starter',
      name: 'پلن پایه',
      tagline: 'مناسب تیم‌های فروش چابک و در حال شکل‌گیری',
      monthlyPrice: '۱٬۹۵۰٬۰۰۰',
      annualMonthlyPrice: '۱٬۵۶۰٬۰۰۰', // 20% off
      userLimit: 'تا ۵ کاربر هم‌زمان',
      popular: false,
      features: [
        'مسیر فروش استاندارد ۳ مرحله‌ای',
        'مخزن سرنخ‌های ورودی',
        'تشخیص و جلوگیری از ثبت شماره تکراری',
        'تقویم شمسی و یادداشت‌های تماس',
        'گزارش‌گیری هفتگی عملکرد بازاریاب‌ها',
        'پشتیبانی در ساعات اداری',
      ],
      ctaText: 'انتخاب پلن پایه',
      ctaStyle: 'bg-[#222] hover:bg-[#2c2c2c] text-white border border-[#333]',
    },
    {
      id: 'pro',
      name: 'پلن حرفه‌ای',
      tagline: 'پیشنهاد برگزیده برای شرکت‌های فعال در حوزه فروش',
      monthlyPrice: '۴٬۸۵۰٬۰۰۰',
      annualMonthlyPrice: '۳٬۸۸۰٬۰۰۰', // 20% off
      userLimit: 'تا ۱۵ کاربر هم‌زمان (+ امکان کاربر اضافه)',
      popular: true,
      badge: 'محبوب‌ترین پلن سازمانی',
      features: [
        'تمام امکانات پلن پایه',
        'حوضچه هوشمند سرنخ‌های آزاد',
        'تایمرهای هوشمند انقضا با هشدار ۳ حالته',
        'سهمیه‌بندی عادلانه برداشت پرونده‌ها',
        'پورتال پرسنلی (مرخصی و مساعده)',
        'داشبورد مبالغ قرارداد به تومان و رده‌بندی زنده',
        'اتصال به سامانه‌های پیامک',
        'جلسه آموزش آنلاین اختصاصی تیم فروش',
      ],
      ctaText: 'انتخاب پلن حرفه‌ای',
      ctaStyle: 'bg-[#1DB954] hover:bg-[#1ED760] text-black shadow-lg shadow-[#1DB954]/25',
    },
    {
      id: 'enterprise',
      name: 'پلن سازمانی',
      tagline: 'برای هلدینگ‌ها، شعب نامحدود و سازمان‌های نیازمند سرور مستقل',
      monthlyPrice: 'تماس سازمانی',
      annualMonthlyPrice: 'استقرار سفارشی',
      userLimit: 'کاربران و شعب نامحدود',
      popular: false,
      badge: 'سرور اختصاصی',
      features: [
        'معماری چندسازمانی و مدیریت شعب',
        'امکان ایجاد شعب و شرکت‌های تابعه نامحدود',
        'پایگاه داده مستقل و اختصاصی',
        'امکان استقرار روی سرور اختصاصی شرکت',
        'ماتریس تفکیک دسترسی پرسنل',
        'اتصال به سانترال تلفنی و خطوط سازمانی',
        'انتقال و پاکسازی اطلاعات پیشین توسط تیم فنی',
        'مدیر حساب اختصاصی و پشتیبانی اولویت‌دار',
      ],
      ctaText: 'درخواست معرفی سازمانی',
      ctaStyle: 'bg-[#222] hover:bg-[#2c2c2c] text-white border border-[#333]',
    },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-[#121212] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1DB954]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954]" />
            <span>تعرفه‌ها</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            تعرفه‌های آلفادسک
          </h2>

          <p className="text-sm text-[#999]">
            پلن‌های متنوع متناسب با اندازه تیم و امکان استقرار اختصاصی.
          </p>

          {/* Billing Toggle */}
          <div className="pt-4 inline-flex items-center p-1 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a]">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-[#262626] text-white shadow-sm'
                  : 'text-[#888] hover:text-white'
              }`}
            >
              ماهانه
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annually')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                billingCycle === 'annually'
                  ? 'bg-[#1DB954] text-black font-bold shadow-md shadow-[#1DB954]/20'
                  : 'text-[#888] hover:text-white'
              }`}
            >
              <span>سالانه</span>
              <span className="text-[10px] bg-black/20 text-black px-1.5 py-0.2 rounded font-mono font-bold">
                ۲۰٪ تخفیف
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => {
            const isAnnual = billingCycle === 'annually';
            const displayPrice = isAnnual ? plan.annualMonthlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-200 relative ${
                  plan.popular
                    ? 'bg-[#181818] border-2 border-[#1DB954] shadow-2xl shadow-[#1DB954]/15 lg:-translate-y-2'
                    : 'bg-[#161616] border border-[#262626] hover:border-[#363636]'
                }`}
              >
                {/* Popular Pill */}
                {plan.badge && (
                  <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#1DB954] text-black text-[11px] font-black uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Header */}
                  <div className="space-y-1 mb-5">
                    <h3 className="text-lg font-black text-white">{plan.name}</h3>
                    <p className="text-xs text-[#888] min-h-[32px]">{plan.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="p-4 rounded-2xl bg-[#1e1e1e] border border-[#282828] mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-black text-white font-mono">
                        {displayPrice}
                      </span>
                      {plan.id !== 'enterprise' && (
                        <span className="text-xs text-[#888]">تومان / ماه</span>
                      )}
                    </div>
                    <div className="text-[11px] text-[#1DB954] font-medium mt-1">
                      {plan.userLimit}
                    </div>
                    {isAnnual && plan.id !== 'enterprise' && (
                      <div className="text-[10px] text-[#888] mt-1">
                        صورت‌حساب به صورت یک‌ساله با احتساب تخفیف
                      </div>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold text-[#CCC]">امکانات و ظرفیت‌ها:</div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#BBB]">
                        <Check className="w-4 h-4 text-[#1DB954] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={onOpenDemoModal}
                  className={`w-full py-3.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${plan.ctaStyle}`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Add-ons & Scale-up Details Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#181818] border border-[#282828] max-w-6xl mx-auto space-y-4">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#1DB954]" />
            <h4 className="text-sm sm:text-base font-bold text-white">
              خدمات تکمیلی و ارتقای ظرفیت
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#202020] border border-[#2c2c2c] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                <Users className="w-3.5 h-3.5 text-[#1DB954]" />
                <span>بسته کاربر اضافه</span>
              </div>
              <p className="text-[11px] text-[#AAA]">
                امکان افزایش سقف کاربران در پلن حرفه‌ای با هزینه ۲۵۰٬۰۰۰ تومان/ماه به ازای هر کاربر اضافه بدون محدودیت.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#202020] border border-[#2c2c2c] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                <Database className="w-3.5 h-3.5 text-[#1DB954]" />
                <span>انتقال اطلاعات و سوابق</span>
              </div>
              <p className="text-[11px] text-[#AAA]">
                پاکسازی شماره‌ها، ادغام و انتقال اطلاعات پیشین و فایل‌ها توسط کارشناسان فنی آلفادسک.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#202020] border border-[#2c2c2c] space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                <PhoneCall className="w-3.5 h-3.5 text-[#1DB954]" />
                <span>اتصال به سانترال تلفنی</span>
              </div>
              <p className="text-[11px] text-[#AAA]">
                یکپارچه‌سازی با مراکز تلفن سازمانی برای نمایش آنی پرونده مشتری هنگام تماس ورودی.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
