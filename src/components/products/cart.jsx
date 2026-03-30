import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

export default function Cart() {
  return (
    <section className={cn('py-16')}>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-10'>Your Cart</h2>

        {/* Cart Items */}
        <div className='flex flex-col gap-6 max-w-4xl mx-auto'>
          {/* Item 1 */}
          <div className='flex flex-col sm:flex-row justify-between items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <div className='flex items-center gap-4 w-full sm:w-auto'>
              <div className='w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center'>
                {/* Image Placeholder */}
                <span className='text-gray-400 text-sm'>Image</span>
              </div>
              <div>
                <h4 className='font-semibold text-lg md:text-xl'>Product 1</h4>
                <p className='text-gray-500 mt-1'>$29 / Month</p>
              </div>
            </div>
            <Button
              variant='outline'
              size='sm'
              className='mt-4 sm:mt-0 sm:ml-6'
            >
              Remove
            </Button>
          </div>

          {/* Item 2 */}
          <div className='flex flex-col sm:flex-row justify-between items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <div className='flex items-center gap-4 w-full sm:w-auto'>
              <div className='w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center'>
                {/* Image Placeholder */}
                <span className='text-gray-400 text-sm'>Image</span>
              </div>
              <div>
                <h4 className='font-semibold text-lg md:text-xl'>Product 2</h4>
                <p className='text-gray-500 mt-1'>$49 / One-time</p>
              </div>
            </div>
            <Button
              variant='outline'
              size='sm'
              className='mt-4 sm:mt-0 sm:ml-6'
            >
              Remove
            </Button>
          </div>

          {/* Summary */}
          <div className='flex flex-col sm:flex-row justify-between items-center mt-8 p-6 bg-white rounded-xl shadow-lg'>
            <p className='font-semibold text-lg'>Total Items: 2</p>
            <p className='font-semibold text-lg mt-2 sm:mt-0'>$78</p>
          </div>

          {/* Checkout Button */}
          <Button className='mt-6 w-full py-4 font-semibold text-lg bg-black text-white hover:bg-gray-900 transition-colors duration-300'>
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </section>
  );
}
