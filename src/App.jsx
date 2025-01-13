import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-slate-950 flex h-screen">
      {/* Left Half: Hero Section */}
      <div className="w-1/2 p-10 h-full">
        <Hero />
      </div>
      
      {/* Right Half: Scrollable Content */}
      <div className="w-1/2 p-10 overflow-y-auto h-full">
        <About/>
        <Experience/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
