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
          src={"/images/arriba_icono.png"}
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

      <div className="flex justify-center">
        <div className="text-white mt-5 mb-10 lg:text-2xl text-xl">
          {languages[language].created}
        </div>
      </div>
    </div>
  );
}
