import { useState } from 'react';
import Stats from '../components/Stats';

import ProductsSection from './ProductsSection';
import Started from './Started';
import Cart from '../components/products/cart';

export default function MainSection() {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className='container mx-auto px-2'>
      <Stats />

   
        <ProductsSection
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
  



      <Started />
    </div>
  );
}
