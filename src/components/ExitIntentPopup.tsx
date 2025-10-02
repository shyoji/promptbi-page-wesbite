import { useState, useEffect } from 'react';
import { X, Gift, Zap, Clock } from 'lucide-react';

interface ExitIntentPopupProps {
  onCTAClick: () => void;
}

export default function ExitIntentPopup({ onCTAClick }: ExitIntentPopupProps) {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !show) {
        setShow(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [show, dismissed]);

  const handleClose = () => {
    setShow(false);
    setDismissed(true);
  };

  const handleCTA = () => {
    setShow(false);
    onCTAClick();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl max-w-lg w-full p-1 shadow-2xl animate-scaleIn">
        <div className="bg-white rounded-3xl p-8 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl mb-6 animate-bounce">
              <Clock className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-3xl font-black text-gray-900 mb-3">
              Wait! Beta Spots Running Out
            </h3>
            <p className="text-xl text-gray-700 mb-2 font-semibold">
              Only <span className="text-red-600 font-black">1,900 spots left</span> in beta
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Join the 650 already learning and get exclusive perks
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-6 text-left">
              <div className="flex items-start space-x-3 mb-3">
                <Gift className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  <span className="font-bold">6 months premium FREE</span> (worth $600)
                </p>
              </div>
              <div className="flex items-start space-x-3 mb-3">
                <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  <span className="font-bold">Priority support</span> from our team
                </p>
              </div>
              <div className="flex items-start space-x-3 mb-3">
                <Gift className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  <span className="font-bold">Founding member badge</span> + lifetime discount
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-pink-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  <span className="font-bold">Exclusive Slack community</span> with mentors
                </p>
              </div>
            </div>

            <button
              onClick={handleCTA}
              className="w-full px-8 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-black text-xl hover:shadow-2xl transition-all mb-3"
            >
              Join Beta Now (FREE)
            </button>

            <p className="text-sm text-gray-500">
              Beta closes when we hit 2,650 testers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
