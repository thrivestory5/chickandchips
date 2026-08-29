import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Check, 
  ShieldCheck 
} from 'lucide-react';
import { BRAND_INFO } from '../data/brandData';
import { sounds } from '../utils/soundEffects';

interface FooterProps {
  onOpenOrder: () => void;
  onOpenFranchise: () => void;
  onOpenVoucher: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrder, onOpenFranchise, onOpenVoucher }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    sounds.playSuccess();
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#141316] text-white pt-16 pb-12 border-t-4 border-[#FFB800] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E51B24]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter & Action Banner */}
        <div className="bg-gradient-to-r from-[#E51B24] via-[#FF5E14] to-[#E51B24] rounded-3xl p-8 sm:p-10 mb-16 shadow-2xl border-2 border-amber-300 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/30 text-white font-black text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
              <span>Dapatkan Promo Rahasia</span>
            </div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
              Jangan Lewatkan Flash Deals & Menu Musiman Baru!
            </h3>
            <p className="text-xs sm:text-sm text-red-100 font-medium">
              Daftarkan email Anda untuk menerima kupon diskon spesial dan undangan VIP Grand Opening.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md w-full">
                <input
                  type="email"
                  required
                  placeholder="Masukkan alamat email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3.5 rounded-xl bg-white text-neutral-900 placeholder:text-neutral-400 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-300 w-full"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-black text-white font-black text-xs sm:text-sm shadow-md active:scale-95 transition-all whitespace-nowrap cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Send className="w-4 h-4 text-[#FFB800]" />
                  <span>Daftar</span>
                </button>
              </form>
            ) : (
              <div className="bg-white/20 backdrop-blur-md px-5 py-3 rounded-2xl flex items-center gap-2 text-white font-bold text-xs sm:text-sm">
                <Check className="w-5 h-5 text-yellow-300" />
                <span>Terima kasih! Email Anda telah terdaftar.</span>
              </div>
            )}
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Info Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#E51B24] to-[#C4121A] rounded-2xl flex items-center justify-center text-2xl border-2 border-[#FFB800] shadow-md">
                🍗
              </div>
              <div>
                <span className="font-heading font-black text-2xl tracking-tight text-white">
                  Chick <span className="text-[#FFB800]">n'</span> Chips
                </span>
                <p className="text-xs text-[#FFB800] font-handwriting font-bold text-base">
                  Ayamnya Juicy, Chips-nya Happy!
                </p>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Brand kuliner modern Indonesia yang merevolusi konsep klasik Fish & Chips dengan daging ayam crispy juicy berpadu saus tartar segar, pasta keju, dan rempah biryani berstandar SOP tinggi.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Halal & Higienis</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-amber-400 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800 font-bold">
                <span>⏱️ Saji &le; 5 Menit</span>
              </div>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="space-y-3 text-xs">
            <div className="font-heading font-black text-sm text-[#FFB800] uppercase tracking-wider">
              Navigasi Cepat
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li><a href="#menu" className="hover:text-white transition-colors">Menu Favorit</a></li>
              <li><a href="#concept" className="hover:text-white transition-colors">Konsep & Nilai Brand</a></li>
              <li><a href="#positioning" className="hover:text-white transition-colors">Matriks Pasar (Sweet Spot)</a></li>
              <li><a href="#promos" className="hover:text-white transition-colors">Promo & Grand Opening</a></li>
              <li><a href="#store-tour" className="hover:text-white transition-colors">Layout Outlet 80 Seats</a></li>
              <li><a href="#franchise-roi" className="hover:text-white transition-colors">Simulasi Bisnis (ROI 37.5%)</a></li>
              <li><a href="#founder" className="hover:text-white transition-colors">Profil Konseptor (Iman H.)</a></li>
            </ul>
          </div>

          {/* Business & Franchise Col */}
          <div className="space-y-3 text-xs">
            <div className="font-heading font-black text-sm text-[#FFB800] uppercase tracking-wider">
              Kemitraan & Bisnis
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button 
                  onClick={onOpenFranchise} 
                  className="hover:text-white text-left transition-colors cursor-pointer"
                >
                  Pengajuan Franchise Outlet
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenFranchise} 
                  className="hover:text-white text-left transition-colors cursor-pointer"
                >
                  Cloud Kitchen Express
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenFranchise} 
                  className="hover:text-white text-left transition-colors cursor-pointer"
                >
                  Master Franchise Regional
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenVoucher} 
                  className="hover:text-white text-left transition-colors cursor-pointer"
                >
                  Klaim Kupon Diskon 20%
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenOrder} 
                  className="hover:text-white text-left transition-colors cursor-pointer"
                >
                  Pesan via Ojek Online
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Col */}
          <div className="space-y-3 text-xs">
            <div className="font-heading font-black text-sm text-[#FFB800] uppercase tracking-wider">
              Kontak & Operasional
            </div>
            <div className="space-y-2.5 text-neutral-400">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#E51B24] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.operatingHours}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#E51B24] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#E51B24] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E51B24] shrink-0 mt-0.5" />
                <span>Jakarta • Bandung • Surabaya • Tangerang</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; 2026 <strong>Chick n' Chips Indonesia</strong>. All rights reserved. Ayamnya Juicy, Chips-nya Happy!
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="hover:text-neutral-400 cursor-pointer">Kebijakan Privasi</span>
            <span>•</span>
            <span className="hover:text-neutral-400 cursor-pointer">Syarat & Ketentuan Kemitraan</span>
            <span>•</span>
            <span className="text-[#FFB800] font-bold">Standardized SOP Certified</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
