import React from "react";
import { useRef, useState } from "react";
import { ContactMe } from "./components/ContactMe";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {

  const [selectedSkill, setSelectedSkill] = useState('')

  return (
    <div className="w-full bg-background relative overflow-x-hidden min-h-screen flex flex-col justify-start items-center">
      <Navbar/>
      <Hero selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill}/>
      <Experience />
      <Projects selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill}/>
      <ContactMe />
    </div>
  );
}

export default App;