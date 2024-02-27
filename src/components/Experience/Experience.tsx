import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import uniqid from 'uniqid'
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import 'react-vertical-timeline-component/style.min.css';
import { FaPeopleGroup } from "react-icons/fa6";
import { EducationElement } from './EducationElement';
import { ExperienceElement } from './ExperienceElement';
import { theme } from './ExperienceElement'
import { mentorship, educationCards, experienceCards } from '../../constants/experience'

export const skillStyles = 'px-2 py-1 bg-opacity-40 rounded-md text-darkPurple bg-purple self-start inline-block'

export const Experience = () => {

  return (
    <div id='experience' className='bg-background pb-20 w-full h-full'>
      <div className='w-[90%] max-w-[1800px] mx-auto'>
        <h1 className="text-white mb-6 text-h1clamp font-bold sm:whitespace-nowrap">My Journey</h1>

<JourneyTitle text="Education" />

        <VerticalTimeline layout='1-column-left'>
          {educationCards.map(school =>
            <EducationElement
              key={uniqid()}
              descriptionPoints={school.descriptionPoints}
              skills={school.skills}
              date={school.date}
              school={school.school}
              icon={school.icon}
            />)}
        </VerticalTimeline>

            <JourneyTitle text="Experience" />
        <VerticalTimeline className=''>
          {experienceCards.map(job =>
            <ExperienceElement
              key={uniqid()}
              jobTitle={job.jobTitle}
              descriptionPoints={job.descriptionPoints}
              skills={job.skills}
              date={job.date}
              company={job.company}
              icon={job.icon}
            />)}


        </VerticalTimeline>
            <JourneyTitle text="Other" />
        <VerticalTimeline layout="1-column-left">
          <VerticalTimelineElement
           date={'11-2023 - ongoing'}
            dateClassName='mx-2 md:m:0'
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            iconStyle={{ background: theme.background, color: theme.purple }}
            icon={<FaPeopleGroup />}
          >
            <h2 className="text-lg font-bold">Mentorship</h2>
            <ul className='p-3'>

              <li className='text-sm list-disc my-1'>Being a mentor to two people in their programming journey has been a rewarding experience. I focused on guiding them through the fundamental concepts of programming, ensuring they developed a strong and deep understanding.</li>
              <li className='text-sm list-disc my-1'>Our mentorship went beyond theory, with hands-on projects being a key component. Working together on real-world coding projects allowed them to apply their knowledge in practical scenarios, reinforcing their learning and problem-solving skills.</li>
              <li className='text-sm list-disc my-1'>Explaining programming concepts has reinforced my own understanding. Teaching others requires a thorough grasp of the material, and the mentorship has provided me with opportunities to revisit and solidify my knowledge. This mutual learning dynamic has contributed to my own growth as a programmer.</li>
            </ul>

            <h3>Mutual improvements in:</h3>
            <div className='flex flex-wrap justify-start gap-1 items-start'>
              {mentorship.map(elem =>
                <p key={`${uniqid()} - skill`} className='px-2 py-1 bg-opacity-40 rounded-md text-darkPurple bg-purple self-start inline-block'>{elem}</p>
              )}
            </div>

          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}

const JourneyTitle = ({text}:{ text: string; }) => {
 return  <h2 className='my-5 flex items-center justify-start gap-2 text-white text-h3clamp'><VscDebugBreakpointLogUnverified />{text}</h2>
}