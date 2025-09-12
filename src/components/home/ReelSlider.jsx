import React, { useState } from 'react';
import { motion, AnimatePresence, wrap } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ReelSlider = () => {
  // Reels array automatically for 1 to 5
  const reels = [1, 2, 3, 4, 5].map(num => ({
    id: num,
    src: `/reels/${num}.mp4`, // assuming all are mp4 videos
    type: 'video',
  }));

  const [[page, direction], setPage] = useState([0, 0]);
  const reelIndex = wrap(0, reels.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="relative w-full max-w-sm mx-auto flex flex-col items-center">
      {/* Reel container */}
      <div className="relative w-full aspect-[9/16] overflow-hidden rounded-3xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) paginate(1);
              else if (swipe > swipeConfidenceThreshold) paginate(-1);
            }}
            className="absolute inset-0 w-full h-full"
          >
            {reels[reelIndex].type === 'video' ? (
              <video
                src={reels[reelIndex].src}
                controls
                className="w-full h-full object-cover rounded-3xl"
                autoPlay
                loop
              />
            ) : (
              <img
                src={reels[reelIndex].src}
                alt={`Reel ${reels[reelIndex].id}`}
                className="w-full h-full object-cover rounded-3xl"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute -left-4 sm:-left-10 top-1/2 -translate-y-1/2 z-20 bg-white/10 p-2 rounded-full backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute -right-4 sm:-right-10 top-1/2 -translate-y-1/2 z-20 bg-white/10 p-2 rounded-full backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
      >
        <ChevronRight />
      </button>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {reels.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const newDirection = i > reelIndex ? 1 : -1;
              setPage([i, newDirection]);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === reelIndex ? 'w-6 bg-[var(--gold)]' : 'w-2 bg-gray-600 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReelSlider;
