import Song from "../components/spotify/Song";
import PLayer from "../components/spotify/Player";
import data from "../data/data";
import { useRef, useState } from "react";
import Library from "../components/spotify/Library";
import Nav from "../components/spotify/Nav";
export default function SpotifyHome() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus , setLibraryStatus] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });
  const audioTag = useRef(null);
  const timeUpdate = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
    });
  };
  return (
    <>
      <div className={ `app ${libraryStatus ? 'library-active' : null} `}>
        <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
        <Library
            libraryStatus={libraryStatus}
          isPlaying={isPlaying}
          songs={songs}
          setCurrentSong={setCurrentSong}
          setSongs={setSongs}
          audioTag={audioTag}
            setIsPlaying={setIsPlaying}
        />
        <Song currentSong={currentSong} />
        <PLayer
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioTag={audioTag}
          timeUpdate={timeUpdate}
          setSongInfo={setSongInfo}
          songInfo={songInfo}
          songs={songs}
          setCurrentSong={setCurrentSong}
        />
      </div>
    </>
  );
}
