import { languages } from "../components/Languages";

export function Music({ language }) {
  return (
    <div>
      <div className="flex justify-center ">
        <div className="font-lilita outlineHeader text-yellow-400  dark:text-blue-500 text-2xl">
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
          className="mx-auto"
          src="https://open.spotify.com/embed/playlist/5V6zphVeqM5nS823Kdop6W?si=fd2c497f9d914502"
          width="300"
          height="380"
          allowtransparency="true"
          allow="encrypted-media"
          title="Spotify player"
        ></iframe>
      </div>
    </div>
  );
}
