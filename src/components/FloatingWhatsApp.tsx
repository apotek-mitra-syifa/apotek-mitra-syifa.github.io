import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const whatsappNumber = "628542007123"; // Format internasional tanpa +
  
  const quickMessages = [
    {
      title: "Konsultasi Gratis",
      message: "Halo, saya ingin berkonsultasi dengan apoteker mengenai obat yang cocok untuk saya."
    },
    {
      title: "Tanya Harga Obat",
      message: "Halo, saya ingin menanyakan harga dan ketersediaan obat."
    },
    {
      title: "Pesan Antar",
      message: "Halo, saya ingin memesan obat dengan layanan antar. Lokasi saya di..."
    },
    {
      title: "Emergency 24 Jam",
      message: "Halo, saya membutuhkan bantuan darurat untuk obat. Mohon bantuan segera."
    }
  ];

  const handleQuickMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none hover:scale-110"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
        
        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
          !
        </div>
      </div>

      {/* Quick Messages Menu */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 w-80 max-w-[calc(100vw-3rem)] animate-fade-in">
          <div className="mb-3">
            <h3 className="font-bold text-gray-800 mb-1">💬 Chat dengan Apoteker</h3>
            <p className="text-sm text-gray-600">Pilih topik untuk mulai percakapan:</p>
          </div>
          
          <div className="space-y-2">
            {quickMessages.map((item, index) => (
              <button
                key={index}
                onClick={() => handleQuickMessage(item.message)}
                className="w-full text-left p-3 bg-gray-50 hover:bg-green-50 rounded-lg border border-gray-200 hover:border-green-300 transition-all duration-200 hover:shadow-md"
              >
                <div className="font-medium text-gray-800 text-sm">{item.title}</div>
                <div className="text-xs text-gray-600 mt-1 line-clamp-2">{item.message}</div>
              </button>
            ))}
          </div>
          
          <div className="mt-4 pt-3 border-t border-gray-200">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>🟢 Online sekarang</span>
              <span>Response &lt; 5 menit</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default FloatingWhatsApp;