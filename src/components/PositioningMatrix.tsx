import React, { useState } from 'react';
import { 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  Layers
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface CompetitorNode {
  id: string;
  name: string;
  x: number; // 0 to 100 on X-axis (Traditional -> Modern/Unique)
  y: number; // 0 to 100 on Y-axis (Low Price -> High Price)
  category: string;
  priceRange: string;
  pros: string;
  cons: string;
  color: string;
  isSweetSpot?: boolean;
}

export const PositioningMatrix: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('chick-n-chips');

  const competitors: CompetitorNode[] = [
    {
      id: 'chick-n-chips',
      name: "Chick n' Chips (THE SWEET SPOT)",
      x: 78,
      y: 38,
      category: "Modern Fast Casual",
      priceRange: "Rp 20.000 - 38.000 (Sangat Terjangkau)",
      pros: "Konsep Chicken & Chips unik, Saus Tartar khas, Branding catchy viral, SOP < 5 menit, Margin 18.1%",
      cons: "Brand baru (momentum pertumbuhan ekspansi cepat)",
      color: "bg-[#E51B24] border-[#FFB800] text-white ring-4 ring-yellow-400/40",
      isSweetSpot: true
    },
    {
      id: 'global-fastfood',
      name: "Global Fast Food (KFC / McD)",
      x: 22,
      y: 82,
      category: "Global Giant",
      priceRange: "Rp 50.000 - 90.000 (Tinggi)",
      pros: "Brand equity kuat, jaringan outlet raksasa global",
      cons: "Harga mahal bagi mass market, menu terlalu luas tidak fokus chicken & chips",
      color: "bg-neutral-800 border-neutral-600 text-white"
    },
    {
      id: 'richeese',
      name: "Richeese Factory",
      x: 35,
      y: 45,
      category: "Chain Lokal Pedas",
      priceRange: "Rp 40.000 - 55.000 (Menengah)",
      pros: "Spesialisasi saus keju & ayam pedas level",
      cons: "Pasar mulai jenuh, tidak memiliki variasi pasta & biryani rice",
      color: "bg-amber-600 border-amber-400 text-white"
    },
    {
      id: 'ayam-geprek',
      name: "Ayam Geprek / Bensu",
      x: 18,
      y: 24,
      category: "Traditional Street Food",
      priceRange: "Rp 18.000 - 25.000 (Murah)",
      pros: "Rasa lokal pedas familiar, harga murah",
      cons: "Persaingan harga sangat berdarah-darah (red ocean), branding kurang modern",
      color: "bg-orange-700 border-orange-500 text-white"
    },
    {
      id: 'umkm-gerobak',
      name: "Street Food & UMKM",
      x: 62,
      y: 15,
      category: "Kaki Lima / Gerobak",
      priceRange: "Rp 10.000 - 15.000 (Sangat Murah)",
      pros: "Mudah ditemukan di pinggir jalan",
      cons: "Kualitas & higienitas tidak konsisten, branding sangat lemah, tanpa dine-in nyaman",
      color: "bg-neutral-600 border-neutral-400 text-white"
    }
  ];

  const currentNode = competitors.find(c => c.id === selectedNode) || competitors[0];

  return (
    <section id="positioning" className="py-20 bg-[#FFFDF9] relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-red-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 font-extrabold text-xs tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-[#E51B24]" />
            <span>Market Analysis & Strategy</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#141316] tracking-tight">
            Posisi Strategis di <span className="text-[#E51B24]">The Sweet Spot</span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-3 font-medium">
            Chick n' Chips tidak head-to-head langsung dengan raksasa global maupun gerobak kaki lima. Kami merebut celah pasar terbesar: <strong>Konsep Modern & Unik dengan Harga Terjangkau</strong>.
          </p>
        </div>

        {/* 2x2 Matrix & Competitor Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Interactive 2x2 Matrix Chart Canvas */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-2 border-neutral-200 shadow-xl relative flex flex-col justify-between min-h-[460px]">
            
            {/* Axis Labels */}
            <div className="flex justify-between items-center text-xs font-black text-neutral-400 tracking-wider uppercase mb-4">
              <span className="flex items-center gap-1 text-red-500 font-bold">
                ▲ HIGH PRICE
              </span>
              <span className="text-neutral-500 font-bold">
                2x2 Competitive Positioning Map
              </span>
            </div>

            {/* Matrix Canvas Area */}
            <div className="relative flex-1 bg-gradient-to-br from-neutral-50 to-orange-50/30 rounded-2xl border border-neutral-200 p-4 my-2 overflow-hidden">
              
              {/* Center Crosshairs */}
              <div className="absolute inset-x-0 top-1/2 h-0.5 bg-neutral-300 -translate-y-1/2"></div>
              <div className="absolute inset-y-0 left-1/2 w-0.5 bg-neutral-300 -translate-x-1/2"></div>

              {/* Sweet Spot Highlight Zone */}
              <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-red-500/10 border-2 border-dashed border-[#E51B24]/40 rounded-2xl -translate-y-1/2 pointer-events-none flex items-start justify-end p-2">
                <span className="bg-[#FFB800] text-[#19181B] text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs">
                  👑 THE SWEET SPOT
                </span>
              </div>

              {/* Plotted Competitor Nodes */}
              {competitors.map((node) => {
                const isSelected = selectedNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => {
                      sounds.playPop();
                      setSelectedNode(node.id);
                    }}
                    style={{
                      left: `${node.x}%`,
                      bottom: `${node.y}%`,
                      transform: 'translate(-50%, 50%)'
                    }}
                    className={`absolute p-2 sm:p-2.5 rounded-2xl transition-all duration-300 cursor-pointer flex items-center gap-1.5 shadow-lg ${
                      node.color
                    } ${
                      isSelected ? 'scale-110 z-30 shadow-2xl' : 'scale-90 hover:scale-100 z-20 opacity-85 hover:opacity-100'
                    }`}
                  >
                    {node.isSweetSpot ? (
                      <span className="text-base sm:text-lg animate-bounce">🍗</span>
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-white"></span>
                    )}
                    <span className="font-heading font-black text-[11px] sm:text-xs whitespace-nowrap">
                      {node.name.split(' (')[0]}
                    </span>
                  </button>
                );
              })}

              {/* Axis Corner Descriptions */}
              <div className="absolute bottom-2 left-3 text-[10px] font-bold text-neutral-400">
                TRADITIONAL / BIASA
              </div>
              <div className="absolute bottom-2 right-3 text-[10px] font-bold text-[#E51B24] uppercase">
                MODERN & UNIQUE / BEDA ►
              </div>
            </div>

            {/* Bottom Axis Label */}
            <div className="flex justify-between items-center text-xs font-black text-neutral-400 tracking-wider uppercase mt-4">
              <span className="text-emerald-600 font-bold">
                ▼ LOW PRICE
              </span>
              <span className="text-neutral-500 font-bold">
                *Klik titik pada grafik untuk melihat analisa
              </span>
            </div>

          </div>

          {/* Right Column: Selected Node Breakdown */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#FFFDF9] to-[#FFF5E6] rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-amber-200">
                <span className="text-xs font-bold text-[#E51B24] uppercase tracking-wider">
                  Analisa Kompetitor
                </span>
                <span className="bg-amber-100 text-amber-900 text-[11px] font-bold px-2.5 py-1 rounded-full">
                  {currentNode.category}
                </span>
              </div>

              <h3 className="font-heading font-black text-2xl text-neutral-900 mb-1 flex items-center gap-2">
                {currentNode.name}
              </h3>
              
              <div className="mt-3 p-3 rounded-2xl bg-white border border-amber-200/80 mb-5">
                <div className="text-[10px] font-bold text-neutral-400 uppercase">Rentang Harga Pasar</div>
                <div className="font-heading font-black text-base text-[#E51B24]">{currentNode.priceRange}</div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200">
                  <div className="text-xs font-black text-emerald-800 flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Kelebihan / Kekuatan</span>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                    {currentNode.pros}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200">
                  <div className="text-xs font-black text-rose-800 flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-4 h-4 text-rose-600" />
                    <span>Celah Kelemahan / Peluang Chick n' Chips</span>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                    {currentNode.cons}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Summary Bar */}
            <div className="mt-6 pt-4 border-t border-amber-200 text-xs font-bold text-neutral-600 flex items-center justify-between">
              <span>Keunggulan Chick n' Chips:</span>
              <span className="text-[#E51B24] font-black">Modern + Murah + Viral 🚀</span>
            </div>

          </div>

        </div>

        {/* 4 Pillars Strategic Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-neutral-200 shadow-md">
          <h3 className="font-heading font-black text-xl text-neutral-900 mb-6 flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#E51B24]" />
            <span>Matriks Perbandingan Faktor Kunci (Competitive Table)</span>
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-neutral-200 text-neutral-500 font-bold uppercase text-[11px]">
                  <th className="pb-3 px-3">Faktor Kunci</th>
                  <th className="pb-3 px-3 text-[#E51B24] font-black">Chick n' Chips (Kami)</th>
                  <th className="pb-3 px-3">Fast Food Global</th>
                  <th className="pb-3 px-3">Brand Lokal (Geprek)</th>
                  <th className="pb-3 px-3">Street Food UMKM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 font-medium text-neutral-700">
                <tr className="hover:bg-red-50/40 transition-colors">
                  <td className="py-3 px-3 font-bold text-neutral-900">1. Keterjangkauan Harga</td>
                  <td className="py-3 px-3 text-[#E51B24] font-black">⭐️⭐️⭐️⭐️ (Rp 20-29k)</td>
                  <td className="py-3 px-3 text-neutral-500">⭐️⭐️ (Mahal)</td>
                  <td className="py-3 px-3">⭐️⭐️⭐️⭐️ (Murah)</td>
                  <td className="py-3 px-3">⭐️⭐️⭐️⭐️⭐️ (Sangat Murah)</td>
                </tr>
                <tr className="hover:bg-red-50/40 transition-colors">
                  <td className="py-3 px-3 font-bold text-neutral-900">2. Kekuatan Branding & Visual</td>
                  <td className="py-3 px-3 text-[#E51B24] font-black">⭐️⭐️⭐️⭐️ (Fun & Catchy)</td>
                  <td className="py-3 px-3">⭐️⭐️⭐️⭐️⭐️ (Kuat Global)</td>
                  <td className="py-3 px-3 text-neutral-500">⭐️⭐️ (Tradisional)</td>
                  <td className="py-3 px-3 text-neutral-500">⭐️ (Sangat Lemah)</td>
                </tr>
                <tr className="hover:bg-red-50/40 transition-colors">
                  <td className="py-3 px-3 font-bold text-neutral-900">3. Kecocokan Rasa Lokal</td>
                  <td className="py-3 px-3 text-[#E51B24] font-black">⭐️⭐️⭐️⭐️⭐️ (Ayam Crispy Juara)</td>
                  <td className="py-3 px-3 text-neutral-500">⭐️⭐️ (Standar)</td>
                  <td className="py-3 px-3">⭐️⭐️⭐️⭐️⭐️ (Lokal Pedas)</td>
                  <td className="py-3 px-3">⭐️⭐️⭐️ (Inkonsisten)</td>
                </tr>
                <tr className="hover:bg-red-50/40 transition-colors">
                  <td className="py-3 px-3 font-bold text-neutral-900">4. Keunikan Konsep & Menu</td>
                  <td className="py-3 px-3 text-[#E51B24] font-black">⭐️⭐️⭐️⭐️⭐️ (Steak & Pasta)</td>
                  <td className="py-3 px-3 text-neutral-500">⭐️⭐️ (General)</td>
                  <td className="py-3 px-3 text-neutral-500">⭐️⭐️ (Sama Semua)</td>
                  <td className="py-3 px-3 text-neutral-500">⭐️ (Biasa)</td>
                </tr>
                <tr className="hover:bg-red-50/40 transition-colors">
                  <td className="py-3 px-3 font-bold text-neutral-900">5. Skalabilitas & Margin</td>
                  <td className="py-3 px-3 text-[#E51B24] font-black">⭐️⭐️⭐️⭐️ (18.1% Net Margin)</td>
                  <td className="py-3 px-3">⭐️⭐️⭐️⭐️⭐️ (Korporasi)</td>
                  <td className="py-3 px-3 text-neutral-500">⭐️⭐️ (Margin Tipis)</td>
                  <td className="py-3 px-3 text-neutral-500">⭐️ (Sulit Ekspansi)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
