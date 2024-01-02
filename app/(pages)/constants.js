import { mealMasterImg, portfolio, tskTrack } from "../assets";

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
              name: "GitHub </>",
              url: "https://github.com/Praiz001/personal-website",
              variant: "secondary",
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
              name: "GitHub </>",
              url: "https://github.com/Praiz001/FinChart",
              variant: "secondary",
            },
          ],
        },
      ],
      gridTitle: "projects",
      seeMoreBtn: true,
      hasHorzLine: true,
    },
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
              name: "GitHub </>",
              url: "https://github.com/Praiz001/personal-website",
              variant: "secondary",
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
              name: "GitHub </>",
              url: "https://github.com/Praiz001/FinChart",
              variant: "secondary",
            },
          ],
        },
      ],
      gridTitle: "recent-projects",
      seeMoreBtn: false,
      hasHorzLine: false,
    },

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
              name: "Live <~>",
              url: "https://gericht-luxe-restaurant.netlify.app/",
              variant: "primary",
            },
            {
              name: "GitHub </>",
              url: "https://github.com/Praiz001/mealMaster",
              variant: "secondary",
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
              name: "Live <~>",
              url: "https://task-tracker-application.vercel.app/",
              variant: "primary",
            },
            {
              name: "GitHub </>",
              url: "https://github.com/Praiz001/taskTracker",
              variant: "secondary",
            },
          ],
        },
      ],
      gridTitle: "archived-projects",
      seeMoreBtn: false,
      hasHorzLine: false,
    },
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
        skills: ["VScode,", "Git,", "Postman,", "Swagger Docs"],
      },
    ],
    funFacts: [
      "I like to watch football ⚽",
      "I am a Chelsea fan.",
      "I tend to sleep during movies.",
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
