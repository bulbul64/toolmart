import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

export default function Cart({ cart, setCart }) {
  const total = cart.reduce((acc, item) => acc + item.price.amount, 0);
  const length = cart.length;

  if (length === 0)
    return (
      <p className='text-center text-2xl font-semibold text-gray-500 py-20'>Your cart is empty</p>
    );

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.section
      className={cn('pb-20 pt-10')}
      variants={container}
      initial='hidden'
      animate='show'
    >
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight'
          variants={item}
        >
          Your Cart
        </motion.h2>

        <motion.div
          className='flex flex-col gap-6 max-w-3xl mx-auto'
          variants={container}
        >
          {cart.map((itemData) => (
            <motion.div
              key={itemData.id}
              className='flex flex-col sm:flex-row justify-between items-center bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition duration-300'
              variants={item}
              viewport={{ once: true }}
            >
              <div className='flex items-center gap-4 w-full sm:w-auto'>
                <div className='w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden p-4'>
                  <img
                    src={itemData.image}
                    alt=''
                    className='w-full h-full object-contain'
                  />
                </div>

                <div>
                  <h4 className='font-semibold text-lg text-gray-800'>{itemData.name}</h4>
                  <p className='text-gray-500 mt-1 text-sm'>${itemData.price.amount}</p>
                </div>
              </div>

              <Button
                onClick={() => {
                  setCart(cart.filter((i) => i.id !== itemData.id));
                  toast.success('Item removed from cart!');
                }}
                variant='outline'
                size='sm'
                className='mt-4 sm:mt-0 sm:ml-6 border-gray-300 hover:bg-gray-100'
              >
                Remove
              </Button>
            </motion.div>
          ))}

          <motion.div
            className='flex justify-between items-center mt-6 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm'
            variants={item}
          >
            <p className='font-semibold text-lg text-gray-700'>Total Price</p>
            <p className='font-bold text-xl text-gray-900'>${total}</p>
          </motion.div>

          <motion.div variants={item}>
            <Button
              onClick={() => {
                setCart([]);
                toast.success('Checkout successful!');
              }}
              className='mt-6 w-full py-4 text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition rounded-xl'
            >
              Proceed to Checkout
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
