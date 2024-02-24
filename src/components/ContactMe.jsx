import { useForm, SubmitHandler } from "react-hook-form"
import { useSpring, animated } from 'react-spring';
import { AccentTitle, SecondaryTitle } from "./ReusableComponents/Titles"
import { buttonStyle } from '../components/Hero'
import { links } from '../constants/links'
import { useEffect, useRef, useState } from 'react';

const inputStyles = "focus:outline-none w-[100%] lg:w-[95%] mb-5 px-2 py-3 text-2xl rounded-md text-white bg-background border-2 border-purple"
const labelStyles = "font-mono text-lightGray text-labelClamp"
export const ContactMe = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    // dear god, these animations are not worth the effort
    const componentRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const slideAnimation = useSpring({
        from: {opacity: isVisible? '0': '1', transform: isVisible ? 'translateX(-200%)' : 'translateX(0%)' },
    to: {opacity: isVisible? '1': '0', transform: isVisible ? 'translateX(0%)' : 'translateX(-200%)' },
        config: { tension: 220, friction: 30 },
        delay:300
      });

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => prev = true);

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
        <div ref={componentRef} className="min-h-[95vh] relative flex flex-col justify-center items-center w-full">
            <animated.section  style={slideAnimation} className=" max-w-[1800px] py-5 w-[90%]">
                <AccentTitle text={"Like what you're seeing?"} classes="mr-auto" />
            </animated.section>
            <div className="max-w-[1800px  min-h-[90vh] lg:min-h-[45vh] py-4 relative w-[90%] justify-between flex flex-col lg:flex-row items-start">
                <animated.form onSubmit={handleSubmit(onSubmit)} style={slideAnimation} className="flex-2  w-full flex flex-col lg:max-w-[42%] justify-evenly items-start rounded-lg">
                    <SecondaryTitle text={'Get in touch now'} classes='mb-5'/>
                    <label className={labelStyles}>{errors.message ? "Please enter a message" :"What's your name?"}</label>
                    <input {...register("name")} type="text" className={inputStyles} />
                    <label className={labelStyles}>{errors.message ? "Please enter a message" :"Your favourite email?"}</label>
                    <input type="text" {...register("email")} className={inputStyles} />
                
                    <label className={labelStyles}>{errors.message ? "Please enter a message" :"What's on your mind?"}</label>
                    <input type="text" {...register("message")} className={inputStyles} />
                    <button type="submit" className={`${buttonStyle} mb-2`}>Let's have a chat!</button>
                </animated.form>
                <animated.div style={slideAnimation} className="text-center flex-1 py-8 lg:py-3 self-center"><AccentTitle text="Or..." /></animated.div>
                <animated.section style={slideAnimation} className="text-white flex-2 w-full lg:max-w-[42%] flex flex-col justify-between items-start">
                    <h1 className="text-h2clamp whitespace-nowrap mb-5 font-semibold"> Find me on...</h1>
                    <div className=" text-3xl flex flex-col rounded-xl flex-wrap items-start justify-evenly h-full  border-2 text-lightGray border-white w-full p-4 my-2 md:my-0">
                       {links.map(link => <LinkPair key={link.text} text={link.text} href={link.href} button={link.button} icon={link.icon} />)}
                    </div>
                </animated.section>
            </div>
        </div>
    );


}

const LinkPair = ({href, text, icon}) => {
    return (
        <div
        className="flex bg-gray bg-opacity-10 gap-2 rounded-lg text-2xl p-1 justify-start w-full items-center mb-5">
            {icon}
            <p>{text}</p>
            <a href={href} className={`${buttonStyle} ml-auto text-sm px-6 my-auto`}> Go</a>
        </div>
    )
}