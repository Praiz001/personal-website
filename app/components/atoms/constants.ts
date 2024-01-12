import { githubIcon, twitterIcon, linkedInIcon } from "@/app/assets"
import { emailIcon } from "@/app/assets"

interface AtomProps {
    mediaLinks: {
        img: any,
        route: string
    } []
}

export const mocks: AtomProps = { 
    mediaLinks: [
        {
            img: githubIcon,
            route: 'https://github.com/Praiz001'
        },
        // {
        //     img: twitterIcon,
        //     route: 'https://twitter.com/DWebGuy_Praise'
        // },
        {
            img: linkedInIcon,
            route: 'www.linkedin.com/in/praise-oshilim-4039aa10a'
        },
        {
            img: emailIcon,
            route: "mailto:oshilimpraisek@gmail.com",
        },
    ],
}