"use client";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import styles from './card.module.css';
import { FaGithub } from "react-icons/fa";
import { useEffect } from 'react';

export default function Card({
  name,
  description,
  github,
  img,
}: {
  name: string;
  description: string;
  github: string;
  img: string;
}) {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#projects',
        start: 'top 80%',
      }
    });

    tl.fromTo('#projects', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
    }, {
      opacity: 1,
      y: 0,
      duration: 2,
      stagger: 0.4,
    });
  });

  return (
    <div className={`card ${styles.card}`} id="projects">
        <div className={styles.cardImage}>
          {img ? (
            <Image
              src={img}
              alt={name ?? 'card image'}
              width={320}
              height={180}
              className={styles.image}
            />
          ) : null}
        </div>
        <div className={styles.category}> {name} </div>
        <div className={styles.heading}>
            {description}
            <div className='bottom-3 right-3'>
                <a className={styles.icons} href={github} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={25} />
                </a>
            </div>
        </div>
    </div>
  )
}
