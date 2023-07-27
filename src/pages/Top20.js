import { languages } from "../components/Languages";

export function Top20({ language }) {
  const games = [
    {
      rank: 20,
      name: "Demon's Souls",
      videoLink:
        "https://www.youtube.com/watch?v=2TMs2E6cms4&ab_channel=PlayStation",
    },
    {
      rank: 19,
      name: "Need For Speed Underground 2",
      videoLink:
        "https://www.youtube.com/watch?v=M4hwG0NujpI&t=1s&ab_channel=ElectronicArtsLatam",
    },

    {
      rank: 18,
      name: "Hotline Miami 2: Wrong Number",
      videoLink:
        "https://www.youtube.com/watch?v=Kqr0yUuSiTs&ab_channel=PlayStation",
    },
    {
      rank: 17,
      name: "Rayman 2: The Great Escape",
      videoLink:
        "https://www.youtube.com/watch?v=6KujjiLYaW8&ab_channel=JakAndDaxter5",
    },
    {
      rank: 16,
      name: "Wipeout Omega Collection",
      videoLink:
        "https://www.youtube.com/watch?v=otsTMJytt9A&ab_channel=PlayStation",
    },
    {
      rank: 15,
      name: "Burnout 3 Takedown",
      videoLink:
        "https://www.youtube.com/watch?v=oQ4z_Y9DXa4&ab_channel=%C3%81lexMorais",
    },
    {
      rank: 14,
      name: "Final Fantasy VII Remake",
      videoLink:
        "https://www.youtube.com/watch?v=mDa45U8AKYU&ab_channel=PlayStationEspa%C3%B1a",
    },
    {
      rank: 13,
      name: "Castlevania Dawn of Sorrow",
      videoLink:
        "https://www.youtube.com/watch?v=CRxXm0__CoE&ab_channel=PlayscopeTimeline",
    },
    {
      rank: 12,
      name: "Castlevania Symphony of the Night",
      videoLink:
        "https://www.youtube.com/watch?v=Rm2KKmud2MA&ab_channel=FantasyAnime",
    },
    {
      rank: 11,
      name: "Bloodstained Ritual of the Night",
      videoLink: "https://www.youtube.com/watch?v=pXGlDbDMnVE&ab_channel=IGN",
    },
    {
      rank: 10,
      name: "A Hat in Time",
      videoLink:
        "https://www.youtube.com/watch?v=qDNz8JDIPck&ab_channel=PlayStation",
    },
    {
      rank: 9,
      name: "Ender Lilies: Quietus of the Knights ",
      videoLink:
        "https://www.youtube.com/watch?v=i2O6YbhDVsQ&ab_channel=BinaryHazeInteractiveCH",
    },
    {
      rank: 8,
      name: "NieR Automata",
      videoLink:
        "https://www.youtube.com/watch?v=wJxNhJ8fjFk&ab_channel=PlayStation",
    },
    {
      rank: 7,
      name: "Rayman 1",
      videoLink:
        "https://www.youtube.com/watch?v=aSkbG9Ud9RY&ab_channel=Ubisoft",
    },
    {
      rank: 6,
      name: "Tombi! 2",
      videoLink:
        "https://www.youtube.com/watch?v=9r6M5h4-h7I&ab_channel=OldDustyGames",
    },
    {
      rank: 5,
      name: "Gran Turismo 7",
      videoLink:
        "https://www.youtube.com/watch?v=ULfjoCqEo6I&ab_channel=PlayStation",
    },
    {
      rank: 4,
      name: "Doom Eternal",
      videoLink:
        "https://www.youtube.com/watch?v=-fsz6b3IBJY&ab_channel=BethesdaSoftworksES",
    },
    {
      rank: 3,
      name: "Drakengard 3",
      videoLink:
        "https://www.youtube.com/watch?v=tfRu7z_MDOM&t=125s&ab_channel=PlayStation",
    },
    {
      rank: 2,
      name: "NieR Replicant ver.1.22474487139...",
      videoLink:
        "https://www.youtube.com/watch?v=gjjJbd-pa8g&t=73s&ab_channel=PlayStation",
    },
    {
      rank: 1,
      name: "Final Fantasy XVI",
      videoLink:
        "https://www.youtube.com/watch?v=O1DspJNhBAI&ab_channel=PlayStationEspa%C3%B1a",
    },
  ];

  return (
    <div>
      <div className="flex flex-col  items-center bg-black bg-opacity-0">
        <div className="font-lilita outlineHeader text-yellow-400 dark:text-blue-500 text-3xl mb-5">
          {languages[language].games2}
        </div>
        {games.map((game) => (
          <div className="mt-5 lg:pl-5 lg:pr-5 pl-1 pr-1 font-lilita outlineHeader  lg:text-2xl text-sm text-yellow-400 dark:text-blue-500    rounded-lg lg:w-7/12 w-11/12 flex justify-between items-center">
            {game.rank}º<span className="ml-5 text-white">{game.name}</span>
            <a
              href={game.videoLink}
              className="hover:scale-110 duration-200 justify-end ml-5 pr-1 pl-1 bg-blue-400 text-white rounded-lg lg:text-2xl text-sm"
            >
              {languages[language].video}
            </a>
          </div>
        ))}
        ;
      </div>
    </div>
  );
}
