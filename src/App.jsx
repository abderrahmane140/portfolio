import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
