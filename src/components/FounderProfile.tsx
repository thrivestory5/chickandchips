import React from 'react';
import { 
  UserCheck, 
  Award, 
  CheckCircle2 
} from 'lucide-react';
import { FOUNDER_INFO } from '../data/brandData';

export const FounderProfile: React.FC = () => {
  return (
    <section id="founder" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Subtle Shape */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-900 font-extrabold text-xs tracking-wider uppercase mb-3">
            <UserCheck className="w-3.5 h-3.5 text-[#E51B24]" />
            <span>Kepemimpinan & Tim Konseptor</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#141316] tracking-tight">
            Dikelola Oleh Praktisi <span className="text-[#E51B24]">F&B Berpengalaman</span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-3 font-medium">
            Fondasi bisnis Chick n' Chips dibangun di atas pengalaman operasional nyata lebih dari 16 tahun di industri perhotelan dan jaringan restoran nasional.
          </p>
        </div>

        {/* Founder Card */}
        <div className="bg-gradient-to-br from-[#FFFDF9] to-[#FFF5E6] rounded-3xl p-6 sm:p-10 border-2 border-amber-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Avatar & Quick Info */}
          <div className="lg:col-span-4 flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-amber-200/80 shadow-md">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-gradient-to-tr from-neutral-800 to-neutral-700 text-white flex items-center justify-center text-5xl shadow-xl border-4 border-white mb-4">
              👨‍🍳
            </div>
            
            <h3 className="font-heading font-black text-2xl text-neutral-900">
              {FOUNDER_INFO.name}
            </h3>
            <p className="text-xs font-bold text-[#E51B24] mt-1">
              {FOUNDER_INFO.title}
            </p>
            
            <div className="mt-4 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black">
              ⭐️ 16+ Tahun Rekam Jejak F&B
            </div>

            <p className="text-xs text-neutral-600 leading-relaxed mt-4 font-medium">
              Spesialis standardisasi SOP, efisiensi COGS, dan manajemen ekspansi outlet kuliner modern di Indonesia.
            </p>
          </div>

          {/* Right Column: Career History & Expertise */}
          <div className="lg:col-span-8 space-y-6">
            
            <div>
              <h4 className="font-heading font-black text-xl text-neutral-900 mb-2 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#E51B24]" />
                <span>Visi & Keahlian Manajemen</span>
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-medium">
                {FOUNDER_INFO.bio}
              </p>
            </div>

            {/* Core Skills Badges */}
            <div className="space-y-2">
              <div className="text-xs font-black text-neutral-400 uppercase tracking-wider">
                Kompetensi Utama:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {FOUNDER_INFO.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-amber-200/70 text-xs font-bold text-neutral-800 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Brand Track Record */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-black text-neutral-400 uppercase tracking-wider">
                Portofolio Pengalaman & Brand Manajemen Sebelumnya:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {FOUNDER_INFO.pastBrands.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-white border border-neutral-200 hover:border-amber-300 transition-colors text-xs">
                    <div className="font-heading font-black text-neutral-900">{item.brand}</div>
                    <div className="text-neutral-500 font-medium text-[11px]">{item.role} • {item.location}</div>
                    <div className="text-[10px] font-mono text-amber-700 font-bold mt-0.5">{item.years}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
