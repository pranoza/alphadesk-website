'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      q: 'آیا شماره‌های تکراری و تداخل مالکیتی مشتریان مسدود می‌شوند؟',
      a: 'بله. سیستم ضد تداخل آلفادسک به محض ورود شماره، پایگاه داده را بررسی کرده و در صورت وجود پرونده فعال، مانع ایجاد شماره موازی می‌شود. پرونده‌های منقضی‌شده نیز مستقیماً به حوضچه آزاد منتقل می‌شوند.',
    },
    {
      q: 'حوضچه مشتریان آزاد چطور مانع از انحصارطلبی می‌شود؟',
      a: 'هر پرونده دارای مهلت پیگیری مشخص (مثلاً ۴۸ ساعت) است. در صورت عدم ثبت گزارش یا پیشرفت، پرونده خودکار به حوضچه آزاد منتقل می‌شود. سقف برداشت روزانه نیز مانع از انباشت سرنخ‌ها توسط افراد می‌شود.',
    },
    {
      q: 'آیا هر شعبه می‌تواند اطلاعات کاملاً ایزوله از بقیه شعب داشته باشد؟',
      a: 'بله. ساختار چندسازمانی به شما امکان می‌دهد اطلاعات شعب را تفکیک کنید؛ در حالی که مدیران ارشد با سوییچر شعبه، گزارش تجمیعی کل سازمان را رصد می‌کنند.',
    },
    {
      q: 'امنیت اطلاعات و نحوه میزبانی داده‌ها چگونه است؟',
      a: 'داده‌ها روی سرورهای امن با رمزنگاری پیشرفته و پشتیبان‌گیری منظم ذخیره می‌شوند. در پلن سازمانی امکان استقرار مستقیم روی سرورهای داخلی شرکت شما با پایگاه داده مستقل وجود دارد.',
    },
    {
      q: 'فرآیند راه‌اندازی و آموزش پرسنل چقدر زمان می‌برد؟',
      a: 'جلسه معرفی ظرف ۲۴ ساعت هماهنگ می‌شود. راه‌اندازی سامانه ظرف چند ساعت آماده است و انتقال اطلاعات پیشین همراه با آموزش تیم ۲ تا ۳ روز کاری زمان می‌برد.',
    },
    {
      q: 'آیا امکان اتصال به سانترال تلفنی و پیامک وجود دارد؟',
      a: 'بله. آلفادسک با سامانه‌های پیامکی کشور یکپارچه است و امکان اتصال به سانترال‌های سازمانی برای نمایش پرونده مشتری هنگام تماس ورودی فراهم است.',
    },
  ];

  const filteredFaqs = faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#141414] border-t border-b border-[#242424] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1DB954]">
            <HelpCircle className="w-4 h-4" />
            <span>پرسش‌های متداول</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            پرسش‌های متداول
          </h2>

          <p className="text-sm text-[#999]">
            نکات کلیدی درباره عملکرد، امنیت و استقرار آلفادسک در سازمان شما.
          </p>

          {/* Search Bar inside FAQ */}
          <div className="pt-2 max-w-sm mx-auto relative">
            <Search className="w-4 h-4 text-[#777] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجو در سوالات..."
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#1DB954] rounded-xl pr-10 pl-4 py-2 text-xs text-white placeholder-[#666] outline-none transition-colors"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 text-xs text-[#888]">
              سوالی با این عبارت یافت نشد. می‌توانید با پشتیبانی ما تماس حاصل فرمایید.
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#181818] border border-[#282828] hover:border-[#333] transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-right flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-white leading-relaxed">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-lg bg-[#222] flex items-center justify-center shrink-0 text-[#1DB954] transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#1DB954]/20' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#B3B3B3] leading-relaxed border-t border-[#242424] animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
