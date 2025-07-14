import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ShowcaseCarousel from './components/ShowcaseCarousel';
import Services from './components/Services';
import Features from './components/Features';
import RoomTypes from './components/RoomTypes';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <Hero />
      <ShowcaseCarousel />
      <Services />
      <Features />
      <RoomTypes />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
