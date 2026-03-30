

import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import MainSection from '../sections/MainSection';



export default function MainLayout() {
  return (
    <>
      <div className=' border-b border-gray-200'>
        <div className='container mx-auto'>
          <Navbar />
        </div>
      </div>

      <div className='container mx-auto px-2'>
        <Hero />
      </div>
      <div className='bg-[#9016FA]'>
        <div className='container mx-auto px-2'>
          <MainSection />
        </div>
      </div>
    </>
  );
}
