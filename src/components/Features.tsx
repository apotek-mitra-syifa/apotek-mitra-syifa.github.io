import { Shield, Award, Clock, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Terpercaya & Berlisensi",
      description: "Apoteker berlisensi resmi dengan pengalaman puluhan tahun melayani masyarakat Blitar"
    },
    {
      icon: Award,
      title: "Kualitas Terjamin",
      description: "Produk obat-obatan dari distributor resmi dengan standar farmasi internasional"
    },
    {
      icon: Clock,
      title: "Pelayanan Cepat",
      description: "Proses resep cepat dan akurat dengan sistem antrian yang terorganisir"
    },
    {
      icon: Users,
      title: "Konsultasi Gratis",
      description: "Konsultasi langsung dengan apoteker berpengalaman tanpa biaya tambahan"
    }
  ];

  return (
    <section className="py-20 bg-primary-light/30" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Komitmen kami adalah memberikan pelayanan farmasi terbaik untuk kesehatan keluarga Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2 border border-border/50 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-lg font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;