import { githubIcon, linkedInIcon, twitterIcon, emailIcon } from "@/app/assets";

type NavigationProps = {
    name: string
    route: string
}

type MediaProps = {
    img: any,
    route: string
}

interface SkillCategory {
    title: string;
    skills: string[];
}

interface SkillsProps {
    LangData: SkillCategory;
    DbData: SkillCategory;
    OtherData: SkillCategory;
    ToolsData: SkillCategory;
    FrameworkData: SkillCategory;
}

interface OrganismProps {
    navLinks: NavigationProps[]
    mediaLinks: MediaProps[]
    skills: SkillsProps
    aboutMe: {
        intro: string
        par1: string
        par2: string
    },
    contactMe: {
        img: any
        label: string
        url: string
    }[]
}

export const mocks: OrganismProps = {
    navLinks: [
        {
            name: 'home',
            route: '/home'
        },
        {
            name: 'works',
            route: '/works'
        },
        {
            name: 'about-me',
            route: '/about-me'
        },
        {
            name: 'contacts',
            route: '/contacts'
        },
    ],

    mediaLinks: [
        {
            img: githubIcon,
            route: '/#'
        },
        {
            img: twitterIcon,
            route: '/#'
        },
        {
            img: linkedInIcon,
            route: '/#'
        }
    ],

    skills: {
        LangData: {
            title: "Languages",
            skills: ["TypeScript", "TypeScript", "TypeScript"]
        },
        DbData: {
            title: "Databases",
            skills: ["TypeScript", "TypeScript", "TypeScript"]
        },
        OtherData: {
            title: "Other",
            skills: ["TypeScript", "TypeScript", "TypeScript"]
        },
        ToolsData: {
            title: "Tools",
            skills: ["TypeScript", "TypeScript", "TypeScript"]
        },
        FrameworkData: {
            title: "Frameworks",
            skills: ["TypeScript", "TypeScript", "TypeScript"]
        }
    },

    aboutMe: {
        intro: "Hello, i’m Elias!",
        par1: "I’m a self- taught front- end developer based in Kyiv, Ukraine.I can develop responsive websites from scratch and raise them into modern user - friendly web experiences.",
        par2: "Transforming my creativity and knowledge into a websites has been my passion for over a year.I have been helping various clients to establish their presence online.I always strive to learn about the newest technologies and frameworks."
    },

    contactMe: [
        {
            img: linkedInIcon,
            label: 'Oshilim Praise',
            url: ''
        },
        {
            img: twitterIcon,
            label: '@thewebguy_praise',
            url: '#'
        },
        {
            img: emailIcon,
            label: 'oshilimpraisek@gmail.com',
            url: '#'
        }
    ]



}