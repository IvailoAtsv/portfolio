import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import uniqid from 'uniqid'
import {theme} from './ExperienceElement'


export const EducationElement =({icon, school, descriptionPoints, date, skills})=>{
    return (
    <VerticalTimelineElement
    date={date}
    dateClassName='xltext-white text-black mx-2 md:m:0'
     contentStyle={{ background: 'white', color: 'black' }}
     contentArrowStyle={{ borderRight: '7px solid white' }}
     iconStyle={{ background: theme.background, color: theme.purple }}
     icon={icon}
   >
     <h2 className="text-lg font-bold">{school}</h2>    
     <ul key={uniqid()} className='p-3'>{descriptionPoints.map(point => 
         <li 
         className='text-sm list-disc my-1' 
         key={uniqid()}>{point}
         </li>
         )}
     </ul>
 
 <div className='flex flex-wrap justify-start gap-1 items-start'>
 {skills.map(skill => <p key={`${uniqid()} - skill`} className='px-1 rounded-md border-purple self-start border-2 inline-block'>{skill}</p>)}
 </div>
 
   </VerticalTimelineElement>)
 }