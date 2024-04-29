import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import uniqid from 'uniqid'
import { FaArrowDown } from "react-icons/fa"
import Marquee from 'react-fast-marquee';
import { useSpring, animated } from 'react-spring';
import { enterRightAnimation, enterLeftAnimation } from '../constants/animations'
import { MainTitle, SecondaryTitle, AccentTitle } from "./ReusableComponents/Titles";
import laptop from '../images/laptop.webp'
import { icons } from "../constants/skillIcons";
import { saveAs } from 'file-saver'
import CV from '../other/CV.pdf'
import { handleContactScroll, handleProjectsScroll } from "../constants/scrollFunctions";

interface HeroProps{
    selectedSkill: string;
    setSelectedSkill: Dispatch<SetStateAction<string>>
}

export const buttonStyle = "bg-background self-start p-2 rounded-lg transition duration-300 text-md border-purple border-[2px] text-purple hover:bg-purple hover:border-background hover:text-black font-mono"
export const mainButtonStyle = "bg-purple self-start p-2 rounded-lg transition duration-300 text-md border-purple border-[2px] text-background hover:bg-background hover:border-purple hover:text-purple font-mono"


export const Hero:React.FC<HeroProps> = ({setSelectedSkill, selectedSkill}) => {
    const enterLeft = useSpring({ ...enterLeftAnimation });
    const enterRight = useSpring({ ...enterRightAnimation });

    const [showArrow, setShowArrow] = useState(false)

    const downloadCV = () => {
        saveAs(CV, "Ivaylo's CV")
    }

    useEffect(() => {
        setTimeout(() => {
            setShowArrow(true)
            setTimeout(() => {
                setShowArrow(false)
            }, 10000);
        }, 2000);
    }, [])

    return (
        <main id="home" className="w-full relative h-dvh md:h-[90vh] overflow-x-hidden bg-background flex justify-center items-center">
            {showArrow && <FaArrowDown className={`animate-bounce text-lightGray absolute bottom-0 mx-auto`} size={40} />}
            <div className="max-w-[1800px] pb-10 w-[90%] h-[100%] justify-center lg:justify-between flex sm:gap-2 gap-12 items-center flex-col-reverse lg:flex-row ">
                <animated.section style={enterLeft} className="w-[90%] lg:w-[50%] max-w-[1000px] flex flex-col justify-center gap-2 items-center md:items-start">
                    <div className="lg:w-[50%] h-[100%] w-[100%]">
                        <AccentTitle text={'Hi, my name is...'} />
                        <MainTitle classes="whitespace-nowrap" text={'Ivaylo Atanasov.'} />
                        <SecondaryTitle classes="whitespace-nowrap" text={"I am a web developer"} />
                        <h4 className="text-lightGray py-2">Passionate about front-end and full stack development, I possess a keen eye for design and a genuine love for crafting seamless and intuitive user experiences. My expertise lies in transforming concepts into visually striking and responsive web applications. </h4>

                    </div>
                    <div className="flex gap-4">
                        <button onClick={handleContactScroll} className={mainButtonStyle}>Contact me!</button>
                        <button onClick={downloadCV} className={buttonStyle}>Check out my CV!</button>
                    </div>

                </animated.section>

                <animated.div style={enterRight} className="lg:w-[50%] w-[90%] relative max-w-[750px] overflow-hidden">                      
                    <img alt="Animation displaying all of my skills" src={laptop} className="w-[100%]" />
                    <div className='shadow-md absolute top-[2.3%] bg-black left-[13.5%] max-w-[600px] w-[73%] h-[65.5%] text-lightGray my-auto'>
                        <p className="absolute top-0 left-1 text-sm text-purple p-1 animate-pulse">click on a skill...</p>
                        <Marquee direction="left" pauseOnHover={true} play={true} className="my-auto h-full" speed={80}>                
                            {icons.map((icon) => <SkillIcon setSelectedSkill={setSelectedSkill} key={uniqid()} icon={icon.icon} title={icon.title} />)}
                        </Marquee>

                    </div>
                </animated.div>


            </div>

        </main>
    )
}
interface SkillIconProps{
    setSelectedSkill: Dispatch<SetStateAction<string>>;
    icon:ReactNode;
    title:string;

}
export const SkillIcon:React.FC<SkillIconProps> = ({ setSelectedSkill, icon, title }) => {
    return (
        <div onClick={() => {
            setSelectedSkill(title)
            handleProjectsScroll()
            }} className="flex transition cursor-pointer duration-300 flex-col justify-center items-center mx-3 text-lightGray hover:text-purple">
            {icon}
            <p className="pt-2 text-lg font-mono ">{title}</p>
        </div>
    )
}