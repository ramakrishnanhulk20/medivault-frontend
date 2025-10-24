import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Stats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { number: 247, label: 'Data Providers', suffix: '' },
    { number: 12.4, label: 'Earnings Distributed', suffix: 'K', prefix: '$' },
    { number: 1829, label: 'Research Queries', suffix: '' },
    { number: 24, label: 'Avg Credit Boost', suffix: '', prefix: '+' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              className="text-center"
            >
              <div className="mb-2">
                <span className="text-4xl lg:text-5xl font-heading font-bold text-white">
                  {stat.prefix}
                  {mounted ? (
                    <CountUp end={stat.number} duration={2} />
                  ) : (
                    '0'
                  )}
                  {stat.suffix}
                </span>
              </div>
              <p className="text-accent-mint text-sm lg:text-base font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Simple count-up animation component
function CountUp({ end, duration }: { end: number; duration: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(end * progress);
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{Math.floor(count)}</>;
}
