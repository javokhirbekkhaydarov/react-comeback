import LibrarySong from "./LibrarySong";
const Library = ({
  songs,
  setCurrentSong,
  audioTag,
  isPlaying,
  setSongs,
  libraryStatus,
                   setIsPlaying,
}) => {
  return (
    <>
      <div className={`library ${libraryStatus ? "active-library" : null}`}>
        <h2>Library</h2>
        {songs.map((song) => {
          return (
            <LibrarySong
              id={song.id}
              songs={songs}
              setSongs={setSongs}
              song={song}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              setCurrentSong={setCurrentSong}
              audioTag={audioTag}
              currentSong={song}
              key={song.id}
            />
          );
        })}
      </div>
    </>
  );
};
export default Library;
