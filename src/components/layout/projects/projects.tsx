"use client";

import "./project.css";
import data from "@/components/utils/data";
import Card from '../card/card'

export default function Projects() {
  const cardData = data();

  return (
    <div className="flex flex-row justify-evenly gap-4 mt-10 projects" id="projects">
        {cardData.map((project) => (
            <Card key={project.projectName} name={project.projectName} description={project.description} github={project.github} img={project.img} />
        ))}
    </div>
  )
}
