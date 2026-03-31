import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export default function Cart({ cart, setCart }) {
  const total = cart.reduce((acc, item) => acc + item.price.amount, 0);
  const length = cart.length;
  if (length === 0) return <p className='text-center text-2xl'>Your cart is empty</p>;
  return (
    <section className={cn('shadow-md pb-20 pt-8')}>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-10'>Your Cart</h2>

        <div className='flex flex-col gap-6 max-w-4xl mx-auto'>
          {/* Cart Items */}
          {cart.map((item) => (
            <div
              key={item.id}
              className='flex flex-col sm:flex-row justify-between items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'
            >
              <div className='flex items-center gap-4 w-full sm:w-auto'>
                <div className='w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center'>
                  {/* Image Placeholder */}
                  <img
                    src={item.image}
                    alt=''
                  />
                </div>
                <div>
                  <h4 className='font-semibold text-lg md:text-xl'>{item.name}</h4>
                  <p className='text-gray-500 mt-1'>{item.description}</p>
                </div>
              </div>
              <Button
                onClick={() => setCart(cart.filter((i) => i.id !== item.id))}
                variant='outline'
                size='sm'
                className='mt-4 sm:mt-0 sm:ml-6'
              >
                Remove
              </Button>
            </div>
          ))}
          {/* Item 1 */}

          {/* Summary */}
          <div className='flex flex-col sm:flex-row justify-between items-center mt-8 p-6 bg-white rounded-xl shadow-lg'>
            <p className='font-semibold text-lg'>Total Price: </p>
            <p className='font-semibold text-lg mt-2 sm:mt-0'>${total}</p>
          </div>

          {/* Checkout Button */}
          <Button
            onClick={() => setCart([])}
            className='mt-6 w-full py-4 font-semibold text-lg bg-black text-white hover:bg-gray-900 transition-colors duration-300'
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </section>
  );
}
