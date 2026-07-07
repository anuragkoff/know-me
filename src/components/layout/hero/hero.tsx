"use client";

import './hero.css';
import Image from 'next/image';
import Link from 'next/link';
import { IoCloudDownloadOutline } from "react-icons/io5";
import TypeWriter from "./typewriter";
import { gsap } from 'gsap';
import { useEffect } from 'react';
export default function HeroSection() {

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.landingImage', { opacity: 0, duration: 3 });

      gsap.fromTo('.frontPage h1',{ scaleY: 0 }, {
        scaleY: 1,
        color: 'white',
        duration: 0.5,
        ease: 'easeOut',
      });

      gsap.fromTo('.frontPage h1',{ color: 'teal' }, {
        y: 0,
        color: 'white',
        duration: 1,
        ease: 'easeOut',
      });

      gsap.to('.frontPage', {
        y: -1000,
        duration: 2,
        delay: 1,
        ease: 'power2.out',
      });

      gsap.from('.heroContent', {
        x: -1000,
        duration: 1,
        delay: 1.5,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="frontPage">
        <h1>Anurag</h1>
      </div>
      <div className="heroContent relative min-h-screen items-center px-16 py-32 font-sans dark:bg-#000000" id="hero">
        {/* <div className="heroElements"> */}
        <div className="typeWriter">
          <h1 className="flex text-5xl font-bold"><TypeWriter /></h1>
          <p className="mt-4 text-lg">A passionate developer and lifelong learner.</p>
        </div>
        <div className="heroButtons">
          <a href="/resume" className="resume flex gap-x-1.5 items-center mt-4">
            Resume
          </a>
        </div>
        {/* </div> */}
      </div>
        <Image
          className="landingImage"
          src="/images/hero.jpg"
          quality={100}
          alt="Hero Image"
          fill={true}
        />
    </>
  )
}
