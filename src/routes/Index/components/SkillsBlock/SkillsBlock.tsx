import { Group, Pill } from "@mantine/core";

export function SkillsBlock() {
  const data = [
    {
      title: "React",
      categories: ["Frontend", "Library"],
    },
    {
      title: "TypeScript",
      categories: ["Frontend", "Markup Language"],
    },
    {
      title: "jQuery",
      categories: ["Frontend", "Library"],
    },
    {
      title: "HTML",
      categories: ["Frontend", "Markup Language"],
    },
    {
      title: "Rest API",
      categories: ["Backend", "Frontend", "Interface"],
    },
    {
      title: "PowerShell",
      categories: ["Backend", "Scripting Language", "Microsoft"],
    },
    {
      title: "Python",
      categories: ["Backend", "Programming Language"],
    },
    {
      title: "BeautifulSoup",
      categories: ["Library"],
    },
    {
      title: "Entity Framework",
      categories: ["Backend", "Framework", "Microsoft"],
    },
    {
      title: ".Net C#",
      categories: [
        "Backend",
        "Frontend",
        "Object Oriented",
        "Programming language",
        "Microsoft",
      ],
    },
    {
      title: "Mantine",
      categories: ["Frontend", "Library"],
    },
    {
      title: "Azure DevOps",
      categories: [
        "Code Managemement",
        "Platform",
        "Version Control",
        "Build Pipelines",
        "Release Pipelines",
        "CI/CD",
        "Branch Management",
        "Microsoft",
      ],
    },
    {
      title: "Git",
      categories: ["Code Managemement", "Version Control", "Branch Management"],
    },
    {
      title: "YAML",
      categories: ["Scripting Language", "Build Pipelines"],
    },
    {
      title: "Microsoft Azure",
      categories: ["Platform", "Hosting", "Cloud", "Microsoft"],
    },
    {
      title: "OpenAI API",
      categories: ["API"],
    },
    {
      title: "LESS",
      categories: ["Frontend"],
    },
    {
      title: "SASS",
      categories: ["Frontend"],
    },
    {
      title: "Progressive Web Apps",
      categories: ["Frontend"],
    },
    {
      title: "PHP",
      categories: ["Frontend", "Backend", "Scripting Language"],
    },
    {
      title: "SQL",
      categories: ["Backend", "Query Language"],
    },
    {
      title: "Kontent.AI",
      categories: ["Backend", "Headless CMS", "CMS"],
    },
    {
      title: "Sharepoint",
      categories: ["Backend", "Headless CMS", "CMS", "Microsoft"],
    },
    {
      title: "Ionic",
      categories: ["Framework", "Mobile", "Cross platform", "Frontend"],
    },
    {
      title: "Cordova",
      categories: ["Framework", "Mobile", "Cross platform", "Frontend"],
    },
    {
      title: "PhoneGap",
      categories: ["Framework", "Mobile", "Cross platform", "Frontend"],
    },
    {
      title: "React Native",
      categories: ["Framework", "Mobile", "Cross platform", "Frontend"],
    },
    {
      title: "Adobe Photoshop",
      categories: ["Graphics", "Adobe", "Design"],
    },
    {
      title: "Adobe Illustrator",
      categories: ["Graphics", "Adobe", "Design"],
    },
    {
      title: "Adobe Premiere Pro",
      categories: ["Graphics", "Adobe", "Design", "Video", "Animatie"],
    },
    {
      title: "Adobe Audition",
      categories: ["Audio", "Adobe", "Design", "Animatie"],
    },
    {
      title: "3dsMax",
      categories: ["Graphics", "Design", "3D", "Animatie"],
    },
  ];

  return (
    <Group>
      {data.map((skill) => (
        <Pill key={skill.title} color="blue">
          {skill.title}
        </Pill>
      ))}
    </Group>
  );
}
