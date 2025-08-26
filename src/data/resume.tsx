import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Raul Primo",
  initials: "RP",
  url: "https://primotech.com.br",
  location: "São Paulo, Brazil",
  locationLink: "https://www.google.com/maps/place/São Paulo",
  description:
    "Software Engineer and now I'm building things with AI. I love building things and helping people. Most active on Linkedin",
  summary:
    "At the end of 2024, I quit my job at DXC Technology to go full-time into building and scaling a startup, [Wings AI](#work), with my mentor. I pursued a degree in [Information Systems and i'm doing an MBA in Business Administration](/#education), [I competed in two hackathons, winning two podiums: one gold and one bronze](/#hackathons).",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Tailwind",
    "Postgres",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "raul.primo.ti@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/raulhprimo",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/raul-primo-5468a6234/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/_primotech",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Wings AI",
      href: "https://www.wingsgroup.ai",
      badges: [],
      location: "Hybrid",
      title: "AI Engineer",
      logoUrl: "/Wings.svg",
      start: "October 2024",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "DXC Technology",
      badges: [],
      href: "https://dxc.com",
      location: "On-Site",
      title: "Intern",
      logoUrl: "/dxc.png",
      start: "August 2023",
      end: "October 2024",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
    {
      school: "Next University",
      href: "https://nextmba.com",
      degree: "Master's of Business Administration (MBA)",
      logoUrl: "https://optim.tildacdn.net/tild3432-3033-4165-a138-366331656162/-/resize/116x/-/format/webp/white_bg-svg-2.png.webp",
      start: "2025",
      end: "2026",
    },
    {
      school: "Anhembi Morumbi University",
      href: "https://anhembi.br",
      degree: "Bachelor's Degree of Information Systems (BSI)",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGRyoB0ImvcXHYLPeQ7qhGt7vYjo-biSb_A&s",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "SmartFIN",
      href: "https://smartfin.ai",
      dates: "Present",
      active: true,
      description:
        "Smartfin is a solution for business owners and entrepreneurs designed to simplify financial management with just one click.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Python",
        "FastAPI",
        "GCP",
        "Docker",
        "Grafana",
        "Langfuse",
      ],
      links: [
        {
          type: "Website",
          href: "https://smartfin.ai",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/Smartfin.mp4",
    },
    {
      title: "BeloPrato",
      href: "https://beloprato.com.br",
      dates: "December 2024 - Present",
      active: true,
      description:
        "BeloPrato is a solution for restaurants that do not have a menu or do not have images for their menu.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://beloprato.com.br",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/belo-prato.mp4",
    },
    {
      title: "DigitalPubli",
      href: "https://digitalpubli.ai",
      dates: "December 2024 - April 2025",
      active: true,
      description:
        "DigitalPubli is a tool for influencers and social media users to discover viral insights behind videos on Instagram, Facebook, TikTok, and YouTube.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://digitalpubli.air",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/digita-publi.mov",
    },
    {
      title: "AnalisaAI",
      href: "https://analisa.ai",
      dates: "Present",
      active: true,
      description:
        "AnalisaAI is a personal project I developed for data analysis, designed to simplify data analysis in any type of Excel spreadsheet.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Python",
        "FastAPI",
        "Docker"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/raulhprimo/AnalisaAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/analisai.mp4",
    },
  ],
  hackathons: [
    {
      title: "OftalmoHack",
      dates: "July 1rd - 13th, 2025",
      location: "São Paulo, Brazil - HCFMUSP",
      description:
        "Developed a mobile application for residents and fellow studentes to improve their studies and their logbook",
      image: "/oftalmohack.png",
      mlh: "",
      links: [],
    },
    {
      title: "OftalmoHack",
      dates: "July 3rd - 13th, 2024",
      location: "São Paulo, Brazil - HCFMUSP",
      description:
        "Developed a AI agent to help ophalmologists patients with chronic diseases.",
      image: "/oftalmohack.png",
      mlh: "",
      links: [],
    },
  ],
} as const;
