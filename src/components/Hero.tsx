import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/pharmacy-hero.jpg";

const Hero = () => {
  const handleMapClick = () => {
    // Real Google Maps link for Apotek Mitra Syifa in Blitar
    window.open("https://maps.google.com/search/Jl.+Mastrip+RT.02+RW.01+Togogan+I+Srengat+Blitar+Jawa+Timur", "_blank");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img 
          src={heroImage} 
          alt="Apotek Mitra Syifa Interior" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary-glow/60"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Apotek
          <span className="block text-primary-light">Mitra Syifa</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Melayani kesehatan Anda dengan sepenuh hati. Obat berkualitas, pelayanan terpercaya, dan konsultasi profesional.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={handleMapClick}
            size="lg"
            variant="secondary"
            className="bg-white/95 text-primary hover:bg-white hover:scale-105 transition-all duration-300 shadow-button px-8 py-4 text-lg font-semibold"
          >
            <MapPin className="mr-2 h-5 w-5" />
            Lihat Lokasi di Maps
          </Button>
        </div>
        
        {/* Business Hours Badge */}
        <div className="mt-8 inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
          <p className="text-white/90 font-medium">
            Buka Setiap Hari: <span className="font-bold text-primary-light">07:00 - 21:00</span>
          </p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-white/10 animate-card-float hidden lg:block"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 rounded-full bg-primary-light/20 animate-card-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;