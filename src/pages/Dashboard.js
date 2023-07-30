import { Outlet, Link } from "react-router-dom";
import { languages } from "../components/Languages";
import("preline");

export function Dashboard({ language }) {
  return (
    <div className=" grid lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-7 lg:justify-normal justify-center">
      <div className="hover:animate-pulse hover:scale-110 duration-200 lg:ml-28 ml-10 lg:mr-10 mb-10 mt-1 bg-gray-100 rounded-lg dark:bg-blue-900 dark:border-2 dark:border-black ">
        <Link to="/top20">
          <img
            className="h-28 lg:pb-0 pb-1 w-full"
            src={"/images/top20Photo.webp"}
            alt="negro"
            style={{
              borderTopLeftRadius: "0.4rem",
              borderTopRightRadius: "0.4rem",
            }}
          ></img>
          <div className="flex justify-center">
            <div className="font-bold font-lilita outlineHeader lg:text-2xl text-lg  dark:text-slate-300 text-yellow-500 mt-4">
              {languages[language].games}
            </div>
          </div>
        </Link>
      </div>

      <div className="hover:animate-pulse hover:scale-110 duration-200 lg:mr-16 mr-10 lg:ml-16 pb-10 mb-10 mt-1 bg-gray-100 dark:bg-blue-900 dark:border-2 dark:border-black rounded-lg ">
        <Link to="/music">
          <img
            className="h-28 lg:pb-0 pb-1 w-full"
            src={"/images/music.webp"}
            alt="negro"
            style={{
              borderTopLeftRadius: "0.4rem",
              borderTopRightRadius: "0.4rem",
            }}
          ></img>

          <div className="flex justify-center ">
            <div className="font-bold font-lilita outlineHeader lg:text-2xl text-xl  dark:text-slate-300 text-yellow-500 mt-4">
              {languages[language].music}
            </div>
          </div>
        </Link>
      </div>

      <div className="hover:animate-pulse hover:scale-110 duration-200 lg:mr-28 ml-10 lg:mb-10 pb-10 lg:mt-1 bg-gray-100 rounded-lg dark:bg-blue-900 dark:border-2 dark:border-black ">
        <Link to="/dreams">
          <img
            className="h-28 lg:pb-0 pb-1 w-full"
            src={"/images/dreams.webp"}
            alt="negro"
            style={{
              borderTopLeftRadius: "0.4rem",
              borderTopRightRadius: "0.4rem",
            }}
          ></img>

          <div className="flex justify-center">
            <div className="font-bold font-lilita outlineHeader lg:text-2xl text-xl  dark:text-slate-300 text-yellow-500 mt-4">
              Dreams PS4
            </div>
          </div>
        </Link>
      </div>

      <div className="hover:animate-pulse hover:scale-110 duration-200 lg:ml-28 mr-10 bg-gray-100 rounded-lg dark:bg-blue-900 dark:border-2 dark:border-black ">
        <a href="https://www.rubenportfolio.com/">
          <img
            className="h-28 w-full"
            src={"/images/portfolio.webp"}
            alt="Dreams PS4"
            style={{
              borderTopLeftRadius: "0.4rem",
              borderTopRightRadius: "0.4rem",
            }}
          ></img>
          <div className="flex justify-center">
            <div className="font-bold font-lilita outlineHeader lg:text-2xl text-xl  dark:text-slate-300 text-yellow-500 mt-4">
              {languages[language].portfolio}
            </div>
          </div>
        </a>
      </div>

      <div className="hover:animate-pulse hover:scale-110 duration-200 lg:mr-16 lg:ml-16 ml-10 lg:mt-0 mt-10 pb-10 bg-gray-100 rounded-lg dark:bg-blue-900 dark:border-2 dark:border-black">
        <a href="https://www.instagram.com/project_sphere__/">
          <img
            className="h-28 w-full"
            src={"/images/game.webp"}
            alt="negro"
            style={{
              borderTopLeftRadius: "0.4rem",
              borderTopRightRadius: "0.4rem",
            }}
          ></img>
          <div className="flex justify-center">
            <div className="font-bold font-lilita outlineHeader lg:text-2xl text-xl  dark:text-slate-300 text-yellow-500 mt-4">
              {languages[language].duck}
            </div>
          </div>
        </a>
      </div>

      <div className="hover:animate-pulse hover:scale-110 duration-200 lg:mr-28 mr-10 lg:mt-0 mt-10 lg:ml-10 bg-gray-100 rounded-lg dark:bg-blue-900 dark:border-2 dark:border-black">
        <div className="flex justify-center">
          <div
            className="absolute mt-12 animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
            role="status"
            aria-label="loading"
          ></div>
        </div>
        <img
          className="h-28 w-full"
          src={"/images/negro.webp"}
          alt="negro"
          style={{
            borderTopLeftRadius: "0.4rem",
            borderTopRightRadius: "0.4rem",
          }}
        ></img>

        <div className="flex justify-center">
          <div className="font-bold font-lilita outlineHeader lg:text-2xl text-lg  dark:text-slate-300 text-yellow-500 mt-4">
            {languages[language].prox}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
