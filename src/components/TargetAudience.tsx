import React, { useState } from 'react';
import { 
  Users, 
  ShoppingBag, 
  Check, 
  Utensils
} from 'lucide-react';
import { PERSONAS } from '../data/brandData';
import type { Persona } from '../data/brandData';
import { sounds } from '../utils/soundEffects';

interface TargetAudienceProps {
  onOpenOrder: () => void;
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ onOpenOrder }) => {
  const [selectedPersona, setSelectedPersona] = useState<Persona>(PERSONAS[0]);

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFFDF9] to-[#FFF5E6]/40 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-yellow-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 border border-red-200 text-[#E51B24] font-extrabold text-xs tracking-wider uppercase mb-3">
            <Users className="w-3.5 h-3.5 text-[#E51B24]" />
            <span>Target Market & Segmen Konsumen</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#141316] tracking-tight">
            Makanan Favorit <span className="text-[#E51B24]">Semua Generasi</span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-3 font-medium">
            Dengan positioning sebagai <em>modern comfort food</em>, Chick n' Chips dirancang untuk memikat pasar massal mulai dari anak muda hingga keluarga besar.
          </p>
        </div>

        {/* Persona Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {PERSONAS.map((p) => {
            const isSelected = selectedPersona.id === p.id;
            return (
              <button
                key={p.id}
                onClick={() => {
                  sounds.playPop();
                  setSelectedPersona(p);
                }}
                className={`p-4 rounded-3xl text-left transition-all duration-300 cursor-pointer border-2 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#E51B24] text-white border-red-600 shadow-xl shadow-red-500/25 scale-[1.03]'
                    : 'bg-white text-neutral-800 border-neutral-200 hover:border-amber-300 shadow-xs hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{p.avatar}</span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-[#FFB800] animate-ping"></span>}
                </div>
                <div>
                  <h3 className={`font-heading font-black text-sm sm:text-base ${isSelected ? 'text-white' : 'text-neutral-900'}`}>
                    {p.title}
                  </h3>
                  <div className={`text-[11px] font-bold mt-0.5 line-clamp-1 ${isSelected ? 'text-amber-200' : 'text-neutral-500'}`}>
                    {p.tagline}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Persona Deep Dive Detail Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-neutral-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Persona Story */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-3xl shadow-inner">
                {selectedPersona.avatar}
              </div>
              <div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-neutral-900">
                  {selectedPersona.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#E51B24]">
                  {selectedPersona.tagline}
                </p>
              </div>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-medium">
              {selectedPersona.description}
            </p>

            {/* Persona Traits */}
            <div className="space-y-2">
              <div className="text-xs font-black text-neutral-400 uppercase tracking-wider">
                Karakteristik & Kebutuhan Utama:
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedPersona.traits.map((trait) => (
                  <span
                    key={trait}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold"
                  >
                    <Check className="w-3.5 h-3.5 text-[#E51B24]" />
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Recommended Menu for this Persona */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#FFFDF9] to-[#FFF5E6] p-6 rounded-3xl border-2 border-amber-200 shadow-inner flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-amber-200">
                <span className="text-[11px] font-black text-[#E51B24] uppercase tracking-wider flex items-center gap-1">
                  <Utensils className="w-3.5 h-3.5" /> Rekomendasi Menu Pilihan
                </span>
                <span className="text-xs font-bold text-amber-800 bg-amber-200/60 px-2 py-0.5 rounded">
                  Must Try
                </span>
              </div>

              <div className="font-heading font-black text-xl text-neutral-900 mb-2">
                {selectedPersona.favoriteMeal}
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed mb-6 font-medium">
                Paling cocok untuk memenuhi selera rasa, kepraktisan waktu, dan budget harian kelompok konsumen ini.
              </p>
            </div>

            <button
              onClick={() => {
                sounds.playCrunch();
                onOpenOrder();
              }}
              className="w-full py-3.5 rounded-2xl bg-[#E51B24] hover:bg-[#C4121A] text-white font-black text-xs sm:text-sm shadow-md shadow-red-500/25 active:scale-95 transition-transform flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#FFB800]" />
              <span>Pesan Menu Ini Sekarang</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
