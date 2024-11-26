import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { playSong } from "../../utils/util";

const PLayer = ({
  setCurrentSong,
  currentSong,
  isPlaying,
  setIsPlaying,
  audioTag,
  songs,
  setSongInfo,
  songInfo,
  timeUpdate,
}) => {
  const playSongHandler = () => {
    if (!isPlaying) {
      audioTag.current.play();
      setIsPlaying(!isPlaying);
    } else {
      audioTag.current.pause();
      setIsPlaying(!isPlaying);
    }
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        playSong();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPlaying]);

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragAudio = (e) => {
    audioTag.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value,
    });
  };

  const skipTrack = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skipForward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skipBack") {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[(songs.length - 1) % songs.length]);
        playSong(isPlaying, audioTag);
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    playSong(isPlaying, audioTag);
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          onChange={dragAudio}
          type="range"
          value={songInfo.currentTime}
          max={songInfo.duration || 0}
          min=""
          className={'rang-input'}
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="player-control">
        <FontAwesomeIcon
          onClick={() => skipTrack("skipBack")}
          size="2xl"
          className="left"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          size="2xl"
          className="play"
          icon={!isPlaying ? faPlay : faPause}
        />
        <FontAwesomeIcon
          onClick={() => skipTrack("skipForward")}
          size="2xl"
          className="right"
          icon={faAngleRight}
        />
      </div>
      <audio
        className="hidden"
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
