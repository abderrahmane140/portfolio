import { FaGithub } from "react-icons/fa";
import { data } from "../data";

export default function Projects() {
  return (
    <section id="projects">
        <div className="flex flex-col gap-6 h-screen p-8 " >
        {data.length > 0 ? (
            data.map((item) => (
            <div
                key={item.id}
                className="group flex flex-col md:flex-row justify-between gap-4 items-start p-4 rounded-lg shadow-md transition duration-300 hover:backdrop-blur-md hover:bg-gray-800 hover:bg-opacity-90"
            >
                <div className="w-full md:w-1/4 flex-shrink-0">
                <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-auto rounded-lg border border-gray-700"
                />
                </div>
                <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <h1 className="text-white font-bold text-xl group-hover:text-sky-300 transition duration-300">
                    {item.title || "Untitled Project"}
                    </h1>
                    <a
                    href={item.link}
                    className="text-white hover:text-sky-300 flex items-center gap-1 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <FaGithub />
                    </a>
                </div>
                <p className="text-sm text-gray-300">
                    {item.description || "No description provided."}
                </p>
                <p className="text-sm flex flex-wrap gap-2 text-gray-400">
                    {item.technology.map(item=>(
                        <p className="text-sky-300 bg-teal-400/10 px-2 py-1 rounded-2xl text-sm">{item}</p>
                    ))}
                </p>
                </div>
            </div>
            ))
        ) : (
            <p className="text-white text-center">No projects to display.</p>
        )}
        </div>

    </section>
  );
}
