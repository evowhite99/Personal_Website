import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { languages } from "../components/Languages";
import { Sidebar } from "../components/Sidebar";

import "../styles/header.css";

export function Header({ language, setLanguage }) {
  const [isSelected, setIsSelected] = useState(
    () => window.localStorage.getItem("theme") === "light"
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
      if (isSelected) {
        document.body.classList.add("dark");
        if (window.innerWidth <= 768) {
          document.body.style.backgroundImage =
            "url(/Personal_Website/images/darkPhotoMobile.webp)";
        } else {
          document.body.style.backgroundImage =
            "url(/Personal_Website/images/darkPhoto.webp)";
        }
      } else {
        document.body.classList.remove("dark");
        if (window.innerWidth <= 768) {
          document.body.style.backgroundImage =
            "url(/Personal_Website/images/sunPhotoMobile.webp)";
        } else {
          document.body.style.backgroundImage =
            "url(/Personal_Website/images/sunPhoto.webp)";
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
            "hover:scale-125 cursor-pointer flex-none w-14 h-7 bg-blue-600 dark:bg-gray-600 m-10 rounded-full transition-all duration-500 border-2 border-black  lg:flex hidden",
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
              src={
                isSelected
                  ? "/Personal_Website/images/moon.png"
                  : "/Personal_Website/images/sun.png"
              }
              alt={isSelected ? "dark theme" : "light theme"}
            />
          </span>
        </div>

        <img
          data-hs-overlay="#hs-basic-modal"
          className="cursor-pointer dark:bg-white dark:rounded  lg:h-8 h-6 rounded-md duration-300 hover:scale-125  dark:p-1"
          src={"/Personal_Website/images/infoButton.png"}
          alt="infoButton"
        ></img>
        <img
          onClick={handleToggleSidebar}
          className="cursor-pointer flex lg:w-8 lg:h-8 w-6 h-6 dark:pt-2 dark:pb-2 
          duration-300 hover:scale-125 dark:bg-white dark:rounded"
          src={"/Personal_Website/images/burger.svg"}
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

      <div
        id="hs-basic-modal"
        className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
      >
        <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white">
                {languages[language].info}
              </h3>
              <button
                type="button"
                className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-basic-modal"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-3.5 h-3.5"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <p className="mt-1 text-gray-800 dark:text-gray-400">
                <code className="font-bold">
                  {languages[language].iprojects}
                </code>
                {languages[language].iprojects2}
              </p>
              <p className="mt-3 text-gray-800 dark:text-gray-400">
                <code className="font-bold"> {languages[language].igames}</code>
                {languages[language].igames2}
              </p>
              <p className="mt-3 text-gray-800 dark:text-gray-400">
                <code className="font-bold"> Dreams PS4:</code>
                {languages[language].idreams2}
              </p>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
              <button
                type="button"
                className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-basic-modal"
              >
                {languages[language].close}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
