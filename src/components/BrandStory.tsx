import { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  X as XIcon 
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export const BrandStory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'concept' | 'comparison' | 'advantages'>('concept');

  return (
    <section id="concept" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 font-extrabold text-xs tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E51B24]" />
            <span>The Innovation Story</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#141316] tracking-tight leading-tight">
            Kenapa Mengubah <span className="text-[#E51B24]">Fish & Chips</span> Menjadi <span className="text-[#FF9900]">Chick n' Chips?</span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-4 leading-relaxed font-medium">
            Konsep Fish & Chips klasik dari Inggris adalah legenda kuliner dunia. Namun di Indonesia, daging ikan memiliki limitasi selera dan harga bahan baku yang fluktuatif. Kami menggantinya dengan <strong className="text-neutral-900">Ayam Crispy Steak Juicy</strong> yang 100% dicintai semua kalangan!
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-neutral-100 border border-neutral-200 shadow-inner">
            <button
              onClick={() => {
                sounds.playPop();
                setActiveTab('concept');
              }}
              className={`px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                activeTab === 'concept'
                  ? 'bg-white text-[#E51B24] shadow-md'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              🍗 Nilai Konsep Brand
            </button>
            <button
              onClick={() => {
                sounds.playPop();
                setActiveTab('comparison');
              }}
              className={`px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                activeTab === 'comparison'
                  ? 'bg-white text-[#E51B24] shadow-md'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              ⚖️ Perbandingan vs Klasik
            </button>
            <button
              onClick={() => {
                sounds.playPop();
                setActiveTab('advantages');
              }}
              className={`px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                activeTab === 'advantages'
                  ? 'bg-white text-[#E51B24] shadow-md'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              🚀 Keunggulan Kompetitif
            </button>
          </div>
        </div>

        {/* Tab 1: Nilai Konsep Brand */}
        {activeTab === 'concept' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-300">
            
            {/* Card 1: Familiar Taste */}
            <div className="bg-gradient-to-b from-[#FFFDF9] to-[#FFF5E6]/40 p-8 rounded-3xl border-2 border-amber-100 hover:border-amber-300 transition-all hover:shadow-xl group">
              <div className="w-14 h-14 rounded-2xl bg-[#E51B24] text-white flex items-center justify-center text-2xl shadow-lg shadow-red-500/25 mb-6 group-hover:scale-110 transition-transform">
                🍗
              </div>
              <h3 className="font-heading font-black text-xl text-[#141316] mb-3">
                Rasa Familiar & Terbukti
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Ayam goreng crispy adalah makanan paling dominan di Indonesia dengan penetrasi pasar hampir 100%. Digemari dari anak kecil, pelajar, hingga orang tua.
              </p>
              <ul className="mt-5 space-y-2 text-xs font-bold text-neutral-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" /> Tekstur crispy gurih di luar
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" /> Daging tebal & juicy di dalam
                </li>
              </ul>
            </div>

            {/* Card 2: Affordable Mass Market */}
            <div className="bg-gradient-to-b from-[#FFFDF9] to-red-50/30 p-8 rounded-3xl border-2 border-red-100 hover:border-red-300 transition-all hover:shadow-xl group">
              <div className="w-14 h-14 rounded-2xl bg-[#FFB800] text-[#19181B] flex items-center justify-center text-2xl shadow-lg shadow-amber-500/25 mb-6 group-hover:scale-110 transition-transform">
                🏷️
              </div>
              <h3 className="font-heading font-black text-xl text-[#141316] mb-3">
                Harga Terjangkau (Starts 20k)
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Fish & Chips impor di resto barat dibanderol Rp 70k - 120k+. Chick n' Chips menyajikan sensasi western crispy mewah dengan harga mulai <strong>Rp 20.000 - 29.000</strong>!
              </p>
              <ul className="mt-5 space-y-2 text-xs font-bold text-neutral-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" /> Margin sehat HPP 39-42%
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" /> Repeat order harian sangat tinggi
                </li>
              </ul>
            </div>

            {/* Card 3: Modern & Scalable */}
            <div className="bg-gradient-to-b from-[#FFFDF9] to-orange-50/40 p-8 rounded-3xl border-2 border-orange-100 hover:border-orange-300 transition-all hover:shadow-xl group">
              <div className="w-14 h-14 rounded-2xl bg-[#141316] text-[#FFB800] flex items-center justify-center text-2xl shadow-lg shadow-black/20 mb-6 group-hover:scale-110 transition-transform">
                ⚡️
              </div>
              <h3 className="font-heading font-black text-xl text-[#141316] mb-3">
                SOP Cepat & Scalable
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Standardized recipe & simple kitchen setup memungkinkan ekspansi super cepat—mulai dari booth mall, dine-in restaurant 80 seats, hingga cloud kitchen ojek online.
              </p>
              <ul className="mt-5 space-y-2 text-xs font-bold text-neutral-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" /> Target penyajian &le; 5 menit
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" /> Mudah direplikasi di berbagai kota
                </li>
              </ul>
            </div>

          </div>
        )}

        {/* Tab 2: Comparison vs Classic Fish & Chips */}
        {activeTab === 'comparison' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-in fade-in zoom-in-95 duration-300">
            
            {/* Classic Fish & Chips */}
            <div className="bg-neutral-50 p-8 rounded-3xl border-2 border-neutral-200 relative opacity-85">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-200">
                <div>
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Konsep Lama</span>
                  <h3 className="font-heading font-black text-2xl text-neutral-700">Classic Fish & Chips</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-neutral-200 text-neutral-600 flex items-center justify-center font-bold">
                  🐟
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XIcon className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm text-neutral-800">Bahan Baku Ikan Mahal & Fluktuatif</div>
                    <div className="text-xs text-neutral-500">Ikan Dori / Cod impor dengan harga dolar yang tinggi dan margin sempit.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XIcon className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm text-neutral-800">Pasar Niche (Bukan Makanan Harian)</div>
                    <div className="text-xs text-neutral-500">Sebagian masyarakat kurang terbiasa makan ikan goreng tepung setiap hari.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <XIcon className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm text-neutral-800">Harga Jual Tinggi (Rp 60.000+)</div>
                    <div className="text-xs text-neutral-500">Hanya menjangkau kelas menengah atas di mall-mall besar.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Chick n' Chips Upgrade */}
            <div className="bg-gradient-to-b from-white to-[#FFF5E6] p-8 rounded-3xl border-4 border-[#E51B24] shadow-2xl relative">
              <div className="absolute -top-3 right-6 bg-[#FFB800] text-[#19181B] font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                ✨ The Winning Sweet Spot
              </div>

              <div className="flex items-center justify-between mb-6 pb-4 border-b border-amber-200">
                <div>
                  <span className="text-xs font-bold text-[#E51B24] uppercase tracking-wider">Inovasi Chick n' Chips</span>
                  <h3 className="font-heading font-black text-2xl text-[#141316]">Crispy Chicken & Chips</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#E51B24] text-white flex items-center justify-center font-bold text-lg">
                  🍗
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm text-neutral-900">Bahan Baku Ayam Lokal Segar & Stabil</div>
                    <div className="text-xs text-neutral-600">Pasokan ayam fillet melimpah, harga stabil, dan margin kotor konsisten 60%.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm text-neutral-900">Mass Market Appeal (Disukai 100% Lidah Indonesia)</div>
                    <div className="text-xs text-neutral-600">Bisa dikonsumsi untuk sarapan, makan siang, ngemil sore, hingga makan malam.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm text-neutral-900">Harga Ramah Kantong (Rp 20.000 - 29.000)</div>
                    <div className="text-xs text-neutral-600">Porsi kenyang, plating modern estetik, mudah dijangkau pelajar, pekerja & keluarga.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 3: Keunggulan Kompetitif */}
        {activeTab === 'advantages' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 animate-in fade-in zoom-in-95 duration-300">
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 hover:border-red-300 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-[#E51B24] flex items-center justify-center text-xl mb-4 font-bold">
                1
              </div>
              <h4 className="font-heading font-black text-lg text-neutral-900 mb-2">Diferensiasi Jelas</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Bukan sekadar fried chicken biasa atau ayam geprek sambal uleg. Menghadirkan western comfort style dengan signature tartar & cheesy pasta.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200 hover:border-amber-300 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-xl mb-4 font-bold">
                2
              </div>
              <h4 className="font-heading font-black text-lg text-neutral-900 mb-2">Menu Simpel & Fokus</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Menu fokus membuat operasional dapur sangat ringkas, meminimalkan food waste, dan mempercepat training crew outlet baru.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200 hover:border-orange-300 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-800 flex items-center justify-center text-xl mb-4 font-bold">
                3
              </div>
              <h4 className="font-heading font-black text-lg text-neutral-900 mb-2">Branding Kuat & Viral</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Visual warna cerah merah-kuning ceria, logo catchy, packaging instagramable, dan tagline yang mudah melekat di ingatan konsumen.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl mb-4 font-bold">
                4
              </div>
              <h4 className="font-heading font-black text-lg text-neutral-900 mb-2">Fleksibel Multi-Channel</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Mendukung berbagai format bisnis: Booth Mall, Standalone Dine-in 80 seat, Cloud Kitchen, Drive-thru, dan kemitraan franchise.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
