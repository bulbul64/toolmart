import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Stats = ({
  heading = 'Platform performance insights',
  description = 'Ensuring stability and scalability for all users',
  link = {
    text: 'Read the full impact report',
    url: 'https://www.shadcnblocks.com',
  },
  stats = [
    {
      id: 'stat-1',
      value: '50K+',
      label: 'Active Users',
    },
    {
      id: 'stat-2',
      value: '200+',
      label: 'Premium Tools',
    },
    {
      id: 'stat-3',
      value: '4.9',
      label: 'Rating',
    },
  ],
  className,
}) => {
  return (
    <section className={cn('py-10', className)}>
      <div className='container text-white text-center'>
        <div className='mt-14 grid gap-x-5 gap-y-8 md:grid-cols-2 lg:grid-cols-3 '>
          {stats.map((stat) => (
            <div
              key={stat.id}
              className='flex flex-col gap-5 border-r'
            >
              <div className='text-6xl font-extrabold'>{stat.value}</div>
              <p className='text-lg font-medium'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
