'use client';

import React, { useState } from 'react';
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Users,
  Flame,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  ShieldCheck,
} from 'lucide-react';

interface RoiCalculatorProps {
  onOpenDemoModal?: () => void;
}

export default function RoiCalculator({}: RoiCalculatorProps) {
  // Input parameters
  const [salesReps, setSalesReps] = useState(8);
  const [monthlyLeads, setMonthlyLeads] = useState(350);
  const [avgDealValueTomans, setAvgDealValueTomans] = useState(35000000); // 35 Million Tomans
  const [leakageRatePercent, setLeakageRatePercent] = useState(30); // 30% lost leads in standard unorganized teams

  // Calculations
  // Normal closing rate assumption (e.g. 10% of leads normally close)
  const baseClosingRate = 0.1;
  // Lost leads count = monthlyLeads * (leakageRatePercent / 100)
  const lostLeads = Math.round(monthlyLeads * (leakageRatePercent / 100));
  // AlphaDesk Free Pool recovers around 45% of those lost leads into active circulation
  const recoveredLeads = Math.round(lostLeads * 0.45);
  // Deals won from recovered leads = recoveredLeads * baseClosingRate
  const additionalDealsWon = Math.max(1, Math.round(recoveredLeads * baseClosingRate));
  // Added Revenue in Tomans per month
  const additionalMonthlyRevenue = additionalDealsWon * avgDealValueTomans;

  // Approximate AlphaDesk Pro monthly investment (around 2,400,000 Tomans for this team size)
  const estSoftwareCostMonthly = Math.max(1200000, salesReps * 300000);
  // ROI percentage = ((recovered - cost) / cost) * 100
  const estimatedRoiPercent = Math.round(
    ((additionalMonthlyRevenue - estSoftwareCostMonthly) / estSoftwareCostMonthly) * 100
  );

  const formatTomans = (amount: number) => {
    if (amount >= 1000000000) {
      return `${(amount / 1000000000).toFixed(2)} میلیارد`;
    }
    return `${(amount / 1000000).toFixed(0)} میلیون`;
  };

  return (
    <section id="roi-calculator" className="py-24 md:py-32 bg-[#121212] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#1DB954]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1DB954]">
            <Calculator className="w-3.5 h-3.5" />
            <span>محاسبه بازگشت سرمایه</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            برآورد سود احیاشده با آلفادسک
          </h2>

          <p className="text-sm text-[#999]">
            درآمدی که با جلوگیری از سوختن پرونده‌ها به سازمان بازمی‌گردد را برآورد کنید.
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="max-w-4xl mx-auto bg-[#161616] border border-[#262626] rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-5">
              {/* Slider 1: Sales Reps */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-[#CCC]">تعداد کارشناسان فروش:</span>
                  <span className="font-bold text-white bg-[#202020] px-2.5 py-0.5 rounded-lg border border-[#2d2d2d]">
                    {salesReps} نفر
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="60"
                  value={salesReps}
                  onChange={(e) => setSalesReps(Number(e.target.value))}
                  className="w-full accent-[#1DB954] cursor-pointer bg-[#262626] h-1.5 rounded-lg"
                />
              </div>

              {/* Slider 2: Monthly Leads */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-[#CCC]">سرنخ‌های ورودی ماهانه:</span>
                  <span className="font-bold text-white bg-[#202020] px-2.5 py-0.5 rounded-lg border border-[#2d2d2d]">
                    {monthlyLeads.toLocaleString('fa-IR')} سرنخ
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="25"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                  className="w-full accent-[#1DB954] cursor-pointer bg-[#262626] h-1.5 rounded-lg"
                />
              </div>

              {/* Slider 3: Average Deal Value */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-[#CCC]">ارزش میانگین هر معامله:</span>
                  <span className="font-bold text-[#1DB954] bg-[#202020] px-2.5 py-0.5 rounded-lg border border-[#2d2d2d]">
                    {formatTomans(avgDealValueTomans)} تومان
                  </span>
                </div>
                <input
                  type="range"
                  min="5000000"
                  max="250000000"
                  step="5000000"
                  value={avgDealValueTomans}
                  onChange={(e) => setAvgDealValueTomans(Number(e.target.value))}
                  className="w-full accent-[#1DB954] cursor-pointer bg-[#262626] h-1.5 rounded-lg"
                />
              </div>

              {/* Slider 4: Unfollowed / Leakage Rate */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-[#CCC]">درصد سرنخ‌های رهاشده در وضع فعلی:</span>
                  <span className="font-bold text-[#E22134] bg-[#202020] px-2.5 py-0.5 rounded-lg border border-[#2d2d2d]">
                    {leakageRatePercent}٪
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="5"
                  value={leakageRatePercent}
                  onChange={(e) => setLeakageRatePercent(Number(e.target.value))}
                  className="w-full accent-[#E22134] cursor-pointer bg-[#262626] h-1.5 rounded-lg"
                />
              </div>
            </div>

            {/* Results Live Card */}
            <div className="lg:col-span-5 bg-[#17221a] border border-[#1DB954]/30 rounded-2xl p-5 sm:p-6 space-y-4">
              <div className="space-y-0.5">
                <span className="text-[11px] text-[#1ED760] font-bold">خروجی محاسبات</span>
                <h3 className="text-base font-black text-white">درآمد احیاشده با آلفادسک</h3>
              </div>

              <div className="space-y-2.5 pt-1 text-xs">
                <div className="p-2.5 rounded-xl bg-[#121212]/80 border border-[#233327] flex items-center justify-between">
                  <span className="text-[#AAA]">سرنخ‌های نجات‌یافته در ماه:</span>
                  <span className="font-bold text-white text-sm">{recoveredLeads} پرونده</span>
                </div>

                <div className="p-2.5 rounded-xl bg-[#121212]/80 border border-[#233327] flex items-center justify-between">
                  <span className="text-[#AAA]">قراردادهای اضافه نهایی‌شده:</span>
                  <span className="font-bold text-[#1DB954] text-sm">+{additionalDealsWon} قرارداد</span>
                </div>

                <div className="p-3 rounded-xl bg-[#121212] border border-[#1DB954]/40 space-y-1 text-center">
                  <div className="text-[11px] text-[#888]">سود ماهانه احیاشده:</div>
                  <div className="text-2xl font-black text-[#1DB954]">
                    +{formatTomans(additionalMonthlyRevenue)}{' '}
                    <span className="text-xs font-normal text-white">تومان در ماه</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#142018] border border-[#1DB954]/30 flex items-center justify-between">
                  <span className="text-[#CCC]">نرخ بازگشت سرمایه:</span>
                  <span className="font-black text-[#1ED760] text-sm">+{estimatedRoiPercent}٪</span>
                </div>
              </div>

              <a
                href="#pricing"
                className="w-full py-2.5 text-xs font-bold text-black bg-[#1DB954] hover:bg-[#1ED760] rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-[#1DB954]/20 cursor-pointer"
              >
                <span>مشاهده تعرفه‌ها و انتخاب پلن</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
