export default function Experience() {
    const technologies = [
      "Laravel",
      "React Js",
      "Html & Css",
      "Tailwind Css",
      "React Query",
      "Framer Motion",
      "Stripe",
    ];
  
    return (
        <section id="experience">
            <div className="h-screen flex justify-center items-center" >
                <div className="p-6 w-full max-w-3xl transition duration-300 hover:backdrop-blur-md hover:bg-gray-800 hover:bg-opacity-90 rounded-lg group text-white">
                <div className="flex justify-between mb-4">
                    <h1 className="text-2xl font-bold">
                    <a
                        href="https://www.bcskills.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                    >
                        BC SKILLS
                    </a>
                    </h1>
                    <p>Mar 2024 - Apr 2024</p>
                </div>
                <div className="flex justify-between mb-4">
                    <h3 className="font-bold text-xl group-hover:text-sky-300">
                    Software Engineer
                    </h3>
                    <p>Safi</p>
                </div>
                <p className="mb-4">
                    Developed a comprehensive car rental application allowing users to
                    browse available cars, select rental dates, make secure online
                    payments via Stripe, and generate a contract for the user.
                    Administrators access detailed statistics and manage cars, users, and
                    borrowing records through dashboards.
                </p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                    <p
                        key={index}
                        className="text-sky-300 bg-teal-400/10 px-2 py-1 rounded-2xl text-sm"
                    >
                        {tech}
                    </p>
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
  }
  