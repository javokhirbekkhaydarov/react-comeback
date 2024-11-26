const Song = ({currentSong}) => {
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt={currentSong.title}></img>
      <h2 className="text-black text-3xl">{currentSong.name}</h2>
      <h3 className="text-black text-2xl"> {currentSong.artist}</h3>
    </div>
  );
};
export default Song;