import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import uniqid from 'uniqid'
import { FaArrowDown } from "react-icons/fa"
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
import { MainTitle, SecondaryTitle, AccentTitle } from "./ReusableComponents/Titles";
import laptop from '../images/laptop.webp'
import { icons } from "../constants/skillIcons";
import { saveAs } from 'file-saver'
import CV from '../other/CV.pdf'
import { handleContactScroll, handleProjectsScroll } from "../constants/scrollFunctions";

type Lang = {
    accentTitle: string;
  main: string;
  secondary: string;
  description: string;
  btn1: string;
  btn2: string;
  laptop: string;
}

interface HeroProps{
    selectedSkill: string;
    setSelectedSkill: Dispatch<SetStateAction<string>>
    selectedLanguege: Lang;
}

export const buttonStyle = "hover:translate-y-[-3px] hover:scale-105 bg-background self-start p-2 rounded-md transition duration-300 text-md border-purple border-[2px] text-purple hover:bg-purple hover:border-purple hover:text-black font-mono"
export const mainButtonStyle ="hover:translate-y-[-3px] hover:scale-105 shadow-lg bg-purple self-start p-2 rounded-md transition duration-300 text-md border-purple border-[2px] text-background hover:bg-background hover:border-purple hover:text-purple font-mono"

const enterLeftAnimation = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 }
};

const enterRightAnimation = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 }
};

export const Hero:React.FC<HeroProps> = ({selectedLanguege, setSelectedSkill, selectedSkill}) => {
    const [showArrow, setShowArrow] = useState(false);

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
        <main id="home" className="w-full relative h-dvh overflow-x-hidden bg-background flex justify-center items-center">
            {/* {showArrow && <FaArrowDown className={`animate-bounce text-lightGray absolute bottom-0 mx-auto`} size={40} />} */}
            <div className="max-w-[1800px] py-2 w-[90%] h-[100%] justify-center lg:justify-between flex sm:gap-6 gap-12 items-center flex-col-reverse md:flex-row ">
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={enterLeftAnimation}
                    transition={{ duration: 0.3 }}
                    className="w-full px-2 lg:w-[50%] max-w-[1000px] flex flex-col justify-center gap-2 items-center lg:items-start"
                >
                    <div className=" h-[100%] w-[100%]">
                        <AccentTitle text={selectedLanguege.accentTitle} />
                        <MainTitle classes="whitespace-nowrap" text={selectedLanguege.main} />
                        <SecondaryTitle classes="whitespace-nowrap" text={selectedLanguege.secondary} />
                        <h4 className="text-lightGray py-2">{selectedLanguege.description}</h4>
                    </div>
                    <div className="flex gap-4 w-full">
                        <button onClick={handleContactScroll} className={mainButtonStyle}>{selectedLanguege.btn1}</button>
                        <button onClick={downloadCV} className={buttonStyle}>{selectedLanguege.btn2}</button>
                    </div>
                </motion.section>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={enterRightAnimation}
                    transition={{ duration: 0.3 }}
                    className="lg:w-[50%] md:w-[80%] w-[90%] relative max-w-[750px] overflow-hidden"
                >
                    <img alt="Animation displaying all of my skills" src={laptop} className="w-[100%] object-cover" />
                    <div className='shadow-md absolute top-[2.3%] bg-black left-[13.5%] max-w-[600px] w-[73%] h-[65.5%] text-lightGray my-auto'>
                        <p className="absolute top-0 left-1 text-sm text-purple p-1 opacity-30">{selectedLanguege.laptop}</p>
                        <Marquee direction="left" pauseOnHover={true} play={true} className="my-auto h-full" speed={80}>                
                            {icons.map((icon) => <SkillIcon setSelectedSkill={setSelectedSkill} key={uniqid()} icon={icon.icon}  title={icon.title} />)}
                        </Marquee>
                    </div>
                </motion.div>
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
            }} className="hover:translate-y-[-3px] hover:scale-105 flex transition cursor-pointer duration-300 flex-col justify-center items-center mx-3 text-lightGray hover:text-purple">
            {icon}
            <p className="pt-2 text-md font-mono ">{title}</p>
        </div>
    )
}
