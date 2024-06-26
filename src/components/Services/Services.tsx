import { FC, useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { AccentTitle, MainTitle } from "../ReusableComponents/Titles"
import create from '../../images/create.png'
import design from '../../images/design.png'
import support from '../../images/support.png'
import React from 'react';

interface WizardCardProps {
  src: string;
  title: string;
}

export const Services = () => {

    const componentRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const slideAnimation = useSpring({
        from: {opacity: isVisible? '0': '1', transform: isVisible ? 'translateX(300%)' : 'translateX(0%)' },
    to: {opacity: isVisible? '1': '0', transform: isVisible ? 'translateX(0%)' : 'translateX(300%)' },
        config: { tension: 220, friction: 30 },
        delay:300,
      });

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);

            }
          }, 300);
        }, { threshold: 0 });
    
        if (componentRef.current) {
          observer.observe(componentRef.current);
        }
    
        return () => {
          if (componentRef.current) {
            observer.unobserve(componentRef.current);
          }
        };

      }, []);


    return (
        <div id="services" ref={componentRef} className="w-full mb-10 min-h-[60vh] flex justify-center items-end">
            <animated.div  style={isVisible ? slideAnimation: {}} className="h-auto w-full border-b-2 py-10 border-white flex flex-col justify-center items-center">
                <div className="max-w-[1800px] gap-3 flex w-[90%] flex-col justify-center items-center h-full ">
                    <MainTitle text="Services" classes="mr-auto" />
                    <h3 className="text-3xl mr-auto font-semibold text-white">My<span className="inline text-purple"> web wizardry</span> can create or enhance your online presence by...</h3>
                    <div className="h-[100%] mt-10 w-full flex justify-center lg:justify-evenly items-center flex-wrap">
                        <WizardCard src={design} title={`Working up elegant designs`}/> 
                        <WizardCard src={create} title="Creating stunning websites"/> 
                        <WizardCard src={support} title="Providing ongoing support"/> 
                    </div>
                </div>
            </animated.div>
        </div>
    )
}
const WizardCard: FC<WizardCardProps> = ({ src, title }) => {
  return (
      // card
      <div className="lg:w-[20%] my-2 h-[350px] shadow-lg bg-gray bg-opacity-10 transition duration-500 hover:shadow-2xl relative group p-4 w-[90%] flex flex-col justify-between items-center rounded-xl text-white overflow-hidden ">
          <div className="p-5 rounded-xl w-full h-full max-h-[220px] bg-white ">
              <img src={src} className="object-contain mx-auto max-h-[200px]" alt={`${title} picture`} />
          </div>
          <h2 className="text-2xl py-4">{title}</h2>
      </div>
  )
}
