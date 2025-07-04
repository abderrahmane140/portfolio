import { FaGithub } from "react-icons/fa";
import { data } from "../data";
import { MdOpenInNew } from "react-icons/md";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center px-4 py-10">
      <div className="flex flex-col gap-6 mb-20">
        {data.length > 0 ? (
          data.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col md:flex-row justify-between gap-4 items-start p-4 rounded-lg shadow-md transition duration-300 hover:backdrop-blur-md hover:bg-gray-800 hover:bg-opacity-90 "
            >
              <div className="w-full md:w-1/4 flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto rounded-lg border border-gray-700"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center text-lg">
                  <h1 className="text-white font-bold text-xl group-hover:text-purple-300 transition duration-300 cursor-pointer">
                    <a href={item.live} target="_blank">
                      {item.title || "Untitled Project"}
                    </a>
                  </h1>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div>
                      {item.live && (
                       <a href={item.live} target="_blank" rel="noopener noreferrer">
                        <MdOpenInNew className="text-white hover:text-purple-300" />
                      </a> 
                      )}
    
                    </div>
                    <a
                      href={item.link}
                      className="text-white hover:text-purple-300 flex items-center gap-1 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <p className="text-sm text-gray-300">
                  {item.description || "No description provided."}
                </p>
                <p className="text-sm flex flex-wrap gap-2 text-gray-400">
                  {item.technology.map((tech, index) => (
                    <p
                      key={index}
                      className="text-purple-300 bg-teal-400/10 px-2 py-1 rounded-2xl text-sm"
                    >
                      {tech}
                    </p>
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
