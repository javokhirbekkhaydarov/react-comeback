import Song from "../components/spotify/Song";
import PLayer from "../components/spotify/Player";
export default function SpotifyHome() {
  return (
    <>
      <div className="home">
        <Song />
        <PLayer />
      </div>
    </>
  );
}
