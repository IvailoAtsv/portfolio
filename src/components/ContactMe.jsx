import { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useForm } from "react-hook-form"
import { AccentTitle, SecondaryTitle } from "./ReusableComponents/Titles"
import { buttonStyle } from '../components/Hero'
import { links } from '../constants/links'
import emailjs from '@emailjs/browser'

const inputStyles = "focus:outline-none w-[100%] lg:w-[95%] px-2 py-3 mb-5 text-2xl rounded-md text-white bg-background border-2 border-purple"
const labelStyles = "font-mono text-lightGray text-2xl"
const labelErrorStyles = "font-mono text-red-600 text-2xl"
export const ContactMe = () => {

  const [disabled,setDisabled] = useState(false)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit =async (data) => {
        const params = {
          name:data.name,
          email:data.email,
          message:data.message
        }
        await emailjs.send(process.env.REACT_APP_SERVICE_ID,process.env.REACT_APP_TEMPLATE,params, process.env.REACT_APP_PUBLIC)
      }
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
        <div id='contact' ref={componentRef} className="h-auto relative flex flex-col justify-center items-center w-full">
            <animated.section  style={slideAnimation} className=" py-5 pl-1 max-w-[1800px] w-[90%]">
                <AccentTitle text={"Like what you're seeing?"} classes="mr-auto" />
            </animated.section>
            <div className="max-w-[1800px] min-h-[90vh] lg:min-h-[45vh] py-4 relative w-[90%] justify-between flex flex-col lg:flex-row items-start">
                <animated.form onSubmit={handleSubmit(onSubmit)} style={slideAnimation} className="flex-2  w-full flex p-4 flex-col border-white lg:max-w-[42%] justify-evenly items-start rounded-xl">
                    <SecondaryTitle text={'Get in touch now'} classes='mb-5'/>
                    {errors.name ?
                    <label className={labelErrorStyles}> {errors.name.message}</label> 
                    :<label className={labelStyles}>What's your name?</label>
                    }
                    <input {...register("name", {required:'Please enter a name', minLength:3})} type="text" className={inputStyles} />
                    {errors.email ?
                    <label className={labelErrorStyles}> {errors.email.message}</label> 
                    :<label className={labelStyles}>Your favourite email?</label>
                    }
                    <input type="text" {...register("email",{required:'Please enter a valid email',pattern:
                            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,})} className={inputStyles} />
                {errors.message ?
                    <label className={labelErrorStyles}> {errors.message.message}</label> 
                    :<label className={labelStyles}>What's on your mind?</label>
                    }
                    <input type="text" {...register("message", {required:'Please leave a message'})} className={inputStyles} />
                    <button type="submit" disabled={disabled} className={`${buttonStyle} my-2`}>Let's have a chat!</button>
                </animated.form>
                <animated.div style={slideAnimation} className="text-center w-full flex-1 py-8 lg:py-3 self-center">
                    <AccentTitle text="Or..." classes="overflow-hidden z-50"/>
                    </animated.div>
                <animated.section style={slideAnimation} className="text-white p-4  border-white flex-2 w-full lg:max-w-[42%] rounded-xl flex flex-col justify-between items-start">
                    <h1 className="text-h2clamp whitespace-nowrap mb-5 font-semibold"> Find me on...</h1>
                    <div className=" text-3xl flex flex-col rounded-xl flex-wrap items-start justify-evenly h-full text-lightGray  w-full my-2 md:my-0">
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
        className="flex bg-gray bg-opacity-10 gap-2 rounded-lg text-2xl p-[10px] justify-start w-full items-center mb-5">
            {icon}
            <p>{text}</p>
            <a href={href} className={`${buttonStyle} ml-auto text-sm px-6 my-auto`}> Go</a>
        </div>
    )
}