import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Disable scroll during preloader
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = originalOverflow || '';
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow || '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center select-none"
          id="experience-preloader"
        >
          <div className="flex flex-col items-center justify-center text-center px-4">
            
            {/* Centered Logo with Icon */}
            <div className="flex flex-col items-center justify-center select-none mb-8">
              <div className="flex items-center gap-2.5 select-none">
                <div 
                  className="shrink-0 flex items-center justify-center" 
                  style={{ width: '32px', marginTop: '4px', marginRight: '-4px' }}
                >
                  <svg 
                    className="w-[30px] h-[19px] shrink-0 -translate-y-[0.5px]" 
                    viewBox="0 0 30 19" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    aria-hidden="true"
                  >
                    <circle cx="9.5" cy="9.5" r="9.5" fill="rgb(147, 41, 74)" fillOpacity="0.85" />
                    <circle cx="20.5" cy="9.5" r="9.5" fill="#13aff0" fillOpacity="0.85" style={{ mixBlendMode: 'multiply' }} />
                  </svg>
                </div>
                <span className="font-serif text-3xl sm:text-4xl font-semibold text-black tracking-wider leading-none select-none">
                  HELIBALEARES
                </span>
              </div>
            </div>

            {/* Apple-like Minimalist Segmented Spinner (12 Blades / Bâtonnets) */}
            <div className="relative w-7 h-7 mb-4 flex items-center justify-center" aria-hidden="true">
              {Array.from({ length: 12 }).map((_, index) => {
                const rotation = index * 30;
                const delay = -1 + (index * (1 / 12));
                return (
                  <span
                    key={index}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[7px] bg-stone-500 rounded-full origin-[center_14px] animate-ios-blade"
                    style={{
                      transform: `rotate(${rotation}deg)`,
                      animationDelay: `${delay.toFixed(2)}s`
                    }}
                  />
                );
              })}
            </div>

            {/* Loading text in English */}
            <p className="text-xs sm:text-sm text-stone-600 font-sans font-light tracking-wide">
              Loading your experience...
            </p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
