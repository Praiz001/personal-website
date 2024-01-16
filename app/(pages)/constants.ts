import { StaticImageData } from "next/image";

import { mealMasterImg, portfolio, tskTrack, arrUpRightIcon, srcCodeIcon } from "../assets";
import { FaCode } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";


type ProjectsGridType = {
  data: {
    projects: {
      hasWebView: boolean
      projectTools: string[]
      projectTitle: string
      projectDesc: string
      projectImg: StaticImageData
      projectActions: {
        name: string
        url: string
        variant: "primary" | "secondary"
        btnImg: any
      }[]
    }[]
    gridTitle: string
    seeMoreBtn: boolean
    hasHorzLine: boolean
  }
}


export const mocks = {
  // ======> data for home page <========
  homepage: {
    projectGrid: {
      projects: [
        {
          hasWebView: true,
          projectTools: ["NextJs", "Typescript"],
          projectTitle: "Portfolio",
          projectDesc: "Developer Portfolio Website",
          projectImg: portfolio,
          projectActions: [
            {
              name: "GitHub",
              url: "https://github.com/Praiz001/personal-website",
              variant: "secondary",
              btnImg: srcCodeIcon,
            },
          ],
        },
        {
          hasWebView: false,
          projectTools: ["ReactJs", "WebSocket", "Redux", "Charts"],
          projectTitle: "Price Feed",
          projectDesc: "Realtime BTC/USDT price chart using binance API",
          projectActions: [
            {
              name: "GitHub",
              url: "https://github.com/Praiz001/FinChart",
              variant: "secondary",
              btnImg: srcCodeIcon,
            },
          ],
        },
      ],
      gridTitle: "projects",
      seeMoreBtn: true,
      hasHorzLine: true,
    } as ProjectsGridType['data'],
  },

  // ======> data for projects page <========
  projectsPage: {
    pageHeading: {
      title: "projects",
      desc: "List of my projects",
    },
    completeProjectGrid: {
      projects: [
        {
          hasWebView: true,
          projectTools: ["NextJs", "Typescript"],
          projectTitle: "Portfolio",
          projectDesc: "Developer portfolio website",
          projectImg: portfolio,
          projectActions: [
            {
              name: "GitHub",
              url: "https://github.com/Praiz001/personal-website",
              variant: "secondary",
              btnImg: srcCodeIcon,
            },
          ],
        },
        {
          hasWebView: false,
          projectTools: ["ReactJs", "WebSocket", "Redux", "Charts"],
          projectTitle: "Price Feed",
          projectDesc: "Realtime BTC/USDT price chart using binance API",
          projectActions: [
            {
              name: "GitHub",
              url: "https://github.com/Praiz001/FinChart",
              variant: "secondary",
              btnImg: srcCodeIcon,
            },
          ],
        },
      ],
      gridTitle: "recent-projects",
      seeMoreBtn: false,
      hasHorzLine: false,
    } as ProjectsGridType['data'],

    ongoingProjectGrid: {
      projects: [
        {
          hasWebView: true,
          projectTools: ["ReactJs", "CSS", "Javascript"],
          projectTitle: "MealMaster",
          projectDesc: "Landing page for a restaurant web app.",
          projectImg: mealMasterImg,
          projectActions: [
            {
              name: "Live",
              url: "https://gericht-luxe-restaurant.netlify.app/",
              variant: "primary",
              btnImg: arrUpRightIcon,
            },
            {
              name: "GitHub",
              url: "https://github.com/Praiz001/mealMaster",
              variant: "secondary",
              btnImg: srcCodeIcon,
            },
          ],
        },
        {
          hasWebView: true,
          projectTools: ["ReactJs", "CSS", "Javascript"],
          projectTitle: "Task Track",
          projectDesc: "Task tracking app",
          projectImg: tskTrack,
          projectActions: [
            {
              name: "Live",
              url: "https://task-tracker-application.vercel.app/",
              variant: "primary",
              btnImg: arrUpRightIcon,
            },
            {
              name: "GitHub",
              url: "https://github.com/Praiz001/taskTracker",
              variant: "secondary",
              btnImg: srcCodeIcon,
            },
          ],
        },
      ],
      gridTitle: "archived-projects",
      seeMoreBtn: false,
      hasHorzLine: false,
    } as ProjectsGridType['data'],
  },

  // ======> data for about-me page <========
  aboutmePage: {
    pageHeading: {
      title: "about-me",
      desc: "Who am I ?",
    },
    skills: [
      {
        title: "Languages",
        skills: ["Javascript,", "TypeScript,", "Solidity,"],
      },
      {
        title: "Frameworks",
        skills: ["NextJs"],
      },
      {
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
      {
        title: "Other",
        skills: ["HTML,", "CSS,", "SASS,", "RestAPIs,", "Web Sockets"],
      },
      {
        title: "Tools",
        skills: ["VScode,", "Git,", "Postman,"],
      },
    ],
    funFacts: [
      "I like to watch football ⚽",
      "I am a Chelsea fan.",
      "I always doze off at the movies 🥴",
      "I'm the first of 5 sibblings.",
    ],
  },

  // ======> data for contact page <========
  contactmePage: {
    pageHeading: {
      title: "contacts",
      desc: "Want to reach me ?",
    },
  },
};
