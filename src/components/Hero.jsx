import { useEffect, useState } from "react";
import uniqid from 'uniqid'
import { useSpring, animated } from 'react-spring';
import { BsBootstrapFill } from "react-icons/bs";
import { FaSass, FaShopify, FaArrowDown, FaNodeJs, FaReact, FaHtml5, FaJsSquare, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMui } from "react-icons/si";
import Marquee from 'react-fast-marquee';
import laptop from '../images/laptop.png'


const iconStyle = "mx-6 hover:text-purple text-iconClamp md:mt-1 mt-3"
export const buttonStyle = "bg-background self-start px-4 py-2 rounded-lg transition duration-300 text-md border-purple border-[2px]  text-purple hover:bg-purple hover:border-background hover:text-black  font-mono"

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
    const enterLeft = useSpring({
        from: { transform: 'translateX(-200%)' },
        to: { transform: 'translateX(0%)' },
        config: { tension: 160, friction: 19 },
         delay: 350 ,
      });
    const enterRight = useSpring({
        from: { opacity: 0, transform: 'translateX(200%)' },
        to: { opacity: 1, transform: 'translateX(0%)' },
        config: { tension: 160, friction: 19 },
         delay: 350 ,
      });

    const [showArrow, setShowArrow] = useState(true)

    setTimeout(() => {
        setShowArrow(false)
    }, 10000);

    return (
        <div className="w-[100%] relative min-h-[95vh] md:my-auto overflow-x-hidden bg-background flex justify-center items-center">
                {showArrow && <FaArrowDown className={`animate-bounce text-lightGray absolute lg:bottom-[1%] bottom-[5%] mx-auto`} size={40} />}
            <div className="max-w-[1800px] w-[90%] h-[100%] justify-evenly lg:justify-between flex sm:gap-2 gap-12 items-center flex-col-reverse lg:flex-row ">
                <animated.div style={enterLeft} className="w-[90%] lg:w-[50%] max-w-[1000px] flex flex-col justify-center gap-2 items-center md:items-start">
                    <div className="lg:w-[50%] h-[100%] w-[100%] lg:max-w-[450px]">
                        <h1 className="text-purple font-mono text-xl">Hi, my name is...</h1>
                        <h2 className="text-white text-h1clamp font-bold sm:whitespace-nowrap">Ivaylo Atanasov.</h2>
                        <h3 className="text-lightGray text-h2clamp sm:whitespace-nowrap">I am a web developer.</h3>
                        <h4 className="text-lightGray py-2">I am a passionate front-end developer with a keen eye for design and a love for creating seamless and intuitive user experiences. I specialize in turning ideas into visually appealing and responsive web applications. </h4>

                    </div>
                    <button className={buttonStyle}>Check out my CV!</button>

                </animated.div>

                <animated.div style={enterRight} className="lg:w-[50%] w-[90%] relative max-w-[750px] overflow-hidden">
                    <img alt="Animation displaying all of my skills" src={laptop} className="w-[100%]" />
                    <Marquee direction="left" pauseOnHover={true} play={true} speed={80} className='shadow-md absolute top-[2.3%] bg-black left-[13.5%] max-w-[600px] w-[73%] h-[65.5%] text-lightGray my-auto'>
                        {icons.map((icon) => <SkillIcon key={uniqid()} icon={icon.icon} title={icon.title} />)}
                    </Marquee>
                    {/* </div> */}

                </animated.div>

            </div>

        </div>
    )
}
export const SkillIcon = ({ icon, title }) => {
    return (
        <div className="flex flex-col justify-center items-center mx-3 text-lightGray hover:text-purple">
            {icon}
            <p className="pt-2 text-lg font-mono ">{title}</p>
        </div>
    )
}