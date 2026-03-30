import { Button } from '../components/ui/button';
import { cn } from '@/lib/utils';

export default function CartSection() {
  const data = [
    {
      id: 'starter',
      title: 'Starter',
      subtitle: 'Perfect for getting Started',
      price: 0,
      duration: 'Month',
      features: [
        'Access to 10 free tools',
        'Basic templates',
        'Community support',
        '1 project per month',
      ],
      buttonText: 'Get Started Free',
    },
    {
      id: 'pro',
      title: 'Pro',
      subtitle: 'Best for professionals',
      price: 29,
      duration: 'Month',
      features: [
        'Access to all premium tools',
        'Unlimited templates',
        'Priority support',
        'Unlimited projects',
        'Cloud sync',
        'Advanced analytics',
      ],
      buttonText: 'Start Pro Trial',
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      subtitle: 'For teams and businesses',
      price: 99,
      duration: 'Month',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'Custom branding',
      ],
      buttonText: 'Contact Sales',
    },
  ];

  const heading = 'Simple, Transparent Pricing';
  const description = 'Choose the plan that fits your needs. Upgrade or downgrade anytime.';

  return (
    <section className={cn('py-20 lg:py-24')}>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-extrabold mb-6'>{heading}</h2>
        <p className='text-lg w-2/3 mx-auto text-gray-600 mt-2'>{description}</p>
      </div>

      <div className='grid md:grid-cols-3 gap-8 mt-8 container mx-auto px-4'>
        {data.map((plan) => (
          <div
            key={plan.id}
            className='bg-white rounded-xl shadow-md p-6 flex flex-col'
          >
            <h3 className='text-xl font-semibold mb-1'>{plan.title}</h3>
            <p className='text-gray-500 mb-4'>{plan.subtitle}</p>
            <span className='text-3xl font-bold'>
              ${plan.price}
              <span className='text-lg font-normal'>/{plan.duration}</span>
            </span>

            <ul className='mt-6 mb-6 text-left list-disc list-inside text-gray-600'>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <Button className='mt-auto'>{plan.buttonText}</Button>
          </div>
        ))}
      </div>
    </section>
  );
}
