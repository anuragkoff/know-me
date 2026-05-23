"use client";

import React, {useState, useEffect} from 'react';
import { AnimationPlaybackControls, useAnimate, useInView } from 'framer-motion';

const TICKER_DIRECTION_LEFT = -1;
const TICKER_DIRECTION_RIGHT = 1;

type TickerProps = {
  children: React.ReactNode;
  duration?: number;
  direction?: -1 | 1 | 'left' | 'right';
  isPlaying?: boolean;
  pauseOnHover?: boolean;
  gap?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const noop = () => {};

const Ticker: React.FunctionComponent<TickerProps> = (props: TickerProps) => {
  const {
    children,
    duration = props.duration ?? 10,
    direction = props.direction ?? TICKER_DIRECTION_LEFT,
    isPlaying = props.isPlaying ?? true,
    pauseOnHover = props.pauseOnHover ?? false,
    gap = props.gap ?? 50,
    onMouseEnter = props.onMouseEnter ?? noop,
    onMouseLeave = props.onMouseLeave ?? noop,
  } = props;

  const [tickerEl, setTickerEl] = useState<HTMLDivElement | null>(null);
  const [tickerContentsEl, setTickerContentsEl] = useState<HTMLDivElement | null>(null);

  const [tickerContentWidth, setTickerContentWidth] = useState<number>(2);
  const [numDupes, setNumDupes] = useState<number>(1);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const [scope, animate] = useAnimate();
  const [animationControls, setAnimationControls] = useState<
    AnimationPlaybackControls | undefined
  >(undefined);
  const isInView = useInView(scope);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  const childArray = React.Children.toArray(children);

  const directionMultiplier =
    direction === 'left' || direction === TICKER_DIRECTION_LEFT
      ? TICKER_DIRECTION_LEFT
      : TICKER_DIRECTION_RIGHT;

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mql.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (tickerEl && tickerContentsEl) {
      const measure = () => {
        const contentWidth = tickerContentsEl.getBoundingClientRect().width;
        if (contentWidth === 0) return;
        setTickerContentWidth(contentWidth);
        setNumDupes(Math.max(Math.ceil((2 * tickerEl.clientWidth) / contentWidth), 1));
      };

      measure();

      const observer = new ResizeObserver(measure);
      observer.observe(tickerEl);
      observer.observe(tickerContentsEl);

      return () => observer.disconnect();
    }
  }, [tickerEl, tickerContentsEl]);

  useEffect(() => {
    if (scope.current) {
      setTickerContentWidth(scope.current.offsetWidth);
    }

    const handleResize = () => {
      if (scope.current) {
        setTickerContentWidth(scope.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [scope]);

  useEffect(() => {
    if (isInView && tickerContentWidth > 2) {
      if (animationControls) {
        animationControls.stop();
      }
      
      const controls = animate(
        scope.current,
        { x: tickerContentWidth * directionMultiplier },
        { ease: 'linear', duration, repeat: Infinity }
      );
      if (!isPlaying || prefersReducedMotion) {
        controls.pause();
      }
      setAnimationControls(controls);
    }
  }, [isInView, tickerContentWidth, directionMultiplier, duration]);

  useEffect(() => {
    if (animationControls) {
      if (!isInView || !isPlaying || (pauseOnHover && isHovered) || prefersReducedMotion) {
        animationControls.pause();
      } else {
        animationControls.play();
      }
    }
  }, [isInView, isPlaying, isHovered, pauseOnHover, prefersReducedMotion]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onMouseLeave();
  };

  return (
    <div
      className="FMT__container"
      ref={setTickerEl}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={scope}
        className="FMT__container__contents"
        style={{
          display: 'flex',
          width: 'max-content',
          gap: gap + 'px',
          marginLeft: `-${tickerContentWidth * numDupes}px`,
        }}
      >
        <div style={{ display: 'flex', gap: gap + 'px' }}>
          {[...Array(numDupes)].map((_) =>
            childArray.map((item, index) => <React.Fragment key={index}>{item}</React.Fragment>)
          )}
        </div>
        <div ref={setTickerContentsEl} style={{ display: 'flex', gap: gap + 'px' }}>
          {childArray.map((item, index) => (
            <React.Fragment key={index}>{item}</React.Fragment>
          ))}
        </div>
        <div style={{ display: 'flex', gap: gap + 'px' }}>
          {[...Array(numDupes)].map((_) =>
            childArray.map((item, index) => <React.Fragment key={index}>{item}</React.Fragment>)
          )}
        </div>
      </div>
    </div>
  );
};

export default Ticker;


//  <div
//   ref={scope}
//   className="FMT__container__contents"
//   style={{
//     display: "flex",
//     width: "max-content",
//     gap: gap + "px",
//   }}
// >
//   <div ref={setTickerContentsEl} style={{ display: "flex", gap: gap + "px" }}>
//     {childArray}
//   </div>
//   <div style={{ display: "flex", gap: gap + "px" }}>
//     {childArray}
//   </div>
// </div>