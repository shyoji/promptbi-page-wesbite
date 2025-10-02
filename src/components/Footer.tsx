import { Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div>
            <h4 className="text-sm font-bold mb-4 tracking-wide" style={{ color: '#0F0E0E' }}>Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#features" className="font-medium transition-colors" style={{ color: 'rgba(15, 14, 14, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2039E5'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(15, 14, 14, 0.6)'}>Features</a></li>
              <li><a href="#how" className="font-medium transition-colors" style={{ color: 'rgba(15, 14, 14, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2039E5'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(15, 14, 14, 0.6)'}>How it works</a></li>
              <li><a href="#masterclass" className="font-medium transition-colors" style={{ color: 'rgba(15, 14, 14, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2039E5'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(15, 14, 14, 0.6)'}>Masterclass</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 tracking-wide" style={{ color: '#0F0E0E' }}>Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#about" className="font-medium transition-colors" style={{ color: 'rgba(15, 14, 14, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2039E5'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(15, 14, 14, 0.6)'}>About</a></li>
              <li><a href="#contact" className="font-medium transition-colors" style={{ color: 'rgba(15, 14, 14, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2039E5'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(15, 14, 14, 0.6)'}>Contact</a></li>
              <li><a href="#careers" className="font-medium transition-colors" style={{ color: 'rgba(15, 14, 14, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2039E5'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(15, 14, 14, 0.6)'}>Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 tracking-wide" style={{ color: '#0F0E0E' }}>Resources</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#blog" className="font-medium transition-colors" style={{ color: 'rgba(15, 14, 14, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2039E5'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(15, 14, 14, 0.6)'}>Blog</a></li>
              <li><a href="#help" className="font-medium transition-colors" style={{ color: 'rgba(15, 14, 14, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2039E5'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(15, 14, 14, 0.6)'}>Help center</a></li>
              <li><a href="#community" className="font-medium transition-colors" style={{ color: 'rgba(15, 14, 14, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2039E5'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(15, 14, 14, 0.6)'}>Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 tracking-wide" style={{ color: '#0F0E0E' }}>Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#privacy" className="font-medium transition-colors" style={{ color: 'rgba(15, 14, 14, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2039E5'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(15, 14, 14, 0.6)'}>Privacy</a></li>
              <li><a href="#terms" className="font-medium transition-colors" style={{ color: 'rgba(15, 14, 14, 0.6)' }} onMouseEnter={(e) => e.currentTarget.style.color = '#2039E5'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(15, 14, 14, 0.6)'}>Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <img
                src="/prompt BI Full Logo Main (1).svg"
                alt="PromptBI"
                className="h-6 w-auto"
              />
              <span className="text-sm font-medium" style={{ color: 'rgba(15, 14, 14, 0.5)' }}>© 2025</span>
              <span className="text-sm font-medium" style={{ color: 'rgba(15, 14, 14, 0.3)' }}>•</span>
              <Link
                to="/admin/login"
                className="text-xs font-medium transition-colors hover:underline"
                style={{ color: 'rgba(15, 14, 14, 0.4)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#2039E5'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(15, 14, 14, 0.4)'}
              >
                Admin
              </Link>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg transition-colors" style={{ color: 'rgba(15, 14, 14, 0.4)' }} onMouseEnter={(e) => {
                e.currentTarget.style.color = '#2039E5';
                e.currentTarget.style.backgroundColor = 'rgba(32, 57, 229, 0.05)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(15, 14, 14, 0.4)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg transition-colors" style={{ color: 'rgba(15, 14, 14, 0.4)' }} onMouseEnter={(e) => {
                e.currentTarget.style.color = '#2039E5';
                e.currentTarget.style.backgroundColor = 'rgba(32, 57, 229, 0.05)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(15, 14, 14, 0.4)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg transition-colors" style={{ color: 'rgba(15, 14, 14, 0.4)' }} onMouseEnter={(e) => {
                e.currentTarget.style.color = '#2039E5';
                e.currentTarget.style.backgroundColor = 'rgba(32, 57, 229, 0.05)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(15, 14, 14, 0.4)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
