import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

const Highlight = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <span ref={ref} className={isInView ? 'in-view' : ''}>
      <span className="highlight">{children}</span>
    </span>
  );
};

export default Highlight;