"use client";

import "./about.css";
import { gsap } from "gsap";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { aboutData } from "@/components/utils/data";
import SkillsCard from './skillsCard';
import { useEffect } from "react";

export default function About() {

    useEffect(() => {
        const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 426px)').matches;

        if (isMobile) {
            return; // Skip animations for mobile devices
        }

        gsap.from(".aboutContent", {
            scrollTrigger: {
                trigger: "#about",
                start: "top 70%",
                end: "bottom 85%",
                scrub: 0.5,
            },
            markers: true,
            x: 50,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
        });

        const isTablet = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

        if (isTablet) {
            return; // Skip animations for tablet devices
        }

        gsap.from(".degreeImage", {
            scrollTrigger: {
                trigger: "#about",
                start: "top center",
                end: "bottom 85%",
                scrub: 0.5,
            },
            x: -100,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
        });
    }, []);

    return (
        <div className='about' id='about'>
            <div className='degreeImage'>
                <Image src="/images/about2.jpg" alt="degree" fill={true} quality={100} />
            </div>
            <div className='aboutContent'>
                <h1 className='text-5xl font-bold mb-10'>About Me</h1>
                <p>I am Anurag, a Software Engineer with over a year of experience building scalable authentication systems and modern web applications.
                    I specialize in frontend development with React and Ember, and I have hands-on experience working with backend systems, REST APIs, and databases. My focus is on creating reliable, user-centric products that balance performance with great user experience.
                    Beyond coding, I enjoy solving complex problems, experimenting with new technologies, and continuously refining my craft to deliver production-grade solutions.</p>

                <div className='flex gap-10 aboutCards'>
                    {aboutData.map((item) => (
                        <SkillsCard key={item.key} Icon={item.Icon} heading={item.heading} skills={item.skills} />
                    ))}
                </div>
                <div className='flex justify-left gap-5 mt-10 text-2xl'>
                    <FaReact />
                    <SiNextdotjs />
                    <RiTailwindCssFill />
                    <FaGitAlt />
                </div>
            </div>
        </div>
    )
}
