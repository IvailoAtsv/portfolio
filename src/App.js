import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="w-full bg-background overflow-x-hidden min-h-screen flex flex-col  justify-start items-center">
      <Navbar />
      <Hero />

    </div>
  );
}

export default App;