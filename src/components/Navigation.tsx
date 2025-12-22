import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  onCTAClick?: () => void;
}

export default function Navigation({ onCTAClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-2xl border-b border-gray-200/50 shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-70 transition-all duration-300"
          >
            <img
              src="/prompt BI Full Logo Main (1) copy.svg"
              alt="PromptBI"
              className="h-8 lg:h-9"
            />
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <button
              className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-all duration-300 rounded-xl hover:bg-gray-100/80"
            >
              Log In
            </button>
            <button
              onClick={() => window.location.href = 'https://app.promptbi.ai/register/'}
              className="group relative px-6 py-2.5 text-sm font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Get Started</span>
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-gray-100/80 transition-all duration-300"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6" strokeWidth={2} /> : <Menu className="w-6 h-6" strokeWidth={2} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/90 backdrop-blur-2xl border-t border-gray-200/50 px-6 py-6 space-y-3 shadow-lg">
          <button
            className="w-full px-6 py-3 text-sm font-semibold text-gray-700 rounded-xl hover:bg-gray-100/80 transition-all duration-300 text-left"
          >
            Log In
          </button>
          <button
            onClick={() => window.location.href = 'https://app.promptbi.ai/register/'}
            className="w-full px-6 py-3 text-sm font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg shadow-blue-500/25"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
