import React, { useState } from 'react';
import { 
  Building2, 
  TrendingUp, 
  ArrowRight
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface FranchiseCalculatorProps {
  onOpenFranchise: () => void;
}

export const FranchiseCalculator: React.FC<FranchiseCalculatorProps> = ({ onOpenFranchise }) => {
  // Simulator Sliders
  const [dailyPax, setDailyPax] = useState<number>(260); // base from deck
  const [avgTicket, setAvgTicket] = useState<number>(39800); // weighted avg from deck
  const [operatingDays] = useState<number>(30);
  const [totalInvestment] = useState<number>(1800000000); // Rp 1.8 Miliar

  // Calculations
  const calculatedMonthlyRevenue = dailyPax * avgTicket * operatingDays;
  const calculatedCOGS = calculatedMonthlyRevenue * 0.3996; // ~40% HPP
  const calculatedGrossProfit = calculatedMonthlyRevenue - calculatedCOGS;
  
  // Dynamic OPEX: Base Rp 130M scaled slightly with volume
  const variableStaffScale = Math.max(0.85, dailyPax / 260);
  const calculatedOPEX = 130000000 * (0.6 + 0.4 * variableStaffScale);
  
  const calculatedMonthlyNetProfit = calculatedGrossProfit - calculatedOPEX;
  const calculatedAnnualNetProfit = calculatedMonthlyNetProfit * 12;
  
  const calculatedROI = (calculatedAnnualNetProfit / totalInvestment) * 100;
  const calculatedPaybackYears = totalInvestment / calculatedAnnualNetProfit;

  return (
    <section id="franchise-roi" className="py-20 bg-gradient-to-b from-white via-neutral-900 to-neutral-950 text-white relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#E51B24]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#FFB800]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-900/60 border border-red-500/30 text-red-400 font-extrabold text-xs tracking-wider uppercase mb-3 backdrop-blur-sm">
            <TrendingUp className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>Financial Projections & Business Model</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Peluang Bisnis & <span className="text-[#FFB800]">Simulasi ROI Kemitraan</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg mt-3 font-medium">
            Transparansi finansial berbasis kapasitas outlet 80 kursi. Model bisnis scalable dengan gross margin 60% dan ROI tahunan menarik hingga 37.5%!
          </p>
        </div>

        {/* 4 Quick Base Deck Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-neutral-800/80 backdrop-blur-md p-5 rounded-3xl border border-neutral-700 shadow-lg">
            <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">Proyeksi Omset / Bln</div>
            <div className="font-heading font-black text-2xl sm:text-3xl text-[#FFB800]">Rp 310,4 Juta</div>
            <div className="text-[11px] text-emerald-400 font-medium mt-1">260 pax / hari rata-rata</div>
          </div>

          <div className="bg-neutral-800/80 backdrop-blur-md p-5 rounded-3xl border border-neutral-700 shadow-lg">
            <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">Gross Profit Margin</div>
            <div className="font-heading font-black text-2xl sm:text-3xl text-white">60.03%</div>
            <div className="text-[11px] text-neutral-400 font-medium mt-1">HPP efisien ~39.9%</div>
          </div>

          <div className="bg-neutral-800/80 backdrop-blur-md p-5 rounded-3xl border border-neutral-700 shadow-lg">
            <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">Net Profit / Tahun</div>
            <div className="font-heading font-black text-2xl sm:text-3xl text-emerald-400">Rp 676,4 Juta</div>
            <div className="text-[11px] text-neutral-400 font-medium mt-1">Net margin bersih 18.1%</div>
          </div>

          <div className="bg-neutral-800/80 backdrop-blur-md p-5 rounded-3xl border border-neutral-700 shadow-lg">
            <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">Estimasi Payback</div>
            <div className="font-heading font-black text-2xl sm:text-3xl text-[#E51B24]">2.6 Tahun</div>
            <div className="text-[11px] text-neutral-400 font-medium mt-1">ROI 37.5% per tahun</div>
          </div>
        </div>

        {/* Interactive Simulator Card */}
        <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl p-6 sm:p-10 border-2 border-neutral-700 shadow-2xl mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-neutral-700">
            <div>
              <div className="text-xs font-black text-[#FFB800] uppercase tracking-wider mb-1">
                ⚙️ Live Financial Interactive Calculator
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                Simulasikan Potensi Keuntungan Outlet Anda
              </h3>
            </div>
            <span className="text-xs text-neutral-400 font-mono bg-neutral-950 px-3 py-1.5 rounded-xl border border-neutral-800">
              *Geser slider untuk melihat dampak profit
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Sliders */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Slider 1: Daily Customer Volume */}
              <div className="bg-neutral-950/60 p-5 rounded-2xl border border-neutral-800">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-black text-neutral-300 uppercase tracking-wider">
                    Jumlah Pengunjung Harian (Pax / Hari)
                  </label>
                  <span className="font-mono font-black text-lg text-[#FFB800]">
                    {dailyPax} Pax
                  </span>
                </div>
                <input
                  type="range"
                  min="180"
                  max="450"
                  step="10"
                  value={dailyPax}
                  onChange={(e) => {
                    sounds.playPop();
                    setDailyPax(Number(e.target.value));
                  }}
                  className="w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#FFB800]"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1.5">
                  <span>180 Pax (BEP Threshold)</span>
                  <span>260 Pax (Base Deck)</span>
                  <span>450 Pax (Peak Traffic)</span>
                </div>
              </div>

              {/* Slider 2: Average Spend per Customer */}
              <div className="bg-neutral-950/60 p-5 rounded-2xl border border-neutral-800">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-black text-neutral-300 uppercase tracking-wider">
                    Rata-rata Belanja per Pax (Spending / Ticket)
                  </label>
                  <span className="font-mono font-black text-lg text-emerald-400">
                    Rp {avgTicket.toLocaleString('id-ID')}
                  </span>
                </div>
                <input
                  type="range"
                  min="28000"
                  max="55000"
                  step="1000"
                  value={avgTicket}
                  onChange={(e) => {
                    sounds.playPop();
                    setAvgTicket(Number(e.target.value));
                  }}
                  className="w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1.5">
                  <span>Rp 28.000 (Ala Carte)</span>
                  <span>Rp 39.800 (Avg Mix)</span>
                  <span>Rp 55.000 (Full Combo + Dessert)</span>
                </div>
              </div>

              {/* OPEX Breakdown Summary Pill */}
              <div className="p-4 rounded-2xl bg-neutral-800/40 border border-neutral-700 text-xs text-neutral-300 space-y-1.5">
                <div className="font-bold text-neutral-400 uppercase text-[10px] tracking-wider mb-1">
                  Komponen Biaya Operasional (OPEX Monthly):
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>• Gaji Karyawan (12-15 Crew):</span>
                  <span className="font-mono text-neutral-200">Rp 65.000.000</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>• Sewa Lokasi Strategis:</span>
                  <span className="font-mono text-neutral-200">Rp 30.000.000</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>• Listrik, Air, Gas & Internet:</span>
                  <span className="font-mono text-neutral-200">Rp 15.000.000</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>• Marketing, Ads & Maintenance:</span>
                  <span className="font-mono text-neutral-200">Rp 20.000.000</span>
                </div>
              </div>

            </div>

            {/* Right Column: Live Calculated Results */}
            <div className="lg:col-span-6 bg-gradient-to-br from-neutral-950 to-neutral-900 p-6 sm:p-8 rounded-3xl border-2 border-neutral-700 shadow-xl space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <span className="text-xs font-bold text-neutral-400 uppercase">Hasil Proyeksi Real-Time</span>
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800">
                  High Scalability
                </span>
              </div>

              {/* Calculated Rows */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/90 border border-neutral-800">
                  <span className="text-xs text-neutral-400 font-medium">Estimasi Omset Bulanan:</span>
                  <span className="font-mono font-black text-lg text-white">
                    Rp {calculatedMonthlyRevenue.toLocaleString('id-ID')}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900/90 border border-neutral-800">
                  <span className="text-xs text-neutral-400 font-medium">Laba Kotor Bulanan (60%):</span>
                  <span className="font-mono font-black text-lg text-[#FFB800]">
                    Rp {Math.round(calculatedGrossProfit).toLocaleString('id-ID')}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-600/40">
                  <div>
                    <div className="text-[11px] font-bold text-emerald-400 uppercase">Laba Bersih per Bulan</div>
                    <div className="text-[10px] text-neutral-400">Setelah HPP + seluruh OPEX</div>
                  </div>
                  <span className="font-mono font-black text-xl sm:text-2xl text-emerald-400">
                    Rp {Math.round(calculatedMonthlyNetProfit).toLocaleString('id-ID')}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-center">
                    <div className="text-[10px] text-neutral-400 font-bold uppercase">Estimasi ROI Tahunan</div>
                    <div className="font-heading font-black text-2xl text-[#FFB800] mt-0.5">
                      {calculatedROI > 0 ? calculatedROI.toFixed(1) : 0}%
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-center">
                    <div className="text-[10px] text-neutral-400 font-bold uppercase">Payback Period</div>
                    <div className="font-heading font-black text-2xl text-white mt-0.5">
                      {calculatedPaybackYears > 0 ? calculatedPaybackYears.toFixed(1) : '-'} Thn
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation CTA */}
              <button
                onClick={() => {
                  sounds.playSuccess();
                  onOpenFranchise();
                }}
                className="w-full py-4 rounded-2xl bg-[#E51B24] hover:bg-[#C4121A] text-white font-black text-sm shadow-xl shadow-red-600/30 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border-b-2 border-red-800"
              >
                <Building2 className="w-4 h-4 text-[#FFB800]" />
                <span>Ajukan Kemitraan Franchise Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
