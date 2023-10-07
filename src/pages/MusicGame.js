import { languages } from "../components/Languages";

export function MusicGame({ language }) {
  const gamesCol = [
    {
      name: "Demon's Souls",
    },
    {
      name: "Ender Lilies: Quietus of the Knights ",
    },
    {
      name: "Doom Eternal",
    },
    {
      name: "Need For Speed Underground 2",
    },
    {
      name: "Final Fantasy XVI",
    },
    {
      name: "Burnout Paradise",
    },
    {
      name: "Gran Turismo 7",
    },
    {
      name: "Wipeout Omega Collection",
    },
    {
      name: "Grand Theft Auto Vice City",
    },
    {
      name: "Bloodstained Ritual of the Night",
    },
    {
      name: "Gran Turismo 3",
    },
    {
      name: "Need For Speed Hot Pursuit",
    },
    {
      name: "Rayman",
    },
    {
      name: "Nier Replicant ver.1.22474487139...",
    },
    {
      name: "Tomba! 2",
    },
    {
      name: "Drakengard 3",
    },
    {
      name: "Hotline Miami 2 Wrong Number",
    },
    {
      name: "A hat in time",
    },
    {
      name: "Need For Speed Pro Street",
    },
    {
      name: "Metal Gear Solid 3 Snake Eater",
    },
    {
      name: "Burnout 3 Takedown",
    },
    {
      name: "Castlevania Symphony of the Night",
    },
    {
      name: "Castlevania Dawn of Sorrow",
    },
    {
      name: "Oddworld Soulstorm",
    },
    {
      name: "Dreams PS4",
    },
    {
      name: "Jak X",
    },
    {
      name: "Wreckfest",
    },
    {
      name: "Ratchet & Clank 3 Up your Arsenal",
    },
    {
      name: "Resistance 3",
    },
    {
      name: "Shadow of the Tomb Raider",
    },
  ];
  return (
    <div>
      <div className="flex justify-center ">
        <div className="font-lilita outlineHeader text-yellow-400  dark:text-blue-500 lg:text-xl text-lg text-center">
          {languages[language].list}
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-3 flex flex-col justify-center items-center mt-5">
        <iframe
          className="mb-5 mx-auto"
          src="https://open.spotify.com/embed/playlist/3ck8s9QWnFMZmX99Vhx3CZ?si=d0e754bdab014c43"
          width="300"
          height="380"
          allowtransparency="true"
          allow="encrypted-media"
          title="Spotify player"
        ></iframe>
        <iframe
          className="mb-5 mx-auto"
          src="https://open.spotify.com/embed/playlist/6whd7MhxSDWJNpjjrTeTSL?si=29142aa736e14ec8"
          width="300"
          height="380"
          allowtransparency="true"
          allow="encrypted-media"
          title="Spotify player"
        ></iframe>
        <iframe
          className="mb-5 mx-auto"
          src="https://open.spotify.com/embed/playlist/5V6zphVeqM5nS823Kdop6W?si=fd2c497f9d914502"
          width="300"
          height="380"
          allowtransparency="true"
          allow="encrypted-media"
          title="Spotify player"
        ></iframe>
      </div>

      <div className="mt-10 grid lg:grid-cols-3 grid-cols-2 text-center bg-cyan-900 bg-opacity-30 lg:w-11/12 w-11/12 mx-auto rounded-3xl pb-5">
        {gamesCol.map((game) => (
          <div className="mt-5 lg:pl-5 lg:pr-5   font-lilita outlineHeader  lg:text-xl text-sm mx-auto text-yellow-400 dark:text-blue-500 lg:w-auto w-11/12 flex justify-center items-center">
            <span className=" text-white">{game.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
