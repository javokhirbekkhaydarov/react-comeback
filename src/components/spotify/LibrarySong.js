import { playSong } from "../../utils/util";

const LibrarySong = ({
  song,
  currentSong,
  setCurrentSong,
  isPlaying,
  audioTag,
  songs,
  id,
  setSongs,
                       setIsPlaying,
}) => {
  function songSelect() {
    setCurrentSong(currentSong);
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setIsPlaying(true);
    setSongs(newSongs);
    playSong(isPlaying, audioTag);
  }
  return (
    <div
      className={`library-song flex items-center gap-4 ${song.active ? "selected" : ""}  `}
      onClick={songSelect}
    >
      <img
        src={currentSong.cover}
        className="rounded-full"
        alt={currentSong.title}
      ></img>
      <div className="text-white ">{currentSong.name}</div>
      <div className="text-white"> {currentSong.artist}</div>
    </div>
  );
};
export default LibrarySong;
