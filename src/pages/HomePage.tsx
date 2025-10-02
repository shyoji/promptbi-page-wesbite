import { useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import MasterclassEvent from '../components/MasterclassEvent';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import BetaSignupForm from '../components/BetaSignupForm';

export default function HomePage() {
  const [showBetaForm, setShowBetaForm] = useState(false);
  const [formSource, setFormSource] = useState('unknown');

  const handleCTAClick = (source: string) => {
    setFormSource(source);
    setShowBetaForm(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onCTAClick={() => handleCTAClick('navigation')} />
      <Hero onCTAClick={() => handleCTAClick('hero')} />
      <Features />
      <HowItWorks />
      <MasterclassEvent />
      <Partners />
      <Footer />

      <BetaSignupForm
        isOpen={showBetaForm}
        onClose={() => setShowBetaForm(false)}
        source={formSource}
      />
    </div>
  );
}
