import uniqid from 'uniqid'
import { useSpring, animated } from 'react-spring';
import { useEffect, useRef, useState } from 'react';
import { MainTitle } from "../ReusableComponents/Titles"
import alcona from './thumbnails/alcona.png'
import windyHills from './thumbnails/windyHills.png'
import ignis from './thumbnails/ignis.mov'
import thisP from './thumbnails/this.png'
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        github:'https://github.com/IvailoAtsv/windyHills',
        title: 'Windy Hills',
        description: "This project marks my first dive into full-stack development. Learn about the winery's history, explore the wine selection, and see a testament to my growth in web development.",
        src: windyHills,
        skills: ['React', 'Javascript', 'HTML 5', 'CSS 3', 'Styled Components']
    },
    {
        github:'https://github.com/IvailoAtsv/Ignis',
        title: 'Ignis Portfolio',
        description: "A Personal trainer's portfiolio, which improved my ability to work withing tight deadlines, and reaffirmed my fundamental knowledge.",
        video:true,
        src: ignis,
        skills: ['Javascript', 'HTML 5', 'CSS 3']
    },
    {
        github:'https://github.com/IvailoAtsv/alcona-solutions',
        title: 'Alcona Solutions',
        description: 'The Alcona project represents my initiation into building a website from the ground up. During the development process I learnt how to deal with difficult challenges and learn on my own.',
        src: alcona,
        skills: ['React', 'Javascript','React-Spring', 'HTML 5', 'Tailwind CSS']
    },
    {
        src:thisP,
        title:'And of course...',
        description:"Don't forget to check out this portfiolio's github repo!",
        github:'https://github.com/IvailoAtsv/portfolio',
        skills:['React', 'Javascript','React-hook-form','React-Spring', 'HTML 5', 'Tailwind CSS']
    }
]

export const Projects = () => {

    const componentRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const slideAnimation = useSpring({
        from: {opacity: isVisible? '0': '1', transform: isVisible ? 'translateX(-200%)' : 'translateX(0%)' },
    to: {opacity: isVisible? '1': '0', transform: isVisible ? 'translateX(0%)' : 'translateX(-200%)' },
        config: { tension: 220, friction: 30 },
        delay:300,
      });

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
                console.log(isVisible);
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
        <div id='projects' ref={componentRef} className="min-h-[100vh] my-5 w-full flex justify-center items-start">
            <animated.div style={slideAnimation} className="w-[90%] max-w-[1800px] flex flex-col justify-start items-start">

                <MainTitle classes='my-5' text="Some of my projects" />
                <section className="w-full space-y-4 h-full">
                    {projects.map(project => <ProjectCard 
                    github={project.github}
                    skills={project.skills}
                     title={project.title} description={project.description} 
                     src={project.src} 
                     video={project.video}/>)}
                </section>
            </animated.div>
        </div>
    )
}

const ProjectCard = ({github, src, title, description, video = false,skills }) => {
    return (
        <div className="w-full rounded-xl p-4 flex flex-col lg:flex-row gap-4 justify-start items-start lg:h-[250px] bg-gray bg-opacity-10">
            {video
            ?<video muted autoPlay={true} loop={true} src={src} className="lg:h-[100%]" alt="Windy Hills"/> 
            :<img src={src} className="lg:h-[100%]" alt="Windy Hills" />}
            <div className="flex relative w-full gap-3 lg:gap-6 h-full flex-col justify-evenly items-start">
                <a href={github} target='_blank' className='absolute flex items-center justify-center gap-2  top-[3%] text-purple right-[1%] cursor-pointer animate-pulse'>Github: <FaExternalLinkAlt size={12} /></a>
                <h2 className="text-white text-3xl">
                    {title}
                </h2>
                <p className="text-xl mt-auto text-white">{description}</p>
                <div className='flex mt-auto flex-wrap justify-start gap-1 items-start'>
                    {skills.map(skill => <p key={`${uniqid()} - skill`} className="px-2 py-1 rounded-md text-white bg-background self-start inline-block">{skill}</p>)}
                </div>
            </div>
        </div>
    )
}