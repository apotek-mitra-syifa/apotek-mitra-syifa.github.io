import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Ibu Sari Wijaya",
      location: "Srengat, Blitar",
      rating: 5,
      text: "Alhamdulillah, diabetes saya terkontrol berkat konsultasi rutin di Apotek Mitra Syifa. Apotekernya sangat professional dan sabar menjelaskan cara minum obat yang benar.",
      image: "👩‍🦳",
      condition: "Diabetes Terkontrol"
    },
    {
      name: "Bapak Ahmad Hidayat",
      location: "Kademangan, Blitar",
      rating: 5,
      text: "Pelayanan 24 jam sangat membantu saat anak demam tinggi tengah malam. Terima kasih sudah siap sedia melayani masyarakat kapan saja dibutuhkan.",
      image: "👨‍💼",
      condition: "Layanan Emergency"
    },
    {
      name: "Ibu Maya Kusuma",
      location: "Garum, Blitar",
      rating: 5,
      text: "Harga obat terjangkau dengan kualitas terjamin. Program BPJS juga dibantu dengan baik. Apotek langganan keluarga kami sejak 2021.",
      image: "👩‍🍳",
      condition: "Pelanggan Setia"
    },
    {
      name: "Bapak Doni Prasetyo",
      location: "Wlingi, Blitar",
      rating: 5,
      text: "Konsultasi gratis benar-benar gratis! Apoteker memberikan penjelasan lengkap tentang efek samping obat dan cara penyimpanan yang benar.",
      image: "👨‍🔧",
      condition: "Konsultasi Gratis"
    },
    {
      name: "Ibu Rina Saptari",
      location: "Kanigoro, Blitar",
      rating: 5,
      text: "Pelayanan sangat ramah dan obat selalu tersedia lengkap. Lokasi strategis dan mudah dijangkau. Highly recommended!",
      image: "👩‍💻",
      condition: "Pelayanan Terbaik"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            💬 Kata Mereka Tentang Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kepercayaan ribuan keluarga adalah motivasi terbesar kami untuk terus memberikan pelayanan terbaik
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-6 left-6 h-12 w-12 text-primary/20" />
            
            <div className="relative z-10">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{testimonials[currentIndex].image}</div>
                <StarRating rating={testimonials[currentIndex].rating} />
              </div>

              <blockquote className="text-lg md:text-xl text-gray-700 text-center leading-relaxed mb-6 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="text-center">
                <div className="font-bold text-lg text-gray-900">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600 mb-2">
                  📍 {testimonials[currentIndex].location}
                </div>
                <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  ✅ {testimonials[currentIndex].condition}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-2 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="text-center p-4 bg-white/50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">4.8/5</div>
            <div className="text-sm text-gray-600">Rating Google</div>
          </div>
          <div className="text-center p-4 bg-white/50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">456+</div>
            <div className="text-sm text-gray-600">Review</div>
          </div>
          <div className="text-center p-4 bg-white/50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">4</div>
            <div className="text-sm text-gray-600">Tahun</div>
          </div>
          <div className="text-center p-4 bg-white/50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">100%</div>
            <div className="text-sm text-gray-600">Puas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;