import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      info: "08542007123",
      description: "Hubungi kami untuk konsultasi"
    },
    {
      icon: MapPin,
      title: "Alamat",
      info: "Jl. Mastrip, RT.02/RW.01, Togogan I",
      description: "Srengat, Kab. Blitar, Jawa Timur 66117"
    },
    {
      icon: Mail,
      title: "Email",
      info: "apotekmitrasyifa@gmail.com",
      description: "Kirim pertanyaan Anda"
    },
    {
      icon: Clock,
      title: "Jam Buka",
      info: "07:00 - 21:00",
      description: "Setiap hari"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hubungi Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tim apoteker profesional kami siap membantu dan melayani kebutuhan kesehatan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-primary rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">{item.title}</h3>
              <p className="font-bold text-primary mb-1">{item.info}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-button px-8 py-4 text-lg font-semibold group relative overflow-hidden"
            onClick={() => window.open("https://maps.app.goo.gl/DxKXAEn7HawBiteb6", "_blank")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-glow/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <MapPin className="mr-2 h-5 w-5 group-hover:animate-bounce relative z-10" />
            <span className="relative z-10">Kunjungi Apotek Kami</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;