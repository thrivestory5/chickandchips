import React, { useState } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND_INFO } from '../data/brandData';
import { sounds } from '../utils/soundEffects';

interface FranchiseInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FranchiseInquiryModal: React.FC<FranchiseInquiryModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [tier, setTier] = useState('Outlet Resto 80 Kursi (Full Concept)');
  const [budget, setBudget] = useState('Rp 1.5M - 1.8M (Sesuai Pitch Deck)');
  const [locationStatus, setLocationStatus] = useState('Sudah memiliki lokasi / ruko');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !city) return;

    sounds.playSuccess();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#E51B24', '#FFB800', '#10B981', '#FF5E14']
      });
    } catch {
      // fallback
    }
  };

  const handleForwardWhatsApp = () => {
    const text = `Halo Tim Kemitraan Chick n' Chips! 🍗🚀%0A` +
      `Saya tertarik bermitra dan ingin konsultasi franchise:%0A` +
      `- *Nama*: ${name}%0A` +
      `- *WhatsApp*: ${phone}%0A` +
      `- *Kota Target*: ${city}%0A` +
      `- *Model Kemitraan*: ${tier}%0A` +
      `- *Kesiapan Investasi*: ${budget}%0A` +
      `- *Status Lokasi*: ${locationStatus}%0A%0A` +
      `Mohon kirimkan Proposal Prospektus & jadwalkan sesi diskusi. Terima kasih!`;
    
    window.open(`https://wa.me/${BRAND_INFO.rawPhone}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border-4 border-[#FFB800] relative my-8 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center font-bold transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#141316] via-[#222] to-[#141316] p-6 text-white text-center relative border-b-2 border-[#FFB800]">
          <div className="w-14 h-14 rounded-2xl bg-[#E51B24] text-white flex items-center justify-center text-2xl mx-auto mb-3 shadow-lg border-2 border-[#FFB800]">
            🏢
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FFB800]/20 text-[#FFB800] text-[11px] font-black uppercase tracking-wider mb-1">
            <TrendingUp className="w-3.5 h-3.5" /> Peluang Franchise & Investasi
          </div>
          <h3 className="font-heading font-black text-2xl text-white">
            Formulir Pendaftaran Kemitraan
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Bergabunglah menjadi mitra pelopor Chick n' Chips di kota Anda!
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#E51B24] focus:outline-none text-xs sm:text-sm font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Nomor WhatsApp Aktif *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0812-xxxx-xxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#E51B24] focus:outline-none text-xs sm:text-sm font-semibold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Rencana Kota / Lokasi Target Outlet *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Bandung, Surabaya, Tangerang Selatan, dll"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#E51B24] focus:outline-none text-xs sm:text-sm font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Pilihan Format Kemitraan
                </label>
                <select
                  value={tier}
                  onChange={(e) => setTier(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#E51B24] focus:outline-none text-xs sm:text-sm font-semibold bg-white"
                >
                  <option>Outlet Resto 80 Kursi (Full Concept - Recommended)</option>
                  <option>Mall Food Court / Island Booth</option>
                  <option>Cloud Kitchen (Delivery Focus)</option>
                  <option>Master Franchise Area (Regional)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Kesiapan Modal
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#E51B24] focus:outline-none text-xs sm:text-sm font-semibold bg-white"
                  >
                    <option>Rp 1.5M - 1.8M (Sesuai Pitch Deck)</option>
                    <option>Rp 800jt - 1.5M</option>
                    <option>&gt; Rp 1.8 Miliar (Multi-unit)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Status Lokasi
                  </label>
                  <select
                    value={locationStatus}
                    onChange={(e) => setLocationStatus(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#E51B24] focus:outline-none text-xs sm:text-sm font-semibold bg-white"
                  >
                    <option>Sudah memiliki lokasi / ruko</option>
                    <option>Sedang dalam proses survei</option>
                    <option>Butuh bantuan rekomendasi lokasi</option>
                  </select>
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Seluruh data kemitraan dilindungi kerahasiaannya dan akan langsung dihubungi oleh Tim Bisnis Development dalam kurun waktu 1x24 jam.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#E51B24] hover:bg-[#C4121A] text-white font-black text-sm shadow-xl shadow-red-500/25 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer border-b-2 border-red-800"
              >
                <Sparkles className="w-4 h-4 text-[#FFB800]" />
                <span>Kirim Pengajuan Kemitraan</span>
              </button>

            </form>
          ) : (
            <div className="text-center space-y-4 py-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="font-heading font-black text-2xl text-neutral-900">
                Pengajuan Berhasil Terkirim!
              </h4>

              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Terima kasih, <strong>{name}</strong>. Tim Business Development Chick n' Chips telah menerima data minat kemitraan Anda untuk wilayah <strong>{city}</strong>.
              </p>

              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-700 text-left space-y-1">
                <div>• <strong>Model</strong>: {tier}</div>
                <div>• <strong>Kesiapan Modal</strong>: {budget}</div>
                <div>• <strong>Status Lokasi</strong>: {locationStatus}</div>
              </div>

              <button
                onClick={handleForwardWhatsApp}
                className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black text-sm shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Lanjutkan Diskusi Langsung via WhatsApp</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
