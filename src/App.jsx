import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WeatherOverlay from '@/components/layout/WeatherOverlay';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import Skills from '@/pages/Skills';
import Vision from '@/pages/Vision';
import Contact from '@/pages/Contact';
import Magics from '@/pages/Magics';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-500">
      <WeatherOverlay />
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/magics" element={<Magics />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;