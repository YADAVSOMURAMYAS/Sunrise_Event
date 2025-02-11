import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import About from '../../components/About/About';
import { AppContent } from '../../context/AppContext';
import { useContext } from 'react';

import VideoBackground from '../../components/VideoBackground/VideoBackground';
import MultiEvent from '../../components/multiEvent/MultiEvent';
import MultiEvent2 from '../../components/MultiEvent/MultiEvent2';
import MultiEvent3 from '../../components/MultiEvent/MultiEvent3';
import MultiEvent4 from '../../components/MultiEvent/MultiEvent4';

import Footer from '../../components/Footer/Footer';
import BookingSection from '../../components/BookingSection/BookingSection';
import GallerySection from '../../components/GallerySection/GallerySection';
import ContactSection from '../../components/ContactSection/ContactSection';

import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon
import Button from '../../components/Button/Button';

const Home = () => {
  const { userData } = useContext(AppContent);

  return (
    <div>
      <Navbar />
      <VideoBackground />
      <About /> 
      <MultiEvent />
      <MultiEvent2 />
      <MultiEvent3 />
      <MultiEvent4 />
      <Button/>
      
      <BookingSection />
      <GallerySection />
      <ContactSection />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919879879874"  // Ensure country code is included
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-button"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </div>
  );
};

export default Home;