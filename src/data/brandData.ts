export interface MenuItem {
  id: string;
  name: string;
  category: 'core' | 'combos' | 'sides' | 'drinks' | 'desserts';
  price: number;
  promoPrice?: number;
  description: string;
  tag?: string;
  calories?: string;
  image: string;
  illustration: string; // fallback illustration emoji / icon
  isPopular?: boolean;
  isNew?: boolean;
  carbsOption?: string[];
  saucesOption?: string[];
}

export interface Promotion {
  id: string;
  title: string;
  badge: string;
  timeWindow?: string;
  priceTag: string;
  description: string;
  terms: string[];
  image: string;
  illustration: string;
  color: string;
}

export interface StoreHotspot {
  id: string;
  title: string;
  x: number; // percentage in diagram
  y: number;
  description: string;
  features: string[];
  icon: string;
}

export interface Persona {
  id: string;
  title: string;
  tagline: string;
  description: string;
  favoriteMeal: string;
  avatar: string;
  traits: string[];
}

export const BRAND_INFO = {
  name: "Chick n' Chips",
  tagline: "Ayamnya Juicy, Chips-nya Happy!",
  shortTagline: "Crispy Outside, Juicy Inside",
  concept: "The Modern Crispy Chicken Steak & Chips Concept",
  phone: "+62 821-1853-2225",
  rawPhone: "6282118532225",
  email: "partnership@chicknchips.id",
  instagram: "@chicknchips.official",
  tiktok: "@chicknchips.id",
  address: "Jl. Boulevard Kuliner No. 88, Jakarta & Bandung, Indonesia",
  operatingHours: "Setiap Hari: 10:00 - 22:00 WIB",
};

export const MENU_ITEMS: MenuItem[] = [
  // --- CORE PRODUCTS (PRODUK UTAMA) ---
  {
    id: "chicken-chips-tartar",
    name: "Chicken & Chips with Tartar Sauce",
    category: "core",
    price: 29000,
    promoPrice: 20000,
    description: "Signature crispy chicken steak keemasan dengan kentang goreng crinkle renyah, saus tartar creamy racikan spesial & perasan jeruk lemon segar.",
    tag: "⭐️ Most Favorite",
    calories: "520 kcal",
    illustration: "🍗",
    image: "https://images.unsplash.com/photo-1527477321055-436158a2b0a5?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    carbsOption: ["Crinkle Fries", "Loaded Fries (+6k)", "Spaghetti (+3k)", "Biryani Rice (+2k)"],
    saucesOption: ["Signature Tartar", "Creamy Cheese", "Spicy Lava", "Smoky BBQ"]
  },
  {
    id: "chicken-spaghetti-cheese",
    name: "Chicken & Spaghetti with Cheese Sauce",
    category: "core",
    price: 29000,
    promoPrice: 20000,
    description: "Gurihnya ayam crispy berpadu dengan pasta spaghetti al dente bersiram saus keju cheddar creamy lumer yang melimpah.",
    tag: "🔥 Cheesy Heaven",
    calories: "580 kcal",
    illustration: "🍝",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    carbsOption: ["Spaghetti", "Fettuccini", "Crinkle Fries"],
    saucesOption: ["Creamy Cheese Sauce", "Tartar Dip", "Spicy Garlic"]
  },
  {
    id: "chicken-biryani-tartar",
    name: "Chicken & Biryani Rice with Tartar",
    category: "core",
    price: 29000,
    promoPrice: 20000,
    description: "Perpaduan unik wangi rempah aromatik beras Basmati khas Biryani dengan steak ayam renyah juicy dan saus tartar segar.",
    tag: "🍚 Indonesian Local Pride",
    calories: "540 kcal",
    illustration: "🍚",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    carbsOption: ["Biryani Basmati", "Steam Rice", "Crinkle Fries"],
    saucesOption: ["Signature Tartar", "Spicy Sambal", "Creamy Cheese"]
  },
  {
    id: "spicy-chicken-chips",
    name: "Spicy Volcano Chicken & Chips",
    category: "core",
    price: 31000,
    description: "Steak ayam crispy dengan taburan bumbu pedas gurih meresap, disajikan dengan crinkle fries dan cocolan saus spicy lava.",
    tag: "🌶️ Spicy Lover",
    calories: "530 kcal",
    illustration: "🔥",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    isPopular: false,
    isNew: true,
    carbsOption: ["Crinkle Fries", "Biryani Rice", "Spaghetti"],
    saucesOption: ["Spicy Lava", "Tartar Segar", "Creamy Cheese"]
  },
  {
    id: "cheese-chicken-chips",
    name: "Double Cheese Chicken & Chips",
    category: "core",
    price: 32000,
    description: "Crispy chicken steak disiram lelehan double cheddar cheese sauce melimpah ditemani kentang goreng crinkle gurih.",
    tag: "🧀 Double Melt",
    calories: "590 kcal",
    illustration: "🧀",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    carbsOption: ["Crinkle Fries", "Spaghetti", "Biryani Rice"],
    saucesOption: ["Creamy Cheese", "Signature Tartar", "Smoky BBQ"]
  },
  {
    id: "chicken-fettuccine-alfredo",
    name: "Chicken & Fettuccine Alfredo Cream",
    category: "core",
    price: 30000,
    description: "Pasta fettuccine lebar dengan baluran saus krim bawang putih lembut dan potongan steak ayam krispi juicy.",
    tag: "🍝 Chef's Pick",
    calories: "560 kcal",
    illustration: "🥘",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80",
    isPopular: false,
    carbsOption: ["Fettuccini", "Spaghetti", "Crinkle Fries"],
    saucesOption: ["Alfredo Cream", "Signature Tartar", "Spicy Lava"]
  },
  {
    id: "crispy-chicken-burger",
    name: "Crispy Chicken Burger & Chips",
    category: "core",
    price: 28000,
    description: "Roti brioche empuk berisi fillet ayam crispy tebal, selada segar, keju cheddar, saus tartar spesial, dan chips.",
    tag: "🍔 Big Bite",
    calories: "570 kcal",
    illustration: "🍔",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    carbsOption: ["Crinkle Fries", "Loaded Fries (+6k)"],
    saucesOption: ["Signature Tartar", "Smoky BBQ", "Creamy Cheese"]
  },

  // --- COMBOS & PROMOS (PAKET HEMAT) ---
  {
    id: "combo-happy-box",
    name: "Combo Happy Box (Chicken + Chips + Drink)",
    category: "combos",
    price: 38000,
    description: "Paket lengkap kenyang: 1 Crispy Chicken Steak, 1 Porsi French Fries Gurih, 1 Saus Pilihan, dan 1 Cup Es Lemon Tea Segar.",
    tag: "👑 Best Value Combo",
    calories: "650 kcal",
    illustration: "🎁",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    carbsOption: ["Crinkle Fries", "Spaghetti Aglio", "Biryani Rice"],
    saucesOption: ["Signature Tartar", "Creamy Cheese", "Smoky BBQ"]
  },
  {
    id: "chick-deal-makan-berdua",
    name: "Chick Deal Makan Berdua (50K)",
    category: "combos",
    price: 50000,
    description: "Paket hemat berdua: 1 Chicken 'n Pasta + 1 Chicken 'n Rice + 2 Minuman Lychee Tea Segar. Paling pas buat ngedate & hangout!",
    tag: "👫 Duo Feast",
    calories: "1080 kcal (2 pax)",
    illustration: "❤️",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    isPopular: true
  },
  {
    id: "combo-family-platter",
    name: "Family Happy Platter (4-5 Pax)",
    category: "combos",
    price: 110000,
    description: "Pesta ayam crispy keluarga: 3 Chicken Steaks, 2 Porsi Pasta/Rice, 2 Crinkle Fries, 6 Nuggets, 4 Saus Dip, dan 4 Es Teh Manis.",
    tag: "👨‍👩‍👧‍👦 Family Feast",
    calories: "2100 kcal",
    illustration: "🎉",
    image: "https://images.unsplash.com/photo-1514944298352-78d1222e4ebc?auto=format&fit=crop&w=800&q=80",
    isPopular: true
  },

  // --- SIDES & SNACKS ---
  {
    id: "loaded-fries-bbq",
    name: "Loaded Fries Smoked Cheese BBQ",
    category: "sides",
    price: 18000,
    description: "Kentang goreng renyah keemasan disiram saus keju cheddar leleh, saus BBQ asap, dan taburan parsley aromatic.",
    tag: "🍟 Must-Try Side",
    calories: "340 kcal",
    illustration: "🍟",
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80",
    isPopular: true
  },
  {
    id: "extra-crinkle-fries",
    name: "Extra Crinkle Cut Fries Classic",
    category: "sides",
    price: 12000,
    description: "Kentang goreng potongan gerigi crinkle renyah keemasan bertabur garam bumbu gurih khas Chick n' Chips.",
    tag: "🍟 Classic Chips",
    calories: "280 kcal",
    illustration: "🍟",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "crispy-chicken-nuggets",
    name: "Crispy Golden Nuggets (6 Pcs)",
    category: "sides",
    price: 17000,
    description: "6 potong nugget ayam renyah di luar, juicy di dalam dengan pilihan saus tartar atau saus keju leleh.",
    calories: "290 kcal",
    illustration: "🍗",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "chicken-bites-popcorn",
    name: "Popcorn Chicken Bites",
    category: "sides",
    price: 16000,
    description: "Potongan daging ayam dadu crispy dengan rempah gurih crunchy. Cemilan asik teman nongkrong.",
    calories: "310 kcal",
    illustration: "🍿",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "extra-biryani-rice",
    name: "Extra Biryani Rice (Basmati)",
    category: "sides",
    price: 10000,
    description: "Satu porsi nasi biryani beras Basmati wangi rempah aromatik khas timur tengah.",
    calories: "210 kcal",
    illustration: "🍚",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "extra-sauce-duo",
    name: "Duo Signature Dip Cup (Tartar & Cheese)",
    category: "sides",
    price: 8000,
    description: "Paket 2 cangkir saus cocolan: Signature Tartar segar lemon & Creamy Cheddar Cheese lezat.",
    calories: "120 kcal",
    illustration: "🥣",
    image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=800&q=80"
  },

  // --- BEVERAGES (MINUMAN SEGAR) ---
  {
    id: "es-lemon-tea",
    name: "Es Lemon Tea Segar",
    category: "drinks",
    price: 15000,
    description: "Seduhan teh segar dingin dengan perasan buah lemon asli. Rasa manis dan asam yang menyejukkan tenggorokan.",
    tag: "🍋 Fresh Sensation",
    calories: "85 kcal",
    illustration: "🍋",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    isPopular: true
  },
  {
    id: "es-teh-manis",
    name: "Es Teh Manis Melati Dingin",
    category: "drinks",
    price: 8000,
    description: "Teh melati seduh wangi manis dingin segar khas racikan otentik Chick n' Chips.",
    tag: "🥤 Classic Sweet",
    calories: "60 kcal",
    illustration: "🥤",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "lychee-tea-delight",
    name: "Lychee Tea Delight",
    category: "drinks",
    price: 18000,
    description: "Teh melati dingin harum berpadu sirup leci premium dan buah leci segar utuh.",
    tag: "🍹 Sweet Fruity",
    calories: "110 kcal",
    illustration: "🍹",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "thai-tea-signature",
    name: "Thai Tea Creamy Signature",
    category: "drinks",
    price: 16000,
    description: "Teh Thailand autentik bercampur susu kental manis dan evaporated milk yang creamy mantap.",
    calories: "140 kcal",
    illustration: "🧋",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ice-matcha-latte",
    name: "Ice Matcha Latte Creamy",
    category: "drinks",
    price: 20000,
    description: "Matcha bubuk premium jepang berpadu susu segar dingin yang creamy dan menenangkan.",
    tag: "🍵 Japanese Matcha",
    calories: "160 kcal",
    illustration: "🍵",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "milk-kocok-shake",
    name: "Milk Kocok Vanilla / Choco Shake",
    category: "drinks",
    price: 18000,
    description: "Susu kocok dingin berbusa creamy manis pas dengan pilihan rasa Vanilla Madagascar atau Belgian Choco.",
    calories: "190 kcal",
    illustration: "🥛",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80"
  },

  // --- DESSERTS & ICE CREAMS ---
  {
    id: "chick-cone-icecream",
    name: "Chick Cone Soft Serve Ice Cream",
    category: "desserts",
    price: 8000,
    description: "Es krim soft-serve lembut rasa matcha / vanilla di atas waffle cone renyah manis.",
    tag: "🍦 Kid's Favorite",
    calories: "150 kcal",
    illustration: "🍦",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
    isPopular: true
  },
  {
    id: "chick-sundae-cherry",
    name: "Chick Sundae with Sweet Cherry",
    category: "desserts",
    price: 12000,
    description: "Es krim cup lembut dengan lelehan saus cokelat/stroberi dan buah cherry manis segar di puncaknya.",
    tag: "🍒 Sweet Sundae",
    calories: "190 kcal",
    illustration: "🍨",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "chick-sundae-double",
    name: "Double Scoop Sundae (Matcha & Choco)",
    category: "desserts",
    price: 15000,
    description: "Kombinasi 2 scoop es krim matcha & cokelat lumer bertabur choco crunch dan buah ceri.",
    calories: "240 kcal",
    illustration: "🍧",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80"
  }
];

export const PROMOTIONS: Promotion[] = [
  {
    id: "grand-opening",
    title: "GRAND OPENING DISKON 20K!",
    badge: "🔥 Super Deal",
    priceTag: "HANYA Rp 20.000 (Semua Menu Utama)",
    description: "Rayakan pembukaan outlet baru Chick n' Chips! Dapatkan menu favorit Chicken & Chips, Chicken & Pasta, atau Chicken & Rice hanya 20rb seharian penuh!",
    terms: ["Berlaku untuk Dine-in & Takeaway", "1 Transaksi max 2 porsi", "Berlaku selama periode grand opening"],
    illustration: "🎉",
    image: "https://images.unsplash.com/photo-1527477321055-436158a2b0a5?auto=format&fit=crop&w=800&q=80",
    color: "from-red-600 to-amber-500"
  },
  {
    id: "chick-time",
    title: "CHICK TIME HAPPY HOUR",
    badge: "⏰ Jam 15:00 - 17:00 WIB",
    timeWindow: "Setiap Hari Kerja 15.00 - 17.00",
    priceTag: "GRATIS ES LEMON TEA SEGAR!",
    description: "Sore-sore santai makin happy! Pesan menu makanan favoritmu di jam 3 sampai 5 sore, langsung dapat GRATIS 1 gelas Es Lemon Tea Dingin menyegarkan.",
    terms: ["Berlaku setiap hari Senin - Jumat", "Minimal transaksi 1 menu makanan", "Dine-in dan Takeaway"],
    illustration: "🍋",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    color: "from-amber-500 to-orange-500"
  },
  {
    id: "chick-deal-duo",
    title: "CHICK DEAL MAKAN BERDUA 50K",
    badge: "❤️ Paket Couple & Bestie",
    priceTag: "HANYA Rp 50.000 / 2 Pax",
    description: "Makan kenyang berdua tanpa bikin dompet nangis. Sudah termasuk 1 Chicken 'n Pasta + 1 Chicken 'n Rice + 2 Gelas Minuman Segar Lychee Tea!",
    terms: ["Berlaku setiap hari", "Termasuk 2 porsi main course + 2 minuman", "Bisa dinikmati dine-in atau takeaway"],
    illustration: "👫",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    color: "from-red-500 to-rose-600"
  }
];

export const PERSONAS: Persona[] = [
  {
    id: "gen-z",
    title: "Gen Z & Milenial",
    tagline: "Suka Nongkrong, Brand Kekinian & Instagramable",
    description: "Konsumen aktif yang gemar mencoba makanan baru, mencari visual estetik, tempat nongkrong asik, dan menu crispy nagih.",
    favoriteMeal: "Chicken & Spaghetti with Cheese Sauce + Ice Matcha Latte",
    avatar: "🎒",
    traits: ["Visual Driven", "Social Media Native", "Value for Money", "FOMO Seeker"]
  },
  {
    id: "family",
    title: "Keluarga Muda & Anak-anak",
    tagline: "Aman di Lidah, Praktis & Disukai Semua Umur",
    description: "Orang tua muda yang mencari makanan cepat saji lezat, porsi pas, tempat makan nyaman ber-AC, dan menu ayam crispy yang aman untuk anak-anak.",
    favoriteMeal: "Combo Happy Box + Crispy Nuggets + Chick Sundae",
    avatar: "👨‍👩‍👧‍👦",
    traits: ["Kids Friendly", "Higienis & Bersih", "Penyajian Cepat < 5 Menit", "Tempat Duduk Luas"]
  },
  {
    id: "students",
    title: "Pelajar & Mahasiswa",
    tagline: "Sensitif Harga, Porsi Mengenyangkan, Rasa Juara",
    description: "Anak sekolah dan mahasiswa yang membutuhkan makanan enak dengan harga ramah kantong (20-30 ribuan) untuk makan siang bareng teman.",
    favoriteMeal: "Chicken & Biryani Rice with Tartar (Rp 29k)",
    avatar: "🎓",
    traits: ["Budget Friendly", "Porsi Kenyang", "Free WiFi & Charging Spot", "Promo Hunter"]
  },
  {
    id: "urban-workers",
    title: "Pekerja Urban & Kantoran",
    tagline: "Cepat, Praktis, Higienis di Sela Aktivitas Kerja",
    description: "Para pekerja yang membutuhkan makan siang cepat baik dine-in singkat maupun pesan lewat GoFood/GrabFood/ShopeeFood tanpa antri lama.",
    favoriteMeal: "Chicken & Chips Tartar + Extra Fries via Online Delivery",
    avatar: "💼",
    traits: ["Speed of Service", "Online Delivery Friendly", "Konsistensi Rasa", "Packaging Rapi"]
  }
];

export const STORE_HOTSPOTS: StoreHotspot[] = [
  {
    id: "pos-counter",
    title: "Service & POS Cashier Counter",
    x: 74,
    y: 47,
    description: "Area kasir cepat dengan sistem Point-of-Sale layar ganda modern. Menjamin transaksi selesai dalam <45 detik.",
    features: ["Double Screen POS System", "Cashless QRIS / Debit / Cash", "Layanan Ramah & Cepat"],
    icon: "CreditCard"
  },
  {
    id: "kiosk",
    title: "Self-Order Digital Kiosks",
    x: 60,
    y: 53,
    description: "Kios pemesanan layar sentuh interaktif untuk kenyamanan pelanggan memesan dan kustomisasi menu tanpa antre.",
    features: ["Touchscreen Menu Interactive", "Custom Add-ons & Sauces", "Instant QR Payment"],
    icon: "Tablet"
  },
  {
    id: "kitchen",
    title: "Standardized SOP Kitchen & Fryers",
    x: 75,
    y: 22,
    description: "Dapur efisien dengan layout minimalis berstandar tinggi. Dilengkapi automatic timer fryers dan chicken holding cabinets agar ayam selalu panas & renyah.",
    features: ["Target Penyajian ≤ 5 Menit", "Holding Cabinet Suhu Terjaga", "SOP Higienis Stainless Steel"],
    icon: "Flame"
  },
  {
    id: "dining-room",
    title: "Dining Area 80 Seating Capacity",
    x: 76,
    y: 68,
    description: "Ruang makan luas dengan 80 kursi berdesain modern playful warna merah-kuning, cocok untuk nongkrong anak muda maupun makan bersama keluarga.",
    features: ["Kapasitas Luas 80 Kursi", "AC Sejuk & Musik Nyaman", "Meja Fleksibel untuk Rombongan"],
    icon: "Users"
  },
  {
    id: "condiment",
    title: "Napkin & Condiment Bar",
    x: 61,
    y: 58,
    description: "Stasiun saus mandiri di mana pelanggan bebas mengambil saus sambal, saus tomat, tisu dan sedotan.",
    features: ["Self-Service Sauces", "Refill Station", "Selalu Bersih & Higienis"],
    icon: "Sparkles"
  },
  {
    id: "delivery-bay",
    title: "Online Delivery Dedicated Bay",
    x: 72,
    y: 8,
    description: "Pintu & konter khusus penyerahan pesanan kurir ojek online (GoFood, GrabFood, ShopeeFood) agar tidak mengganggu antrean tamu dine-in.",
    features: ["Dedicated Driver Pickup Lane", "Insulated Heat Bags", "Fast Handover"],
    icon: "Bike"
  },
  {
    id: "storage",
    title: "Cold Storage & Walk-in Cooler",
    x: 76,
    y: 8,
    description: "Ruang penyimpanan pendingin berstandar industri untuk menjaga kesegaran ayam marinasi dan saus fresh setiap hari.",
    features: ["Suhu Presisi 0-4°C", "First In First Out (FIFO)", "Kontrol Mutu Harian"],
    icon: "PackageCheck"
  }
];

export const FINANCIAL_DECK_DATA = {
  seatingCapacity: 80,
  minAvgDailyPax: 260,
  operatingDays: 30,
  avgBundlingPrice: 38000,
  avgAlaCartePrice: 29000,
  avgDrinkPrice: 15000,
  salesMixBundlingRatio: 0.70,
  salesMixAlaCarteRatio: 0.30,
  monthlyRevenue: 310440000,
  cogsFoodPercent: 42,
  cogsDrinkPercent: 24,
  totalCOGS: 124066800,
  grossProfit: 186373200,
  grossMarginPercent: 60.03,
  opexGajiStaff: 65000000,
  opexSewaLokasi: 30000000,
  opexUtilitas: 15000000,
  opexMarketing: 10000000,
  opexMaintenance: 10000000,
  totalOPEX: 130000000,
  netProfitMonthly: 56373200,
  netMarginPercent: 18.15,
  annualRevenue: 3725280000,
  annualNetProfit: 676478400,
  totalInvestment: 1800000000,
  roiPercent: 37.5,
  paybackYears: 2.6,
  breakEvenPaxPerDay: 180
};

export const FOUNDER_INFO = {
  name: "Iman Hermawan",
  title: "Business Conceptor & F&B Operations Specialist",
  experience: "16+ Tahun Pengalaman Manajemen Hospitality & Kuliner",
  bio: "Lulusan akademi perhotelan profesional dengan spesialisasi Food & Beverage Management. Memiliki rekam jejak lebih dari 16 tahun memimpin operasional, standardisasi resep, efisiensi HPP, dan ekspansi brand F&B ternama di berbagai kota besar Indonesia.",
  pastBrands: [
    { brand: "Black Canyon Coffee", role: "Operational & Management", years: "2006 - 2010", location: "Bandung, Jakarta, Bali" },
    { brand: "Pancious Pancake House", role: "F&B Management", years: "2012", location: "Paris Van Java, Bandung" },
    { brand: "Killiney Kopitiam", role: "Outlet Operations", years: "2012 - 2013", location: "Paris Van Java, Bandung" },
    { brand: "de Puri Boutique Hotel & Porta Resto", role: "F&B Manager", years: "2013 - 2014", location: "Surabaya" },
    { brand: "Kanaya Food Court & Waroeng Gaul", role: "Conceptor & Operational Lead", years: "2014 - 2019", location: "Bandung & Tangerang" },
    { brand: "Sage Resto & Gyu Jin Teppan", role: "Consultant Management", years: "2017 - 2023", location: "Trans Studio Mall & Cihapit" }
  ],
  skills: [
    "F&B SOP & Recipe Standardization",
    "Cost of Goods Sold (COGS) Engineering",
    "Multi-Outlet Inventory Control",
    "Staff Training & Service Excellence",
    "Kitchen Workflow & Layout Optimization",
    "Profit & Loss (P&L) Financial Modeling"
  ]
};
