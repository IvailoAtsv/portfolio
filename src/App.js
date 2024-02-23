import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="w-full bg-background relative overflow-x-hidden min-h-screen flex flex-col justify-start gap-5 items-center">
      <Navbar />
      <Hero />
      <Experience />
    </div>
  );
}

export default App;