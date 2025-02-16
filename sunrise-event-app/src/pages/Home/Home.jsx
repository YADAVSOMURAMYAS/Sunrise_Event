import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import About from '../../components/About/About.jsx';
import { AppContent } from '../../context/AppContext.jsx';
import { useContext } from 'react';

import VideoBackground from '../../components/VideoBackground/VideoBackground.jsx';
import MultiEvent from '../../components/MultiEvent/MultiEvent.jsx';
import MultiEvent2 from '../../components/MultiEvent/MultiEvent2.jsx';
import MultiEvent3 from '../../components/MultiEvent/MultiEvent3.jsx';
import MultiEvent4 from '../../components/MultiEvent/MultiEvent4.jsx';

import Footer from '../../components/Footer/Footer.jsx';
import BookingSection from '../../components/BookingSection/BookingSection.jsx';
import GallerySection from '../../components/GallerySection/GallerySection.jsx';
import ContactSection from '../../components/ContactSection/ContactSection.jsx';

import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon
import Button from '../../components/Button/Button.jsx';

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