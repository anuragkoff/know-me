type dataType = {
  projectName: string;
  description: string;
  github: string;
}

export default function data(): dataType[] {
  return ([
    {
      projectName: "Resume Generator",
      description: "The project includes a modern resume builder with customizable templates and export options.",
      github: "https://github.com/yourusername/resume-generator",
    },
    {
      projectName: "Personal Portfolio",
      description: "The project includes a personal portfolio website showcasing skills, projects, and contact information.",
      github: "https://github.com/yourusername/personal-portfolio",
    },
    {
      projectName: "Predictive Maintenance",
      description: "The project includes a predictive maintenance system for industrial equipment.",
      github: "https://github.com/yourusername/predictive-maintenance",
    },
    ]
  )
}
