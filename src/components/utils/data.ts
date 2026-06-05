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

export default function data(): dataType[] {
  return [
    {
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
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
