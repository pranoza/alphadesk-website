'use client';

import React from 'react';
import {
  RotateCcw,
  Clock,
  Building2,
  PhoneForwarded,
  Lock,
  CalendarCheck2,
  TrendingUp,
  MapPin,
} from 'lucide-react';

export default function CoreFeatures() {
  const features = [
    {
      id: 'free-pool',
      title: 'حوضچه آزاد سرنخ‌ها',
      description: 'بازگشت خودکار مشتریان رهاشده به چرخه فروش، با سقف برداشت روزانه برای جلوگیری از احتکار.',
      icon: RotateCcw,
    },
    {
      id: 'dynamic-deadlines',
      title: 'تایمرهای هوشمند انقضا',
      description: 'شمارشگر معکوس رنگی برای هر پرونده، جهت ایجاد فوریت و شفافیت در موعد پیگیری.',
      icon: Clock,
    },
    {
      id: 'multi-tenant',
      title: 'مدیریت چندسازمانی و شعب',
      description: 'تعریف نامحدود شعب با پایگاه داده تفکیک‌شده و پرتال متمرکز برای مدیران هلدینگ.',
      icon: Building2,
    },
    {
      id: 'cold-leads',
      title: 'بانک سرنخ‌های ورودی',
      description: 'ورود آسان فایل‌های شماره و کمپین‌ها، تخصیص عادلانه و تبدیل سریع به مشتری رسمی.',
      icon: PhoneForwarded,
    },
    {
      id: 'granular-rbac',
      title: 'ماتریس دسترسی پیشرفته',
      description: 'تفکیک دقیق اختیارات برای مدیر، سرپرست و کارشناس بدون امکان خروج اطلاعات حساس.',
      icon: Lock,
    },
    {
      id: 'personnel-portal',
      title: 'پورتال اداری و پرسنلی',
      description: 'ثبت مرخصی ساعتی و روزانه، درخواست مساعده و گزارش کار درون همان سامانه.',
      icon: CalendarCheck2,
    },
    {
      id: 'realtime-analytics',
      title: 'داشبورد و آمار مبالغ',
      description: 'محاسبه لحظه‌ای ارزش قراردادها به تومان و رده‌بندی زنده فروشندگان برتر.',
      icon: TrendingUp,
    },
    {
      id: 'iran-localization',
      title: 'انطباق با زیست‌بوم ایران',
      description: 'تقویم دقیق شمسی، اعتبارسنجی پیش‌شماره‌های اپراتورها و اتصال به سامانه‌های پیامک.',
      icon: MapPin,
    },
  ];

  return (
    <section id="features" className="py-24 md:py-32 bg-[#121212] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Short and simple */}
        <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1DB954]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954]" />
            <span>ویژگی‌ها</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            قابلیت‌های کلیدی آلفادسک
          </h2>

          <p className="text-sm text-[#999]">
            ابزارهای هوشمند برای انضباط، سرعت و جلوگیری از اتلاف مشتریان.
          </p>
        </div>

        {/* Feature Grid - Minimal, airy, uncluttered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="p-5 rounded-2xl bg-[#161616] border border-[#242424] hover:border-[#333] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#202020] flex items-center justify-center text-[#1DB954] mb-3.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-[#AAA] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
