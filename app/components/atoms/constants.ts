import { githubIcon, twitterIcon, linkedInIcon } from "@/app/assets"

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



}