import Song from "../components/spotify/Song";
import PLayer from "../components/spotify/Player";
import data from "../data/data";
import { useState } from "react";
import Library from "../components/spotify/Library";
export default function SpotifyHome() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <div className="app">
        <Library songs={songs} setCurrentSong={setCurrentSong} />
        <Song currentSong={currentSong} />
        <PLayer
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </>
  );
}
