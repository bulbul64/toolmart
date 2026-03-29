

import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';



export default function MainLayout() {
  return (
    <>
      <div className=' border-b border-gray-200'>
        <div className='container mx-auto'>
          <Navbar />
        </div>
      </div>

      <div className='container mx-auto px-2'>
       
      </div>
      {/* <MainSection /> */}
      
    </>
  );
}
