import { useEffect, useState } from "react";
import { ContactMe } from "./components/ContactMe";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Services } from "./components/Services";
import { langueges } from "./constants/langueges";

function App() {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedLanguege, setSelectedLanguege] = useState(langueges.bg)
  const [langSwitch, setLangSwitch] = useState(true)

  useEffect(()=>{
    if(langSwitch){
      setSelectedLanguege(langueges.bg)
    }else{
      setSelectedLanguege(langueges.en)
    }
  },[langSwitch])

  return (
    <main className="w-full overflow-x-hidden pt-20 bg-background relative min-h-screen flex flex-col justify-start items-center">
      <Navbar setLangSwitch={setLangSwitch} selectedLanguege={selectedLanguege.nav} langSwitch={langSwitch}/>
      <SpeedInsights />
      <Analytics />
      <Hero selectedLanguege={selectedLanguege.hero} selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
      <Services selectedLanguege={selectedLanguege.services}/>
      <Experience selectedLanguege={selectedLanguege.experience}/>
      <Projects
      selectedLanguege={selectedLanguege.projects}
        selectedSkill={selectedSkill}
        setSelectedSkill={setSelectedSkill}
      />
      <ContactMe selectedLanguege={selectedLanguege.contact}/>
    </main>
  );
}

export default App;
