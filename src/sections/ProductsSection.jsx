import { cn } from '@/lib/utils';
import { Button } from '../components/ui/button';
import ProductGrid from '../components/ProductGrid';
import DataFetcher from '../api/api';
import { Spinner } from '../components/ui/spinner';
import Cart from '../components/Cart';

export default function ProductsSection({ activeTab, setActiveTab, cart, setCart }) {
  const { products, loading } = DataFetcher();

  const length = cart.length;

  if (loading) {
    return (
      <div className='py-8 flex justify-center'>
        <Button
          variant='outline'
          disabled
          size='sm'
        >
          <Spinner />
          Please wait
        </Button>
      </div>
    );
  }

  const heading = 'Premium Digital Tools';
  const description =
    'Choose from our curated collection of premium digital products designed to boost your productivity and creativity.';

  return (
    <section className={cn('py-20 lg:py-24')}>
      {/* Heading */}
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-extrabold mb-6'>{heading}</h2>
        <p className='text-lg w-2/3 mx-auto text-gray-600 mt-2'>{description}</p>
      </div>

      {/* Toggle Buttons */}
      <div className='flex justify-center gap-6 mb-8 mt-6'>
        <Button
          onClick={() => setActiveTab('products')}
          className={cn(
            'cursor-pointer py-2 px-6',
            activeTab === 'products' ? 'bg-black text-white' : 'bg-white text-black',
          )}
        >
          Products
        </Button>
        <Button
          onClick={() => setActiveTab('cart')}
          className={cn(
            'cursor-pointer py-2 px-6',
            activeTab === 'cart' ? 'bg-black text-white' : 'bg-white text-black',
          )}
        >
          Cart <span>({length})</span>
        </Button>
      </div>

      {/* Product Grid */}
      {activeTab === 'cart' && (
        <Cart
          cart={cart}
          setCart={setCart}
        />
      )}

      {activeTab === 'products' && (
        <ProductGrid
          setCart={setCart}
          cart={cart}
          products={products}
          loading={loading}
        />
      )}
    </section>
  );
}
