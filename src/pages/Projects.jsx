import { FaGithub } from "react-icons/fa";
import { data } from "../data";

export default function Projects() {
  return (
    <div className="p-10 lg:pr-40 lg:pl-40 mt-20 mb-20" id="projects">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          Projects <span className="text-lightGreen text-5xl">.</span>
        </h1>
        <hr className="flex-grow ml-4 border-t border-lightGreen" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="p-10 rounded-md bg-light-navy hover:bg-bluer group"
          >
            <div className="pb-2 flex justify-end text-2xl hover:text-lightGreen">
              <a href={item.link} target="_blank">
                <FaGithub className="cursor-pointer" />
              </a>
            </div>
            <h1 className="font-bold text-2xl pb-3 group-hover:text-lightGreen">
              {item.title}
            </h1>
            <p className="pb-4">{item.description}</p>
            <p>{item.technology}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
