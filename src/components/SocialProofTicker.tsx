import { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function SocialProofTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const recentSignups = [
    { name: 'Sarah M.', location: 'New York', time: '2 min ago' },
    { name: 'Alex K.', location: 'Austin', time: '5 min ago' },
    { name: 'Jordan P.', location: 'San Francisco', time: '8 min ago' },
    { name: 'Taylor R.', location: 'Chicago', time: '12 min ago' },
    { name: 'Morgan L.', location: 'Seattle', time: '15 min ago' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recentSignups.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden lg:block">
      <div className="bg-white rounded-2xl shadow-xl p-4 border-2 border-green-200 animate-slideInLeft">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-white" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-gray-900 truncate">
              {recentSignups[currentIndex].name} from {recentSignups[currentIndex].location}
            </p>
            <p className="text-xs text-gray-600">
              Just joined • {recentSignups[currentIndex].time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
