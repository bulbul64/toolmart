import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Stats = ({
  stats = [
    { id: 'stat-1', value: '50K+', label: 'Active Users' },
    { id: 'stat-2', value: '200+', label: 'Premium Tools' },
    { id: 'stat-3', value: '4.9', label: 'Rating' },
  ],
  className,
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      className={cn('py-12 lg:py-16', className)}
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className='container mx-auto px-4 text-center'>
        <div className='grid gap-10 md:grid-cols-3'>
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className='flex flex-col items-center justify-center p-6 md:border-r border-gray-200 last:border-0'
              variants={item}
            >
              <div className='text-6xl font-extrabold leading-tight'>{stat.value}</div>
              <p className='mt-3 text-lg font-medium text-gray-600'>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Stats;
