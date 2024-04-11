import { useState } from "react";
import { ContactMe } from "./components/ContactMe";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
function App() {
  const [selectedSkill, setSelectedSkill] = useState("");

  return (
    <main className="w-full pt-20 bg-background relative min-h-screen flex flex-col justify-start items-center">
      <Navbar />
      <SpeedInsights />
      <Analytics />
      <Hero selectedSkill={selectedSkill} setSelectedSkill={setSelectedSkill} />
      <Experience />
      <Projects
        selectedSkill={selectedSkill}
        setSelectedSkill={setSelectedSkill}
      />
      <ContactMe />
    </main>
  );
}

export default App;
