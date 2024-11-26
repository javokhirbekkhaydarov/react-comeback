const LibrarySong = ({ currentSong, setCurrentSong }) => {
  function songSelect() {
    setCurrentSong(currentSong);
  }
  return (
    <div className="library-song flex items-center gap-4" onClick={songSelect}>
      <img src={currentSong.cover} className="rounded-full" alt={currentSong.title}></img>
      <div className="text-white ">{currentSong.name}</div>
      <div className="text-white"> {currentSong.artist}</div>
    </div>
  );
};
export default LibrarySong;
