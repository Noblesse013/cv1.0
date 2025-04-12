import {
 Logo
} from "../images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "../components/icons";

export const RESUME_DATA = {
  name: "Mehreen Mallick Fiona",
  title: "Software Engineer",
  initials: "MMF",
  location: " Dhaka, Bangladesh",
  locationName: "Dhaka",  
  locationLink: "https://www.google.com/maps/",
  about:
    " A girl who loves to learn and share knowledge.",  
  summary: (
    <>
      I am a dedicated Computer Science Engineering student actively honing my skills in Python, Java, HTML, and SQL. With a strong foundation in programming languages and a thirst for knowledge. And I am committed to mastering the latest tools and techniques in the field of software development. Continuously expanding my skill set through self-directed learning and online courses.
    </>
  ),
  avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQH5SqhxUTW5TQ/profile-displayphoto-shrink_200_200/B56ZScwyt.GsAY-/0/1737796825253?e=1749686400&v=beta&t=yHErP3fXqG3foC0G-GkQxw3IPoKRnYJHzCCDL_pJ4WI",
  personalWebsiteUrl: "https://defang.io/",
  contact: {
    email: "mhfiona1309@gmail.com",
    tel: "+1234567890",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Noblesse013",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mehreen-mallick-fiona/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/fionabiie03",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "BRAC University",
      link: "https://www.bracu.ac.bd/",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      company: "HeadStarter",
      link: "about:blank",
      badges: ["Remote", "React", "TypeScript", "Node.js"],
      title: "SWE Fellow",
      logo: Logo,
      start: "July - 2024",
      end: "September - 2024",
      description: (
        <>
          Built and deployed 5 AI projects in 5 weeks using React JS, Next.js, Firebase, Clerk, and Vercel, following agile methodologies with weekly sprints and incorporated CI/CD practices for iterative deployment
          <ul className="list-inside list-disc">
            <li>
            Built 5 AI applications in 5 weeks using React, Next.js, Firebase, and Clerk.
            </li>
            <li>
            Followed Agile methodologies with weekly sprints for task prioritization and user feedback integration. 
            </li>
            <li>
            Implemented CI/CD via Vercel for automated testing, continuous deployment, and rapid updates 
            </li>
          </ul>
        </>
      ),
    },
    
  ],
  skills: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Python",
    "Java",
    "PostgreSQL", 
    "SQL",
    "HTML",
    "CSS",
    "Javascript",
    "Remote Team Leadership",
  ],
  projects: [
    {
      title: "Study-Starter",
      techStack: ["TypeScript", "Tailwind CSS", "Vite", "React"],
      description:
        "Your personal study companion to overcome procrastination and build consistent study habits.",
      logo: Logo,
      link: {
        label: "blank",
        href: "about:blank",
      },
    },
    {
      title: "Fio’s AI Summarizer App",
      techStack: [
        "TypeScript",
        "OpenAI",
        "Tailwind CSS",
      ],
      description:
        "An AI-powered tool that extracts key insights from lengthy texts and articles.",
      logo: Logo,
      link: {
        label: "blank",
        href: "about:blank",
      },
    },
    {
      title: "Self-Love Generator",
      techStack: ["TypeScript", "React+Vite", "Tailwind CSS"],
      description:
        "A tool for singles to embrace self-love during Valentine's. Generate personalized affirmations and reminders of your worth!",
      logo: Logo,
      link: {
        label: "blank",
        href: "about:blank",
      },
    },
  ],
} as const;
