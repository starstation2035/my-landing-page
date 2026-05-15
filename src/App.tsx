import { useState } from 'react';
import HeroSection from './components/HeroSection';
import PainPointsSection from './components/PainPointsSection';
import SolutionsSection from './components/SolutionsSection';
import ProductInfoSection from './components/ProductInfoSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import StickyCta from './components/StickyCta';
import BookingModal from './components/BookingModal';
import type { BookingData } from './components/BookingModal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (data: BookingData) => {
    console.log('Booking Data:', data);
    setIsModalOpen(false);
    
    // Show Toast
    setToastMessage('알림 신청이 완료되었습니다! 일정이 확정되면 가장 먼저 연락드리겠습니다.');
    
    // Auto-hide Toast after 3 seconds
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="App">
      <main>
        <HeroSection onCtaClick={handleOpenModal} />
        <PainPointsSection />
        <SolutionsSection />
        <ProductInfoSection />
        <GallerySection />
      </main>
      <Footer />
      <StickyCta onClick={handleOpenModal} />
      
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSubmit={handleFormSubmit} 
      />

      {/* Toast Message */}
      {toastMessage && (
        <div className="toast">
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default App;
