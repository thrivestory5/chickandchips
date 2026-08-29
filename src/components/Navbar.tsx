import React, { useState, useEffect } from 'react';
import { 
  Volume2, 
  VolumeX, 
  ShoppingBag, 
  Building2, 
  Menu as MenuIcon, 
  X, 
  Sparkles,
  ChevronRight,
  Flame
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import { BRAND_INFO } from '../data/brandData';

interface NavbarProps {
  onOpenOrder: () => void;
  onOpenFranchise: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrder, onOpenFranchise }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(sounds.getMuted());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      sounds.playPop();
    }
  };

  const navLinks = [
    { label: 'Menu Favorit', href: '#menu' },
    { label: 'Konsep Brand', href: '#concept' },
    { label: 'Market Position', href: '#positioning' },
    { label: 'Promo Spesial', href: '#promos' },
    { label: 'Layout Outlet', href: '#store-tour' },
    { label: 'Simulasi Bisnis', href: '#franchise-roi' },
    { label: 'Konseptor', href: '#founder' },
  ];

  return (
    <>
      {/* Top Banner Ticker */}
      <div className="bg-[#E51B24] text-white text-xs font-semibold py-1.5 px-4 overflow-hidden relative z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <span className="bg-[#FFB800] text-[#19181B] font-bold px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider flex items-center gap-1">
              <Flame className="w-3 h-3 text-[#E51B24]" /> Grand Opening
            </span>
            <span className="hidden sm:inline">🎉 Rayakan Pembukaan Outlet Baru: Semua Menu Utama Cuma Rp 20.000!</span>
            <span className="sm:hidden">🎉 Grand Opening Cuma 20K!</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-white/90 text-xs hidden md:inline-flex items-center gap-1 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Outlet Buka: 10:00 - 22:00 WIB
            </span>
            <button 
              onClick={() => {
                sounds.playCrunch();
                onOpenFranchise();
              }}
              className="text-[#FFB800] hover:text-white font-bold underline text-xs transition-colors flex items-center gap-0.5"
            >
              Info Kemitraan <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav shadow-lg shadow-red-950/5 py-2.5' 
          : 'bg-white/90 backdrop-blur-md py-4 border-b border-orange-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#" 
            onClick={() => sounds.playPop()}
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-[#E51B24] to-[#C4121A] rounded-2xl flex items-center justify-center shadow-md shadow-red-500/30 group-hover:scale-105 transition-transform duration-300 border-2 border-[#FFB800]">
              <span className="text-2xl">🍗</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-xl sm:text-2xl tracking-tight text-[#E51B24] drop-shadow-sm leading-none">
                  Chick <span className="text-[#FFB800]">n'</span> Chips
                </span>
                <span className="bg-[#FFB800] text-[#19181B] text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wide">
                  Original
                </span>
              </div>
              <p className="text-[11px] font-bold text-amber-700 tracking-tight hidden sm:block font-handwriting text-sm">
                Ayamnya Juicy, Chips-nya Happy!
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => sounds.playPop()}
                className="px-3 py-1.5 rounded-full text-xs xl:text-sm font-bold text-neutral-700 hover:text-[#E51B24] hover:bg-red-50/80 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Sound toggle + Order CTA + Franchise CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Sound Effects Toggle */}
            <button
              onClick={handleToggleSound}
              title={isMuted ? "Aktifkan Efek Suara Renyah" : "Matikan Suara"}
              className="p-2 rounded-xl text-neutral-600 hover:text-[#E51B24] bg-neutral-100 hover:bg-red-50 transition-colors border border-neutral-200"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-neutral-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-[#E51B24] animate-pulse" />
              )}
            </button>

            {/* Online Order Button */}
            <button
              onClick={() => {
                sounds.playCrunch();
                onOpenOrder();
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#FFB800] text-[#19181B] hover:bg-[#ffa700] transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              <ShoppingBag className="w-4 h-4 text-[#19181B]" />
              <span>Pesan Online</span>
            </button>

            {/* Franchise / Investor CTA */}
            <button
              onClick={() => {
                sounds.playCrunch();
                onOpenFranchise();
              }}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold bg-[#E51B24] text-white hover:bg-[#C4121A] transition-all shadow-md shadow-red-500/25 hover:shadow-red-500/40 active:scale-95 border-b-2 border-red-800"
            >
              <Building2 className="w-4 h-4 text-[#FFB800]" />
              <span className="hidden md:inline">Kemitraan Franchise</span>
              <span className="md:hidden">Franchise</span>
              <Sparkles className="w-3.5 h-3.5 text-[#FFB800] hidden lg:inline" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-red-100 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-neutral-100">
              <button
                onClick={() => {
                  sounds.playCrunch();
                  onOpenOrder();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold bg-[#FFB800] text-[#19181B] text-xs"
              >
                <ShoppingBag className="w-4 h-4" /> Pesan Delivery
              </button>
              <button
                onClick={() => {
                  sounds.playCrunch();
                  onOpenFranchise();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold bg-[#E51B24] text-white text-xs"
              >
                <Building2 className="w-4 h-4" /> Info Franchise
              </button>
            </div>

            <nav className="space-y-1 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    sounds.playPop();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold text-neutral-800 hover:bg-red-50 hover:text-[#E51B24] transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-400" />
                </a>
              ))}
            </nav>

            <div className="pt-2 text-center text-xs text-neutral-500">
              {BRAND_INFO.phone} • {BRAND_INFO.email}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
