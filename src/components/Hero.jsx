import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";

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
      root: null, // Use viewport as root
      rootMargin: "0px",
      threshold: 0.6, // Trigger when 60% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      // Cleanup observer when component unmounts
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="p-10">
      <div className="space-y-3 text-white">
        <h1 className="text-5xl font-source font-extrabold text-sky-300">
          Bsar Abderrahmane
        </h1>
        <h2 className="text-xl">Full Stack Developer</h2>
        <p className="text-sm">
          I build accessible, user-friendly interfaces.
        </p>
      </div>

      <nav className="mt-20" aria-label="Main navigation">
        <ul className="flex flex-col gap-2 text-white uppercase">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`transition-colors duration-300 hover:text-sky-300 ${
                  activeLink === href.slice(1) ? "text-sky-300 font-bold" : ""
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-40" aria-label="Social links">
        <ul className="flex items-center gap-4">
          {socialLinks.map(({ href, Icon, label }) => (
            <li key={href}>
              <a
                href={href}
                aria-label={label}
                className="text-white group hover:text-sky-300 transition-colors duration-300
"
              >
                <Icon size={30} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
