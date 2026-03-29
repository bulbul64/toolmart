import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';

import MainSection from '../sections/MainSection';

export default function MainLayout() {
  return (
    <>
      <div className=' border-b border-gray-200'>
        <div className='container mx-auto'>
        
        </div>
      </div>

      <div className='container mx-auto px-2'>
        <Banner />
      </div>
      <MainSection />
      <Footer />
    </>
  );
}
