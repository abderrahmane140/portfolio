import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-end md:justify-between items-center p-4">
        <div className="font-bold text-2xl hidden lg:block">
          <h1 className="hover:text-lightGreen">Bsar</h1>
        </div>
        <div className="hidden lg:flex">
          <a href="#about" className="mr-5 hover:text-lightGreen">
            About
          </a>
          <a href="#experience" className="mr-5 hover:text-lightGreen">
            Experience
          </a>
          <a href="#projects" className="mr-5 hover:text-lightGreen">
            Projects
          </a>
        </div>
        <div className="flex ">
          <MdEmail className="mr-1 hover:text-lightGreen" />
          <FaGithub className="mr-1 hover:text-lightGreen" />
          <FaLinkedin className="mr-1 hover:text-lightGreen" />
          <FaXTwitter className="mr-1 hover:text-lightGreen" />
        </div>
      </div>
    </nav>
  );
}
