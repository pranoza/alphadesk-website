'use client';

import React, { useState } from 'react';
import {
  XCircle,
  CheckCircle2,
  AlertOctagon,
  Sparkles,
  Users,
  Briefcase,
  Flame,
  ShieldAlert,
  ArrowRightLeft,
  ChevronDown,
} from 'lucide-react';

export default function PainVsSolution() {
  const [activeTab, setActiveTab] = useState<'all' | 'executives' | 'managers' | 'reps'>('all');

  const comparisonItems = [
    {
      id: 1,
      category: 'executives',
      categoryTitle: 'مدیران ارشد',
      pain: {
        title: 'سوختن سرنخ‌ها در فایل‌های پراکنده',
        description: 'سرنخ‌های ورودی تبلیغات در فایل‌های شخصی رها شده و پیگیری نمی‌شوند.',
      },
      solution: {
        title: 'چرخه زنده سرنخ با انتقال به حوضچه آزاد',
        description: 'سرنخ‌های پیگیری‌نشده پس از ۴۸ ساعت خودکار به حوضچه آزاد منتقل می‌شوند.',
      },
    },
    {
      id: 2,
      category: 'managers',
      categoryTitle: 'سرپرستان فروش',
      pain: {
        title: 'تداخل و مناقشه بر سر مالکیت شماره‌ها',
        description: 'تماس‌های تکراری و احتکار مشتریان، هماهنگی تیم را مختل می‌کند.',
      },
      solution: {
        title: 'ثبت انحصاری با مهلت انقضا',
        description: 'جلوگیری آنی از ثبت شماره تکراری؛ انحصار فقط تا زمان پیگیری فعال معتبر است.',
      },
    },
    {
      id: 3,
      category: 'reps',
      categoryTitle: 'کارشناسان فروش',
      pain: {
        title: 'کمبود مشتری فعال برای نیروهای جدید',
        description: 'پرونده‌های شرکت در بایگانی افراد قدیمی مسدود شده و گردش ندارد.',
      },
      solution: {
        title: 'توزیع عادلانه با سقف برداشت روزانه',
        description: 'هر کارشناس می‌تواند روزانه پرونده‌های منقضی را برداشته و پیگیری کند.',
      },
    },
    {
      id: 4,
      category: 'executives',
      categoryTitle: 'مدیران هلدینگ',
      pain: {
        title: 'جزیره‌ای بودن شعب و فقدان گزارش تجمیعی',
        description: 'شعب به صورت مجزا کار کرده و تجمیع صورت‌وضعیت‌ها دشوار است.',
      },
      solution: {
        title: 'مدیریت متمرکز چندسازمانی',
        description: 'مدیریت تمام شعب در یک پنل با تفکیک دسترسی و داشبورد لحظه‌ای.',
      },
    },
  ];

  const filteredItems =
    activeTab === 'all'
      ? comparisonItems
      : comparisonItems.filter((item) => item.category === activeTab);

  return (
    <section id="comparison" className="py-24 md:py-32 bg-[#141414] border-t border-b border-[#242424] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Short and Simple */}
        <div className="text-center max-w-xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1DB954]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954]" />
            <span>چالش‌ها و راهکار</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            چالش‌های فروش و راهکار آلفادسک
          </h2>

          <p className="text-sm text-[#999]">
            چگونه فرآیند هوشمند انقضا مانع هدررفت فرصت‌های فروش می‌شود.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="space-y-3.5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden border border-[#242424] bg-[#161616]"
            >
              {/* Pain Point */}
              <div className="p-5 bg-[#1a1414]/50 border-b md:border-b-0 md:border-l border-[#242424] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#E22134]">
                    <XCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>روش سنتی</span>
                  </div>
                  <span className="text-[11px] text-[#777]">{item.categoryTitle}</span>
                </div>
                <h3 className="text-sm font-bold text-white">{item.pain.title}</h3>
                <p className="text-xs text-[#AAA] leading-relaxed">{item.pain.description}</p>
              </div>

              {/* Solution */}
              <div className="p-5 bg-[#141a15]/40 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#1DB954]">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#1DB954]" />
                  <span>راهکار آلفادسک</span>
                </div>
                <h3 className="text-sm font-bold text-white">{item.solution.title}</h3>
                <p className="text-xs text-[#CCC] leading-relaxed">{item.solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
