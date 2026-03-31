import { useState } from 'react';
import Stats from '../components/Stats';

import ProductsSection from './ProductsSection';
import Started from './Started';
import TransformWorkflow from './PricingSection';

export default function MainSection({ cart, setCart }) {
  const [activeTab, setActiveTab] = useState('products');

  console.log(cart);
  return (
    <div className='container mx-auto px-3'>
      <Stats />

      <ProductsSection
        cart={cart}
        setCart={setCart}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <Started />
    </div>
  );
}
