import React, { useState } from 'react';
import { 
  Store, 
  Sparkles, 
  Flame, 
  CreditCard, 
  Tablet, 
  Users, 
  Bike, 
  PackageCheck, 
  Check
} from 'lucide-react';
import { STORE_HOTSPOTS } from '../data/brandData';
import type { StoreHotspot } from '../data/brandData';
import { sounds } from '../utils/soundEffects';

export const StoreTour: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<StoreHotspot>(STORE_HOTSPOTS[0]);

  const getHotspotIcon = (iconName: string) => {
    switch (iconName) {
      case 'CreditCard': return <CreditCard className="w-4 h-4" />;
      case 'Tablet': return <Tablet className="w-4 h-4" />;
      case 'Flame': return <Flame className="w-4 h-4" />;
      case 'Users': return <Users className="w-4 h-4" />;
      case 'Bike': return <Bike className="w-4 h-4" />;
      case 'PackageCheck': return <PackageCheck className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="store-tour" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 font-extrabold text-xs tracking-wider uppercase mb-3">
            <Store className="w-3.5 h-3.5 text-[#E51B24]" />
            <span>Store Concept & Operational Layout</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#141316] tracking-tight">
            Eksplorasi Layout Outlet <span className="text-[#E51B24]">80 Kapasitas Kursi</span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-3 font-medium">
            Dirancang dengan alur operasional efisien: dapur berstandar SOP ketat, jalur ojek online terpisah, dan dining room modern ber-AC yang nyaman untuk nongkrong maupun makan keluarga.
          </p>
        </div>

        {/* Store Layout Explorer Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Interactive Store Blueprint / Isometric Map */}
          <div className="lg:col-span-8 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 rounded-3xl p-4 sm:p-6 text-white shadow-2xl border-4 border-neutral-800 relative overflow-hidden">
            
            {/* Blueprint Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800 text-xs">
              <div className="flex items-center gap-2 font-mono font-bold text-neutral-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>CHICK N' CHIPS MASTER FLOORPLAN (80 PLACES)</span>
              </div>
              <span className="text-[#FFB800] font-mono text-[11px] font-bold">
                *Klik hotspot bernomor untuk melihat detail
              </span>
            </div>

            {/* Layout Graphic with Interactive Hotspot Pins */}
            <div className="relative rounded-2xl overflow-hidden bg-[#1A181D] aspect-[16/10] border border-neutral-800 flex items-center justify-center">
              
              {/* Simulated Isometric Floorplan Blueprint */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-95">
                
                {/* Zone Top: Kitchen, Storage, Delivery Bay */}
                <div className="grid grid-cols-3 gap-2 h-1/3">
                  <div className="bg-neutral-800/80 border border-neutral-700 rounded-xl p-2.5 flex flex-col justify-between">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">Zone A</span>
                    <span className="text-xs font-bold text-amber-300">Cold Storage & Walk-in</span>
                  </div>
                  <div className="bg-red-950/60 border border-red-800/80 rounded-xl p-2.5 flex flex-col justify-between">
                    <span className="text-[10px] font-mono text-red-400 uppercase">Zone B (Core)</span>
                    <span className="text-xs font-bold text-white">SOP Kitchen & Fryers</span>
                  </div>
                  <div className="bg-emerald-950/60 border border-emerald-800/80 rounded-xl p-2.5 flex flex-col justify-between">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase">Zone C</span>
                    <span className="text-xs font-bold text-emerald-300">Online Delivery Bay</span>
                  </div>
                </div>

                {/* Zone Middle: Service & POS Counter + Kiosks */}
                <div className="bg-amber-950/50 border-2 border-amber-600/60 rounded-2xl p-3 flex items-center justify-between my-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">💳</span>
                    <div>
                      <div className="text-xs font-black text-amber-300">SERVICE & POS COUNTER</div>
                      <div className="text-[10px] text-neutral-400">Double screen order & payment</div>
                    </div>
                  </div>
                  <div className="bg-amber-400 text-neutral-950 text-[10px] font-black px-2.5 py-1 rounded-lg">
                    Self-Order Kiosks Zone
                  </div>
                </div>

                {/* Zone Bottom: 80-Seat Dining Area */}
                <div className="bg-neutral-800/60 border border-neutral-700 rounded-2xl p-4 h-2/5 flex flex-col justify-between bg-checker-pattern/10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-white flex items-center gap-1.5">
                      <span>🪑</span> DINING AREA (80 SEATS CAPACITY)
                    </span>
                    <span className="text-[10px] bg-red-600 text-white font-mono px-2 py-0.5 rounded">
                      Family & Youth Seating
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center text-[10px] text-neutral-400">
                    <div className="bg-black/40 p-1.5 rounded-lg">Table Row A</div>
                    <div className="bg-black/40 p-1.5 rounded-lg">Table Row B</div>
                    <div className="bg-black/40 p-1.5 rounded-lg">Family Booth</div>
                    <div className="bg-black/40 p-1.5 rounded-lg">Condiment Bar</div>
                  </div>
                </div>

              </div>

              {/* Hotspot Floating Buttons */}
              {STORE_HOTSPOTS.map((spot, index) => {
                const isActive = activeHotspot.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => {
                      sounds.playPop();
                      setActiveHotspot(spot);
                    }}
                    style={{
                      left: `${spot.x}%`,
                      top: `${spot.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    className={`absolute z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-heading font-black text-xs transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-[#FFB800] text-neutral-950 scale-125 ring-4 ring-[#FFB800]/50 shadow-xl'
                        : 'bg-[#E51B24] text-white hover:scale-110 shadow-lg border-2 border-white'
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}

            </div>

            {/* Hotspot Quick Navigation Pills */}
            <div className="mt-4 flex flex-wrap gap-2">
              {STORE_HOTSPOTS.map((spot, index) => (
                <button
                  key={spot.id}
                  onClick={() => {
                    sounds.playPop();
                    setActiveHotspot(spot);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeHotspot.id === spot.id
                      ? 'bg-[#FFB800] text-neutral-950 font-black'
                      : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white'
                  }`}
                >
                  {index + 1}. {spot.title.split(' ')[0]}
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Selected Hotspot Details */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#FFFDF9] to-[#FFF5E6] rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-xl flex flex-col justify-between min-h-[460px]">
            <div>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-amber-200">
                <div className="w-12 h-12 rounded-2xl bg-[#E51B24] text-white flex items-center justify-center shadow-md">
                  {getHotspotIcon(activeHotspot.icon)}
                </div>
                <div>
                  <span className="text-[10px] font-black text-[#E51B24] uppercase tracking-wider">
                    Fasilitas & SOP Outlet
                  </span>
                  <h3 className="font-heading font-black text-xl text-neutral-900 leading-tight">
                    {activeHotspot.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium mb-6">
                {activeHotspot.description}
              </p>

              {/* Hotspot Key Features */}
              <div className="space-y-2.5">
                <div className="text-xs font-black text-neutral-400 uppercase tracking-wider">
                  Fitur & Standarisasi:
                </div>
                {activeHotspot.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-bold text-neutral-800 bg-white p-2.5 rounded-xl border border-amber-200/60 shadow-xs">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operational Highlight */}
            <div className="mt-6 pt-4 border-t border-amber-200 flex items-center justify-between text-xs">
              <span className="text-neutral-500 font-bold">Kecepatan Saji:</span>
              <span className="font-mono font-black text-[#E51B24] bg-red-100 px-2 py-0.5 rounded-md">
                &le; 5 Menit / Order
              </span>
            </div>

          </div>

        </div>

        {/* 3 Key Operational Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-[#E51B24] flex items-center justify-center text-xl shrink-0 font-bold">
              📋
            </div>
            <div>
              <h4 className="font-heading font-black text-base text-neutral-900 mb-1">Standardized Recipe & SOP</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Menjamin rasa konsisten di setiap outlet tanpa bergantung pada keahlian koki master tertentu.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-xl shrink-0 font-bold">
              ⏱️
            </div>
            <div>
              <h4 className="font-heading font-black text-base text-neutral-900 mb-1">Fast Service System</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Target penyajian pesanan &le; 5 menit untuk memastikan perputaran meja (table turnover) tinggi.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl shrink-0 font-bold">
              📦
            </div>
            <div>
              <h4 className="font-heading font-black text-base text-neutral-900 mb-1">Supplier Management</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Kontrak suplai bahan baku ayam dan bumbu marinasi terpusat menjaga kestabilan harga dan margin laba.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
