import { Hero } from '../components/Hero';

import MainSection from '../sections/MainSection';
import GetStarted from '../sections/PricingSection';
import { useState } from 'react';
import Footer from '../components/ui/Footer';
import { Navbar } from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import PricingSection from '../sections/PricingSection';
import CTASection from '../sections/CTASection';

export default function MainLayout() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <div className=' border-b border-gray-200 sticky top-0 z-50 bg-white'>
        <div className='container mx-auto '>
          <Navbar cart={cart} />
        </div>
      </div>

      <div className='container mx-auto px-2'>
        <Hero />
      </div>
      <div>
        <div className='container mx-auto px-2'>
          <MainSection
            cart={cart}
            setCart={setCart}
          />
        </div>
      </div>
     
        <div className='container mx-auto'>
          <PricingSection />
      </div>
      <div>
        <CTASection />
      </div>
      <div className='bg-gray-900'>
        <div className='container mx-auto'>
          <Footer />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
