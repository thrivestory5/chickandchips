import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Flame, 
  Volume2
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface HeroProps {
  onOpenOrder: () => void;
  onOpenFranchise: () => void;
  onOpenVoucher: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder, onOpenFranchise, onOpenVoucher }) => {
  const handleCrunchBite = () => {
    sounds.playCrunch();
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-[#FFF5E6]/60 via-[#FFFDF9] to-[#FFFDF9]">
      
      {/* Background Decor Elements */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-br from-[#FFB800]/25 to-[#E51B24]/15 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20"></div>
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#E51B24]/10 to-[#FFB800]/20 rounded-full blur-3xl pointer-events-none -ml-32"></div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-100/90 border border-red-200 text-[#E51B24] font-extrabold text-xs tracking-wide uppercase shadow-xs">
            <Flame className="w-3.5 h-3.5 text-[#E51B24] fill-[#E51B24] animate-bounce" />
            <span>The Modern Fish & Chips Upgrade</span>
          </div>

          <button 
            onClick={() => {
              sounds.playSuccess();
              onOpenVoucher();
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFB800] text-[#19181B] font-black text-xs tracking-wide hover:bg-[#ffa700] transition-transform hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Klaim Voucher Grand Opening</span>
          </button>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Kinetic Typography & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#141316] leading-[1.05] mb-5">
              AYAMNYA <span className="text-[#E51B24] relative inline-block">
                JUICY,
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 250 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9C60 3 180 3 247 9" stroke="#FFB800" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </span>
              <br />
              CHIPS-NYA <span className="text-[#FF9900]">HAPPY!</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed mb-8">
              Mengubah konsep klasik <strong className="text-neutral-900 font-bold">Fish & Chips</strong> menjadi lebih familiar dan dicintai masyarakat Indonesia—menggunakan <span className="text-[#E51B24] font-bold">Ayam Crispy Steak Juicy</span> dengan saus tartar gurih, pasta creamy, dan aroma biryani.
            </p>

            {/* CTAs & Sound Interaction */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={() => {
                  sounds.playCrunch();
                  onOpenOrder();
                }}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#E51B24] hover:bg-[#C4121A] text-white font-black text-base shadow-xl shadow-red-500/30 hover:shadow-red-500/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group border-b-4 border-red-900"
              >
                <span>Lihat Menu & Pesan</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  sounds.playSuccess();
                  onOpenFranchise();
                }}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-orange-50/50 text-[#141316] font-black text-base border-2 border-neutral-200 hover:border-[#FFB800] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 shadow-sm"
              >
                <TrendingUp className="w-5 h-5 text-[#E51B24]" />
                <span>Peluang Franchise (37.5% ROI)</span>
              </button>

              {/* Crunchy Sound FX Trigger */}
              <button
                onClick={handleCrunchBite}
                title="Klik untuk mendengar kerenyahan ayam!"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-amber-100/80 hover:bg-amber-200/90 text-amber-900 font-bold text-xs transition-all active:scale-90 border border-amber-300 shadow-xs cursor-pointer"
              >
                <Volume2 className="w-4 h-4 text-[#E51B24] animate-bounce" />
                <span className="font-mono">Sound Bite (CRUNCH!)</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-neutral-200/80 max-w-2xl mx-auto lg:mx-0">
              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-neutral-100 shadow-xs text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-black text-[#E51B24] font-heading">Rp 310M+</div>
                <div className="text-[11px] font-bold text-neutral-500">Proyeksi Omset / Bln</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-neutral-100 shadow-xs text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-black text-amber-500 font-heading">60.0%</div>
                <div className="text-[11px] font-bold text-neutral-500">Gross Profit Margin</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-neutral-100 shadow-xs text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-black text-emerald-600 font-heading">&le; 5 Min</div>
                <div className="text-[11px] font-bold text-neutral-500">Fast Service SOP</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-neutral-100 shadow-xs text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-black text-[#141316] font-heading">2.6 Thn</div>
                <div className="text-[11px] font-bold text-neutral-500">Payback Period</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Floating Hero Showcase */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background Circular Plate Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E51B24]/20 via-[#FFB800]/30 to-amber-200/40 rounded-full blur-2xl transform scale-95"></div>

              {/* Main Dish Showcase Card */}
              <div 
                onClick={handleCrunchBite}
                className="relative bg-gradient-to-b from-white to-[#FFF9F2] p-4 sm:p-5 rounded-3xl border-4 border-white shadow-2xl shadow-red-900/15 cursor-pointer group transform transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Hero Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900 shadow-inner">
                  <img 
                    src="https://images.unsplash.com/photo-1527477321055-436158a2b0a5?auto=format&fit=crop&w=1000&q=85" 
                    alt="Chick n' Chips Signature Crispy Chicken and Fries with Tartar Sauce"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Price Tag */}
                  <div className="absolute bottom-3 left-3 bg-[#E51B24] text-white px-3.5 py-1.5 rounded-xl font-black text-sm shadow-lg flex items-center gap-1.5">
                    <span className="text-xs text-red-200 line-through">Rp 38.000</span>
                    <span className="text-[#FFB800] text-base">Rp 20.000</span>
                    <span className="text-[9px] bg-red-800 px-1 py-0.5 rounded uppercase">Promo</span>
                  </div>

                  {/* Top Live Badge */}
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 border border-white/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>100% Real Chicken Breast</span>
                  </div>
                </div>

                {/* Dish Highlights */}
                <div className="mt-4 px-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-black text-xl text-[#141316]">
                        Chicken & Chips with Tartar Sauce
                      </h3>
                      <p className="text-xs text-neutral-500 font-medium mt-0.5">
                        Crispy Golden Steak • Crinkle Chips • Tartar Mayo Dip • Fresh Lemon
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl">🔥</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-neutral-100">
                    <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-1 rounded-md">
                      ✨ Renyah di Luar, Juicy di Dalam
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">
                      ⚡️ Saji &le; 5 Menit
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Tartar Sauce */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-amber-200 animate-float">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-lg">
                    🥣
                  </div>
                  <div>
                    <div className="text-xs font-black text-neutral-900">Signature Tartar Dip</div>
                    <div className="text-[10px] font-bold text-neutral-500">Creamy, Tangy & Refreshing</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Scalable Model */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-red-200 animate-float-reverse">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center text-lg">
                    🚀
                  </div>
                  <div>
                    <div className="text-xs font-black text-[#E51B24]">High Margin & Scalable</div>
                    <div className="text-[10px] font-bold text-neutral-500">Dine-in • Takeaway • Cloud Kitchen</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Dynamic Animated Marquee Ribbon */}
      <div className="mt-14 bg-gradient-to-r from-[#E51B24] via-[#FFB800] to-[#E51B24] text-white py-3 overflow-hidden shadow-md">
        <div className="animate-marquee flex items-center gap-8 font-heading font-black text-sm sm:text-base tracking-wider uppercase text-neutral-900">
          <span className="flex items-center gap-2 text-white">
            🍗 AYAMNYA JUICY, CHIPS-NYA HAPPY!
          </span>
          <span className="text-yellow-200">★</span>
          <span className="flex items-center gap-2 text-[#19181B]">
            🔥 KRISPI DI LUAR, MELELEH DI DALAM
          </span>
          <span className="text-white">★</span>
          <span className="flex items-center gap-2 text-white">
            🥣 SAUS TARTAR & CHEESE SPAGHETTI SPESIAL
          </span>
          <span className="text-yellow-200">★</span>
          <span className="flex items-center gap-2 text-[#19181B]">
            ⚡️ PENYAJIAN CEPAT KURANG DARI 5 MENIT
          </span>
          <span className="text-white">★</span>
          <span className="flex items-center gap-2 text-white">
            💰 PELUANG KEMITRAAN FRANCHISE 37.5% ROI
          </span>
          <span className="text-yellow-200">★</span>
          <span className="flex items-center gap-2 text-[#19181B]">
            🛵 TERSEDIA DI GOFOOD • GRABFOOD • SHOPEEFOOD
          </span>
          <span className="text-white">★</span>
        </div>
      </div>

    </section>
  );
};
