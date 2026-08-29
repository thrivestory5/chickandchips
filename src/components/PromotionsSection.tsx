import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Gift, 
  Check, 
  ChevronRight,
  Zap
} from 'lucide-react';
import { PROMOTIONS } from '../data/brandData';
import { sounds } from '../utils/soundEffects';

interface PromotionsSectionProps {
  onOpenOrder: () => void;
  onOpenVoucher: () => void;
}

export const PromotionsSection: React.FC<PromotionsSectionProps> = ({ onOpenOrder, onOpenVoucher }) => {
  // Countdown Timer Simulation
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 42,
    seconds: 19
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="promos" className="py-20 bg-gradient-to-b from-[#FFF5E6]/40 via-[#FFFDF9] to-[#FFFDF9] relative overflow-hidden">
      
      {/* Glow Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#E51B24]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Live Countdown */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 border border-red-200 text-[#E51B24] font-extrabold text-xs tracking-wider uppercase mb-3">
              <Zap className="w-3.5 h-3.5 text-[#E51B24] fill-[#E51B24]" />
              <span>Promo Spesial & Penawaran Terbatas</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#141316] tracking-tight">
              Makan Hemat & Nikmat di <span className="text-[#E51B24]">Chick n' Chips</span>
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg mt-2 font-medium">
              Nikmati diskon grand opening, paket hemat berdua, hingga gratis minuman segar setiap hari!
            </p>
          </div>

          {/* Flash Promo Countdown Box */}
          <div className="bg-white p-4 sm:p-5 rounded-3xl border-2 border-[#FFB800] shadow-lg flex items-center gap-4 self-start lg:self-auto">
            <div className="w-11 h-11 rounded-2xl bg-[#E51B24] text-white flex items-center justify-center text-xl shadow-md">
              ⏰
            </div>
            <div>
              <div className="text-[11px] font-black text-neutral-500 uppercase tracking-wider">
                Flash Promo Berakhir Dalam:
              </div>
              <div className="flex items-center gap-1.5 font-mono font-black text-lg sm:text-xl text-neutral-900 mt-0.5">
                <span className="bg-neutral-100 px-2 py-0.5 rounded-lg text-[#E51B24]">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span>:</span>
                <span className="bg-neutral-100 px-2 py-0.5 rounded-lg text-[#E51B24]">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span>:</span>
                <span className="bg-neutral-100 px-2 py-0.5 rounded-lg text-[#E51B24]">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Main Promo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PROMOTIONS.map((promo) => (
            <div
              key={promo.id}
              className="bg-white rounded-3xl overflow-hidden border-2 border-neutral-200 hover:border-[#E51B24] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-[#FFB800] text-[#19181B] font-black text-xs px-3 py-1 rounded-full shadow-md">
                    {promo.badge}
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="font-heading font-black text-lg sm:text-xl text-[#FFB800] leading-tight">
                      {promo.priceTag}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-heading font-black text-xl text-neutral-900 group-hover:text-[#E51B24] transition-colors">
                    {promo.title}
                  </h3>
                  
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {promo.description}
                  </p>

                  <div className="pt-2 space-y-1.5 border-t border-neutral-100">
                    <div className="text-[10px] font-black text-neutral-400 uppercase tracking-wider">
                      Syarat & Ketentuan:
                    </div>
                    {promo.terms.map((term, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-neutral-700">
                        <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{term}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    sounds.playCrunch();
                    onOpenOrder();
                  }}
                  className="w-full py-3 rounded-2xl bg-neutral-900 hover:bg-[#E51B24] text-white font-black text-xs shadow-md transition-all active:scale-95 flex items-center justify-center gap-1.5 group-hover:bg-[#E51B24] cursor-pointer"
                >
                  <span>Gunakan Promo Ini</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Voucher Claim Banner */}
        <div className="bg-gradient-to-r from-[#E51B24] via-[#FF5E14] to-[#FFB800] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border-4 border-white">
          
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 text-white font-black text-xs uppercase tracking-wider backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Kupon Kejutan Spesial</span>
            </div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl leading-tight">
              Klaim Voucher Diskon 20% Untuk Pesanan Pertamamu!
            </h3>
            <p className="text-white/90 text-xs sm:text-sm font-medium leading-relaxed">
              Klik tombol di samping untuk mengacak kode kupon eksklusif dan rayakan momen hemat bersama keluarga & teman!
            </p>
          </div>

          <button
            onClick={() => {
              sounds.playSuccess();
              onOpenVoucher();
            }}
            className="px-8 py-4 rounded-2xl bg-white hover:bg-neutral-100 text-[#E51B24] font-black text-base shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 shrink-0 cursor-pointer border-2 border-yellow-300"
          >
            <Gift className="w-5 h-5 text-[#E51B24] animate-bounce" />
            <span>Klaim Voucher Sekarang (FREE)</span>
          </button>

        </div>

      </div>
    </section>
  );
};
