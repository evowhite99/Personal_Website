import React, { useEffect } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { languages } from "../components/Languages";

export function Sidebar({
  isOpen,
  onClose,
  language,
  setLanguage,
  isSelected,
  setIsSelected,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "ES" ? "EN" : "ES"));
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-80 z-40"
          onClick={onClose}
        ></div>
      )}
      <div
        className={`sidebarSun fixed left-0 top-0 h-full transition-transform duration-200 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:w-80 w-60 bg-blue-800 dark:bg-gray-900 z-50 overflow-auto`}
      >
        <div className="flex">
          <div className="mt-5 ml-5 font-lilita outlineHeader text-yellow-400 dark:text-blue-500 lg:text-2xl pr-12 text-md ">
            {languages[language].shortcut}
          </div>
          <button
            onClick={onClose}
            className={classNames(
              "px-2 py-1 mt-3 lg:ml-10  text-3xl text-white hover:scale-125 duration-200 hover:text-red-600 dark:hover:text-blue-700",
              {
                "ml-2": language === "ES",
                "ml-14 lg:ml-28": language === "EN",
              }
            )}
          >
            X
          </button>
        </div>
        <div className=" mt-3 lg:hidden flex justify-evenly border-b-2 border-black pb-6 dark:border-gray-600">
          <div
            onClick={toggleLanguage}
            className="mt-1   cursor-pointer text-sm font-lilita outlineHeader2 text-yellow-500 hover:text-yellow-300 dark:text-gray-200 dark:hover:text-blue-400 hover:scale-125 w-12 duration-200 "
          >
            <span>{language === "ES" ? "English" : "Español"}</span>
          </div>
          <div
            onClick={() => setIsSelected(!isSelected)}
            className={classNames(
              "hover:scale-105 cursor-pointer flex w-14 h-7 bg-yellow-700 dark:bg-blue-900 rounded-full transition-all duration-500 border-2 border-black ",
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
                alt={isSelected ? "light theme" : "dark theme"}
              />
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="font-lilita outlineHeader text-white dark:text-gray-300 mt-8 text-xl hover:scale-125  duration-200 dark:hover:text-white">
            <Link to="/top20" onClick={onClose}>
              {languages[language].games}
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="font-lilita outlineHeader text-white dark:text-gray-300 mt-8 text-xl hover:scale-125  duration-200 dark:hover:text-white">
            <Link to="/music" onClick={onClose}>
              {languages[language].music}
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="font-lilita outlineHeader text-white dark:text-gray-300 mt-8 text-xl hover:scale-125  duration-200 dark:hover:text-white">
            <Link to="/dreams" onClick={onClose}>
              Dreams PS4
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="font-lilita outlineHeader text-white dark:text-gray-300 mt-8 text-xl hover:scale-125  duration-200 dark:hover:text-white">
            <a href="https://www.rubenportfolio.com/">Portfolio </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="font-lilita outlineHeader text-white dark:text-gray-300 mt-8 text-xl hover:scale-125  duration-200 dark:hover:text-white">
            <a href="https://www.instagram.com/project_sphere__/">
              {languages[language].duck}
            </a>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="font-lilita outlineHeader text-white dark:text-gray-300 mt-8 text-xl hover:scale-125  duration-200 dark:hover:text-white ">
            {languages[language].prox}...
          </div>
        </div>
      </div>
    </>
  );
}
