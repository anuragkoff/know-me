import "./about.css";

type skillsCardType = {
  Icon: React.ComponentType<{size?: number}>,
  heading: string,
  skills: string[]
}

export default function SkillsCard({Icon, heading, skills}: skillsCardType) {
  return (
    <div className="skills card flex flex-col text-left gap-4 mt-10 bg-gray-100 p-4 dark:bg-gray-800">
        <Icon size={30} />
        <h3 className="text-xl text-bold">{heading}</h3>
        <ul className="flex flex-wrap gap-1 text-sm">
            {skills.map((skill, index) => (
                <li className="skill" key={index}>{skill}</li>
            ))}
        </ul>
    </div>
  )
}
