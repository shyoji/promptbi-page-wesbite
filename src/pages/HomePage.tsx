import { useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FeaturedPlans from '../components/FeaturedPlans';
import BeforeAfterComparison from '../components/BeforeAfterComparison';
import HowItWorks from '../components/HowItWorks';
import TrustedBy from '../components/TrustedBy';
import Footer from '../components/Footer';
import BetaSignupForm from '../components/BetaSignupForm';
import SEO from '../components/SEO';

export default function HomePage() {
  const [showBetaForm, setShowBetaForm] = useState(false);
  const [formSource, setFormSource] = useState('unknown');

  const handleCTAClick = (source: string) => {
    setFormSource(source);
    setShowBetaForm(true);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PromptBI",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "800"
    },
    "description": "AI-powered business intelligence platform that helps data analysts transform raw data into strategic decisions"
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <SEO
        title="PromptBI - AI-Powered Business Intelligence Platform for Data Analysts"
        description="Transform raw data into strategic decisions with PromptBI. Join 800+ data analysts using AI to automate reports, integrate data sources, and advance their careers."
        keywords="business intelligence platform, data analytics tool, AI data analysis, BI software, data visualization, data integration, SQL analytics, data analyst training, business analytics, data-driven decisions"
        ogTitle="PromptBI - AI Business Intelligence for Data Analysts"
        ogDescription="Turn data into strategic decisions. AI-powered platform for data analysts and business intelligence professionals."
        ogImage="https://promptbi.ai/og-image-home.png"
        canonical="https://promptbi.ai/"
        structuredData={structuredData}
      />
      <Navigation onCTAClick={() => handleCTAClick('navigation')} />
      <div className="pt-20">
        <Hero onCTAClick={() => handleCTAClick('hero')} />
        <FeaturedPlans />
        <HowItWorks />
        <BeforeAfterComparison />
        <TrustedBy />
        <Footer />
      </div>

      <BetaSignupForm
        isOpen={showBetaForm}
        onClose={() => setShowBetaForm(false)}
        source={formSource}
      />
    </div>
  );
}
