import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ReelSlider = () => {
  // Reels array automatically for 1 to 9
  const reels = Array.from({ length: 9 }, (_, i) => i + 1).map(num => ({
    id: num,
    src: `/reels/${num}.mp4`, // assuming all are mp4 videos
    type: 'video',
  }));
  
  // Multi-card horizontal carousel with focused center
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const setCardRef = (el, index) => {
    cardRefs.current[index] = el || undefined;
  };

  const [centerIndex, setCenterIndex] = useState(0);

  const getMaxScrollLeft = (el) => el.scrollWidth - el.clientWidth;
  const isNearStart = (el) => el.scrollLeft <= 4;
  const isNearEnd = (el) => el.scrollLeft >= getMaxScrollLeft(el) - 4;

  const scrollByViewport = (direction) => {
    const el = containerRef.current;
    if (!el) return;
    const amount = Math.max(el.clientWidth * 0.9, 200);
    el.scrollBy({ left: direction * amount, behavior: 'smooth' });
  };

  const scrollLoop = (direction) => {
    // Move focus by one card and center it
    const next = (centerIndex + (direction > 0 ? 1 : -1) + reels.length) % reels.length;
    scrollCardIntoCenter(next);
  };

  const scrollCardIntoCenter = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    try {
      card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    } catch {
      // Fallback: manual calculation
      const el = containerRef.current;
      if (!el) return;
      const cardRect = card.getBoundingClientRect();
      const containerRect = el.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const containerCenter = containerRect.left + containerRect.width / 2;
      const delta = cardCenter - containerCenter;
      el.scrollBy({ left: delta, behavior: 'smooth' });
    }
  };

  // Auto play/pause visible videos
  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (!cards.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target.querySelector('video');
          if (!video) return;
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            // Play only if this card is focused center
            const idx = cardRefs.current.indexOf(entry.target);
            if (idx === centerIndex) {
              video.play().catch(() => {});
            }
          } else {
            try { video.pause(); } catch {}
          }
        });
      },
      { root: containerRef.current, threshold: [0, 0.25, 0.5, 0.6, 0.75, 1] }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, [reels.length, centerIndex]);

  // Determine center card on scroll/resize
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Ensure initial item is centered
    const id = requestAnimationFrame(() => scrollCardIntoCenter(0));
    const calcCenter = () => {
      const containerCenter = el.scrollLeft + el.clientWidth / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const cardLeft = card.offsetLeft;
        const cardCenter = cardLeft + card.clientWidth / 2;
        const dist = Math.abs(cardCenter - containerCenter);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      });
      setCenterIndex(bestIdx);
    };
    calcCenter();
    const onScroll = () => calcCenter();
    const onResize = () => calcCenter();
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(id);
    };
  }, []);

  // When center changes, ensure only center video plays; pause others
  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const video = card.querySelector('video');
      if (!video) return;
      if (i === centerIndex) {
        video.play().catch(() => {});
      } else {
        try { video.pause(); } catch {}
      }
    });
  }, [centerIndex]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') scrollLoop(1);
      if (e.key === 'ArrowLeft') scrollLoop(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [centerIndex]);

  // (Removed old paginate-based handlers)

  return (
    <div className="relative w-full mx-auto">
      {/* Edge gradient overlays */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-10 sm:w-16 z-10" aria-hidden>
        <div className="h-full w-full bg-gradient-to-r from-black/40 to-transparent" />
      </div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-10 sm:w-16 z-10" aria-hidden>
        <div className="h-full w-full bg-gradient-to-l from-black/40 to-transparent" />
      </div>

      {/* Left/Right buttons */}
      <button
        onClick={() => {
          const next = (centerIndex - 1 + reels.length) % reels.length;
          scrollCardIntoCenter(next);
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full backdrop-blur-sm transition-colors shadow-lg bg-white/15 text-white hover:bg-white/25"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => {
          const next = (centerIndex + 1) % reels.length;
          scrollCardIntoCenter(next);
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full backdrop-blur-sm transition-colors shadow-lg bg-white/15 text-white hover:bg-white/25"
      >
        <ChevronRight />
      </button>

      {/* Multi-card horizontal container (3–4 visible) */}
      <div
        ref={containerRef}
        className="relative flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar px-1"
      >
        {reels.map((reel, i) => (
          <div
            key={reel.id}
            data-reel-card
            ref={(el) => setCardRef(el, i)}
            className={`snap-center shrink-0 basis-[70%] sm:basis-[45%] lg:basis-[30%] aspect-[9/16] rounded-3xl overflow-hidden ring-1 transition duration-300 ${
              i === centerIndex
                ? 'bg-black/40 ring-white/10 scale-100 opacity-100'
                : 'bg-black/60 ring-white/5 scale-95 opacity-60'
            }`}
          >
            <div className={`${i === centerIndex ? '' : 'backdrop-blur-[2px]'} w-full h-full`}>
              {reel.type === 'video' ? (
                <video
                  src={reel.src}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img
                  src={reel.src}
                  alt={`Reel ${reel.id}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
            </div>
            {i !== centerIndex && (
              <div className="pointer-events-none absolute inset-0 bg-black/30" aria-hidden />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReelSlider;
