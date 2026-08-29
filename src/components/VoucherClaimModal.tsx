import React, { useState } from 'react';
import { 
  Sparkles, 
  Copy, 
  Check, 
  X, 
  Clock, 
  Send 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/soundEffects';

interface VoucherClaimModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VoucherClaimModal: React.FC<VoucherClaimModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [phone, setPhone] = useState('');
  const [claimed, setClaimed] = useState(false);

  if (!isOpen) return null;

  const handleClaim = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    sounds.playSuccess();
    setClaimed(true);

    // Fire confetti blast
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E51B24', '#FFB800', '#FF5E14', '#10B981']
      });
    } catch {
      // fallback
    }
  };

  const handleCopyCode = () => {
    sounds.playPop();
    navigator.clipboard.writeText('CHICKHAPPY20');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border-4 border-[#FFB800] relative animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center font-bold transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Visual Banner */}
        <div className="bg-gradient-to-r from-[#E51B24] via-[#FF5E14] to-[#E51B24] p-6 text-center text-white relative">
          <div className="w-16 h-16 rounded-2xl bg-[#FFB800] text-[#19181B] flex items-center justify-center text-3xl mx-auto mb-3 shadow-lg border-2 border-white animate-bounce">
            🎁
          </div>
          <div className="text-xs font-black uppercase tracking-wider text-yellow-200">
            Grand Opening Special Gift
          </div>
          <h3 className="font-heading font-black text-2xl text-white mt-1">
            Voucher Diskon 20%
          </h3>
          <p className="text-xs text-red-100 mt-1">
            Berlaku untuk semua menu di outlet Chick n' Chips!
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!claimed ? (
            <form onSubmit={handleClaim} className="space-y-4">
              <p className="text-xs text-neutral-600 text-center">
                Masukkan nomor WhatsApp aktifmu untuk mengklaim kode kupon eksklusif ini:
              </p>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  placeholder="0812-xxxx-xxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-[#E51B24] focus:outline-none text-sm font-semibold"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#E51B24] hover:bg-[#C4121A] text-white font-black text-sm shadow-lg shadow-red-500/30 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#FFB800]" />
                <span>Buka & Klaim Voucher Sekarang</span>
              </button>

              <div className="flex items-center justify-center gap-1 text-[11px] text-neutral-400 font-medium">
                <Clock className="w-3.5 h-3.5" /> Kuota tersisa: 38 voucher hari ini
              </div>
            </form>
          ) : (
            <div className="text-center space-y-4 animate-in fade-in duration-300">
              <div className="p-4 rounded-2xl bg-amber-50 border-2 border-dashed border-[#FFB800] relative">
                <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wider mb-1">
                  Kode Voucher Kamu:
                </div>
                <div className="font-mono font-black text-2xl sm:text-3xl text-[#E51B24] tracking-widest my-1">
                  CHICKHAPPY20
                </div>
                <div className="text-[11px] text-neutral-500 font-medium">
                  Potongan 20% Min. Transaksi Rp 40.000
                </div>

                <button
                  onClick={handleCopyCode}
                  className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-amber-300 hover:bg-amber-100 text-xs font-bold text-neutral-800 transition-colors shadow-xs cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Kode Berhasil Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Salin Kode Voucher</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-neutral-500">
                Tunjukkan kode ini ke kasir outlet atau gunakan saat memesan via WhatsApp Customer Service.
              </p>

              <button
                onClick={() => {
                  sounds.playSuccess();
                  const message = `Halo Chick n' Chips! 👋 Saya ingin menggunakan voucher diskon *CHICKHAPPY20* untuk pesanan saya!`;
                  window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
                  onClose();
                }}
                className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Gunakan Voucher via WhatsApp</span>
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
