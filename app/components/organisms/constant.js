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
    // {
    //   img: twitterIcon,
    //   route: "https://twitter.com/DWebGuy_Praise",
    // },
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
    par1: "My journey into the world of tech kicked off in 2019 when I attended an Oil & Gas Pros conference (strange, right? - btw, I'm a geology grad) and was captivated by the capabilities of AR in Oil and Gas. That moment ignited a spark of curiosity in me, and let's just say, it's been a wild ride since then.",
    par2: "Fast forward to 2021, and that initial curiosity has turned into a full-blown passion. I found this amazing space where creativity and problem-solving collide, thanks to the magic of coding. The possibilities seemed limitless, and I was hooked. The challenges of being self-taught haven't stopped me because my love for development runs deep. I genuinely believe that technology has the power to change lives.",
    par3: "So, here I am, having worn a few hats along the way. I've freelanced for a B2B company, worked at a digital consultancy startup, and currently enjoying the thrill of working with a top 5 cryptocurrency exchange in Nigeria, where I've contributed in building some amazing products such as a crypto academy platform and it's admin dashboard, an internal CSS library, data visualization tool, responsive websites, etc",
    par4: "I'm very dedicated to learning, and that's been my not-so-secret weapon. So, let me spill the beans on my current tech crushes. I'm diving into the world of web3 and blockchain technology, getting cozy with DSA, and a bunch of other cool stuff. Learning is my jam, and I'm always hungry for that next byte of knowledge! 🚀",
    par5: "I love challenges, especially the ones that involve building cool stuff on the web! I'm always up for a coding adventure. Think we could build something together? Shoot me an email, and let's make some digital magic happen! 🚀✨",
  },

  contactMe: [
    {
      img: linkedInIcon,
      label: "Oshilim Praise",
      url: "https://www.linkedin.com/in/praise-oshilim-4039aa10a/",
    },
    // {
    //   img: twitterIcon,
    //   label: "@thewebguy_praise",
    //   url: "https://twitter.com/DWebGuy_Praise",
    // },
    {
      img: emailIcon,
      label: "oshilimpraisek@gmail.com",
      url: "mailto:oshilimpraisek@gmail.com",
    },
  ],
};