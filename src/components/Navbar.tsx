import { useSpring, animated } from 'react-spring';
import { handleContactScroll, handleExperienceScroll, handleHomeScroll, handleProjectsScroll, handleServicesScroll} from '../constants/scrollFunctions'
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { enterLeftAnimation } from "../constants/animations";
import bg from '../images/bg.png'
import uk from '../images/uk.png'

interface NavI {
    home:string;
        journey:string;
        projects:string;
        services:string;
        contacts:string;
}

interface NavbarProps {
    langSwitch: boolean;
    setLangSwitch: React.Dispatch<React.SetStateAction<boolean>>
    selectedLanguege: NavI
}
export const Navbar: React.FC<NavbarProps> = ({ langSwitch, setLangSwitch, selectedLanguege }) => {
    const [nav, setNav] = useState<boolean>(false);
    const enterLeft = useSpring({ ...enterLeftAnimation });

    const navBtnStyle = `hover:translate-y-[-3px] hover:scale-105 text-xl px-4 py-2 md:p-1 bg-background hover:bg-purple hover:border-purple hover:text-black font-mono transition duration-300 bg-background, md:px-2 border-2 border-purple rounded-md p-1 w-[85%] md:w-[100%] text-purple`;
    const liStyles = `text-sm whitespace-nowrap block flex justify-center items-center hover:text-purple my-3 md:m:0 'w-[90%] md:max-w-[150px] text-xl sm:text-sm rounded`;

    return (
        <animated.header style={enterLeft} className={`${nav ? 'bg-transparent':'bg-background'} backdrop-blur-xl md:backdrop-blur-0 md:bg-background flex justify-center items-center fixed w-full z-50 top-0 left-0 shadow-xl`}>
            <nav className={`max-w-[1800px] w-[90%] relative ${nav ? 'h-screen flex justify-evenly items-center flex-col' : ''} pt-1 md:py-1`}>
                <button onClick={() => setNav(!nav)} className={`${nav ? 'absolute top-1 left-1' : ''} ${!nav && 'md:hidden'} text-white`}>
                    {nav ? < IoMdClose size={40} /> : <IoMenu size={40} />}
                </button>
                <div className={`${nav ? 'absolute top-[11px] right-1' : 'absolute top-[50%] translate-y-[-50%]'} right-1 flex items-center gap-2`}>
                    <img src={uk} className={`h-[30px] w-[30px] rounded-md ${langSwitch && 'opacity-50'}`} alt="English flag" />                    
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                            type="checkbox" 
                            checked={langSwitch} 
                            onChange={() => setLangSwitch(!langSwitch)} 
                            className="sr-only peer" 
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple"></div>
                    </label>
                    <img src={bg} alt="Bulgarian flag" className={`h-[30px] w-[30px] rounded-md ${!langSwitch && 'opacity-50'}`} />

                </div>
                <ul className={`md:flex ${nav ? '' : 'hidden'} w-[100%] mx-auto sm:mb-0 mb-10 md:justify-start md:gap-4 justify-evenly items-center rounded-lg`}>
                    <li className={liStyles}>
                        <button onClick={() => {
                            handleHomeScroll();
                            setNav(false);
                        }} className={navBtnStyle}>{selectedLanguege.home}</button>
                    </li>
                    <li className={liStyles}>
                        <button onClick={() => {
                            handleServicesScroll();
                            setNav(false);
                        }} className={navBtnStyle}>{selectedLanguege.services}</button>
                    </li>
                    <li className={liStyles}>
                        <button onClick={() => {
                            handleExperienceScroll();
                            setNav(false);
                        }} className={navBtnStyle}>{selectedLanguege.journey}</button>
                    </li>
                    <li className={liStyles}>
                        <button onClick={() => {
                            handleProjectsScroll();
                            setNav(false);
                        }} className={navBtnStyle}>{selectedLanguege.projects}</button>
                    </li>
                    <li className={liStyles}>
                        <button onClick={() => {
                            handleContactScroll();
                            setNav(false);
                        }} className={navBtnStyle}>{selectedLanguege.contacts}</button>
                    </li>
                </ul>
            </nav>
        </animated.header>
    );
};
