import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { toast } from 'react-toastify';

export default function Cart({ cart, setCart }) {
  const total = cart.reduce((acc, item) => acc + item.price.amount, 0);
  const length = cart.length;

  if (length === 0)
    return (
      <p className='text-center text-2xl font-semibold text-gray-500 py-20'>Your cart is empty</p>
    );

  return (
    <section className={cn('pb-20 pt-10')}>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight'>
          Your Cart
        </h2>

        <div className='flex flex-col gap-6 max-w-3xl mx-auto'>
          {cart.map((item) => (
            <div
              key={item.id}
              className='flex flex-col sm:flex-row justify-between items-center bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition duration-300'
            >
              <div className='flex items-center gap-4 w-full sm:w-auto'>
                <div className='w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden p-4'>
                  <img
                    src={item.image}
                    alt=''
                    className='w-full h-full object-contain'
                  />
                </div>

                <div>
                  <h4 className='font-semibold text-lg text-gray-800'>{item.name}</h4>
                  <p className='text-gray-500 mt-1 text-sm'>${item.price.amount}</p>
                </div>
              </div>

              <Button
                onClick={() => {
                  setCart(cart.filter((i) => i.id !== item.id));
                  toast.success('Item removed from cart!');
                }}
                variant='outline'
                size='sm'
                className='mt-4 sm:mt-0 sm:ml-6 border-gray-300 hover:bg-gray-100'
              >
                Remove
              </Button>
            </div>
          ))}

          {/* Summary */}
          <div className='flex justify-between items-center mt-6 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm'>
            <p className='font-semibold text-lg text-gray-700'>Total Price</p>
            <p className='font-bold text-xl text-gray-900'>${total}</p>
          </div>

          {/* Checkout Button */}
          <Button
            onClick={() => {
              setCart([]);
              toast.success('Checkout successful!');
            }}
            className='mt-6 w-full py-4 text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition rounded-xl'
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </section>
  );
}
