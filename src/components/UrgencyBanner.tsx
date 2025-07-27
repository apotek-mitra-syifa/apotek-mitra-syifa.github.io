import { AlertTriangle, Clock, Users } from "lucide-react";
import { useState, useEffect } from "react";

const UrgencyBanner = () => {
  const [currentOffer, setCurrentOffer] = useState(0);
  const [stockCount, setStockCount] = useState(47);
  const [consultationSlots, setConsultationSlots] = useState(3);

  const urgencyOffers = [
    {
      icon: AlertTriangle,
      title: "🔥 FLASH SALE: Vitamin Imunitas",
      description: "Diskon 30% untuk 50 pembeli pertama hari ini!",
      remaining: stockCount,
      totalStock: 50,
      bgColor: "bg-gradient-to-r from-red-500 to-orange-500",
      action: "PESAN SEKARANG"
    },
    {
      icon: Clock,
      title: "⏰ Konsultasi Gratis Terbatas",
      description: "Slot konsultasi gratis tersisa hanya untuk hari ini",
      remaining: consultationSlots,
      totalStock: 20,
      bgColor: "bg-gradient-to-r from-blue-500 to-purple-500",
      action: "BOOKING SEKARANG"
    },
    {
      icon: Users,
      title: "👥 Program Diabetes Gratis",
      description: "Pendaftaran terakhir program edukasi diabetes bulan ini",
      remaining: 5,
      totalStock: 25,
      bgColor: "bg-gradient-to-r from-green-500 to-teal-500",
      action: "DAFTAR GRATIS"
    }
  ];

  // Rotate offers every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % urgencyOffers.length);
    }, 8000);
    
    return () => clearInterval(timer);
  }, [urgencyOffers.length]);

  // Simulate decreasing stock/slots
  useEffect(() => {
    const stockTimer = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance every 45 seconds
        if (currentOffer === 0 && stockCount > 20) {
          setStockCount(prev => prev - 1);
        } else if (currentOffer === 1 && consultationSlots > 1) {
          setConsultationSlots(prev => prev - 1);
        }
      }
    }, 45000);

    return () => clearInterval(stockTimer);
  }, [currentOffer, stockCount, consultationSlots]);

  const current = urgencyOffers[currentOffer];
  const progressPercentage = (current.remaining / current.totalStock) * 100;

  const handleAction = () => {
    const whatsappNumber = "628542007123";
    let message = "";
    
    switch (currentOffer) {
      case 0:
        message = "Halo! Saya tertarik dengan Flash Sale Vitamin Imunitas diskon 30%. Apakah masih tersedia?";
        break;
      case 1:
        message = "Halo! Saya ingin booking konsultasi gratis hari ini. Masih ada slot yang tersedia?";
        break;
      case 2:
        message = "Halo! Saya ingin mendaftar program diabetes gratis bulan ini. Bagaimana caranya?";
        break;
    }
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="sticky top-16 z-40 animate-slide-down">
      <div className={`${current.bgColor} text-white py-4 px-4 shadow-lg`}>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
            {/* Left Content */}
            <div className="flex items-center space-x-3 flex-1">
              <current.icon className="h-6 w-6 animate-pulse" />
              <div className="flex-1">
                <div className="font-bold text-lg">{current.title}</div>
                <div className="text-sm opacity-90">{current.description}</div>
              </div>
            </div>

            {/* Middle - Progress Bar */}
            <div className="flex-1 max-w-xs mx-4">
              <div className="text-center mb-2">
                <span className="text-sm font-medium">
                  Tersisa: <span className="font-bold text-yellow-200">{current.remaining}</span> dari {current.totalStock}
                </span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <div 
                  className="bg-yellow-300 h-3 rounded-full transition-all duration-500 animate-pulse"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <div className="text-center mt-1">
                <span className="text-xs opacity-75">
                  {progressPercentage < 30 ? '🔥 Hampir Habis!' : progressPercentage < 60 ? '⚡ Terbatas!' : '✨ Tersedia'}
                </span>
              </div>
            </div>

            {/* Right - Action Button */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handleAction}
                className="bg-white text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-100 transition-all duration-300 hover:scale-105 shadow-lg animate-bounce"
              >
                {current.action}
              </button>
            </div>
          </div>

          {/* Urgency Indicators */}
          <div className="flex justify-center mt-3 space-x-6 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>🟢 {Math.floor(Math.random() * 8) + 12} orang melihat promo ini</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span>🔴 {Math.floor(Math.random() * 3) + 2} orang baru saja pesan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;