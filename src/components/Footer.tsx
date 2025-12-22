import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="bg-gradient-to-b from-white to-slate-50 border-t border-gray-200/50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <a
              href="#terms"
              className="text-sm font-semibold text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              Terms & Policy
            </a>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <a
              href="#customer"
              className="text-sm font-semibold text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              Customer Story
            </a>
          </div>

          <button
            className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isHovered
                ? 'bg-gradient-to-r from-blue-600 to-violet-600 shadow-xl shadow-blue-500/25 scale-110'
                : 'bg-gray-100/80 hover:bg-gray-200/80'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Go to top"
          >
            <ArrowRight
              className={`w-5 h-5 transition-all duration-300 ${
                isHovered ? 'text-white translate-x-0.5' : 'text-gray-600'
              }`}
            />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200/50 text-center">
          <p className="text-sm text-gray-500 font-medium">
            © {new Date().getFullYear()} PromptBI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
