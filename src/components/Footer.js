import { languages } from "../components/Languages";
import React, { useState, useEffect } from "react";

export function Footer({ language }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let scroll = document.documentElement.scrollTop;

      if (scroll > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div>
        <img
          className={`fixed lg:bottom-5 bottom-2 lg:right-7 right-2 lg:h-10 h-8 animate-pulse bg-gray-300 dark:bg-blue-800 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-100 translate-x-40"
          }`}
          src={"/rubenperez/images/arriba_icono.png"}
          alt="Up Web"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        ></img>
      </div>
      <div className="flex justify-center">
        <div className="mt-32">
          <iframe
            className="hover:scale-105 duration-200 lg:w-72 w-60 h-20"
            src="https://open.spotify.com/embed/track/24SyVpif5eshcNmLKdvOcj?si=bc5f78affefd4fb1"
            allowtransparency="true"
            allow="encrypted-media"
            title="Spotify player"
          ></iframe>
        </div>
      </div>
      <div className="mt-20 flex justify-center">
        <a
          className="hover:scale-125 duration-200"
          href="https://ko-fi.com/evowhite99"
        >
          <div
            className={`absolute font-lilita outlineHeader text-sm lg:mt-[-10px] mt-[-16px] ml-[-16px] dark:text-slate-300 text-yellow-500 ${
              language === "EN" ? "lg:ml-2" : "lg:ml-1"
            }`}
          >
            {languages[language].donations}
          </div>
          <img
            className=" lg:h-20 h-8 cursor-pointer"
            src={"/rubenperez/images/ko-fi.png"}
            alt="Ko-Fi"
          ></img>
        </a>

        <a href="https://www.youtube.com/watch?v=iLngVDpKamY">
          <img
            className="hover:scale-125 duration-200 lg:h-20 h-8 lg:ml-10 ml-8 cursor-pointer"
            src={"/rubenperez/images/youtube.png"}
            alt="YouTube"
          ></img>
        </a>

        <a href="https://twitter.com/evowhite99">
          <img
            className="hover:scale-125 duration-200 lg:h-20 h-8 lg:ml-10 ml-8 cursor-pointer"
            src={"/rubenperez/images/twitter.png"}
            alt="Twitter"
          ></img>
        </a>

        <a href="https://www.instagram.com/evowhite99/">
          <img
            className="hover:scale-125 duration-200 lg:h-20 h-8 lg:ml-10 ml-8 cursor-pointer"
            src={"/rubenperez/images/instagram.png"}
            alt="Instagram"
          ></img>
        </a>
      </div>
      <div className="flex justify-center">
        <div className="text-white mt-5 mb-10 lg:text-2xl text-xl">
          {languages[language].created}
        </div>
      </div>
    </div>
  );
}
