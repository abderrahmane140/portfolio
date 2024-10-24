import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");
  return (
    <nav className="fixed top-0 w-full z-50 shadow-md">
      <div className="flex justify-end md:justify-between bg-opacity-10 backdrop-blur-md items-center p-4">
        <div className="font-bold text-2xl hidden lg:block">
          <h1 className="hover:text-lightGreen">bsar</h1>
        </div>
        <div className="hidden lg:flex">
          <a
            href="#about"
            onClick={() => setActiveLink("about")}
            className={`mr-5 hover:text-lightGreen  ${
              activeLink == "about" ? "text-lightGreen" : ""
            }`}
          >
            About
          </a>
          <a
            href="#experience"
            className={`mr-5 hover:text-lightGreen  ${
              activeLink == "experience" ? "text-lightGreen" : ""
            }`}
            onClick={() => setActiveLink("experience")}
          >
            Experience
          </a>
          <a
            href="#projects"
            className={`mr-5 hover:text-lightGreen  ${
              activeLink == "projects" ? "text-lightGreen" : ""
            }`}
            onClick={() => setActiveLink("projects")}
          >
            Projects
          </a>
        </div>
        <div className="flex ">
          <a href="mailto:bsarabderrahmane01@gmail.com"><MdEmail className="mr-2 cursor-pointer hover:text-lightGreen" /></a>
          <a href="https://github.com/abderrahmane140"><FaGithub className="mr-2 cursor-pointer hover:text-lightGreen" /></a>
          <a href="https://www.linkedin.com/in/abderrahman-bsar"><FaLinkedin className="mr-2 cursor-pointer hover:text-lightGreen" /></a>
          <a href="https://x.com/bsr2781"><FaXTwitter className="mr-2 cursor-pointer hover:text-lightGreen" /></a>
          
        </div>
      </div>
    </nav>
  );
}
