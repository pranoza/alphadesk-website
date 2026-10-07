'use client';

import React, { useState } from 'react';
import {
  X,
  Send,
  CheckCircle2,
  Phone,
  Building,
  User,
  Calendar,
  Sparkles,
  AlertCircle,
} from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !company.trim() || !phone.trim()) {
      setError('لطفاً تمامی فیلدهای الزامی را تکمیل نمایید.');
      return;
    }
    setError('');
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
      setTimeout(() => {
        setIsDone(false);
        setFullName('');
        setCompany('');
        setPhone('');
        onClose();
      }, 2500);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-[#181818] border border-[#2e2e2e] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-xl bg-[#222] hover:bg-[#2c2c2c] text-[#888] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1.5 text-right">
          <div className="inline-flex items-center gap-1.5 text-xs text-[#1DB954] font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>جلسه آنلاین ۳۰ دقیقه‌ای رایگان</span>
          </div>
          <h3 className="text-xl font-black text-white">درخواست جلسه معرفی اختصاصی</h3>
          <p className="text-xs text-[#B3B3B3]">
            مشاوران ما سناریوی فروش کسب‌وکار شما را بر روی آلفادسک پیاده و ارائه خواهند کرد.
          </p>
        </div>

        {isDone ? (
          <div className="p-6 text-center space-y-3 bg-[#1e2e22] border border-[#1DB954]/40 rounded-2xl animate-fade-in">
            <CheckCircle2 className="w-10 h-10 text-[#1DB954] mx-auto" />
            <h4 className="text-base font-bold text-white">درخواست شما ثبت شد!</h4>
            <p className="text-xs text-[#B3B3B3]">
              کارشناس استقرار آلفادسک طی ساعات آینده با شما تماس خواهد گرفت.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-[#2a1719] border border-[#E22134]/40 text-[#E22134] text-xs rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs text-[#DDD] font-medium flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-[#1DB954]" />
                <span>نام و نام خانوادگی</span>
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="مثال: مهرداد قاسمی"
                className="w-full bg-[#1c1c1c] border border-[#2d2d2d] focus:border-[#1DB954] rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-white outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-[#DDD] font-medium flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-[#1DB954]" />
                <span>نام سازمان یا شرکت</span>
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="مثال: گروه صنعتی پیشرو"
                className="w-full bg-[#1c1c1c] border border-[#2d2d2d] focus:border-[#1DB954] rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-white outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-[#DDD] font-medium flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#1DB954]" />
                <span>شماره تماس مستقیم</span>
              </label>
              <input
                type="tel"
                dir="ltr"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="09123456789"
                className="w-full bg-[#1c1c1c] border border-[#2d2d2d] focus:border-[#1DB954] rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-white outline-none text-right font-mono"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 text-xs font-bold text-black bg-[#1DB954] hover:bg-[#1ED760] disabled:opacity-50 rounded-xl transition-all shadow-lg shadow-[#1DB954]/20 flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>در حال ثبت...</span>
                </span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>ثبت و هماهنگی جلسه معرفی</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
