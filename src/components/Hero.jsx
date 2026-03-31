import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import hero from '../assets/hero.png';
import { motion } from 'framer-motion';

const Hero = ({
  badge = 'New: AI-Powered Tools Available',
  heading = 'Supercharge Your Digital Workflow',
  description = `Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products.`,
  buttons = {
    primary: {
      text: 'Explore Products',
      url: 'https://www.shadcnblocks.com',
    },
    secondary: {
      text: 'Watch Demo',
      url: 'https://www.shadcnblocks.com',
    },
  },
  className,
}) => {
  return (
    <section className={cn('py-32 lg:py-39', className)}>
      <div className='container'>
        <div className='grid items-center gap-8 lg:grid-cols-2 lg:gap-12'>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='flex flex-col items-center gap-4 text-center lg:items-start lg:text-left'
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            >
              <Badge
                variant='outline'
                className='flex items-center gap-3'
              >
                <div className='h-2 w-2 rounded-full bg-amber-500'></div>
                {badge}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className='text-4xl font-bold text-pretty lg:text-6xl mt-4 lg:mt-6'
            >
              {heading}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              className='max-w-xl text-muted-foreground lg:text-xl mt-3 lg:mt-4'
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              className='flex w-full flex-col sm:flex-row gap-3 sm:gap-4 mt-5 lg:mt-6 justify-center lg:justify-start'
            >
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
                  <a
                    href={buttons.secondary.url}
                    className='flex items-center gap-2'
                  >
                    {buttons.secondary.text}
                    <ArrowRight size={20} />
                  </a>
                </Button>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          >
            <img
              src={hero}
              alt='Hero section image'
              className='aspect-square w-full rounded-md object-cover'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
