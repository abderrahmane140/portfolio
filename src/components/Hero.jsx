import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [activeLink, setActiveLink] = useState("");

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
  ];

  const socialLinks = [
    { href: "mailto:bsarabderrahmane01@gmail.com", Icon: MdEmail, label: "Email" },
    { href: "https://github.com/abderrahmane140", Icon: FaGithub, label: "GitHub" },
    { href: "https://www.linkedin.com/in/abderrahman-bsar", Icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://x.com/bsr2781", Icon: FaXTwitter, label: "Twitter" },
  ];

  useEffect(() => {
  const sections = document.querySelectorAll("section");
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3, // lowered threshold here
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Active section:", entry.target.id);
        setActiveLink(entry.target.id);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach((section) => observer.observe(section));

  return () => {
    sections.forEach((section) => observer.unobserve(section));
  };
}, []);


  return (
    <header className="p-6 md:p-10">
      <div className="space-y-3">
        <motion.h1 
        className="text-2xl md:text-5xl font-source font-extrabold text-purple-300"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        >
           Bsar Abderrahmane 
        </motion.h1>
        <motion.h2 
          className="text-lg md:text-xl font-bold text-purple-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >Full Stack Developer
        </motion.h2>
        <motion.p 
        className="text-gray-400 text-sm md:text-base max-w-xs md:max-w-none"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          I bring accessible, pixel-perfect digital experiences to life on the web.
        </motion.p>
      </div>

      {/* Navigation Links - hidden on small screens */}
<nav className="mt-10 md:mt-20 hidden md:flex" aria-label="Main navigation">
  <ul className="flex flex-col gap-2 text-gray-400 uppercase font-bold text-sm">
    {navLinks.map(({ href, label }) => (
      <li key={href}>
        <button
          onClick={() => {
            const id = href.slice(1);
            const el = document.getElementById(id);
            el?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className={`transition-colors duration-300 hover:text-purple-300 ${
            activeLink === href.slice(1) ? "text-purple-300 font-bold" : ""
          }`}
        >
          {label}
        </button>
      </li>
    ))}
  </ul>
</nav>

      {/* Social Links */}
      <div className="mt-10 md:mt-40" aria-label="Social links">
        <ul className="flex items-center gap-4">
          {socialLinks.map(({ href, Icon, label }) => (
            <li key={href}>
              <a
                href={href}
                aria-label={label}
                className="text-white group hover:text-purple-300 transition-colors duration-300"
              >
                <Icon size={28} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
