"use client";

import React, { useState, useEffect } from 'react';
import { useAnimate, useInView } from 'framer-motion';

type TickerProps = {
  children: React.ReactNode;
  duration?: number;
  gap?: number;
  direction?: 'left' | 'right';
};

export default function Ticker({ children, duration = 10, gap = 50, direction = 'left' }: TickerProps) {
  const childArray = React.Children.toArray(children);
  const [contentWidth, setContentWidth] = useState(0);
  const [numDupes, setNumDupes] = useState(1);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  // Measure content and calculate duplicates needed
  useEffect(() => {
    const measureContent = () => {
      const el = scope.current?.querySelector('.ticker-content');
      if (!el) return;

      const width = el.getBoundingClientRect().width;
      if (width === 0) return;

      setContentWidth(width);
      const containerWidth = scope.current?.clientWidth || 0;
      setNumDupes(Math.max(Math.ceil((2 * containerWidth) / width), 1));
    };

    setTimeout(measureContent, 100);
    const observer = new ResizeObserver(measureContent);
    if (scope.current) observer.observe(scope.current);

    return () => observer.disconnect();
  }, []);

  // Animate when in view
  useEffect(() => {
    if (!isInView || contentWidth === 0) return;

    const directionMultiplier = direction === 'left' ? -1 : 1;
    animate(
      scope.current,
      { x: contentWidth * directionMultiplier },
      { duration, ease: 'linear', repeat: Infinity }
    );
  }, [isInView, contentWidth, direction, duration, animate]);

  return (
    <div 
      ref={scope} 
      style={{ 
        display: 'flex', 
        width: 'max-content', 
        gap: `${gap}px`, 
        marginLeft: `-${contentWidth * numDupes}px` 
      }}
    >
      {/* First duplicates */}
      {[...Array(numDupes)].map(() =>
        childArray.map((item, idx) => <React.Fragment key={`dup-${idx}`}>{item}</React.Fragment>)
      )}
      
      {/* Measured content */}
      <div className="ticker-content" style={{ display: 'flex', gap: `${gap}px` }}>
        {childArray.map((item, idx) => (
          <React.Fragment key={`content-${idx}`}>{item}</React.Fragment>
        ))}
      </div>
      
      {/* Second duplicates */}
      {[...Array(numDupes)].map(() =>
        childArray.map((item, idx) => <React.Fragment key={`dup2-${idx}`}>{item}</React.Fragment>)
      )}
    </div>
  );
}
