import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import hero from '../assets/hero.png';

const Hero = ({
  badge = 'New: AI-Powered Tools Available',
  heading = 'Supercharge Your Digital Workflow',
  description = `Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products.`,
  buttons = {
    primary: {
      text: 'Discover all components',
      url: 'https://www.shadcnblocks.com',
    },
    secondary: {
      text: 'View on GitHub',
      url: 'https://www.shadcnblocks.com',
    },
  },
  className,
}) => {
  return (
    <section className={cn('py-32', className)}>
      <div className='container'>
        <div className='grid items-center gap-6 lg:grid-cols-2 lg:gap-12'>
          {/* Left Content */}
          <div className='flex flex-col items-center gap-5 text-center lg:items-start lg:text-left'>
            {/* Badge with dot */}
            <Badge
              variant='outline'
              className='flex items-center gap-2'
            >
              <div className='h-2 w-2 rounded-full bg-amber-500'></div>
              {badge}
            </Badge>

            <h1 className='text-4xl font-bold text-pretty lg:text-6xl'>{heading}</h1>

            <p className='max-w-xl text-muted-foreground lg:text-xl'>{description}</p>

            {/* Buttons */}
            <div className='flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start'>
              {buttons.primary && (
                <Button
                  asChild
                  className='w-full sm:w-auto'
                >
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button
                  asChild
                  variant='outline'
                  className='w-full sm:w-auto'
                >
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className='size-4' />
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Right Image */}
          <img
            src={hero}
            alt='Hero section image'
            className='w-full rounded-md object-cover'
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
