import { githubIcon, twitterIcon, linkedInIcon } from "@/app/assets"
import { emailIcon } from "@/app/assets"
import { IconType } from "react-icons";

import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

interface AtomProps {
    mediaLinks: {
        Icon: IconType,
        route: string
    } []
}

export const mocks: AtomProps = { 
    mediaLinks: [
        {
            Icon: FaGithub,
            route: 'https://github.com/Praiz001'
        },
        {
            Icon: FaLinkedin,
            route: 'www.linkedin.com/in/praise-oshilim-4039aa10a'
        },
        {
            Icon: FaEnvelope,
            route: "mailto:oshilimpraisek@gmail.com",
        },
        {
            Icon: FaSquareXTwitter,
            route: 'https://twitter.com/praise_kel'
        },
        {
            Icon: FaInstagram,
            route: 'https://www.instagram.com/praisee_kel/'
        },
    ],
}