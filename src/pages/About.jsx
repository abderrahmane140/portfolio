export default function About() {
  return (
    <div className="flex flex-col md:flex-row justify-around md:items-start sm:pl-5 md:pl-5 pt-10 space-y-10 md:space-y-0 md:space-x-10 px-4 md:px-20 mt-20">
      <div className="max-w-lg">
        <h1 className="text-4xl sm:text-6xl font-bold">Bsar Abduh</h1>
        <p className="text-xl sm:text-2xl font-bold text-lightGreen">
          Full Stack Developer
        </p>
        <p className="text-sm sm:text-lg w-full md:w-64 mx-auto md:mx-0">
          I build accessible, user-friendly interfaces.
        </p>
      </div>
      <div className="max-w-lg text-xl">
        <p className="mb-5">
          Back in 2021, I took my first steps into the world of coding with C
          and quickly developed a passion for web development. Over the past
          three years, I&apos;ve had the opportunity to build software across
          various domains.
        </p>
        <p className="mb-5">
          My current focus is on JavaScript and React, where I specialize in
          creating accessible, user-friendly interfaces that blend aesthetic
          appeal with robust engineering. I thrive at the intersection of design
          and development, ensuring that my work not only looks great but
          performs seamlessly under the hood.
        </p>
        <p className="mb-5 ">
          When I&apos;m not at my desk, I am probably lifting weights, playing
          football, or getting lost in a good book.
        </p>
      </div>
    </div>
  );
}
