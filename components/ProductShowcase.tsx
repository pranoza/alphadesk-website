'use client';

import React, { useState } from 'react';
import {
  Briefcase,
  RotateCcw,
  BarChart3,
  Building2,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Search,
  Filter,
  Users,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  DollarSign,
  Phone,
  Calendar,
  Lock,
  ArrowRight,
} from 'lucide-react';

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<'cartable' | 'freepool' | 'analytics' | 'branches'>('freepool');

  // Interactive state for Free Pool Claim simulation
  const [quotaRemaining, setQuotaRemaining] = useState(3);
  const [claimedDeals, setClaimedDeals] = useState<number[]>([]);
  const [claimToast, setClaimToast] = useState<string | null>(null);

  // Interactive state for Branch Switcher
  const [selectedBranch, setSelectedBranch] = useState<'tehran' | 'isfahan' | 'mashhad'>('tehran');

  // Initial Free Pool Leads
  const initialPoolLeads = [
    {
      id: 101,
      name: 'پتروشیمی سپهر خاورمیانه',
      contact: 'مهندس رستگار',
      phone: '0912***4821',
      expiredAgo: '۴ ساعت پیش',
      exOwner: 'کارشناس سابق (انقضای ۴۸ساعته)',
      estValue: '۴۵۰٬۰۰۰٬۰۰۰ تومان',
      priority: 'بالا',
    },
    {
      id: 102,
      name: 'گروه صنایع غذایی مانا',
      contact: 'خانم دکتر صادقی',
      phone: '0919***9934',
      expiredAgo: '۱ روز پیش',
      exOwner: 'کارشناس سابق (مرخصی بدون پیگیری)',
      estValue: '۲۸۰٬۰۰۰٬۰۰۰ تومان',
      priority: 'متوسط',
    },
    {
      id: 103,
      name: 'شرکت مهندسی داده‌ورزان پارس',
      contact: 'مهندس کاظمی',
      phone: '0935***7712',
      expiredAgo: '۲ ساعت پیش',
      exOwner: 'کارشناس سابق (فراموشی پیگیری)',
      estValue: '۸۲۰٬۰۰۰٬۰۰۰ تومان',
      priority: 'فوری',
    },
  ];

  const handleClaim = (dealId: number, dealName: string) => {
    if (quotaRemaining <= 0) {
      setClaimToast('⚠️ سقف مجاز روزانه شما (۳ پرونده در روز) پر شده است. برای برداشت جدید، پرونده‌های فعلی را تعیین‌تکلیف کنید.');
      setTimeout(() => setClaimToast(null), 4000);
      return;
    }
    if (claimedDeals.includes(dealId)) return;

    setClaimedDeals((prev) => [...prev, dealId]);
    setQuotaRemaining((prev) => prev - 1);
    setClaimToast(`✅ پرونده «${dealName}» با موفقیت به کارتابل شما منتقل شد. مهلت پیگیری ۴۸ ساعته فعال گردید.`);
    setTimeout(() => setClaimToast(null), 4000);
  };

  const branchData = {
    tehran: {
      name: 'شعبه مرکزی تهران (هلدینگ)',
      users: 24,
      monthlyDeals: '۳٬۴۲۰٬۰۰۰٬۰۰۰ تومان',
      activePipelines: 87,
      winRate: '۳۴٪',
    },
    isfahan: {
      name: 'شعبه صنعتی اصفهان',
      users: 12,
      monthlyDeals: '۱٬۶۵۰٬۰۰۰٬۰۰۰ تومان',
      activePipelines: 42,
      winRate: '۲۹٪',
    },
    mashhad: {
      name: 'شعبه شمال شرق (مشهد)',
      users: 8,
      monthlyDeals: '۹۸۰٬۰۰۰٬۰۰۰ تومان',
      activePipelines: 28,
      winRate: '۳۱٪',
    },
  };

  return (
    <section id="interactive-demo" className="py-24 md:py-32 bg-[#141414] border-t border-b border-[#242424] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1DB954]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954]" />
            <span>دموی تعاملی سامانه</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            پیش‌نمایش بخش‌های اصلی آلفادسک
          </h2>

          <p className="text-sm text-[#999]">
            نحوه عملکرد حوضچه سرنخ‌های آزاد، کارتابل فروشندگان، داشبورد مبالغ و مدیریت شعب را تست کنید.
          </p>

          {/* Interactive Navigation Tabs */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('freepool')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'freepool'
                  ? 'bg-[#1DB954] text-black shadow-md shadow-[#1DB954]/25'
                  : 'bg-[#1c1c1c] text-[#B3B3B3] hover:text-white border border-[#2b2b2b]'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>حوضچه آزاد سرنخ‌ها</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('cartable')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'cartable'
                  ? 'bg-[#1DB954] text-black shadow-md shadow-[#1DB954]/25'
                  : 'bg-[#1c1c1c] text-[#B3B3B3] hover:text-white border border-[#2b2b2b]'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>کارتابل بازاریاب</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('analytics')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'analytics'
                  ? 'bg-[#1DB954] text-black shadow-md shadow-[#1DB954]/25'
                  : 'bg-[#1c1c1c] text-[#B3B3B3] hover:text-white border border-[#2b2b2b]'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>داشبورد مبالغ و فروش</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('branches')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'branches'
                  ? 'bg-[#1DB954] text-black shadow-md shadow-[#1DB954]/25'
                  : 'bg-[#1c1c1c] text-[#B3B3B3] hover:text-white border border-[#2b2b2b]'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>مدیریت شعب هلدینگ</span>
            </button>
          </div>
        </div>

        {/* Showcase Main Container */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#161616] border border-[#242424] shadow-2xl overflow-hidden">
          {/* Top Window Bar */}
          <div className="bg-[#121212] px-4 py-2.5 border-b border-[#202020] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E22134]/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#1DB954]/80 inline-block" />
              <span className="mr-3 text-xs text-[#777]">سامانه ابری آلفادسک</span>
            </div>

            <div className="text-xs text-[#1DB954] font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#1DB954]" />
              <span>محیط تعاملی</span>
            </div>
          </div>

          {/* Interactive Tab 1: Free Pool */}
          {activeTab === 'freepool' && (
            <div className="p-4 sm:p-6 space-y-4">
              {/* Notification Banner */}
              {claimToast && (
                <div className="p-3 rounded-xl bg-[#18261c] border border-[#1DB954]/40 text-xs text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1DB954] shrink-0" />
                    <span>{claimToast}</span>
                  </div>
                </div>
              )}

              {/* Free Pool Header & Quota */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-[#1c1c1c] border border-[#282828]">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-white">حوضچه آزاد مشتریان</h3>
                    <span className="text-[10px] bg-[#E22134]/20 text-[#E22134] px-2 py-0.5 rounded">
                      مهلت ۴۸ ساعته
                    </span>
                  </div>
                  <p className="text-xs text-[#999]">
                    پرونده‌های پیگیری‌نشده همکاران برای گردش مجدد در این بخش قرار می‌گیرند.
                  </p>
                </div>

                <div className="shrink-0 bg-[#141414] px-3 py-1.5 rounded-lg border border-[#282828] text-center">
                  <div className="text-[10px] text-[#777]">سهمیه امروز شما</div>
                  <div className="text-xs font-bold text-white">
                    <span className="text-[#1DB954]">{quotaRemaining}</span> از ۳ پرونده
                  </div>
                </div>
              </div>

              {/* Free Pool Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-right border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-[#222] text-[#777]">
                      <th className="py-2.5 px-3">نام مشتری</th>
                      <th className="py-2.5 px-3">مخاطب</th>
                      <th className="py-2.5 px-3">علت ورود به حوضچه</th>
                      <th className="py-2.5 px-3">ارزش</th>
                      <th className="py-2.5 px-3 text-center">عملیات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#202020]">
                    {initialPoolLeads.map((deal) => {
                      const isClaimed = claimedDeals.includes(deal.id);
                      return (
                        <tr key={deal.id} className="hover:bg-[#1a1a1a]">
                          <td className="py-2.5 px-3 font-bold text-white">{deal.name}</td>
                          <td className="py-2.5 px-3 text-[#AAA]">{deal.contact}</td>
                          <td className="py-2.5 px-3">
                            <span className="text-[10px] text-[#E22134] bg-[#E22134]/10 px-2 py-0.5 rounded">
                              {deal.exOwner}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 font-bold text-[#1DB954]">{deal.estValue}</td>
                          <td className="py-2.5 px-3 text-center">
                            {isClaimed ? (
                              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1DB954] bg-[#1DB954]/10 px-2.5 py-1 rounded-lg">
                                <CheckCircle2 className="w-3 h-3" />
                                در کارتابل شما
                              </span>
                            ) : (
                              <button
                                type="button"
                                onClick={() => handleClaim(deal.id, deal.name)}
                                className="px-3 py-1 text-xs font-bold text-black bg-[#1DB954] hover:bg-[#1ED760] active:scale-95 rounded-lg transition-all cursor-pointer"
                              >
                                برداشت پرونده
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Explanatory Rule */}
              <div className="p-3 rounded-xl bg-[#1c1813] border border-[#F59E0B]/20 flex items-center gap-2.5 text-xs text-[#E5A84B]">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                <span>
                  <strong>قانون ضد احتکار:</strong> پس از برداشت پرونده، حداکثر ۴۸ ساعت برای ثبت اولین گزارش مهلت دارید.
                </span>
              </div>
            </div>
          )}

          {/* Interactive Tab 2: Sales Cartable */}
          {activeTab === 'cartable' && (
            <div className="p-4 sm:p-6 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-[#1c1c1c] border border-[#282828]">
                <div className="space-y-0.5">
                  <h3 className="text-sm font-bold text-white">کارتابل فعال کارشناس</h3>
                  <p className="text-xs text-[#999]">
                    نظارت بر پرونده‌های تحت مذاکره و مهلت انقضای هر پرونده.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded bg-[#1DB954]/10 text-[#1DB954] border border-[#1DB954]/30">
                    ۵ پرونده فعال
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#1e1e1e] border border-[#2a2a2a] space-y-2">
                  <div className="flex items-start justify-between">
                    <span className="font-bold text-white">شرکت آفاق تجهیز</span>
                    <span className="text-[#1DB954] font-bold">۲۴۰ م.ت</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#161616] flex items-center justify-between text-[#888]">
                    <span>مهلت پیگیری:</span>
                    <span className="text-[#1DB954] font-bold flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      ۳۸ ساعت (وضعیت امن)
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#221815] border border-[#E22134]/30 space-y-2">
                  <div className="flex items-start justify-between">
                    <span className="font-bold text-white">صنایع ریخته‌گری سهند</span>
                    <span className="text-[#F59E0B] font-bold">۵۹۰ م.ت</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#161616] flex items-center justify-between text-[#E22134]">
                    <span>هشدار انقضا:</span>
                    <span className="font-bold flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      ۰۲:۴۵ ساعت مانده
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Tab 3: Analytics */}
          {activeTab === 'analytics' && (
            <div className="p-4 sm:p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-[#1c1c1c] border border-[#282828] space-y-1">
                  <div className="text-xs text-[#777]">وصولی‌های ماه جاری</div>
                  <div className="text-lg font-black text-white">
                    ۲٬۹۴۰٬۰۰۰٬۰۰۰ <span className="text-xs text-[#1DB954]">تومان</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#1c1c1c] border border-[#282828] space-y-1">
                  <div className="text-xs text-[#777]">سرنخ‌های احیاشده در حوضچه</div>
                  <div className="text-lg font-black text-[#1DB954]">۴۳ پرونده</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#1c1c1c] border border-[#282828] space-y-1">
                  <div className="text-xs text-[#777]">میانگین زمان بستن فروش</div>
                  <div className="text-lg font-black text-white">۶٫۴ روز</div>
                </div>
              </div>

              {/* Leaderboard */}
              <div className="p-3.5 rounded-xl bg-[#1a1a1a] border border-[#262626] space-y-2 text-xs">
                <h4 className="font-bold text-white">برترین کارشناسان فروش ماه</h4>
                <div className="space-y-1.5">
                  <div className="p-2 rounded-lg bg-[#202020] flex items-center justify-between">
                    <span className="text-white">۱. علی رستمی (شعبه تهران)</span>
                    <span className="text-[#1DB954] font-bold">۸۹۰ میلیون تومان</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#202020] flex items-center justify-between">
                    <span className="text-white">۲. مریم بهرامی (شعبه اصفهان)</span>
                    <span className="text-[#1DB954] font-bold">۶۴۰ میلیون تومان</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Tab 4: Multi-Branch */}
          {activeTab === 'branches' && (
            <div className="p-4 sm:p-6 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-[#1c1c1c] border border-[#282828]">
                <div>
                  <h3 className="text-sm font-bold text-white">مدیریت شعب هلدینگ</h3>
                  <p className="text-xs text-[#999]">
                    ایزولاسیون کامل اطلاعات هر شعبه با داشبورد متمرکز هیئت مدیره.
                  </p>
                </div>

                <div className="flex items-center gap-1 bg-[#141414] p-1 rounded-xl border border-[#242424]">
                  <button
                    type="button"
                    onClick={() => setSelectedBranch('tehran')}
                    className={`px-3 py-1 text-xs rounded-lg cursor-pointer ${
                      selectedBranch === 'tehran' ? 'bg-[#1DB954] text-black font-bold' : 'text-[#777]'
                    }`}
                  >
                    تهران
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedBranch('isfahan')}
                    className={`px-3 py-1 text-xs rounded-lg cursor-pointer ${
                      selectedBranch === 'isfahan' ? 'bg-[#1DB954] text-black font-bold' : 'text-[#777]'
                    }`}
                  >
                    اصفهان
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedBranch('mashhad')}
                    className={`px-3 py-1 text-xs rounded-lg cursor-pointer ${
                      selectedBranch === 'mashhad' ? 'bg-[#1DB954] text-black font-bold' : 'text-[#777]'
                    }`}
                  >
                    مشهد
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-[#1e1e1e] border border-[#282828]">
                  <div className="text-[#777]">شعبه فعال</div>
                  <div className="font-bold text-white mt-1">{branchData[selectedBranch].name}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#1e1e1e] border border-[#282828]">
                  <div className="text-[#777]">پرسنل فروش</div>
                  <div className="font-bold text-[#1DB954] mt-1">{branchData[selectedBranch].users} نفر</div>
                </div>
                <div className="p-3 rounded-xl bg-[#1e1e1e] border border-[#282828]">
                  <div className="text-[#777]">فروش ماهانه</div>
                  <div className="font-bold text-white mt-1">{branchData[selectedBranch].monthlyDeals}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#1e1e1e] border border-[#282828]">
                  <div className="text-[#777]">نرخ موفقیت</div>
                  <div className="font-bold text-[#1DB954] mt-1">{branchData[selectedBranch].winRate}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
