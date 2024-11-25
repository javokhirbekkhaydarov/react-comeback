import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import song from "./Song";

const PLayer = ({ currentSong, isPlaying, setIsPlaying }) => {
  const audioTag = useRef(null);
  const playSong = () => {
    if (!isPlaying) {
      audioTag.current.play();
      setIsPlaying(!isPlaying);
    } else {
      audioTag.current.pause();
      setIsPlaying(!isPlaying);
    }
  };
  const timeUpdate = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
    });
  };
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input type="range" />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="player-control">
        <FontAwesomeIcon size="2xl" className="left" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSong}
          size="2xl"
          className="play"
          icon={faPlay}
        />
        <FontAwesomeIcon size="2xl" className="right" icon={faAngleRight} />
      </div>
      <audio
        onTimeUpdate={timeUpdate}
        src={currentSong.audio}
        onLoadedMetadata={timeUpdate}
        ref={audioTag}
        controls
      ></audio>
    </div>
  );
};
export default PLayer;
