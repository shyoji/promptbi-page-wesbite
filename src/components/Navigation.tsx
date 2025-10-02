import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  onCTAClick: () => void;
}

export default function Navigation({ onCTAClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="/prompt BI Full Logo Main (1).svg"
              alt="PromptBI"
              className="h-8 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a href="#features" className="px-3 py-2 text-sm font-medium transition-colors" style={{ color: '#0F0E0E' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2039E5'} onMouseLeave={(e) => e.currentTarget.style.color = '#0F0E0E'}>
              Features
            </a>
            <a href="#how" className="px-3 py-2 text-sm font-medium transition-colors" style={{ color: '#0F0E0E' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2039E5'} onMouseLeave={(e) => e.currentTarget.style.color = '#0F0E0E'}>
              How it works
            </a>
            <a href="#masterclass" className="px-3 py-2 text-sm font-medium transition-colors" style={{ color: '#0F0E0E' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2039E5'} onMouseLeave={(e) => e.currentTarget.style.color = '#0F0E0E'}>
              Masterclass
            </a>
            <div className="w-px h-4 bg-gray-200 mx-3" />
            <button
              onClick={onCTAClick}
              className="ml-2 px-5 py-2.5 text-white text-sm font-semibold rounded-full hover:scale-105 transition-all flex items-center space-x-2 group"
              style={{
                backgroundColor: '#2039E5',
                boxShadow: '0 4px 14px 0 rgba(32, 57, 229, 0.25)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1a2ec9';
                e.currentTarget.style.boxShadow = '0 6px 20px 0 rgba(32, 57, 229, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2039E5';
                e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(32, 57, 229, 0.25)';
              }}
            >
              <span>Get started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 transition-colors"
            style={{ color: 'rgba(15, 14, 14, 0.6)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#0F0E0E'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(15, 14, 14, 0.6)'}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-1">
            <a href="#features" className="block px-4 py-3 text-sm font-medium transition-colors" style={{ color: '#0F0E0E' }}>
              Features
            </a>
            <a href="#how" className="block px-4 py-3 text-sm font-medium transition-colors" style={{ color: '#0F0E0E' }}>
              How it works
            </a>
            <a href="#masterclass" className="block px-4 py-3 text-sm font-medium transition-colors" style={{ color: '#0F0E0E' }}>
              Masterclass
            </a>
            <button
              onClick={onCTAClick}
              className="w-full mt-2 px-5 py-3 text-white text-sm font-semibold rounded-full hover:scale-105 transition-all flex items-center justify-center space-x-2"
              style={{
                backgroundColor: '#2039E5',
                boxShadow: '0 4px 14px 0 rgba(32, 57, 229, 0.25)'
              }}
            >
              <span>Get started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
