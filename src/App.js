import { Hero } from "./components/Hero";
import { Header } from "./components/Navbar";

function App() {
  return (
    <div className="w-full bg-background min-h-screen flex flex-col justify-start items-start">
      <Header />
      <Hero /> 
    </div>
  );
}

export default App;