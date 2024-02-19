import { FaSass,FaShopify,FaNodeJs,FaReact,FaHtml5,FaJsSquare,FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss,SiTypescript,SiMui } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import Marquee from 'react-fast-marquee';

export const Hero = () => {
    return (
        <div className="w-full h-[90vh] flex-col bg-background flex justify-center items-center">
            <div className="w-[100%] h-[90%] max-w-[1200px] flex flex-col justify-center pl-1 items-start">
                <div className="w-[450px] pl-4">
                    <h1 className="text-purple pl-1 font-mono text-lg">Hi, my name is...</h1>
                    <h2 className="text-white text-[7vw] font-bold sm:whitespace-nowrap">Ivaylo Atanasov.</h2>
                    <h3 className="text-lightGray text-[6vw] sm:whitespace-nowrap">I am a web developer.</h3>
                    <h4 className="text-gray pl-1">I'm a passionate front-end developer with a keen eye for design and a love for creating seamless and intuitive user experiences. I specialize in turning ideas into visually appealing and responsive websites. </h4>
                    </div>
             <button className="bg-background ml-4 mt-5 px-3 py-2 rounded-lg 
             text-lg border-purple border-[2px] text-purple hover:bg-purple hover:border-background hover:text-background">Get in touch!</button>

                </div>
                <Marquee pauseOnHover autoFill play={true} direction='right' className='h-auto text-gray mb-3 mt-auto w-[100%]'>
                    <FaReact size={64} className='mx-6 hover:text-purple'/>
                    <SiTypescript  size={64} className='mx-6 hover:text-purple'/>
                    <FaNodeJs size={64} className='mx-6 hover:text-purple'/>
                    <FaJsSquare className='mx-6 hover:text-purple' size={64}/>
                    <FaHtml5 size={64} className='mx-6 hover:text-purple' />
                    <FaShopify size={64} className='mx-6 hover:text-purple' />
                    <FaCss3Alt size={64} className='mx-6 hover:text-purple' />
                    <SiTailwindcss className='mx-6 hover:text-purple' size={64}/>
                    <BsBootstrapFill  size={64} className='mx-6 hover:text-purple'/>
                    <FaSass  size={64} className='mx-6 hover:text-purple'/>
                    <SiMui size={64} className='mx-6 hover:text-purple'/>
                </Marquee>
            </div>
    )
}