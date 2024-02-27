import { BsBootstrapFill } from "react-icons/bs";
import { FaSass, FaShopify, FaArrowDown, FaNodeJs, FaReact, FaHtml5, FaJsSquare, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMui } from "react-icons/si";

const iconStyle = "mx-6 hover:text-purple text-iconClamp md:mt-1 mt-3"

export const icons = [
    { icon: <FaReact className={iconStyle} />, title: 'React JS' },
    { icon: <SiTypescript className={iconStyle} />, title: 'Typescript' },
    { icon: <FaNodeJs className={iconStyle} />, title: 'Node JS' },
    { icon: <FaJsSquare className={iconStyle} />, title: 'Javascript' },
    { icon: <FaHtml5 className={iconStyle} />, title: 'HTML 5' },
    { icon: <FaCss3Alt className={iconStyle} />, title: 'CSS 3' },
    { icon: <SiTailwindcss className={iconStyle} />, title: 'Tailwind CSS' },
    // { icon: <BsBootstrapFill className={iconStyle} />, title: 'Bootstrap' },
    // { icon: <FaSass className={iconStyle} />, title: 'SaSS' },
    // { icon: <SiMui className={iconStyle} />, title: 'MUI' },
];
