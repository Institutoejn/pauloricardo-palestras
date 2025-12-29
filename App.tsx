
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TargetAudience from './components/TargetAudience';
import Lectures from './components/Lectures';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050a18] text-gray-100 selection:bg-[#00d1ff] selection:text-[#050a18]">
      <Header />
      <main>
        <Hero />
        <TargetAudience />
        <Lectures />
        <HowItWorks />
        <About />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
