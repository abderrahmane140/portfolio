import { useState } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
<div
      onMouseMove={handleMouseMove}
      className="relative bg-slate-900 flex flex-col md:flex-row items-center md:items-start justify-around md:h-screen md:overflow-hidden"
    >
      {/* 🔦 Spotlight overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-10"
        style={{
          background: `radial-gradient(
            200px circle at ${position.x}px ${position.y}px,
            rgba(196, 181, 253, 0.1),
            transparent 90%
          )`,
        }}
      ></div>

      {/* Left Half: Hero Section */}
      <div className="w-full md:w-1/2 p-5 md:p-10 z-0">
        <Hero />
      </div>

      {/* Right Half: Scrollable Content */}
      <div className="w-full mt-8 md:w-1/2 p-5 md:overflow-y-auto md:h-full mb-10">
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}

export default App;
