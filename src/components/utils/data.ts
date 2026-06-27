import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaCode, FaCss3, FaGithub, FaJava, FaReact } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

type dataType = {
  projectName: string;
  description: string;
  github: string;
  img: string;
};

type aboutData = {
  key: number;
  Icon: React.ComponentType<{ size?: number }>;
  heading: string;
  skills: string[];
};

type infinityLogo = {
  Icon: React.ComponentType<{}>;
};

export type stackedDataType = {
  title: string,
  subtitle: string,
  description: string
}

export default function data(): dataType[] {
  return [
    {
      img: "/images/gymPic.jpg",
      projectName: "GymLions",
      description:
        "GymLions — a fast, responsive fitness site built with React and JIT for speed, efficiency, and smooth performance.",
      github: "https://github.com/anuragkoff/gymlions",
    },
    {
      img: "https://designnotes.blog.gov.uk/wp-content/uploads/sites/53/2020/06/Portfolio-Desk.jpg",
      projectName: "Personal Portfolio",
      description:
        "The project includes a personal portfolio website showcasing skills, projects, and contact information.",
      github: "https://github.com/anuragkoff/know-me",
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/034/044/658/non_2x/2d-predictive-maintenance-text-with-various-thin-line-icons-concept-on-dark-blue-monochromatic-background-editable-2d-illustration-vector.jpg",
      projectName: "Predictive Maintenance",
      description:
        "The project includes a predictive maintenance system for industrial equipment. Predicts the cost and timeline for maintenance activities.",
      github: "https://github.com/yourusername/predictive-maintenance",
    },
  ];
}

export const aboutData: aboutData[] = [
  {
    key: 1,
    Icon: FaCode,
    heading: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Java"],
  },
  {
    key: 2,
    Icon: GoBook,
    heading: "Education",
    skills: ["B.Tech in Computer Science"],
  },
  {
    key: 3,
    Icon: FaCode,
    heading: "Projects",
    skills: ["Git", "Docker", "Jenkins", "AWS"],
  },
];

export const infinityLogo = [
  FaGithub,
  FaCss3,
  FaReact,
  FaJava,
  RiNextjsFill,
  RiTailwindCssFill,
  IoLogoJavascript,
  BiLogoTypescript,
];

export const stackedData: stackedDataType[] = [
  {
    title: "The Beginning",
    subtitle: "Chose the craft. Committed to the depth.",
    description:
      "I didn't stumble into development — I chose it deliberately and went all in. From day one, the goal was never just to write code that works. It was to build interfaces that feel right, perform right, and scale right. I didn't just want to learn to code. I wanted to build things people actually feel.",
  },
  {
    title: "Production Reality",
    subtitle: "Ember.js, Jamf, and lessons no tutorial teaches.",
    description:
      "At Metacube Software, I shipped production-grade features on the Jamf account — debugging ARIA failures, fixing keyboard accessibility issues, and refactoring components real users depend on daily. I learned fast that the gap between working code and quality code is where real engineers separate themselves.",
  },
  {
    title: "The Hunger",
    subtitle: "TypeScript, React, and the obsession to go deeper.",
    description:
      "Shipping wasn't enough. I went deeper into TypeScript's type system, React patterns, and REST API integration — then built a full-stack freelance marketplace on the side just to own something end to end. Currently learning Go. Not because it's trending — because I'm building toward fullstack mastery, one layer at a time.",
  },
  {
    title: "What's Next",
    subtitle: "Frontend today. Fullstack tomorrow. Impact always.",
    description:
      "I bring sharp frontend skills, a systems mindset, and the drive of someone who knows they're just getting started. If you're building meaningful products and need an engineer who thinks beyond the ticket — I'm ready.",
  }
];
