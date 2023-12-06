import { Outlet, Link } from "react-router-dom";
import { languages } from "../components/Languages";
import("preline");

export function Dashboard({ language }) {
  return (
    <div className=" grid grid-cols-2 gap-7 lg:justify-normal justify-center">
      <div className="hover:animate-pulse lg:hover:scale-100 hover:scale-110 duration-200  ml-10  mb-10 mt-1 bg-gray-100 rounded-lg dark:bg-blue-900 dark:border-2 dark:border-black ">
        <Link to="/music&games">
          <img
            className="h-28 w-full"
            src={"/images/music.webp"}
            alt="Dreams PS4"
            style={{
              borderTopLeftRadius: "0.4rem",
              borderTopRightRadius: "0.4rem",
            }}
          ></img>
          <div className="flex justify-center">
            <div className="font-bold font-lilita text-center outlineHeader lg:text-2xl text-xl  dark:text-slate-300 text-yellow-500 mt-4">
              {languages[language].music}
            </div>
          </div>
        </Link>
      </div>

      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="hover:animate-pulse lg:hover:scale-100 hover:scale-110 duration-200  mr-10 pb-10 mb-10 mt-1 bg-gray-100 dark:bg-blue-900 dark:border-2 dark:border-black rounded-lg "
      >
        <Link to="/dreams">
          <img
            className="h-28 lg:pb-0 pb-1 w-full"
            src={"/images/dreams.webp"}
            alt="music"
            style={{
              borderTopLeftRadius: "0.4rem",
              borderTopRightRadius: "0.4rem",
            }}
          ></img>

          <div className="flex justify-center ">
            <div className="font-bold font-lilita text-center outlineHeader lg:text-2xl text-xl  dark:text-slate-300 text-yellow-500 mt-4">
              Dreams PS4
            </div>
          </div>
        </Link>
      </div>

      <div className="hover:animate-pulse lg:hover:scale-100 hover:scale-110 duration-200  ml-10 pb-10  bg-gray-100 rounded-lg dark:bg-blue-900 dark:border-2 dark:border-black ">
        <a href="https://www.instagram.com/project_sphere__/">
          <img
            className="h-28 w-full"
            src={"/images/game.webp"}
            alt="game"
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

      <div className="hover:animate-pulse lg:hover:scale-100 hover:scale-110 duration-200  mr-10 bg-gray-100 rounded-lg dark:bg-blue-900 dark:border-2 dark:border-black ">
        <a href="https://www.instagram.com/project.web_/">
          <img
            className="h-28 lg:pb-0 pb-1 w-full"
            src={"/images/shop.webp"}
            alt="shop"
            style={{
              borderTopLeftRadius: "0.4rem",
              borderTopRightRadius: "0.4rem",
            }}
          ></img>
          <div className="flex justify-center">
            <div className="font-bold font-lilita outlineHeader lg:text-2xl text-lg  dark:text-slate-300 text-yellow-500 mt-4">
              {languages[language].shop}
            </div>
          </div>
        </a>
      </div>

      <Outlet />
    </div>
  );
}
