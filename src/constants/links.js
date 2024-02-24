import { FaExternalLinkAlt, FaGithub, FaLinkedin, FaSkype } from "react-icons/fa"
import { IoMailOpenOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

export const links = [
    {
        href:'https://github.com/IvailoAtsv',
        text:"Github",
        icon:<FaGithub />,
    },
    {
        href:'https://www.linkedin.com/in/ivaylo-atanasov-7aa413268/',
        text:"LinkedIn",
        icon:<FaLinkedin />,
    },
    {
        href:'https://join.skype.com/invite/jTMxjLp9kgJP',
        text:"Skype",
        icon:<FaSkype />,
    },
    {
        href:'mailto:ivailoatanassovv@gmail.com',
        text:"Email",
        icon:<IoMailOpenOutline />,
    },
    {
        href:'tel:0879850066',
        text:"Mobile",
        icon:<FaPhone />
    },
   
]