import { toast } from 'react-toastify';

export default function PricingSection({ cart, setCart }) {
  const plans = [
    {
      name: 'Starter',
      price: { amount: 0, duration: 'month' },
      description: 'Perfect for getting started',
      features: ['Access to 10 free tools', 'Basic templates', 'Community support'],
      buttonText: 'Get Started Free',
      isPopular: false,
    },
    {
      name: 'Pro',
      price: { amount: 29, duration: 'month' },
      description: 'Best for professionals',
      features: ['Access to all premium tools', 'Unlimited templates', 'Priority support'],
      buttonText: 'Start Pro Trial',
      isPopular: true,
    },
    {
      name: 'Enterprise',
      price: { amount: 99, duration: 'month' },
      description: 'For teams and businesses',
      features: ['Everything in Pro', 'Team collaboration', 'Dedicated support'],
      buttonText: 'Contact Sales',
      isPopular: false,
    },
  ];

  return (
    <section className='py-16 '>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-10'>
          <h2 className='text-3xl font-bold'>Simple, Transparent Pricing</h2>
          <p className='text-gray-600 mt-2'>
            Choose the plan that fits your needs. Upgrade anytime.
          </p>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {plans.map((plan, index) => {
            const isSelected = plan.isPopular;

            return (
              <div
                key={index}
                className={`p-6 rounded-lg bg-white border transition relative
                ${isSelected ? 'border-blue-600 shadow-xl scale-105' : 'border-gray-200'}`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <span className='absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full'>
                    Most Popular
                  </span>
                )}

                <div className='flex flex-col'>
                  {/* Title */}
                  <h2 className='text-2xl font-bold'>{plan.name}</h2>

                  {/* Price */}
                  <span className='text-xl font-semibold mt-2'>
                    {plan.price.amount === 0 ? '$0' : `$${plan.price.amount}`}/{plan.price.duration}
                  </span>

                  {/* Description */}
                  <p className='text-gray-600 mt-3'>{plan.description}</p>

                  {/* Features */}
                  <ul className='mt-4 flex flex-col gap-2 text-sm'>
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className='flex items-center'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-4 h-4 mr-2 text-green-500 shrink-0'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <div className='mt-6'>
                    <button
                      onClick={() => {
                        setCart((prev) => [...prev, plan]);
                        toast.success(`${plan.name} added!`);
                      }}
                      className={`w-full py-2 rounded text-white transition
                        ${
                          isSelected
                            ? 'bg-blue-600 hover:bg-blue-700'
                            : 'bg-gray-800 hover:bg-gray-900'
                        }`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
