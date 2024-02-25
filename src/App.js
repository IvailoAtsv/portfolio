import { useRef } from "react";
import { ContactMe } from "./components/ContactMe";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services/Services";

function App() {

  return (
    <div className="w-full bg-background relative overflow-x-hidden min-h-screen flex flex-col justify-start items-center">
      <Navbar/>
      <Hero />
      <Experience />
      <Services />
      <ContactMe />
    </div>
  );
}

export default App;