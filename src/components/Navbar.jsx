import { useSpring, animated } from 'react-spring';

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { enterLeftAnimation } from "../constants/animations";

export function Navbar({}) {

    const [nav, setNav] = useState(false)

// Doing it this way because in order for refs to be accessible, the component needs to be mounted
    const handleContactScroll = () => {
    const element = document.getElementById('contact')
        if (element) {
            element.scrollIntoView({
                 behavior: "smooth",
                  block: "start" 
                });
                setNav(false)
        }
    
    }
    const handleHomeScroll = () => {
    const element = document.getElementById('home')
        if (element) {
            element.scrollIntoView({
                 behavior: "smooth",
                  block: "center" 
                });
                setNav(false)

        }
    
    }
    const handleExperienceScroll = () => {
    const element = document.getElementById('experience')
        if (element) {
            element.scrollIntoView({
                 behavior: "smooth",
                block:'start'
                });
                setNav(false)

        }
    
    }
    const handleServicesScroll = () => {
        const element = document.getElementById('services')
            if (element) {
                element.scrollIntoView({
                     behavior: "smooth",
                    block:'start'
                    });
                    setNav(false)
    
            }
        
        }
    const enterLeft = useSpring({ ...enterLeftAnimation });

    const navBtnStyle = `text-xl px-4 py-2 md:p-1 bg-background hover:bg-purple hover:border-background hover:text-black  font-mono transition duration-300 bg-background, md:px-2 border-2 border-purple rounded-md p-1 w-[85%] md:w-[100%] text-purple`
    const liStyles = `text-sm whitespace-nowrap block flex justify-center items-center hover:text-purple my-3 md:m:0 'w-[90%] md:max-w-[150px] text-xl sm:text-sm rounded`
    return (

        <animated.nav style={enterLeft} className={`${nav ? 'bg-transparent':'bg-background'} backdrop-blur-xl md:backdrop-blur-0 md:bg-background flex justify-center items-center fixed w-full lg:mb-[50px] z-50 top-0 start-0 shadow-xl`}>
            <div className={`max-w-[1800px] w-[90%]  ${nav ? 'h-screen  flex justify-evenly items-center flex-col' : ''} pt-1 md:py-1`}>
                <button onClick={() => setNav(!nav)} className={`${nav ? 'absolute top-1 left-1' : ''} ${!nav && 'md:hidden'} ml-2 text-white`}>{nav ? < IoMdClose size={40} /> : <IoMenu size={40} />}</button>
                <ul className={`md:flex ${nav ? '' : 'hidden'} w-[100%] mx-auto sm:mb-0 mb-10 md:justify-start md:gap-4 justify-evenly items-center rounded-lg `}>
                    <li className={liStyles}>
                        <button onClick={handleHomeScroll} className={navBtnStyle}>Home</button>
                    </li>
                    <li className={liStyles}>
                        <button onClick={handleExperienceScroll} className={navBtnStyle}>My Journey</button>
                    </li>
                    <li className={liStyles}>
                        <button onClick={handleServicesScroll} className={navBtnStyle}>Services</button>
                    </li>
                    <li className={liStyles}>
                        <button onClick={handleContactScroll} className={navBtnStyle}>Contacts</button>
                    </li>

                </ul>
            </div>
        </animated.nav>

    );
}
