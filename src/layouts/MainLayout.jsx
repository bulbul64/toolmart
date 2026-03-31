import Footer from '../components/footer';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import MainSection from '../sections/MainSection';
import GetStarted from '../sections/GetStarted';
import Cart from '../components/products/cart';
import { useState } from 'react';

export default function MainLayout() {
    const [cart, setCart] = useState([]);
  return (
    <>
      <div className=' border-b border-gray-200'>
        <div className='container mx-auto'>
          <Navbar cart={cart} />
        </div>
      </div>

      <div className='container mx-auto px-2'>
        <Hero />
      </div>
      <div>
        <div className='container mx-auto px-2'>
          <MainSection cart={cart} setCart={setCart} />
        </div>
      </div>
      <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-24 px-4 text-white'>
        <div className='container mx-auto'>
          <GetStarted />
        </div>
      </div>
      <div className='bg-gray-900'>
        <div className='container mx-auto'>
          <Footer />
        </div>
      </div>
    </>
  );
}
