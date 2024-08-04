import { ReactNode, useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { AccentTitle, SecondaryTitle } from "./ReusableComponents/Titles";
import { buttonStyle } from "./Hero";
import { links } from "../constants/links";
import { FaHeart } from "react-icons/fa";

const inputStyles =
  "focus:outline-none w-[100%] lg:w-[95%] px-2 py-3 mb-5 text-2xl rounded-md text-white bg-gray bg-opacity-10 border-purple";
const labelStyles = "font-mono mb-1 text-lightGray text-2xl";
const labelErrorStyles = "font-mono mb-1 text-red-600 text-2xl";

interface LinkProps {
  href: string;
  text: string;
  icon: ReactNode;
  go:string;
}

interface ContactI {
  accentTitle: string;
  main1: string;
  main2: string;
  or: string;
  name: string;
  mail: string;
  question: string;
  btn1: string;
  go: string;
  sending:string;
  thanks:string;
  reply:string;
  nameErr:string;
  mailErr:string;
  questionErr:string;
}


export const ContactMe:React.FC<{selectedLanguege:ContactI}> = ({selectedLanguege}) => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (data.hnyPot) {
      return;
    }
    setSent(true);
    setLoading(true);
    const params = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    if (
      process.env.REACT_APP_SERVICE_ID &&
      process.env.REACT_APP_TEMPLATE &&
      process.env.REACT_APP_PUBLIC
    ) {
      try {
        await emailjs
          .send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE,
            params,
            process.env.REACT_APP_PUBLIC
          )
          .then(() => {
            setLoading(false);
          });
      } catch (error) {
        setLoading(false);
      }
    }
  };

  const componentRef = useRef<HTMLDivElement>(null);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isFindMeVisible, setIsFindMeVisible] = useState(false);

  const contactAnimation = useSpring({
    opacity: isContactVisible ? 1 : 0,
    transform: isContactVisible ? "translateX(0%)" : "translateX(-200%)",
    config: { tension: 220, friction: 30 },
    delay: 300,
  });

  const findMeAnimation = useSpring({
    opacity: isFindMeVisible ? 1 : 0,
    transform: isFindMeVisible ? "translateX(0%)" : "translateX(200%)",
    config: { tension: 220, friction: 30 },
    delay: 500,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsContactVisible(entry.isIntersecting);
          setIsFindMeVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

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
    <div
      id="contact"
      ref={componentRef}
      className="h-auto border-t-2 border-white mt-10 relative flex flex-col justify-center items-center w-full"
    >
      <animated.section
        style={contactAnimation}
        className="py-5 pl-1 max-w-[1800px] w-[90%]"
      >
        <AccentTitle text={selectedLanguege.accentTitle} classes="mr-auto" />
      </animated.section>
      <div className="max-w-[1800px] min-h-[90vh] lg:min-h-[45vh] py-4 relative w-[90%] justify-between flex flex-col lg:flex-row items-start">
        {sent ? (
          <div className="flex-2 w-full flex p-4 flex-col lg:max-w-[42%] justify-center items-start rounded-xl">
            {loading ? (
              <h2 className="text-4xl text-white font-semibold animate-pulse">
                {selectedLanguege.sending}
              </h2>
            ) : (
              <h2 className="text-4xl text-white font-semibold">
              {selectedLanguege.thanks} <FaHeart className="inline" />
                <br />
                {selectedLanguege.reply}{" "}
              </h2>
            )}
          </div>
        ) : (
          <animated.form
            onSubmit={handleSubmit(onSubmit)}
            style={contactAnimation}
            className="flex-2 w-full flex p-4 flex-col border-white lg:max-w-[42%] justify-evenly items-start rounded-xl"
          >
            <SecondaryTitle text={selectedLanguege.main1} classes="mb-5" />
            {errors.name && errors.name.message !== undefined ? (
              <label className={labelErrorStyles}>
                {errors.name.message.toString()}
              </label>
            ) : (
              <label className={labelStyles}>{selectedLanguege.name}</label>
            )}
            <input
              {...register("name", {
                required: selectedLanguege.nameErr,
                minLength: 3,
              })}
              type="text"
              className={inputStyles}
            />
            <input type="text" className="hidden" {...register("hnyPot")} />
            {errors.email && errors.email.message !== undefined ? (
              <label className={labelErrorStyles}>
                {" "}
                {errors.email.message.toString()}
              </label>
            ) : (
              <label className={labelStyles}>{selectedLanguege.mail}</label>
            )}
            <input
              type="text"
              {...register("email", {
                required: selectedLanguege.mailErr,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              })}
              className={inputStyles}
            />
            {errors.message && errors.message.message !== undefined ? (
              <label className={labelErrorStyles}>
                {" "}
                {errors.message.message.toString()}
              </label>
            ) : (
              <label className={labelStyles}>{selectedLanguege.question}</label>
            )}
            <input
              type="text"
              {...register("message", { required: selectedLanguege.questionErr })}
              className={inputStyles}
            />
            <button
              type="submit"
              disabled={sent}
              className={`${buttonStyle} my-2`}
            >
              {selectedLanguege.btn1}
            </button>
          </animated.form>
        )}
        <animated.div
          style={findMeAnimation}
          className="text-center w-full flex-1 py-8 lg:py-3 self-center"
        >
          <AccentTitle text={selectedLanguege.or} classes="overflow-hidden z-50" />
        </animated.div>
        <animated.section
          style={findMeAnimation}
          className="text-white p-4 border-white flex-2 w-full lg:max-w-[42%] rounded-xl flex flex-col justify-between items-start"
        >
          <h1 className="text-h2clamp whitespace-nowrap mb-5 font-semibold">
            {" "}
            {selectedLanguege.main2}
          </h1>
          <div className="text-3xl flex flex-col rounded-xl flex-wrap items-start justify-evenly h-full text-lightGray w-full my-2 md:my-0">
            {links.map((link) => (
              <LinkPair
              go={selectedLanguege.go}
                key={link.text}
                text={link.text}
                href={link.href}
                icon={link.icon}
              />
            ))}
          </div>
        </animated.section>
      </div>
    </div>
  );
};

const LinkPair: React.FC<LinkProps> = ({ href, text, icon, go }) => {
  return (
    <div className="flex bg-gray bg-opacity-10 gap-2 rounded-lg text-2xl p-[10px] justify-start w-full items-center mb-5">
      {icon}
      <p>{text}</p>
      <a
        href={href}
        target="_blank"
        className={`${buttonStyle} ml-auto text-sm px-6 my-auto`} rel="noreferrer"
      >
        {" "}
        Go
      </a>
    </div>
  );
};
