import { FaPaintBrush, FaCode, FaTools } from "react-icons/fa";
import { AccentTitle, MainTitle, SecondaryTitle } from "../components/ReusableComponents/Titles";
import { buttonStyle } from "./Hero";
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";


interface ServiceCardData {
  title: string;
  description: string;
}

interface CardsI {
  card1:ServiceCardData
  card2:ServiceCardData
  card3:ServiceCardData
}

interface ServicesI {
  title: string;
  cards: CardsI;
  btn:string;
}

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}


export const Services: React.FC<{selectedLanguege: ServicesI }> = ({selectedLanguege}) => {
  const services: Service[] = [
  {
    icon: <FaPaintBrush />,
    title: selectedLanguege.cards.card1.title,
    description: selectedLanguege.cards.card1.description,
  },
  {
    icon: <FaCode />,
    title: selectedLanguege.cards.card2.title,
    description: selectedLanguege.cards.card2.description,
  },
  {
    icon: <FaTools />,
    title: selectedLanguege.cards.card3.title,
    description: selectedLanguege.cards.card3.description,
  },
];

  return (
    <main
      id="services"
      className="my-6 mb-16 w-full flex-col flex justify-center transition duration-300 items-center"
    >
      <div className="w-[90%] max-w-[1800px] flex flex-col justify-center items-center">
    <SecondaryTitle classes="my-5 mr-auto" text={selectedLanguege.title} />
        <section className="w-full my-4 h-full flex lg:flex-row flex-col gap-4">
          {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
        </section>
        <a href="#contact" className={`${buttonStyle} mx-auto mt-6`}>
          {selectedLanguege.btn}
        </a>
      </div>
    </main>
  );
};

const ServiceCard: React.FC<{ title: string; description: string; icon: ReactNode;}> = ({
  title,
  description,
  icon,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-[40vh] lg:gap-2 rounded-xl p-4 flex flex-col items-center text-center justify-evenly bg-gray bg-opacity-10"
    >
      <div className="text-purple text-[4rem]">{icon}</div>
      <h3 className="text-white font-semibold text-2xl">{title}</h3>
      <p className="text-white opacity-75 px-4">{description}</p>
    </motion.article>
  );
};
