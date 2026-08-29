import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { InteractiveMenu } from './components/InteractiveMenu';
import { PositioningMatrix } from './components/PositioningMatrix';
import { TargetAudience } from './components/TargetAudience';
import { PromotionsSection } from './components/PromotionsSection';
import { StoreTour } from './components/StoreTour';
import { FranchiseCalculator } from './components/FranchiseCalculator';
import { FounderProfile } from './components/FounderProfile';
import { Footer } from './components/Footer';
import { OrderDeliveryModal } from './components/OrderDeliveryModal';
import { FranchiseInquiryModal } from './components/FranchiseInquiryModal';
import { VoucherClaimModal } from './components/VoucherClaimModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ShoppingBag, Building2, Gift } from 'lucide-react';
import { sounds } from './utils/soundEffects';

export function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isFranchiseModalOpen, setIsFranchiseModalOpen] = useState(false);
  const [isVoucherModalOpen, setIsVoucherModalOpen] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#19181B] selection:bg-[#E51B24] selection:text-white relative">
      
      {/* Sticky Header Navbar */}
      <Navbar
        onOpenOrder={() => setIsOrderModalOpen(true)}
        onOpenFranchise={() => setIsFranchiseModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenOrder={() => setIsOrderModalOpen(true)}
          onOpenFranchise={() => setIsFranchiseModalOpen(true)}
          onOpenVoucher={() => setIsVoucherModalOpen(true)}
        />

        {/* 2. Brand Story & Concept Innovation */}
        <BrandStory />

        {/* 3. Interactive Menu & "Build Your Happy Tray" Simulator */}
        <InteractiveMenu
          onOpenOrder={() => setIsOrderModalOpen(true)}
          onOpenVoucher={() => setIsVoucherModalOpen(true)}
        />

        {/* 4. Strategic 2x2 Positioning Matrix & Sweet Spot */}
        <PositioningMatrix />

        {/* 5. Target Audience & Customer Personas */}
        <TargetAudience
          onOpenOrder={() => setIsOrderModalOpen(true)}
        />

        {/* 6. Promotions, Flash Deals & Grand Opening 20K */}
        <PromotionsSection
          onOpenOrder={() => setIsOrderModalOpen(true)}
          onOpenVoucher={() => setIsVoucherModalOpen(true)}
        />

        {/* 7. Store Tour & 80-Seat Restaurant Floorplan */}
        <StoreTour />

        {/* 8. Financial Model & Interactive ROI Calculator */}
        <FranchiseCalculator
          onOpenFranchise={() => setIsFranchiseModalOpen(true)}
        />

        {/* 9. Founder & Leadership Profile (Iman Hermawan) */}
        <FounderProfile />
      </main>

      {/* Footer */}
      <Footer
        onOpenOrder={() => setIsOrderModalOpen(true)}
        onOpenFranchise={() => setIsFranchiseModalOpen(true)}
        onOpenVoucher={() => setIsVoucherModalOpen(true)}
      />

      {/* Floating Bottom Quick Action Bar for Mobile */}
      <div className="fixed bottom-4 left-4 right-4 z-40 lg:hidden">
        <div className="bg-neutral-900/95 backdrop-blur-xl p-2 rounded-2xl border border-neutral-700 shadow-2xl flex items-center justify-between gap-2">
          <button
            onClick={() => {
              sounds.playCrunch();
              setIsOrderModalOpen(true);
            }}
            className="flex-1 py-2.5 rounded-xl bg-[#FFB800] hover:bg-[#ffa700] text-[#19181B] font-black text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
          >
            <ShoppingBag className="w-4 h-4" /> Pesan Online
          </button>

          <button
            onClick={() => {
              sounds.playSuccess();
              setIsVoucherModalOpen(true);
            }}
            className="p-2.5 rounded-xl bg-neutral-800 text-yellow-400 hover:bg-neutral-700 active:scale-95 transition-transform"
            title="Klaim Voucher 20%"
          >
            <Gift className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              sounds.playCrunch();
              setIsFranchiseModalOpen(true);
            }}
            className="flex-1 py-2.5 rounded-xl bg-[#E51B24] hover:bg-[#C4121A] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
          >
            <Building2 className="w-4 h-4 text-[#FFB800]" /> Franchise
          </button>
        </div>
      </div>

      {/* Modals */}
      <OrderDeliveryModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />

      <FranchiseInquiryModal
        isOpen={isFranchiseModalOpen}
        onClose={() => setIsFranchiseModalOpen(false)}
      />

      <VoucherClaimModal
        isOpen={isVoucherModalOpen}
        onClose={() => setIsVoucherModalOpen(false)}
      />

      {/* Floating WhatsApp Contact */}
      <FloatingWhatsApp />

    </div>
  );
}

export default App;
