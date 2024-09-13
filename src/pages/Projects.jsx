import { FaGithub } from "react-icons/fa";
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
        <div className="p-10 rounded-md bg-light-navy hover:bg-bluer group">
          <div className="pb-2 flex justify-end text-2xl hover:text-lightGreen">
            <a
              href="https://github.com/lokmane15/location-voiture-app"
              target="_blanck"
            >
              <FaGithub className="cursor-pointer" />
            </a>
          </div>
          <h1 className="font-bold text-2xl pb-3 group-hover:text-lightGreen">
            Car Rental
          </h1>
          <p className="pb-4">
            An application created for bc skills, with laravel on teh backend
            and reactjs on the frontend
          </p>
          <p>
            laravel, React js, tailwind css, React Query, Framer Motion, Strip
          </p>
        </div>

        <div className="p-10 rounded-md bg-light-navy hover:bg-bluer group">
          <div className="pb-2 flex justify-end text-2xl hover:text-lightGreen">
            <a
              href="https://github.com/abderrahmane140/tic-tac-toe"
              target="_blanck"
            >
              <FaGithub className="cursor-pointer" />
            </a>
          </div>
          <h1 className="font-bold text-2xl pb-3 group-hover:text-lightGreen">
            tic-tac-toe
          </h1>
          <p className="pb-10">
            I built a simple Tic-Tac-Toe game using React for dynamic
            functionality and CSS for styling.
          </p>
          <p>React js, Html & Css</p>
        </div>

        <div className="p-10 rounded-md bg-light-navy hover:bg-bluer group">
          <div className="pb-2 flex justify-end text-2xl hover:text-lightGreen">
            <a
              href="https://github.com/abderrahmane140/van-life"
              target="_blanck"
            >
              <FaGithub className="cursor-pointer" />
            </a>
          </div>
          <h1 className="font-bold text-2xl pb-3 group-hover:text-lightGreen">
            Van life
          </h1>
          <p className="pb-10">
            I developed a van life rental application using React js for
            interactive features and using Rest api.
          </p>
          <p>React js,Html & Css, Rest api</p>
        </div>
      </div>
    </div>
  );
}
