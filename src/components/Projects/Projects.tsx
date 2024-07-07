import { Dispatch, SetStateAction, useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import uniqid from "uniqid";
import { AccentTitle, MainTitle } from "../ReusableComponents/Titles";
import { projects } from "../../constants/projects";

interface ProjectsProps {
  selectedSkill: string;
  setSelectedSkill: Dispatch<SetStateAction<string>>;
}

interface Project {
  github: string;
  title: string;
  description: string;
  video?: boolean;
  src: string;
  skills: string[];
}

export const Projects: React.FC<ProjectsProps> = ({
  selectedSkill,
  setSelectedSkill,
}) => {
  const [projectList, setProjectList] = useState<Project[]>(projects);

  const sortBySkillUsage = (skill: string, projects: Project[]) => {
    const projectsUsingSkill = projects.filter((project) =>
      project.skills.includes(skill)
    );
    const projectsNotUsingSkill = projects.filter(
      (project) => !project.skills.includes(skill)
    );

    return projectsUsingSkill.concat(projectsNotUsingSkill);
  };

  useEffect(() => {
    if (selectedSkill) {
      setProjectList(sortBySkillUsage(selectedSkill, projectList));
    }
  }, [selectedSkill]);

  const allSkills = Array.from(
    new Set(projects.map((project) => project.skills).flat())
  );

  return (
    <main
      id="projects"
      className={`min-h-[100vh] my-5 w-full flex justify-center transition duration-300 items-start`}
    >
      <div className="w-[90%] max-w-[1800px] flex flex-col justify-start items-start">
        <MainTitle classes="my-5" text="Some of my projects" />
        <div className="w-full my-3">
          <AccentTitle classes="inline mb-5" text="Used: " />
          <select
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
            className="bg-background text-purple inline bg-opacity-10 p-1"
          >
            <option hidden></option>
            {allSkills.map((skill) => (
              <option key={uniqid()} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </div>
        <section className="w-full space-y-4 h-full">
          {projectList.map((project) => (
            <ProjectCard
              key={uniqid()}
              selectedSkill={selectedSkill}
              github={project.github}
              skills={project.skills}
              title={project.title}
              description={project.description}
              src={project.src}
              video={project.video}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

interface ProjectCardProps extends Project {
  selectedSkill: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  github,
  selectedSkill,
  src,
  title,
  description,
  video = false,
  skills,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false});

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="w-full rounded-xl p-4 flex flex-col lg:flex-row gap-4 justify-start items-start lg:h-[250px] bg-gray bg-opacity-10"
    >
      {video ? (
        <video
          muted
          autoPlay={true}
          loop={true}
          src={src}
          className="lg:h-[100%]"
        />
      ) : (
        <img src={src} className="min-w-[400px] rounded-md lg:h-[100%]" alt="Project front-page" />
      )}
      <div className="flex relative w-full gap-3 lg:gap-6 h-full flex-col justify-evenly items-start">
        <a
          href={github}
          target="_blank"
          className="hover:translate-y-[-3px] hover:scale-105 transition duration-300 absolute flex items-center justify-center gap-2 top-[1%] text-purple right-[1%] cursor-pointer"
          rel="noreferrer"
        >
          Github: <FaExternalLinkAlt size={12} />
        </a>
        <h2 className="text-white font-semibold text-xl md:text-3xl">{title}</h2>
        <p className="text-xl mt-auto opacity-75 text-white">{description}</p>
        <div className="flex mt-auto flex-wrap justify-start gap-1 items-start">
          {skills.map((skill) => (
            <p
              key={`${uniqid()} - skill`}
              className={`px-2 py-1 rounded-md text-white ${
                selectedSkill === skill ? "bg-purple" : "bg-background"
              } self-start inline-block`}
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </motion.article>
  );
};
