import { motion } from 'framer-motion';

export default function CTASection() {
  const ctaData = {
    title: 'Ready To Transform Your Workflow?',
    description: 'Join thousands of professionals who are already using Digitools to work smarter.',
    primaryBtn: 'Start Free Trial',
    secondaryBtn: 'View Pricing',
    footerText: '14-day free trial • No credit card required • Cancel anytime',
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      className='py-16 bg-blue-600 text-white'
      variants={container}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className='container mx-auto px-4 text-center max-w-2xl'>
        <motion.h2
          variants={item}
          className='text-3xl md:text-4xl font-bold'
        >
          {ctaData.title}
        </motion.h2>

        <motion.p
          variants={item}
          className='mt-4 text-blue-100'
        >
          {ctaData.description}
        </motion.p>

        <motion.div
          variants={item}
          className='mt-8 flex flex-col sm:flex-row justify-center gap-4'
        >
          <button className='px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100 transition'>
            {ctaData.primaryBtn}
          </button>

          <button className='px-6 py-3 border border-white text-white font-semibold rounded hover:bg-white hover:text-blue-600 transition'>
            {ctaData.secondaryBtn}
          </button>
        </motion.div>

        <motion.p
          variants={item}
          className='mt-6 text-sm text-blue-100'
        >
          {ctaData.footerText}
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
