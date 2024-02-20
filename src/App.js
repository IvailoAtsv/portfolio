import { Hero } from "./components/Hero";
import { Header } from "./components/Navbar";
import dev from './images/dev.png'

function App() {
  return (
    <div className="w-full bg-background overflow-x-hidden min-h-screen flex flex-col justify-start items-start">
      <Header />
      <Hero /> 
      <img src={dev} className="w-[45%] h-auto z-50"/>

    </div>
  );
}

export default App;