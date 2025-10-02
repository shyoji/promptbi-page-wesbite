import { X, Clock, Users, Gift } from 'lucide-react';
import { useState, useEffect } from 'react';

interface WaitlistBannerProps {
  onCTAClick: () => void;
}

export default function WaitlistBanner({ onCTAClick }: WaitlistBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(1973);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 5000);
    const interval = setInterval(() => {
      setSpotsLeft(prev => Math.max(1847, prev - Math.floor(Math.random() * 2)));
    }, 12000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[420px] z-50 animate-slideUp">
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl p-1">
        <div className="bg-gray-900 rounded-xl p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1 bg-red-500 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                <Clock className="w-3 h-3" />
                <span>BETA CLOSING</span>
              </div>
              <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">
                <Users className="w-3 h-3" />
                <span>{spotsLeft} spots left</span>
              </div>
            </div>

            <h4 className="text-xl font-black mb-2 flex items-center space-x-2">
              <Gift className="w-5 h-5" />
              <span>Beta Closing Soon!</span>
            </h4>
            <p className="text-white/90 text-sm mb-4 leading-relaxed">
              Join now: <span className="font-bold">6 months premium FREE</span> + exclusive founding member perks
            </p>

            <button
              onClick={onCTAClick}
              className="w-full bg-white text-gray-900 px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all"
            >
              Claim Beta Spot
            </button>
            
            <p className="text-xs text-white/60 text-center mt-3">
              650 already in • {spotsLeft} spots remaining
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
