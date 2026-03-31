import { useFetchData } from '../api/api';
import Card from '../components/Card';
import { Button } from '../components/ui/button';
import { Spinner } from '../components/ui/spinner';
import { motion } from 'framer-motion';

export default function Started() {
  const { toolData, loading } = useFetchData();

  if (loading) {
    return (
      <div className='p-4'>
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

  const heading = 'Get Started in 3 Steps';
  const description = 'Start using premium digital tools in minutes, not hours.';

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
    <motion.div
      className='mb-16'
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className='container mx-auto px-4 text-center'>
        <motion.h2
          variants={item}
          className='text-3xl md:text-4xl font-extrabold mb-4'
        >
          {heading}
        </motion.h2>
        <motion.p
          variants={item}
          className='text-lg w-2/3 mx-auto text-gray-600'
        >
          {description}
        </motion.p>
      </motion.div>

      <motion.div className='container mx-auto mt-8 flex justify-center gap-8 flex-wrap'>
        {toolData.map((tool) => (
          <motion.div
            key={tool.id}
            variants={item}
          >
            <Card tool={tool} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
