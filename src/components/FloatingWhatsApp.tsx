import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import { BRAND_INFO } from '../data/brandData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');

  const quickQuestions = [
    { label: '🍗 Pesan Menu Delivery', text: 'Halo Chick n\' Chips! 👋 Saya ingin memesan menu makanan.' },
    { label: '🔥 Info Promo 20K', text: 'Halo! Saya ingin tanya tentang promo Grand Opening 20K & diskon voucher.' },
    { label: '🏢 Info Franchise & ROI', text: 'Halo Tim Chick n\' Chips! Saya tertarik untuk konsultasi kemitraan franchise.' }
  ];

  const handleSendWhatsApp = (textToSend?: string) => {
    sounds.playSuccess();
    const finalMsg = textToSend || userMessage || 'Halo Chick n\' Chips! 👋 Saya ingin bertanya tentang menu dan layanan Anda.';
    const encoded = encodeURIComponent(finalMsg);
    window.open(`https://wa.me/${BRAND_INFO.rawPhone}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
      
      {/* Expanded Quick Chat Widget */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border-4 border-emerald-400 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Widget Header */}
          <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-xl border border-white/30">
                🍗
              </div>
              <div>
                <div className="font-heading font-black text-sm text-white flex items-center gap-1.5">
                  Chick n' Chips Support
                  <span className="w-2 h-2 rounded-full bg-yellow-300 animate-pulse"></span>
                </div>
                <div className="text-[11px] text-emerald-100 font-medium">
                  Online • Balas Cepat (+62 821-1853-2225)
                </div>
              </div>
            </div>
            
            <button
              onClick={() => {
                sounds.playPop();
                setIsOpen(false);
              }}
              className="w-7 h-7 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Widget Body */}
          <div className="p-4 bg-gradient-to-b from-neutral-50 to-white space-y-3">
            <div className="bg-white p-3 rounded-2xl border border-neutral-200 text-xs text-neutral-700 shadow-xs leading-relaxed">
              👋 <strong>Halo Sobat Happy!</strong> Ada yang bisa kami bantu seputar menu, pemesanan delivery, atau kemitraan outlet Chick n' Chips?
            </div>

            {/* Quick Question Chips */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-black text-neutral-400 uppercase tracking-wider">
                Pilih Topik Cepat:
              </div>
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendWhatsApp(q.text)}
                  className="w-full text-left p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 text-xs font-bold text-emerald-950 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span>{q.label}</span>
                  <Send className="w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="pt-2 border-t border-neutral-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ketik pesan Anda di sini..."
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSendWhatsApp();
                  }}
                  className="flex-1 px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-emerald-500 focus:outline-none text-xs font-medium"
                />
                <button
                  onClick={() => handleSendWhatsApp()}
                  className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-md active:scale-95 transition-transform cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => {
          sounds.playPop();
          setIsOpen(!isOpen)}
        }
        className="group relative flex items-center gap-2.5 p-3.5 sm:p-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 active:scale-95 transition-all duration-300 cursor-pointer border-2 border-white"
        aria-label="Hubungi WhatsApp Chick n Chips"
      >
        {/* Pulsing Ripple Effect */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping pointer-events-none"></span>
        
        {/* WhatsApp Icon */}
        <div className="relative z-10 flex items-center justify-center">
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#25D366]" />
        </div>

        {/* Text Tooltip (Visible on desktop & hover) */}
        <span className="relative z-10 hidden sm:inline-block font-heading font-black text-xs sm:text-sm tracking-wide pr-1">
          Chat WhatsApp
        </span>

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#FFB800] border-2 border-white rounded-full"></span>
      </button>

    </div>
  );
};
