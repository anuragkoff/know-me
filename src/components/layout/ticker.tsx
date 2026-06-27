"use client";

import React, { useState, useEffect, useRef, Fragment } from "react";
import {
  AnimationPlaybackControls,
  useAnimate,
  useInView,
} from "framer-motion";

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

export default function Ticker (props: TickerProps) {
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

  // Ref for the outer container (used to calculate fill dupes)
  const containerRef = useRef<HTMLDivElement>(null);

  // Ref for the single "source" set of children — used to measure content width
  const tickerContentsRef = useRef<HTMLDivElement>(null); //original content ref

  // Ref for the animated element (the inner scrolling strip)
  const [animationScope, animate] = useAnimate();

  // useInView watches the outer container so animation pauses when off-screen
  const isInView = useInView(containerRef);

  const [tickerContentWidth, setTickerContentWidth] = useState<number>(0);
  const [numDupes, setNumDupes] = useState<number>(1);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  const [animationControls, setAnimationControls] = useState<AnimationPlaybackControls | undefined>(undefined);

  const childArray = React.Children.toArray(children);

  const directionMultiplier =
    direction === 'left' || direction === TICKER_DIRECTION_LEFT
      ? TICKER_DIRECTION_LEFT
      : TICKER_DIRECTION_RIGHT;

  useEffect(() => {
    const container = containerRef.current;
    const contentsEl = tickerContentsRef.current;
    if (!container || !contentsEl) return;

    const measure = () => {
      const contentWidth = contentsEl.getBoundingClientRect().width;
      if (contentWidth === 0) return;
      setTickerContentWidth(contentWidth);
      // Fill at least 2× the container width with duplicates
      const containerWidth = contentsEl.getBoundingClientRect().width;
      setNumDupes((Math.ceil(containerWidth / contentWidth) + 1) * 2);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(container);
    observer.observe(contentsEl);
    return () => observer.disconnect();
  }, []);

  // Using explicit [from, to] keyframes prevents jump-on-restart glitches.
  useEffect(() => {
    if (!isInView || tickerContentWidth <= 0) return;

    if (animationControls) {
      animationControls.stop();
    }

    const to = tickerContentWidth * directionMultiplier - gap;

    const controls = animate(
      animationScope.current,
      { x: [0, to] },          // always restart from 0 — no mid-animation jumps
      {
        ease: "linear",
        duration,
        repeat: Infinity,
        repeatType: "loop",
      }
    );

    if (!isPlaying || prefersReducedMotion) {
      controls.pause();
    }

    setAnimationControls(controls);

    // Cleanup on unmount / re-run
    return () => controls.stop();
  }, [isInView, tickerContentWidth, directionMultiplier, duration]);

  // Play / pause in response to prop/state changes
  useEffect(() => {
    if (!animationControls) return;

    const shouldPause =
      !isInView ||
      !isPlaying ||
      (pauseOnHover && isHovered) ||
      prefersReducedMotion;

    if (shouldPause) {
      animationControls.pause();
    } else {
      animationControls.play();
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

  // Layout explanation:
  //   [outer container — clips overflow, ref=containerRef]
  //     [animated strip — ref=animationScope, x is transformed by Framer Motion]
  //       [dupes before]  [measured source — ref=tickerContentsRef]  [dupes after]
  return (
    <div
      className="ticker"
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* This is the element Framer Motion translates */}
      <div
        ref={animationScope}
        className="ticker-contents"
        style={{
          display: "flex",
          width: "max-content",
          gap: `${gap}px`,
        }}
      >
        {/* Duplicates BEFORE the source set — keeps the strip filled as it scrolls left */}
        <div style={{ display: 'flex', gap: `${gap}px` }}>
          {[...Array(numDupes)].map((_) =>
            childArray.map((item, index) => <Fragment key={index}>{item}</Fragment>)
          )}
        </div>

        {/* Source set — only this div is measured for tickerContentWidth */}
        <div
          ref={tickerContentsRef}
          style={{ display: "flex", gap: `${gap}px` }}
        >
          {childArray.map((item, index) => (
            <Fragment key={`source-${index}`}>{item}</Fragment>
          ))}
        </div>

        {/* Duplicates AFTER the source set — keeps the strip filled as it scrolls right */}
        <div style={{ display: 'flex', gap: `${gap}px` }}>
          {[...Array(numDupes)].map((_) =>
            childArray.map((item, index) => <Fragment key={index}>{item}</Fragment>)
          )}
        </div>
      </div>
    </div>
  );
};
