import React, { useState } from 'react';
import { 
  X, 
  Send, 
  Clock, 
  ExternalLink
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface OrderDeliveryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderDeliveryModal: React.FC<OrderDeliveryModalProps> = ({ isOpen, onClose }) => {
  const [selectedCity, setSelectedCity] = useState<'jakarta' | 'bandung' | 'surabaya'>('jakarta');

  if (!isOpen) return null;

  const handleOrderApp = (platform: string) => {
    sounds.playPop();
    const url = platform === 'gofood' 
      ? 'https://gofood.co.id' 
      : platform === 'grabfood' 
      ? 'https://food.grab.com' 
      : 'https://shopee.co.id/shopeefood';
    window.open(url, '_blank');
  };

  const handleWhatsApp = () => {
    sounds.playSuccess();
    const msg = encodeURIComponent(`Halo Chick n' Chips! 👋 Saya ingin memesan menu untuk takeaway / delivery di outlet ${selectedCity.toUpperCase()}.`);
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border-4 border-[#FFB800] relative animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center font-bold transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Visual Banner */}
        <div className="bg-gradient-to-r from-[#E51B24] to-[#C4121A] p-6 text-white text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#FFB800] text-[#19181B] flex items-center justify-center text-3xl mx-auto mb-3 shadow-md border-2 border-white">
            🛵
          </div>
          <h3 className="font-heading font-black text-2xl text-white">
            Pesan Menu Chick n' Chips
          </h3>
          <p className="text-xs text-red-100 mt-1">
            Pilih channel pemesanan favoritmu untuk santap di rumah atau kantor!
          </p>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-6">
          
          {/* City Selector */}
          <div>
            <label className="block text-xs font-black text-neutral-700 uppercase tracking-wider mb-2">
              Pilih Wilayah Outlet Terdekat:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'jakarta', label: 'Jakarta' },
                { id: 'bandung', label: 'Bandung' },
                { id: 'surabaya', label: 'Surabaya' }
              ].map(city => (
                <button
                  key={city.id}
                  onClick={() => {
                    sounds.playPop();
                    setSelectedCity(city.id as 'jakarta' | 'bandung' | 'surabaya');
                  }}
                  className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                    selectedCity === city.id
                      ? 'bg-[#FFB800] text-neutral-900 border-amber-400 font-black shadow-xs'
                      : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  {city.label}
                </button>
              ))}
            </div>
          </div>

          {/* Online Food Delivery Platforms */}
          <div className="space-y-3">
            <div className="text-xs font-black text-neutral-400 uppercase tracking-wider">
              Aplikasi Online Delivery Resmi:
            </div>

            {/* GoFood */}
            <button
              onClick={() => handleOrderApp('gofood')}
              className="w-full p-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-200 text-left flex items-center justify-between transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm">
                  Go
                </div>
                <div>
                  <div className="font-heading font-black text-sm text-neutral-900">GoFood (Gojek)</div>
                  <div className="text-[11px] text-emerald-800 font-medium">Banyak Promo Ongkir & Diskon Kilat</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* GrabFood */}
            <button
              onClick={() => handleOrderApp('grabfood')}
              className="w-full p-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-300 text-left flex items-center justify-between transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00B14F] text-white flex items-center justify-center font-black text-sm">
                  Grab
                </div>
                <div>
                  <div className="font-heading font-black text-sm text-neutral-900">GrabFood</div>
                  <div className="text-[11px] text-emerald-800 font-medium">Pengiriman Cepat & Diskon Member</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* ShopeeFood */}
            <button
              onClick={() => handleOrderApp('shopeefood')}
              className="w-full p-3.5 rounded-2xl bg-orange-50 hover:bg-orange-100 border-2 border-orange-200 text-left flex items-center justify-between transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EE4D2D] text-white flex items-center justify-center font-black text-sm">
                  Sp
                </div>
                <div>
                  <div className="font-heading font-black text-sm text-neutral-900">ShopeeFood</div>
                  <div className="text-[11px] text-orange-800 font-medium">Gratis Ongkir & Cashback ShopeePay</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-orange-600 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* WhatsApp Direct Order */}
          <div className="pt-2">
            <button
              onClick={handleWhatsApp}
              className="w-full py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black text-sm shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Chat / Pesan Langsung via WhatsApp</span>
            </button>
          </div>

          {/* Outlet Notes */}
          <div className="text-center text-[11px] text-neutral-500 flex items-center justify-center gap-2">
            <Clock className="w-3.5 h-3.5 text-neutral-400" />
            <span>Jam Operasional: 10.00 - 22.00 WIB setiap hari</span>
          </div>

        </div>

      </div>
    </div>
  );
};
