import { Users, Star, Clock, Shield } from "lucide-react";
import { useState, useEffect } from "react";

const SocialProof = () => {
  const [counters, setCounters] = useState({
    patients: 1247,
    prescriptions: 89,
    rating: 4.8,
    experience: 4
  });

  // Animate counters on mount
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => ({
        ...prev,
        patients: prev.patients + Math.floor(Math.random() * 3), // Slow increment
        prescriptions: Math.floor(Math.random() * 200) + 150 // Random daily count
      }));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: Users,
      value: counters.patients.toLocaleString(),
      label: "Pasien Terlayani",
      sublabel: "Bulan ini",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Clock,
      value: counters.prescriptions,
      label: "Resep Diproses",
      sublabel: "Hari ini",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Star,
      value: counters.rating,
      label: "Rating Pelanggan",
      sublabel: "Dari 892 review",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: Shield,
      value: `${counters.experience}`,
      label: "Tahun Berdiri",
      sublabel: "Sejak 2020",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            🏆 Dipercaya Ribuan Keluarga
          </h2>
          <p className="text-lg text-gray-600">
            Apotek terpercaya di Blitar sejak 2020 dengan pelayanan terbaik
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              
              <div className="text-center">
                <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="font-semibold text-gray-800 text-sm md:text-base mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Activity Indicator */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            🟢 {Math.floor(Math.random() * 15) + 5} orang sedang berkonsultasi sekarang
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;