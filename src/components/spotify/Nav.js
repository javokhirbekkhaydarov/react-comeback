import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>Mini Spotify</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>library     <FontAwesomeIcon icon={faMusic} /></button>

    </nav>
  );
};
export default Nav;
