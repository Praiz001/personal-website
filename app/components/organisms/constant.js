import { githubIcon, linkedInIcon, twitterIcon, emailIcon } from "@/app/assets";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const mocks = {
  navLinks: [
    {
      name: "home",
      route: "/",
    },
    {
      name: "projects",
      route: "/projects",
    },
    {
      name: "about-me",
      route: "/about-me",
    },
    {
      name: "contacts",
      route: "/contacts",
    },
  ],

  mediaLinks: [
    {
      Icon: FaGithub,
      route: "https://github.com/Praiz001",
    },
    {
      Icon: FaLinkedin,
      route: "www.linkedin.com/in/praise-oshilim-4039aa10a",
    },
    {
      Icon: FaEnvelope,
      route: "mailto:oshilimpraisek@gmail.com",
    },
    {
      Icon: FaSquareXTwitter,
      route: "https://twitter.com/praise_kel",
    },
    {
      Icon: FaInstagram,
      route: "https://www.instagram.com/praisee_kel/",
    },
  ],

  skills: {
    LangData: {
      title: "Languages",
      skills: ["Javascript,", "TypeScript,", "Solidity,"],
    },
    ToolsData: {
      title: "Tools",
      skills: ["VScode,", "Git,", "Postman,", "Swagger Docs"],
    },
    libData: {
      title: "Libraries",
      skills: [
        "ReactJs,",
        "Redux,",
        "Jest,",
        "RTL,",
        "NPM,",
        "Charting Libraries",
      ],
    },
    OtherData: {
      title: "Other",
      skills: ["HTML,", "CSS,", "SASS,", "RestAPIs,", "Web Sockets"],
    },

    FrameworkData: {
      title: "Frameworks",
      skills: ["NextJs,", "VueJs,", "NuxJs"],
    },
  },

  aboutMe: {
    intro:
      "👋 Hello there! I'm Praise Oshilim, a passionate frontend developer with a flair for crafting seamless and visually appealing digital experiences.",
    par1: "I excel in a diverse tech stack, crafting responsive web applications that seamlessly blend aesthetics and functionality. My focus on clean code and intuitive design ensures a flawless user experience across various devices.",
    par2: `${
      new Date().getFullYear() - 2021
    } years in, I've donned multiple hats – from a digital consultancy startup to freelancing for a B2B firm. Currently, I'm rocking it at a top 3 cryptocurrency exchange in Nigeria, where I focus on building and maintaining a crypto-academy (ed-tech solution), an internal CSS library, websites etc`,
    par3: "What sets me apart is not just my commitment to staying updated with the latest web development trends, but my meticulous eye for detail and a strong ownership mindset. This ensures that the applications I create not only meet but exceed the expectations of today's dynamic online landscape.",
    par4: "I'm always eager to explore exciting projects and potential collaborations. Feel free to connect if you have interesting ventures or challenges worth discussing! 🚀💻",
  },

  contactMe: [
    {
      Icon: FaLinkedin,
      label: "Praise Oshilim",
      url: "https://www.linkedin.com/in/praise-oshilim-4039aa10a/",
    },
    {
      Icon: FaEnvelope,
      label: "oshilimpraisek@gmail.com",
      url: "mailto:oshilimpraisek@gmail.com",
    },
    {
      Icon: FaSquareXTwitter,
      label: "@praise_kel",
      url: "https://twitter.com/praise_kel",
    },
  ],
};