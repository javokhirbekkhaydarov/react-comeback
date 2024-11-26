import LibrarySong from "./LibrarySong";
const Library = ({ songs , setCurrentSong }) => {
  return (
    <>
      <div className="library active-library">
        <h2>Library</h2>
        {songs.map((song) => {
          return <LibrarySong setCurrentSong={setCurrentSong} currentSong={song} key={song.id} />;
        })}
      </div>
    </>
  );
};
export default Library;
