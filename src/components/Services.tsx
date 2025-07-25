import { Users, FileText, Heart, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Pelayanan Umum",
      description: "Melayani pembelian obat-obatan untuk masyarakat umum dengan konsultasi gratis dari apoteker berpengalaman.",
      features: ["Obat bebas & bebas terbatas", "Suplemen kesehatan", "Alat kesehatan", "Konsultasi gratis"]
    },
    {
      icon: FileText,
      title: "Resep Dokter",
      description: "Menerima dan melayani resep dari dokter dengan ketelitian tinggi dan standar farmasi yang ketat.",
      features: ["Resep rawat jalan", "Resep rawat inap", "Obat keras & narkotika", "Konfirmasi dengan dokter"]
    },
    {
      icon: Heart,
      title: "Layanan BPJS",
      description: "Bermitra dengan BPJS Kesehatan untuk memberikan akses obat yang terjangkau bagi peserta BPJS.",
      features: ["Obat program BPJS", "Resep rujukan", "Obat kronis", "Pelayanan sesuai formularium"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-card relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Layanan Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan farmasi profesional untuk memenuhi kebutuhan kesehatan Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2 border border-border/50 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-card-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Business Hours Section */}
        <div className="bg-primary rounded-2xl p-8 text-center text-primary-foreground shadow-hero animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-8 w-8 mr-3" />
            <h3 className="text-2xl font-bold">Jam Operasional</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="font-semibold text-lg mb-2">Senin - Minggu</h4>
              <p className="text-2xl font-bold text-primary-light">07:00 - 21:00</p>
              <p className="text-primary-foreground/80 mt-2">Buka setiap hari tanpa libur</p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="font-semibold text-lg mb-2">Layanan Darurat</h4>
              <p className="text-2xl font-bold text-primary-light">24 Jam</p>
              <p className="text-primary-foreground/80 mt-2">Hubungi kami untuk keperluan mendesak</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;