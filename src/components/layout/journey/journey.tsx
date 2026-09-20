"use client";

import './journey.css';
import { useEffect } from 'react';
import gsap from 'gsap';
import { stackedData } from "@/components/utils/data";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import CircleScroll from './circle-scroll';
import StackedCard from "./stacked-card";

export default function Journey() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#fillRect", {
      scrollTrigger: {
        trigger: ".journeyWrapper",
        start: "top 10%",
        end: "bottom 50%",
        scrub: true,
        pin: ".pin"
      },
      attr: { y: 20 },  // moves rectangle upward, revealing the fill
    });

    const tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: '.journeyWrapper',
        start: 'top 10%',
        end: 'bottom 50%',
        pin: true,
        pinSpacing: false,
        scrub: 1,
      },
    });

    tl.to('.cardContainer .textWrapper', {
      height: 0,
      paddingBottom: 0,
      opacity: 0,
      stagger: 0.5,
    });

    const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 426px)').matches;

    tl.to(
      '.cardContainer',
      {
        marginBottom: isMobile ? -100 : -60,
        stagger: 0.5,
      },
      '<'
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="journeyWrapper" id="journey">
      <CircleScroll />
      <div className="journeyContainer">
          {stackedData.map((Item: { description: string; subtitle: string; title: string }, index: number) => (
              <StackedCard
                description={Item.description}
                key={index}
                subtitle={Item.subtitle}
                title={Item.title}
              />
          ))}
      </div>
    </div>
  )
}
