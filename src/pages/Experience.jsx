export default function Experience() {
  const technology = [
    "Laravel",
    "React Js",
    "Html & Css",
    "Tailwind Css",
    "React Query",
    "Framer Motion",
    "Strip",
  ];
  return (
    <div className="lg:pr-40 p-10 lg:pl-40 mt-36" id="experience">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          Experience <span className="text-lightGreen text-5xl">.</span>
        </h1>
        <hr className="flex-grow ml-4 border-t border-lightGreen" />
      </div>

      <div className="p-5 mt-5 hover:bg-bluer rounded-lg group">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">
            <a href="https://www.bcskills.com/" target="_blanck">
              BC SKILLS
            </a>
          </h1>
          <p>Mer 2024 - Apr - 2024</p>
        </div>
        <div className="flex justify-between">
          <h3 className="font-bold text-xl mb-4 group-hover:text-lightGreen">
            Software Engineer
          </h3>
          <p>Safi</p>
        </div>
        <div>
          <p>
            Developed a comprehensive car rental application allowing users to
            browse available cars, select rental dates, make secure online
            payments via Stripe, and generate a contract for the user.
            Administrators access detailed statistics and manage cars, users,
            and borrowing records through dashboards.
          </p>
        </div>
        <div className="flex mt-5">
          {technology.map((item, index) => (
            <p
              key={index}
              className="mr-2 text-teal-300 bg-teal-400/10 pt-1 pb-1 pl-3 pr-3 leading-5 rounded-2xl"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
