import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate?: Date;
  title?: string;
  subtitle?: string;
}

const CountdownTimer = ({ 
  targetDate, 
  title = "🔥 PROMO TERBATAS HARI INI!", 
  subtitle = "Konsultasi GRATIS + Diskon 20%" 
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Jika tidak ada targetDate, set ke akhir hari ini
    const target = targetDate || new Date(new Date().setHours(23, 59, 59, 999));
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = target.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        // Reset ke hari berikutnya
        const nextDay = new Date();
        nextDay.setDate(nextDay.getDate() + 1);
        nextDay.setHours(23, 59, 59, 999);
        setTimeLeft({
          hours: 23,
          minutes: 59,
          seconds: 59
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 min-w-[60px] text-center border border-white/30">
      <div className="text-2xl md:text-3xl font-bold text-white font-mono">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-xs text-white/90 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-6 mx-4 animate-pulse">
      <div className="text-center mb-4">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
          {title}
        </h3>
        <p className="text-white/90 text-lg">
          {subtitle}
        </p>
      </div>
      
      <div className="flex justify-center items-center space-x-2 md:space-x-4">
        <TimeUnit value={timeLeft.hours} label="JAM" />
        <div className="text-white text-2xl font-bold animate-pulse">:</div>
        <TimeUnit value={timeLeft.minutes} label="MENIT" />
        <div className="text-white text-2xl font-bold animate-pulse">:</div>
        <TimeUnit value={timeLeft.seconds} label="DETIK" />
      </div>
      
      <div className="text-center mt-4">
        <p className="text-white/80 text-sm">
          ⏰ Promo berakhir dalam hitungan detik!
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;