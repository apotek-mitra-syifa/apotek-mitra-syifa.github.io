import { Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center md:justify-start">
              <Heart className="mr-2 h-6 w-6 text-primary-light" />
              Apotek Mitra Syifa
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Melayani kesehatan masyarakat dengan dedikasi tinggi dan standar farmasi terbaik. 
              Kepercayaan Anda adalah prioritas utama kami.
            </p>
          </div>

          {/* Quick Contact */}
          <div className="text-center">
            <h4 className="font-semibold mb-4 text-primary-light">Kontak Cepat</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center">
                <Phone className="h-4 w-4 mr-2 text-primary-light" />
                <span className="text-primary-foreground/90">08542007123</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="h-4 w-4 mr-2 text-primary-light" />
                <span className="text-primary-foreground/90">apotekmitrasyifa@gmail.com</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="h-4 w-4 mr-2 text-primary-light" />
                <span className="text-primary-foreground/90">Jl. Mastrip, Srengat, Blitar</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4 text-primary-light">Jam Operasional</h4>
            <div className="space-y-2">
              <p className="text-primary-foreground/90">Senin - Minggu</p>
              <p className="text-2xl font-bold text-primary-light">07:00 - 21:00</p>
              <p className="text-sm text-primary-foreground/70">Buka setiap hari</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-primary-foreground/70">
            © 2024 Apotek Mitra Syifa. Semua hak dilindungi undang-undang.
          </p>
          <p className="text-sm text-primary-foreground/60 mt-2">
            Terdaftar dan berizin resmi dari Kementerian Kesehatan RI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;