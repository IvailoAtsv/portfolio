import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import uniqid from 'uniqid'
import { skillStyles } from './Experience';
import { ReactNode } from 'react';

export const theme = {
    background: '#00022e',
    lightBg: '#656565',
    gray: '#989898',
    lightGray: '#fefefe',
    lightPurple: '#d6b4fc',
    purple: '#b06bf3',
    imgBg: 'rgba(255,255,255,0.2)'
  }

interface ExperienceElementProps{
  icon:ReactNode;
  jobTitle:string;
  descriptionPoints: string[];
  date:string;
  company:string;
  skills:string[]
}

export const ExperienceElement:React.FC<ExperienceElementProps> =({icon, jobTitle, descriptionPoints, date, company, skills})=>{
    return (<VerticalTimelineElement
    date={date}
    dateClassName='xl:text-white mx-2 md:m:0'
     contentStyle={{ background: 'white', color: 'black', }}
     contentArrowStyle={{ borderRight: '7px solid white' }}
     iconStyle={{ background: theme.background, color: theme.purple }}
     icon={icon}
   >
     <h2 className="text-lg font-bold">{jobTitle}</h2>
     <h6 className="text-sm">for: {company}</h6>
     
     <ul className='p-3'>{descriptionPoints.map(point => <li className='my-1 text-sm list-disc' key={uniqid()}>{point}</li>)}</ul>
 
 <div className='flex flex-wrap justify-start gap-1 items-start'>
 {skills.map(skill => <p key={`${uniqid()} - skill`} className={skillStyles}>{skill}</p>)}
 </div>
 
   </VerticalTimelineElement>)
 }