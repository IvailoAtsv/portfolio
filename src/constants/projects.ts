import alcona from '../images/thumbnails/alcona.png'
import windyHills from '../images/thumbnails/windyHills.png'
import ignis from '../images/thumbnails/ignis.mov'
import thisP from '../images/thumbnails/this.png'

export const projects = [
    {
        github:'https://github.com/IvailoAtsv/windyHills',
        title: 'Windy Hills',
        description: "This project marks my first dive into full-stack development. Learn about the winery's history, explore the wine selection, and see a testament to my growth in web development.",
        src: windyHills,
        skills: ['React JS','Node JS' ,'Javascript', 'HTML 5', 'CSS 3', 'Styled Components']
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
        skills: ['React JS', 'Node JS','Javascript','React-Spring', 'HTML 5', 'Tailwind CSS']
    },
    {
        src:thisP,
        title:'And of course...',
        description:"Don't forget to check out this portfiolio's github repo!",
        github:'https://github.com/IvailoAtsv/portfolio',
        skills:['React JS', 'Typescript','React-hook-form','React-Spring', 'HTML 5', 'Tailwind CSS']
    }
]