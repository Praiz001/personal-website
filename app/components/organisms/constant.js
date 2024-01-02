import { githubIcon, linkedInIcon, twitterIcon, emailIcon } from "@/app/assets";


export const mocks = {
  navLinks: [
    {
      name: "home",
      route: "/home",
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
      img: githubIcon,
      route: "https://github.com/Praiz001",
    },
    {
      img: twitterIcon,
      route: "https://twitter.com/DWebGuy_Praise",
    },
    {
      img: linkedInIcon,
      route: "www.linkedin.com/in/praise-oshilim-4039aa10a",
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
      "Hello there! I'm Praise, a self-taught software developer from the vibrant city of Lagos, Nigeria. I'm passionate about crafting digital solutions that make a difference.",
    par1: "My journey into the world of tech kicked off back in 2019 when I attended an Oil & Gas Pros conference (strange, right? - btw, I'm a geology grad). I watched in amazement as a developer showcased the wonders of AR. That moment ignited a spark of curiosity in me, and let's just say, it's been a wild ride since then.",
    par2: "My journey into the world of tech kicked off back in 2019 when I attended an Oil & Gas Pros conference (strange, right? - btw, I'm a geology grad). I watched in amazement as a developer showcased the wonders of AR. That moment ignited a spark of curiosity in me, and let's just say, it's been a wild ride since then.",
    par3: "My journey into the world of tech kicked off back in 2019 when I attended an Oil & Gas Pros conference (strange, right? - btw, I'm a geology grad). I watched in amazement as a developer showcased the wonders of AR. That moment ignited a spark of curiosity in me, and let's just say, it's been a wild ride since then.",
    par4: "My journey into the world of tech kicked off back in 2019 when I attended an Oil & Gas Pros conference (strange, right? - btw, I'm a geology grad). I watched in amazement as a developer showcased the wonders of AR. That moment ignited a spark of curiosity in me, and let's just say, it's been a wild ride since then.",
  },

  contactMe: [
    {
      img: linkedInIcon,
      label: "Oshilim Praise",
      url: "https://www.linkedin.com/in/praise-oshilim-4039aa10a/",
    },
    {
      img: twitterIcon,
      label: "@thewebguy_praise",
      url: "https://twitter.com/DWebGuy_Praise",
    },
    {
      img: emailIcon,
      label: "oshilimpraisek@gmail.com",
      url: "mailto:oshilimpraisek@gmail.com",
    },
  ],
};