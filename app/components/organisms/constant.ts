import { githubIcon, linkedInIcon, twitterIcon } from "@/app/assets";

type NavigationProps = {
    name: string
    route: string
}

type MediaProps = {
    img: any,
    route: string
}

interface OrganismProps {
    navLinks: NavigationProps[]
    mediaLinks: MediaProps[]
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
}