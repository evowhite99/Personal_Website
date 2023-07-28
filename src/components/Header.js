import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { Sidebar } from "../components/Sidebar";

import "../styles/header.css";

export function Header({ language, setLanguage }) {
  const [isSelected, setIsSelected] = useState(
    () => window.localStorage.getItem("theme") === "dark"
  );

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    window.requestAnimationFrame(() => {
      if (!isSelected) {
        document.body.classList.remove("dark");
        if (window.innerWidth <= 768) {
          document.body.style.backgroundImage =
            "url(images/sunPhotoMobile.webp)";
        } else {
          document.body.style.backgroundImage = "url(/images/sunPhoto.webp)";
        }
      } else {
        document.body.classList.add("dark");
        if (window.innerWidth <= 768) {
          document.body.style.backgroundImage =
            "url(/images/darkPhotoMobile.webp)";
        } else {
          document.body.style.backgroundImage = "url(/images/darkPhoto.webp)";
        }
      }
    });
  }, [isSelected]);

  useEffect(() => {
    window.localStorage.setItem("theme", isSelected ? "dark" : "light");
  }, [isSelected]);

  useEffect(() => {
    window.localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "ES" ? "EN" : "ES"));
  };

  return (
    <div id="website" className="shadow-lg flex justify-between mb-12">
      <div className="mb-8 font-lilita outlineHeader lg:text-3xl font-bold lg:ml-14 ml-8 mt-8 text-yellow-500 dark:text-gray-300 hover:scale-110 hover:text-yellow-400 hover:dark:text-gray-200 duration-300 cursor-pointer">
        <Link to="/"> Rubén Pérez Lara</Link>
      </div>
      <div className="flex items-center space-x-10 lg:mr-16 mr-8 ">
        <div
          onClick={toggleLanguage}
          className="cursor-pointer  lg:text-lg font-lilita outlineHeader2 text-yellow-500 hover:text-yellow-300  dark:text-gray-200 hover:scale-125 duration-300"
        >
          <span className="lg:inline hidden">
            {language === "ES" ? "English" : "Español"}
          </span>
        </div>
        <div
          onClick={() => setIsSelected(!isSelected)}
          className={classNames(
            "hover:scale-125 cursor-pointer flex-none w-14 h-7 bg-yellow-700 dark:bg-blue-900 m-10 rounded-full transition-all duration-500 border-2 border-black  lg:flex hidden",
            {
              "bg-blue-500": isSelected,
            }
          )}
        >
          <span
            className={classNames(
              "h-6 w-6 bg-yellow-400 dark:bg-blue-600 rounded-full transition-all duration-500 shadow-lg",
              {
                "ml-7": isSelected,
              }
            )}
          >
            <img
              className="h-6 w-8"
              src={isSelected ? "/images/moon.png" : "/images/sun.png"}
              alt={isSelected ? "dark theme" : "light theme"}
            />
          </span>
        </div>

        <img
          onClick={handleToggleSidebar}
          className="cursor-pointer flex lg:w-8 lg:h-8 w-6 h-6 dark:pt-2 dark:pb-2 
          duration-300 hover:scale-125 dark:bg-white dark:rounded"
          src={"images/burger.svg"}
          alt="sidebar"
        />
      </div>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
        language={language}
        setLanguage={setLanguage}
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />
    </div>
  );
}
