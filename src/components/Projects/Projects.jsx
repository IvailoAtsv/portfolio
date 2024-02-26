import uniqid from 'uniqid'
import { useSpring, animated } from 'react-spring';
import { useEffect, useRef, useState } from 'react';
import { AccentTitle, MainTitle } from "../ReusableComponents/Titles"
import {projects} from '../../constants/projects'
import { FaExternalLinkAlt } from "react-icons/fa";

export const Projects = ({selectedSkill ,setSelectedSkill}) => {

    const [projectList, setProjectList] = useState(projects)

    const sortBySkillUsage = (skill, projects) => {
        const projectsUsingSkill = projects.filter(project => project.skills.includes(skill));
        const projectsNotUsingSkill = projects.filter(project => !project.skills.includes(skill));
    
        return projectsUsingSkill.concat(projectsNotUsingSkill);
       
    };
    useEffect(()=>{
        setProjectList(sortBySkillUsage(selectedSkill, projectList))
        
    },[selectedSkill])

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

      const allSkills = Array.from(
        new Set(
            projects.map(project => project.skills).flat()
        )
    );

    return (
        <div id='projects' ref={componentRef} className="min-h-[100vh] my-5 w-full flex justify-center items-start">
            <animated.div style={slideAnimation} className="w-[90%] max-w-[1800px] flex flex-col justify-start items-start">

                <MainTitle classes='my-5' text="Some of my projects" />
                <div className='flex justify-center items-start gap-2'><AccentTitle classes='mb-5' text="See where I've used: "/>
                <select onChange={(e)=>setSelectedSkill(e.target.value)} className='bg-gray bg-opacity-10 text-white px-3 py-1'>
                    {allSkills.map(skill => 
                    <option 
                    selected={selectedSkill == skill}
                    value={skill}>
                        {skill}
                        </option>)}
                </select>
                </div>
                <section className="w-full space-y-4 h-full">
                    {projectList.map(project => <ProjectCard 
                    selectedSkill={selectedSkill}
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

const ProjectCard = ({github,selectedSkill, src, title, description, video = false,skills }) => {
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
                    {skills.map(skill => <p key={`${uniqid()} - skill`} className={`px-2 py-1 rounded-md text-white ${selectedSkill == skill
                        ?'bg-purple':'bg-background'} self-start inline-block`}>{skill}</p>)}
                </div>
            </div>
        </div>
    )
}