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
    "At the end of 2023, I quit my job on DXC Technology to go fulltime into building and scaling one startup [Wings AI](#) with my mentor. In the past, [I pursued a degree in system informations and MBA in Business Administration](/#education), [I competed in 2 hackathons, winning 2 podiums, 1 gold and one bronze](/#hackathons).",
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
      logoUrl: "/wings.svg",
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
      href: "https://next.edu.br",
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
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
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
