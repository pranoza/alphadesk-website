'use client';

import React, { useState } from 'react';
import {
  X,
  LogIn,
  ShieldCheck,
  Building,
  UserCheck,
  CheckCircle2,
  Lock,
  ArrowLeft,
  Key,
} from 'lucide-react';

interface LoginDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRedirectToDemo: () => void;
}

export default function LoginDemoModal({
  isOpen,
  onClose,
  onRedirectToDemo,
}: LoginDemoModalProps) {
  const [selectedRole, setSelectedRole] = useState<'admin' | 'manager' | 'rep'>('admin');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  if (!isOpen) return null;

  const roles = [
    {
      id: 'admin',
      title: 'مدیرعامل و ادمین هلدینگ',
      desc: 'دسترسی کامل به تمام شعب، تغییر تنظیمات انقضا و گزارشات کلان مالی',
      email: 'ceo@holding.alphadesk.ir',
      icon: Building,
      badge: 'دسترسی نامحدود',
    },
    {
      id: 'manager',
      title: 'سرپرست تیم فروش',
      desc: 'مدیریت کارشناسان، تعیین سهمیه‌های روزانه حوضچه آزاد و تایید پیش‌فاکتورها',
      email: 'sales.head@alphadesk.ir',
      icon: UserCheck,
      badge: 'شعبه مرکزی',
    },
    {
      id: 'rep',
      title: 'کارشناس ارشد مذاکره و فروش',
      desc: 'کارتابل شخصی، دریافت پرونده‌های منقضی از حوضچه آزاد و ثبت سریع پیگیری‌ها',
      email: 'rep.rostami@alphadesk.ir',
      icon: ShieldCheck,
      badge: 'کارشناس فعال',
    },
  ];

  const handleSimulatedLogin = () => {
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsLoggingIn(false);
      setLoginSuccess(true);
      setTimeout(() => {
        setLoginSuccess(false);
        onClose();
        onRedirectToDemo();
      }, 1200);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#181818] border border-[#2e2e2e] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-xl bg-[#222] hover:bg-[#2c2c2c] text-[#888] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1.5 text-right">
          <div className="inline-flex items-center gap-1.5 text-xs text-[#1DB954] font-bold">
            <Key className="w-3.5 h-3.5" />
            <span>ورود آزمایشی به سامانه آلفادسک</span>
          </div>
          <h3 className="text-lg font-black text-white">انتخاب نقش سازمانی جهت ورود</h3>
          <p className="text-xs text-[#B3B3B3]">
            برای مشاهده نحوه تفکیک سطوح دسترسی، یکی از نقش‌های زیر را انتخاب کنید:
          </p>
        </div>

        {/* Roles List */}
        <div className="space-y-3">
          {roles.map((role) => {
            const Icon = role.icon;
            const isSelected = selectedRole === role.id;
            return (
              <div
                key={role.id}
                onClick={() => setSelectedRole(role.id as any)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                  isSelected
                    ? 'bg-[#1e2720] border-[#1DB954] shadow-md shadow-[#1DB954]/10'
                    : 'bg-[#202020] border-[#2b2b2b] hover:border-[#383838]'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-[#1DB954] text-black' : 'bg-[#2a2a2a] text-[#888]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">{role.title}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded ${
                        isSelected
                          ? 'bg-[#1DB954]/20 text-[#1DB954]'
                          : 'bg-[#2a2a2a] text-[#888]'
                      }`}
                    >
                      {role.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#999] leading-relaxed">{role.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feedback message */}
        {loginSuccess && (
          <div className="p-3 rounded-xl bg-[#1e2e22] border border-[#1DB954]/40 text-xs text-[#1ED760] flex items-center justify-center gap-2 font-bold animate-fade-in">
            <CheckCircle2 className="w-4 h-4" />
            <span>احراز هویت موفقیت‌آمیز بود! در حال هدایت به پیش‌نمایش محیط...</span>
          </div>
        )}

        {/* Action Button */}
        <button
          type="button"
          onClick={handleSimulatedLogin}
          disabled={isLoggingIn || loginSuccess}
          className="w-full py-3.5 text-xs font-bold text-black bg-[#1DB954] hover:bg-[#1ED760] disabled:opacity-50 rounded-xl transition-all shadow-lg shadow-[#1DB954]/20 flex items-center justify-center gap-2 cursor-pointer"
        >
          {isLoggingIn ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
              <span>در حال برقراری نشست امن سازمانی...</span>
            </span>
          ) : (
            <>
              <LogIn className="w-4 h-4" />
              <span>ورود با این نقش و باز کردن کارتابل</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
