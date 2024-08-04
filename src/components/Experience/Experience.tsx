import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import uniqid from 'uniqid'
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import 'react-vertical-timeline-component/style.min.css';
import { FaPeopleGroup } from "react-icons/fa6";
import { EducationElement } from './EducationElement';
import { ExperienceElement } from './ExperienceElement';
import { theme } from './ExperienceElement'
// import { mentorship, educationCards, experienceCards } from '../../constants/experience'
import { IoSchool } from "react-icons/io5";
import { RiHomeOfficeFill } from "react-icons/ri";

export const skillStyles = 'px-2 py-1 bg-opacity-40 rounded-md text-darkPurple bg-purple self-start inline-block'

interface Card {
  title: string;
  points: string[];
}

interface Experience {
  main: string;
  education: string;
  educationCard: Card;
  experience: string;
  expCards: {
    card1: Card;
    card2: Card;
  };
  mentorship: string;
  mentCard: Card;
}

export const Experience:React.FC<{selectedLanguege:Experience}> = ({selectedLanguege}) => {
 const mentorship =[ 'Problem solving', 'Programming basics', 'Data structures', 'Best Practices','Javascript', 'HTML 5', 'CSS 3',]

 const educationCards = [
    {
        icon: <IoSchool/> ,
        school:selectedLanguege.educationCard.title,
        date:'06-2022 - 08-2023',
        descriptionPoints:selectedLanguege.educationCard.points,
        skills:[ 'Programing basics', 'Best practices' , 'HTML', 'CSS', 'Javascript','React JS', 'Node JS',]
    }
]
 const experienceCards = [
  {
    icon:<RiHomeOfficeFill/>,
    jobTitle: selectedLanguege.expCards.card1.title,
    date: '06-2023 - Ongoing',
    descriptionPoints:selectedLanguege.expCards.card1.points,
    skills: ['React JS', 'Node JS', 'Mongoose', 'MongoDB', 'Styled Components', 'UX/UI', 'HTML 5', 'CSS 3', 'JavaScript', 'Tailwind CSS', 'Next JS', 'TypeScript'],
    location: 'Remote'
  },
  {
    jobTitle:  selectedLanguege.expCards.card2.title,
    date: '11-2023',
    icon:<RiHomeOfficeFill/>,
    descriptionPoints: selectedLanguege.expCards.card2.points,
    skills: ['React JS', 'TypeScript', 'Node JS', 'Mongoose', 'MongoDB', 'MUI', 'UX/UI'],
    location: 'Remote'
  }
];
  return (
    <div id='experience' className='bg-background pb-20 w-full h-full'>
      <div className='w-[90%] max-w-[1800px] mx-auto'>
        <h1 className="text-white mb-6 text-h1clamp font-bold sm:whitespace-nowrap">{selectedLanguege.main}</h1>

<JourneyTitle text={selectedLanguege.education} />

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

            <JourneyTitle text={selectedLanguege.experience} />
        <VerticalTimeline className=''>
          {experienceCards.map(job =>
            <ExperienceElement
              key={uniqid()}
              jobTitle={job.jobTitle}
              descriptionPoints={job.descriptionPoints}
              skills={job.skills}
              date={job.date}
              icon={job.icon}
            />)}


        </VerticalTimeline>
            <JourneyTitle text={selectedLanguege.mentorship} />
        <VerticalTimeline layout="1-column-left">
          <VerticalTimelineElement
           date={'11-2023 - ongoing'}
            dateClassName='mx-2 md:m:0'
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            iconStyle={{ background: theme.background, color: theme.purple }}
            icon={<FaPeopleGroup />}
          >
            <h2 className="text-lg font-bold">{selectedLanguege.mentCard.title}</h2>
            <ul className='p-3'>

              <li className='text-sm list-disc my-1'>{selectedLanguege.mentCard.points[0]}</li>
              <li className='text-sm list-disc my-1'>{selectedLanguege.mentCard.points[1]}</li>
              <li className='text-sm list-disc my-1'>{selectedLanguege.mentCard.points[2]}</li>
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




