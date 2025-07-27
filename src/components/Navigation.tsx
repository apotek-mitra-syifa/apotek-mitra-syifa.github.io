import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleCallClick = () => {
    window.open("tel:08542007123", "_self");
  };

  const handleMapClick = () => {
    window.open("https://maps.app.goo.gl/DxKXAEn7HawBiteb6", "_blank");
  };


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/logo/logo.png" 
              alt="Apotek Mitra Syifa Logo" 
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-bold text-foreground">Apotek Mitra Syifa</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Layanan
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Kontak
            </button>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleMapClick}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 group"
            >
              <MapPin className="mr-1 h-4 w-4 group-hover:animate-pulse" />
              Lokasi
            </Button>
            <Button
              size="sm"
              onClick={handleCallClick}
              className="bg-gradient-primary hover:opacity-90"
            >
              <Phone className="mr-1 h-4 w-4" />
              Hubungi
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200"
              >
                Beranda
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200"
              >
                Layanan
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200"
              >
                Kontak
              </button>
              <div className="flex space-x-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleMapClick}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 group"
                >
                  <MapPin className="mr-1 h-4 w-4 group-hover:animate-pulse" />
                  Lokasi
                </Button>
                <Button
                  size="sm"
                  onClick={handleCallClick}
                  className="bg-gradient-primary hover:opacity-90"
                >
                  <Phone className="mr-1 h-4 w-4" />
                  Hubungi
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;