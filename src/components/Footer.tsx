import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="bg-white border-t border-gray-200/80 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <a
              href="#terms"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Terms & Policy
            </a>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <a
              href="#customer"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Customer Story
            </a>
          </div>

          <button
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
              isHovered
                ? 'bg-gray-900 shadow-lg scale-110'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Go to top"
          >
            <ArrowRight
              className={`w-5 h-5 transition-all duration-200 ${
                isHovered ? 'text-white translate-x-0.5' : 'text-gray-600'
              }`}
            />
          </button>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200/80 text-center">
          <p className="text-sm text-gray-500 font-medium">
            © {new Date().getFullYear()} PromptBI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
