export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-4 py-10">
      <div className="flex flex-col justify-center gap-6 mb-6  text-gray-400 opacity-80 max-w-4xl">
        <p className="text-sm md:text-base leading-relaxed">
          I’m a full-stack developer passionate about crafting seamless digital
          experiences that blend innovation with usability. I specialize in
          building dynamic, scalable web applications with a focus on
          accessibility, performance, and pixel-perfect design. My expertise spans
          the entire development stack—from creating intuitive front-end
          interfaces to designing robust back-end architectures that deliver
          reliability and efficiency.
        </p>

        <p className="text-sm md:text-base leading-relaxed">
          Beyond my development work, I have a strong inclination to share the
          knowledge I've accumulated throughout my journey in Web Development.
          You're invited to connect with me on{" "}
          <a
            className="text-white hover:text-purple-300 underline underline-offset-4"
            href="https://www.linkedin.com/in/abderrahman-bsar"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          , where I regularly share insightful content related to Web Development
          and Programming. I believe in fostering a thriving Dev Community by
          imparting my expertise and experiences.
        </p>

        <p className="text-sm md:text-base leading-relaxed">
          I'm open to Job opportunities where I can contribute, learn, and grow.
          If you have a good opportunity that matches my skills and experience,
          then don't hesitate to{" "}
          <a
            className="text-white hover:text-purple-300 underline underline-offset-4"
            href="mailto:bsarabderrahmane01@gmail.com"
          >
            contact me
          </a>
          .
        </p>
      </div>
    </section>
  );
}
