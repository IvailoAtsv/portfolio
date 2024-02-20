import { FaSass, FaShopify, FaNodeJs, FaReact, FaHtml5, FaJsSquare, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMui } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import Marquee from 'react-fast-marquee';
import laptop from '../images/laptop2.png'

const iconStyle = "mx-6 hover:text-purple text-iconClamp md:mt-1 mt-3"
const icons = [
    { icon: <FaReact className={iconStyle} />, title: 'React JS' },
    { icon: <SiTypescript className={iconStyle} />, title: 'Typescript' },
    { icon: <FaNodeJs className={iconStyle} />, title: 'Node JS' },
    { icon: <FaJsSquare className={iconStyle} />, title: 'JavaScript' },
    { icon: <FaHtml5 className={iconStyle} />, title: 'HTML 5' },
    { icon: <FaShopify className={iconStyle} />, title: 'Shopify' },
    { icon: <FaCss3Alt className={iconStyle} />, title: 'CSS 3' },
    { icon: <SiTailwindcss className={iconStyle} />, title: 'Tailwind CSS' },
    { icon: <BsBootstrapFill className={iconStyle} />, title: 'Bootstrap' },
    { icon: <FaSass className={iconStyle} />, title: 'SaSS' },
    { icon: <SiMui className={iconStyle} />, title: 'MUI' },
];


export const Hero = () => {
    return (
        <div className="w-[100%] min-h-[50vh] lg:h-[80vh] overflow-x-hidden  bg-background flex justify-end items-center">
            <div className="flex justify-evenly items-center flex-col-reverse gap-4 lg:flex-row w-[100%]">

                <div className="w-[80%] lg:w-[50%] max-w-[1000px] flex flex-col justify-center gap-2 lg:pl-4 items-center md:items-start">
                    <div className="lg:w-[50%] h-[100%] w-[100%] lg:max-w-[450px]">
                        <h1 className="text-purple font-mono text-lg pl-[3px]">Hi, my name is...</h1>
                        <h2 className="text-white text-h1clamp font-bold sm:whitespace-nowrap">Ivaylo Atanasov.</h2>
                        <h3 className="text-lightGray text-h2clamp sm:whitespace-nowrap">I am a web developer.</h3>
                        <h4 className="text-gray pl-1">I am a passionate front-end developer with a keen eye for design and a love for creating seamless and intuitive user experiences. I specialize in turning ideas into visually appealing and responsive websites. </h4>

                    </div>
                    <button className="bg-background self-start mt-4 px-2 py-1 rounded-lg transition duration-300
             text-md border-purple border-[2px] text-purple hover:bg-purple hover:border-background hover:text-background font-mono">Get in touch!</button>

                </div>

                <div className="lg:w-[50%]  h-auto w-[90%] relative max-w-[800px] overflow-x-hidden">
                    <p className=" z-10 absolute top-[15%] whitespace-nowrap left-[15%] mb-2 text-lightGray">I work with...</p>
                    <img src={laptop} className="w-[100%]" />
                    <Marquee pauseOnHover={true} play={true} direction='right' className=' absolute top-[14%] bg-black left-[14%] max-w-[600px] w-[72%] h-[49%] text-lightGray my-auto'>
                        {icons.map((icon) => <SkillIcon icon={icon.icon} title={icon.title} />)}
                    </Marquee>
                    {/* </div> */}

                </div>
            </div>

        </div>
    )
}
export const SkillIcon = ({ icon, title }) => {
    return (
        <div className="flex flex-col justify-center items-center mx-3 text-white hover:text-purple">
            {icon}
            <p className="pt-2 text-lg font-mono ">{title}</p>
        </div>
    )
}