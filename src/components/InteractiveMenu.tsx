import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Sparkles, 
  Flame, 
  Plus, 
  Check, 
  Send, 
  Info,
  ChevronRight
} from 'lucide-react';
import { MENU_ITEMS, BRAND_INFO } from '../data/brandData';
import type { MenuItem } from '../data/brandData';
import { sounds } from '../utils/soundEffects';

interface InteractiveMenuProps {
  onOpenOrder: () => void;
  onOpenVoucher: () => void;
}

export const InteractiveMenu: React.FC<InteractiveMenuProps> = ({ onOpenOrder }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);

  // Tray Builder State
  const [trayMain, setTrayMain] = useState<MenuItem>(MENU_ITEMS[0]);
  const [trayCarb, setTrayCarb] = useState<string>("Crinkle Cut Fries");
  const [traySauce, setTraySauce] = useState<string>("Signature Tartar Dip");
  const [trayDrink, setTrayDrink] = useState<MenuItem>(MENU_ITEMS[9]); // Es Lemon Tea
  const [trayDessert] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Menu', icon: '🍽️' },
    { id: 'core', label: 'Core Chicken & Chips', icon: '🍗' },
    { id: 'combos', label: 'Paket Combo Kenyang', icon: '👑' },
    { id: 'sides', label: 'Sides & Snacks', icon: '🍟' },
    { id: 'drinks', label: 'Minuman Segar', icon: '🍋' },
    { id: 'desserts', label: 'Es Krim & Dessert', icon: '🍦' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  // Calculate Tray Total
  const calculateTrayTotal = () => {
    let total = trayMain.price;
    if (trayDrink) total += trayDrink.price;
    if (trayDessert) total += trayDessert.price;
    return total;
  };

  const handleOrderWhatsApp = () => {
    sounds.playSuccess();
    const total = calculateTrayTotal();
    const message = `Halo Chick n' Chips! 👋 Saya ingin memesan Custom Happy Tray:%0A` +
      `- Main: ${trayMain.name}%0A` +
      `- Karbo: ${trayCarb}%0A` +
      `- Saus: ${traySauce}%0A` +
      `- Minuman: ${trayDrink ? trayDrink.name : 'Tidak ada'}%0A` +
      (trayDessert ? `- Dessert: ${trayDessert.name}%0A` : '') +
      `%0ATotal Estimasi: Rp ${total.toLocaleString('id-ID')}%0AMohon konfirmasi pesanan saya. Terima kasih!`;
    
    window.open(`https://wa.me/${BRAND_INFO.rawPhone}?text=${message}`, '_blank');
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FFF9F0] to-[#FFFDF9] relative">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 border border-red-200 text-[#E51B24] font-extrabold text-xs tracking-wider uppercase mb-3">
            <Flame className="w-3.5 h-3.5 text-[#E51B24] fill-[#E51B24]" />
            <span>Koleksi Menu Lezat & Juara</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-[#141316] tracking-tight">
            Menu <span className="text-[#E51B24]">Chick n' Chips</span> Paling Nagih!
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-3 font-medium">
            Ayam fillet juicy berbalut tepung renyah bumbu rahasia, disajikan bersama olahan kentang klasik, pasta creamy, atau nasi biryani aromatik.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                sounds.playPop();
                setActiveCategory(cat.id);
              }}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-2xl font-black text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#E51B24] text-white shadow-lg shadow-red-500/30 scale-105'
                  : 'bg-white text-neutral-700 hover:bg-red-50 hover:text-[#E51B24] border border-neutral-200'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border-2 border-neutral-100 hover:border-amber-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Card Image with Illustration Badge & Fallback */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-red-100">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to illustration card if image fails
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Fallback Illustration View (Hidden unless error or loading) */}
                <div 
                  className="absolute inset-0 hidden flex-col items-center justify-center bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 text-center p-4"
                >
                  <div className="text-5xl mb-2 filter drop-shadow-md animate-bounce">
                    {item.illustration || "🍗"}
                  </div>
                  <span className="font-heading font-black text-sm text-neutral-800">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-bold text-amber-700 mt-1 bg-white/80 px-2 py-0.5 rounded-full">
                    Chick n' Chips Original Recipe
                  </span>
                </div>
                
                {/* Floating Illustration Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-[#19181B] text-xs font-black px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-amber-200">
                  <span className="text-sm">{item.illustration || "🍗"}</span>
                  {item.tag && <span className="text-[10px] text-[#E51B24] font-extrabold">{item.tag}</span>}
                </div>

                {item.calories && (
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white/90 text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                    {item.calories}
                  </div>
                )}

                {/* Quick Add overlay button */}
                <button
                  onClick={() => {
                    sounds.playCrunch();
                    setTrayMain(item);
                  }}
                  className="absolute bottom-3 right-3 bg-[#FFB800] hover:bg-[#ffa700] text-[#19181B] px-3 py-1.5 rounded-xl font-extrabold text-xs shadow-lg flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-200 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Pilih ke Tray
                </button>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-heading font-black text-lg text-neutral-900 leading-snug group-hover:text-[#E51B24] transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Price & Action Row */}
                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-neutral-400 uppercase">Harga</div>
                    <div className="font-heading font-black text-lg sm:text-xl text-[#E51B24]">
                      Rp {item.price.toLocaleString('id-ID')}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => {
                        sounds.playPop();
                        setSelectedItemForModal(item);
                      }}
                      className="p-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-colors"
                      title="Detail Menu"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={() => {
                        sounds.playCrunch();
                        setTrayMain(item);
                        const trayElem = document.getElementById('tray-builder');
                        if (trayElem) {
                          trayElem.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="px-3 py-2 rounded-xl bg-[#E51B24] hover:bg-[#C4121A] text-white font-extrabold text-xs shadow-md shadow-red-500/20 active:scale-95 transition-all flex items-center gap-1"
                    >
                      <span>Custom Tray</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE "BUILD YOUR HAPPY TRAY" (The Signature Plate Simulator) */}
        {/* ========================================================================= */}
        <div id="tray-builder" className="bg-gradient-to-br from-[#141316] via-[#1E1C24] to-[#141316] rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden border-2 border-neutral-800">
          
          {/* Neon Glow Highlights */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E51B24]/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFB800]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            
            {/* Tray Title */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-800">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/20 text-[#FFB800] border border-[#FFB800]/30 font-black text-xs uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> Interactive Tray Simulator
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-white">
                  🍽️ BUILD YOUR <span className="text-[#FFB800]">HAPPY TRAY</span>
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                  Kreasikan piring makan impianmu! Pilih menu utama, karbo, saus cocolan, dan minuman segar favoritmu.
                </p>
              </div>

              <div className="bg-neutral-800/80 backdrop-blur-md p-3.5 rounded-2xl border border-neutral-700 flex flex-wrap items-center gap-3">
                <div>
                  <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Total Estimasi Tray</div>
                  <div className="font-heading font-black text-2xl text-[#FFB800]">
                    Rp {calculateTrayTotal().toLocaleString('id-ID')}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleOrderWhatsApp}
                    className="px-3.5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black text-xs shadow-lg flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" /> Pesan via WA
                  </button>
                  <button
                    onClick={() => {
                      sounds.playPop();
                      onOpenOrder();
                    }}
                    className="px-3.5 py-2.5 rounded-xl bg-[#FFB800] hover:bg-[#ffa700] text-neutral-950 font-black text-xs shadow-lg flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" /> Ojek Online
                  </button>
                </div>
              </div>
            </div>

            {/* Tray Customizer Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Step Selectors */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Step 1: Main Dish Choice */}
                <div>
                  <label className="block text-xs font-black text-[#FFB800] uppercase tracking-wider mb-2.5">
                    Step 1: Pilih Main Course
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {MENU_ITEMS.filter(i => i.category === 'core' || i.category === 'combos').slice(0, 4).map(item => (
                      <button
                        key={item.id}
                        onClick={() => {
                          sounds.playCrunch();
                          setTrayMain(item);
                        }}
                        className={`p-3 rounded-2xl text-left transition-all flex items-center gap-3 border ${
                          trayMain.id === item.id
                            ? 'bg-[#E51B24] text-white border-red-400 shadow-lg shadow-red-500/20'
                            : 'bg-neutral-800/60 hover:bg-neutral-800 text-neutral-300 border-neutral-700'
                        }`}
                      >
                        <img src={item.image} alt={item.name} className="w-12 h-12 rounded-xl object-cover" />
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-xs truncate">{item.name}</div>
                          <div className="text-[11px] font-mono opacity-80">Rp {item.price.toLocaleString('id-ID')}</div>
                        </div>
                        {trayMain.id === item.id && <Check className="w-4 h-4 text-white shrink-0" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Carbs Choice */}
                <div>
                  <label className="block text-xs font-black text-[#FFB800] uppercase tracking-wider mb-2.5">
                    Step 2: Pilih Karbohidrat Pendamping
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { name: "Crinkle Cut Fries", icon: "🍟" },
                      { name: "Spaghetti Aglio / Cheese", icon: "🍝" },
                      { name: "Biryani Rempah Basmati", icon: "🍚" },
                      { name: "Loaded BBQ Fries", icon: "🥓" }
                    ].map(carb => (
                      <button
                        key={carb.name}
                        onClick={() => {
                          sounds.playPop();
                          setTrayCarb(carb.name);
                        }}
                        className={`p-3 rounded-xl text-center text-xs font-bold transition-all border ${
                          trayCarb === carb.name
                            ? 'bg-amber-400 text-neutral-900 border-amber-300 shadow-md font-black'
                            : 'bg-neutral-800/50 hover:bg-neutral-800 text-neutral-300 border-neutral-700'
                        }`}
                      >
                        <div className="text-xl mb-1">{carb.icon}</div>
                        <div className="truncate">{carb.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Dipping Sauce */}
                <div>
                  <label className="block text-xs font-black text-[#FFB800] uppercase tracking-wider mb-2.5">
                    Step 3: Pilih Signature Sauce
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { name: "Signature Tartar Dip", desc: "Creamy & Lemon Zest" },
                      { name: "Creamy Cheddar Cheese", desc: "Gurih Leleh" },
                      { name: "Spicy Volcano Lava", desc: "Pedas Nagih" },
                      { name: "Smoky BBQ Sweet", desc: "Aroma Asap Manis" }
                    ].map(sauce => (
                      <button
                        key={sauce.name}
                        onClick={() => {
                          sounds.playPop();
                          setTraySauce(sauce.name);
                        }}
                        className={`p-2.5 rounded-xl text-left text-xs transition-all border ${
                          traySauce === sauce.name
                            ? 'bg-[#E51B24] text-white border-red-400 font-bold'
                            : 'bg-neutral-800/50 hover:bg-neutral-800 text-neutral-300 border-neutral-700'
                        }`}
                      >
                        <div className="font-bold truncate">{sauce.name}</div>
                        <div className="text-[10px] opacity-70 truncate">{sauce.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 4: Refreshing Beverage */}
                <div>
                  <label className="block text-xs font-black text-[#FFB800] uppercase tracking-wider mb-2.5">
                    Step 4: Pilih Minuman Segar
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {MENU_ITEMS.filter(i => i.category === 'drinks').map(drink => (
                      <button
                        key={drink.id}
                        onClick={() => {
                          sounds.playPop();
                          setTrayDrink(drink);
                        }}
                        className={`p-2 rounded-xl text-left transition-all flex items-center gap-2 border ${
                          trayDrink?.id === drink.id
                            ? 'bg-[#FFB800] text-neutral-900 border-amber-300 font-bold'
                            : 'bg-neutral-800/50 hover:bg-neutral-800 text-neutral-300 border-neutral-700'
                        }`}
                      >
                        <img src={drink.image} alt={drink.name} className="w-8 h-8 rounded-lg object-cover" />
                        <div className="min-w-0">
                          <div className="text-[11px] font-bold truncate">{drink.name}</div>
                          <div className="text-[10px] opacity-80">Rp {drink.price.toLocaleString('id-ID')}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Visual Serving Tray Mockup */}
              <div className="lg:col-span-5">
                <div className="bg-[#E51B24] p-5 sm:p-6 rounded-3xl border-4 border-[#FFB800] shadow-2xl relative">
                  
                  {/* Tray Brand Tag */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-400">
                    <div className="font-heading font-black text-lg text-white">
                      🍗 CHICK TRAY #01
                    </div>
                    <div className="bg-[#FFB800] text-[#19181B] text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                      Ready to Serve
                    </div>
                  </div>

                  {/* Tray Surface */}
                  <div className="bg-[#FFFDF9] rounded-2xl p-4 text-neutral-900 shadow-inner space-y-3">
                    
                    {/* Visual Plate Item 1: Main */}
                    <div className="flex items-center gap-3 p-2.5 rounded-xl bg-orange-50/70 border border-orange-200">
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-amber-100 shrink-0">
                        <img 
                          src={trayMain.image} 
                          alt={trayMain.name} 
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-2xl">
                          {trayMain.illustration || "🍗"}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-extrabold text-[#E51B24] uppercase flex items-center gap-1">
                          <span>{trayMain.illustration || "🍗"}</span> Main Dish
                        </span>
                        <div className="font-heading font-black text-sm text-neutral-900 truncate">{trayMain.name}</div>
                        <div className="text-xs font-mono text-neutral-600">Rp {trayMain.price.toLocaleString('id-ID')}</div>
                      </div>
                    </div>

                    {/* Visual Plate Item 2: Carb & Sauce */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200">
                        <span className="text-[10px] font-extrabold text-amber-700 uppercase">Karbo</span>
                        <div className="font-bold text-xs text-neutral-900 truncate">{trayCarb}</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-red-50 border border-red-200">
                        <span className="text-[10px] font-extrabold text-red-700 uppercase">Saus Pilihan</span>
                        <div className="font-bold text-xs text-neutral-900 truncate">{traySauce}</div>
                      </div>
                    </div>

                    {/* Visual Plate Item 3: Drink */}
                    {trayDrink && (
                      <div className="flex items-center gap-3 p-2.5 rounded-xl bg-yellow-50/70 border border-yellow-200">
                        <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-yellow-100 shrink-0">
                          <img 
                            src={trayDrink.image} 
                            alt={trayDrink.name} 
                            onError={(e) => { e.currentTarget.style.display = 'none'; }}
                            className="w-full h-full object-cover" 
                          />
                          <div className="absolute inset-0 flex items-center justify-center text-lg">
                            {trayDrink.illustration || "🥤"}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-extrabold text-yellow-700 uppercase flex items-center gap-1">
                            <span>{trayDrink.illustration || "🥤"}</span> Minuman
                          </span>
                          <div className="font-heading font-bold text-xs text-neutral-900 truncate">{trayDrink.name}</div>
                          <div className="text-[11px] font-mono text-neutral-600">Rp {trayDrink.price.toLocaleString('id-ID')}</div>
                        </div>
                      </div>
                    )}

                    {/* Total & Checkout */}
                    <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-bold text-neutral-500 uppercase">Total Pesanan</div>
                        <div className="font-heading font-black text-xl text-[#E51B24]">
                          Rp {calculateTrayTotal().toLocaleString('id-ID')}
                        </div>
                      </div>
                      <button
                        onClick={handleOrderWhatsApp}
                        className="px-4 py-2.5 rounded-xl bg-[#E51B24] hover:bg-[#C4121A] text-white font-black text-xs shadow-md flex items-center gap-1.5 active:scale-95 transition-transform cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" /> Order Tray Ini
                      </button>
                    </div>

                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Modal Item Details */}
      {selectedItemForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border-4 border-amber-200 animate-in zoom-in-95 duration-200">
            <div className="relative aspect-video bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
              <img 
                src={selectedItemForModal.image} 
                alt={selectedItemForModal.name} 
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                className="w-full h-full object-cover relative z-10" 
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-6xl mb-1 filter drop-shadow">{selectedItemForModal.illustration || "🍗"}</span>
                <span className="font-heading font-black text-xs text-amber-800">Chick n' Chips Signature</span>
              </div>
              <button
                onClick={() => setSelectedItemForModal(null)}
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center font-bold hover:bg-black cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#E51B24] uppercase tracking-wider">{selectedItemForModal.tag || 'Signature Dish'}</span>
                <span className="text-xs font-mono bg-neutral-100 px-2 py-0.5 rounded">{selectedItemForModal.calories || '500 kcal'}</span>
              </div>
              <h3 className="font-heading font-black text-2xl text-neutral-900 mb-2">{selectedItemForModal.name}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6">{selectedItemForModal.description}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                <div className="font-heading font-black text-2xl text-[#E51B24]">
                  Rp {selectedItemForModal.price.toLocaleString('id-ID')}
                </div>
                <button
                  onClick={() => {
                    sounds.playCrunch();
                    setTrayMain(selectedItemForModal);
                    setSelectedItemForModal(null);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#FFB800] hover:bg-[#ffa700] text-neutral-900 font-black text-sm shadow-md"
                >
                  Pilih ke Tray
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
