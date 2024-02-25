import { useEffect, useState } from "react";
import uniqid from 'uniqid'
import {FaArrowDown} from "react-icons/fa"
import Marquee from 'react-fast-marquee';
import { useSpring, animated } from 'react-spring';
import {enterRightAnimation, enterLeftAnimation} from '../constants/animations'
import { MainTitle, SecondaryTitle, AccentTitle } from "./ReusableComponents/Titles";
import laptop from '../images/laptop.png'
import { icons } from "../constants/skillIcons";

export const buttonStyle = "bg-background self-start p-2 rounded-lg transition duration-300 text-md border-purple border-[2px] text-purple hover:bg-purple hover:border-background hover:text-black font-mono"


export const Hero = () => {
    const enterLeft = useSpring({...enterLeftAnimation});
    const enterRight = useSpring({...enterRightAnimation});

    const [showArrow, setShowArrow] = useState(false)

    useEffect(()=>{
    setTimeout(() => {
        setShowArrow(true)
        setTimeout(() => {
            setShowArrow(false)
        }, 10000);
    }, 2000);
}, [])
    return (
        <div id="home" className="w-full py-10 relative h-screen md:my-auto overflow-x-hidden bg-background flex justify-center items-center">
                {showArrow && <FaArrowDown className={`animate-bounce text-lightGray absolute lg:bottom-[3%] bottom-[8%] mx-auto`} size={40} />}
            <div className="max-w-[1800px] pb-10 w-[90%] h-[100%] justify-center lg:justify-between flex sm:gap-2 gap-12 items-center flex-col-reverse lg:flex-row ">
                <animated.div style={enterLeft} className="w-[90%] lg:w-[50%] max-w-[1000px] flex flex-col justify-center gap-2 items-center md:items-start">
                    <div className="lg:w-[50%] h-[100%] w-[100%]">
                        <AccentTitle text={'Hi, my name is...'}/>
                        <MainTitle classes="whitespace-nowrap" text ={'Ivaylo Atanasov.'}/>
                        <SecondaryTitle classes="whitespace-nowrap" text={"I am a web developer"} />
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