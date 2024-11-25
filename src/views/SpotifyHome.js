import Song from "../components/spotify/Song";
import PLayer from "../components/spotify/Player";
import data from "../data/data";
import { useState } from "react";
export default function SpotifyHome() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <div className="app">
        <Song currentSong={currentSong} />
        <PLayer currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </div>
    </>
  );
}
