const LibrarySong = ({
  song,
  currentSong,
  setCurrentSong,
  isPlaying,
  audioTag,
  songs,
  id,
  setSongs,
}) => {
  function songSelect() {
    setCurrentSong(currentSong);
    if (isPlaying) {
      const playPromise = audioTag?.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          audioTag.current.play();
        });
      }
    }
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
  setSongs(newSongs)
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
