import React, { useState } from "react";
import { languages } from "../components/Languages";

export function Dreams({ language }) {
  const [isFullScreenImage1, setIsFullScreenImage1] = useState(false);
  const [isFullScreenImage2, setIsFullScreenImage2] = useState(false);
  const [isFullScreenImage3, setIsFullScreenImage3] = useState(false);
  const [isFullScreenImage4, setIsFullScreenImage4] = useState(false);

  const handleCloseClick = (event, setFullScreen) => {
    event.stopPropagation();
    setFullScreen(false);
  };
  return (
    <div>
      <div className="flex justify-center">
        <div className="font-lilita outlineHeader text-yellow-400  dark:text-blue-500 text-2xl">
          {languages[language].projects} - DREAMS PS4
        </div>
      </div>

      <div className="flex justify-center">
        <div className="font-lilita outlineHeader w-8/12 text-white text-lg">
          {languages[language].dreams1}
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="bg-black bg-opacity-60 rounded-lg lg:w-8/12 w-9/12 mt-10 pb-5">
          <div className="flex-col  justify-center items-center ">
            <div className=" font-lilita outlineHeader mx-auto max-w-lg text-yellow-400 dark:text-blue-500 text-lg text-center">
              RAYMAN PS1 (DREAMS)
            </div>
            <div className="font-lilita outlineHeader mx-auto text-white text-lg max-w-lg text-center">
              {languages[language].dreams2}
            </div>
            <div className="text-center mx-auto max-w-lg mt-3 mb-4 hover:scale-110 duration-200">
              <a
                className="font-lilita outlineHeader text-white bg-blue-400 p-2 rounded-lg "
                href="https://indreams.me/dream/mKDkWwCgneQ"
              >
                {languages[language].link}
              </a>
            </div>
          </div>

          <div className="flex justify-center mt-2">
            {isFullScreenImage1 && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={(event) =>
                  handleCloseClick(event, setIsFullScreenImage1)
                }
              >
                <img
                  className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-full max-w-full z-50"
                  src={"/rubenperez/images/imageDreams1.webp"}
                  alt="Rayman"
                  onClick={(event) =>
                    handleCloseClick(event, setIsFullScreenImage1)
                  }
                />
              </div>
            )}
            <img
              onClick={() => setIsFullScreenImage1(true)}
              className="cursor-pointer lg:h-40 h-16 flex"
              src={"/rubenperez/images/imageDreams1.webp"}
              alt="Rayman"
            ></img>

            {isFullScreenImage2 && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={(event) =>
                  handleCloseClick(event, setIsFullScreenImage2)
                }
              >
                <img
                  className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-full max-w-full z-50"
                  src={"/rubenperez/images/imageDreams3.webp"}
                  alt="Rayman"
                  onClick={(event) =>
                    handleCloseClick(event, setIsFullScreenImage2)
                  }
                />
              </div>
            )}
            <img
              onClick={() => setIsFullScreenImage2(true)}
              className="cursor-pointer ml-5 lg:h-40 h-16 flex"
              src={"/rubenperez/images/imageDreams3.webp"}
              alt="Rayman"
            ></img>
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="bg-black bg-opacity-60 rounded-lg lg:w-8/12 w-9/12 mt-10 pb-5">
          <div className="flex-col  justify-center items-center ">
            <div className=" font-lilita outlineHeader mx-auto max-w-lg text-yellow-400 dark:text-blue-500 text-lg text-center">
              DREAMS OF AUTOMATA
            </div>
            <div className="font-lilita outlineHeader mx-auto text-white text-lg max-w-lg text-center">
              {languages[language].dreams3}
            </div>
            <div className="text-center mx-auto max-w-lg mt-3 mb-4 hover:scale-110 duration-200">
              <a
                className="font-lilita outlineHeader text-white bg-blue-400 p-2 rounded-lg "
                href="https://indreams.me/dream/mmawwcPUuDw"
              >
                {languages[language].link}
              </a>
            </div>
          </div>

          <div className="flex justify-center mt-2">
            {isFullScreenImage3 && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={(event) =>
                  handleCloseClick(event, setIsFullScreenImage3)
                }
              >
                <img
                  className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-full max-w-full z-50"
                  src={"/rubenperez/images/imageDreams2.webp"}
                  alt="Dreams of Automata"
                  onClick={(event) =>
                    handleCloseClick(event, setIsFullScreenImage3)
                  }
                />
              </div>
            )}
            <img
              onClick={() => setIsFullScreenImage3(true)}
              className="cursor-pointer lg:h-40 h-16 flex"
              src={"/rubenperez/images/imageDreams2.webp"}
              alt="Dreams of Automata"
            ></img>

            {isFullScreenImage4 && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={(event) =>
                  handleCloseClick(event, setIsFullScreenImage4)
                }
              >
                <img
                  className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-full max-w-full z-50"
                  src={"/rubenperez/images/imageDreams4.webp"}
                  alt="Dreams of Automata"
                  onClick={(event) =>
                    handleCloseClick(event, setIsFullScreenImage4)
                  }
                />
              </div>
            )}
            <img
              onClick={() => setIsFullScreenImage4(true)}
              className="cursor-pointer ml-5 lg:h-40 h-16 flex"
              src={"/rubenperez/images/imageDreams4.webp"}
              alt="Dreams of Automata"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
