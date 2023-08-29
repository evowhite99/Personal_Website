import { languages } from "../components/Languages";

export function Videogames({ language }) {
  const gamesCol = [
    {
      name: "Demon's Souls",
    },
    {
      name: "Need For Speed Underground 2",
    },

    {
      name: "Hotline Miami 2: Wrong Number",
    },
    {
      name: "Rayman 2: The Great Escape",
    },
    {
      name: "Wipeout Omega Collection",
    },
    {
      name: "Burnout 3 Takedown",
    },
    {
      name: "Final Fantasy VII Remake",
    },
    {
      name: "Castlevania Dawn of Sorrow",
    },
    {
      name: "Castlevania Symphony of the Night",
    },
    {
      name: "Bloodstained Ritual of the Night",
    },
    {
      name: "A Hat in Time",
    },
    {
      name: "Ender Lilies: Quietus of the Knights ",
    },
    {
      name: "NieR Automata",
    },
    {
      name: "Rayman 1",
    },
    {
      name: "Tombi! 2",
    },
    {
      name: "Gran Turismo 7",
    },
    {
      name: "Doom Eternal",
    },
    {
      name: "Drakengard 3",
    },
    {
      name: "NieR Replicant ver.1.22474487139...",
    },
    {
      name: "Final Fantasy XVI",
    },
    {
      name: "Blasphemous 2",
    },
  ];

  return (
    <div>
      <div className="flex justify-center  items-center bg-black bg-opacity-0">
        <div className="font-lilita outlineHeader text-yellow-400 dark:text-blue-500 lg:text-3xl mb-5">
          {languages[language].games2}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-2 text-center">
        {gamesCol.map((game) => (
          <div className="mt-5 lg:pl-5 lg:pr-5   font-lilita outlineHeader  lg:text-xl text-sm mx-auto text-yellow-400 dark:text-blue-500 lg:w-auto w-11/12 flex justify-center items-center">
            <span className=" text-white">{game.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
