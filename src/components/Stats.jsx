import { cn } from '@/lib/utils';

const Stats = ({
  stats = [
    { id: 'stat-1', value: '50K+', label: 'Active Users' },
    { id: 'stat-2', value: '200+', label: 'Premium Tools' },
    { id: 'stat-3', value: '4.9', label: 'Rating' },
  ],
  className,
}) => {
  return (
    <section className={cn('py-12 lg:py-16', className)}>
      <div className='container mx-auto px-4 text-center'>
        <div className='grid gap-10 md:grid-cols-3'>
          {stats.map((stat, idx) => (
            <div
              key={stat.id}
              className={cn(
                'flex flex-col items-center justify-center p-6',
                idx !== stats.length - 1 ? 'md:border-r border-gray-200' : '',
              )}
            >
              <div className='text-6xl font-extrabold leading-tight'>{stat.value}</div>
              <p className='mt-3 text-lg font-medium text-gray-600'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
