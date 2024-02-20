import { FaSass,FaShopify,FaNodeJs,FaReact,FaHtml5,FaJsSquare,FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss,SiTypescript,SiMui } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import Marquee from 'react-fast-marquee';
import dev from '../images/dev.png'

export const Hero = () => {
    return (
        <div className="w-[100%] h-[90vh] overflow-x-hidden flex-col bg-background flex justify-center items-start">
            <div className="w-[100%] h-[90%] max-w-[1200px] flex flex-col justify-center pl-1 items-start">
                <div className="w-[50%] max-w-[450px] pl-4">
                    <h1 className="text-purple font-mono text-lg pl-[3px]">Hi, my name is...</h1>
                    <h2 className="text-white text-h1clamp font-bold sm:whitespace-nowrap">Ivaylo Atanasov.</h2>
                    <h3 className="text-lightGray text-h2clamp sm:whitespace-nowrap">I am a web developer.</h3>
                    <h4 className="text-gray pl-1">I am a passionate front-end developer with a keen eye for design and a love for creating seamless and intuitive user experiences. I specialize in turning ideas into visually appealing and responsive websites. </h4>
                    <img src={dev} className="w-[45%] h-auto z-50"/>
                    
                    </div>
             <button className="bg-background ml-5 mt-4 px-2 py-1 rounded-lg transition duration-300
             text-md border-purple border-[2px] text-purple hover:bg-purple hover:border-background hover:text-background font-mono">Get in touch!</button>

                </div>

                <div>
                <Marquee pauseOnHover autoFill play={true} direction='right' className='h-auto text-lightGray mb-3 mt-auto w-[100%]'>
                    <FaReact size={50} className='mx-6 hover:text-purple'/>
                    <SiTypescript  size={50} className='mx-6 hover:text-purple'/>
                    <FaNodeJs size={50} className='mx-6 hover:text-purple'/>
                    <FaJsSquare className='mx-6 hover:text-purple' size={50}/>
                    <FaHtml5 size={50} className='mx-6 hover:text-purple' />
                    <FaShopify size={50} className='mx-6 hover:text-purple' />
                    <FaCss3Alt size={50} className='mx-6 hover:text-purple' />
                    <SiTailwindcss className='mx-6 hover:text-purple' size={50}/>
                    <BsBootstrapFill  size={50} className='mx-6 hover:text-purple'/>
                    <FaSass  size={50} className='mx-6 hover:text-purple'/>
                    <SiMui size={50} className='mx-6 hover:text-purple'/>
                </Marquee>
                </div>

            </div>
    )
}