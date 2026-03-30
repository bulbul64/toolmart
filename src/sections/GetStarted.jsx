import React from 'react';

const TransformWorkflow = () => {
  return (
    <section>
      <div className='max-w-3xl mx-auto text-center space-y-8'>
        {/* Heading */}
        <h2 className='text-3xl md:text-5xl font-bold leading-tight'>
          Ready to Transform Your Workflow?
        </h2>

        {/* Description */}
        <p className='text-base md:text-lg text-white/80 max-w-2xl mx-auto'>
          Join thousands of professionals who are already using Digitools to work smarter. Start
          your free trial today.
        </p>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-6 pt-4'>
          {/* Primary Button */}
          <a className='bg-white text-[#9514FA] px-6 py-3 rounded-full font-semibold text-sm md:text-base hover:bg-white/90 transition-all duration-200'>
            Explore Products
          </a>

          {/* Secondary Button */}
          <a className='border border-white px-6 py-3 rounded-full font-semibold text-sm md:text-base hover:bg-white hover:text-[#9514FA] transition-all duration-200'>
            View Pricing
          </a>
        </div>

        {/* Bottom Text */}
        <p className='text-sm text-white/70 mt-6'>
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default TransformWorkflow;
