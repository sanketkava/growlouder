import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

const Highlight = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <span
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? 'opacity-100 scale-105' : 'opacity-0 scale-95'
      }`}
    >
      <span className="text-white font-extrabold">{children}</span>
    </span>
  );
};

export default Highlight;
