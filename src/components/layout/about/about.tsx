import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import {aboutData} from "@/components/utils/data";
import SkillsCard from './skillsCard';

const iconMap: { [key: string]: React.ComponentType<{ size?: number }> } = {
    "FaCode": FaCode,
    "GoBook": GoBook,
    // Add more mappings as needed
};

export default function About() {
    return (
        <div className='flex justify-evenly gap-10 m-10' id='about'>
            <div>
                <p>Degree</p>
            </div>
            <div className='w-1/2'>
                <h1 className='text-5xl font-bold mb-10'>About Me</h1>
                <p>I am Anurag, a Software Engineer with over a year of experience building scalable authentication systems and modern web applications.
                    I specialize in frontend development with React and Ember, and I have hands-on experience working with backend systems, REST APIs, and databases. My focus is on creating reliable, user-centric products that balance performance with great user experience.
                    Beyond coding, I enjoy solving complex problems, experimenting with new technologies, and continuously refining my craft to deliver production-grade solutions.</p>

                <div className='flex gap-10'>
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
                {/* <h3>Skills</h3>
                <h5>Java</h5>
                <h5>Python</h5>
                <h5>JavaScript</h5>
                <h5>TypeScript</h5>
                <h5>React</h5>
                <h5>Next.js</h5>
                <h5>Ember.js</h5> */}
            </div>
        </div>
    )
}
