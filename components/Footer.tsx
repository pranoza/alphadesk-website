'use client';

import React from 'react';
import {
  Layers,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Server,
  Lock,
  Clock,
  Sparkles,
  ArrowUp,
  CheckCircle2,
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e0e0e] border-t border-[#222222] text-[#B3B3B3] text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Info & Mission Statement (col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1DB954] to-[#128a3c] flex items-center justify-center text-black font-black shadow-lg shadow-[#1DB954]/20">
                <Layers className="w-5 h-5 text-black" strokeWidth={2.4} />
              </div>
              <span className="text-xl font-black text-white">سامانه آلفادسک</span>
            </div>

            <p className="text-xs text-[#999] leading-relaxed max-w-sm">
              سامانه جامع مدیریت مشتریان و تیم فروش آلفادسک؛ پلتفرم پیشرفته سازمانی برای جلوگیری از سوختن پرونده‌ها، احیای مشتریان با حوضچه آزاد و مدیریت متمرکز شعب در سراسر کشور.
            </p>

            {/* Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#181818] border border-[#282828] text-[11px] text-[#CCC]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1DB954]" />
                <span>امنیت در سطح سازمانی</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#181818] border border-[#282828] text-[11px] text-[#CCC]">
                <Server className="w-3.5 h-3.5 text-[#1DB954]" />
                <span>پایداری ۹۹٫۹۵٪ تضمینی</span>
              </div>
            </div>
          </div>

          {/* Quick Links (col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white">دسترسی سریع</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  ویژگی‌های کلیدی
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-white transition-colors">
                  حل چالش‌های فروش
                </a>
              </li>
              <li>
                <a href="#interactive-demo" className="hover:text-white transition-colors">
                  پیش‌نمایش سامانه
                </a>
              </li>
              <li>
                <a href="#roi-calculator" className="hover:text-white transition-colors">
                  محاسبه بازگشت سرمایه
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  پلن‌ها و تعرفه‌ها
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  پرسش‌های متداول
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions & Architecture (col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white">راهکارها</h4>
            <ul className="space-y-2">
              <li className="text-[#888]">موتور حوضچه مشتریان آزاد</li>
              <li className="text-[#888]">مدیریت هلدینگی چندسازمانی</li>
              <li className="text-[#888]">استقرار سرور و پایگاه داده اختصاصی</li>
              <li className="text-[#888]">یکپارچه‌سازی با سانترال تلفنی</li>
              <li className="text-[#888]">پورتال اداری و مرخصی پرسنل</li>
            </ul>
          </div>

          {/* Contact Details (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white">ارتباط با آلفادسک</h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1DB954] shrink-0 mt-0.5" />
                <span>تهران، خیابان ولیعصر، تقاطع مطهری، برج صبا، طبقه ۸</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1DB954] shrink-0" />
                <span dir="ltr" className="font-mono text-white">۰۲۱ - ۸۸۹۴ ۲۰۴۰</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#888] shrink-0" />
                <span>شنبه تا چهارشنبه ۸:۳۰ الی ۱۷:۳۰</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-[#1e1e1e] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] text-[#777] text-center sm:text-right">
            تمامی حقوق مادی و معنوی این سامانه متعلق به «سامانه فروش و مدیریت مشتریان آلفادسک» می‌باشد. © ۱۴۰۴
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#1a1a1a] hover:bg-[#252525] border border-[#2a2a2a] text-[#888] hover:text-[#1DB954] transition-colors flex items-center gap-1.5 text-[11px] cursor-pointer"
          >
            <span>بازگشت به بالا</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
