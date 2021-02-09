import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  currentSong,
  isPlaying,
  songs,
  setSongs,
  setCurrentSong,
  setisPlaying,
  audioRef,
  songInfo,
  setsongInfo,
}) => {
  
  // run the updateBackground function whenever current song gets updated //
  // skip-back and skip forward par click krne pr mera current song update hota h . 
  // so jab bhi naya song mile to uska background bhi change hona chahiye 
  // isi k liye useEffect ka use kiye h taki jab bhi current song update ho to uska background bhi change ho jae

  useEffect(() => {

    const updateBackground = songs.map((song) => {

      if (song.id === currentSong.id) {
        return { ...song, active: true };

      } 
      
      else {
        return { ...song, active: false };
      }

    });

    setSongs(updateBackground);
  }, [currentSong]);


  const playHandler = () => {

    if (isPlaying) {              // agar chal rha to click krne pr pause kr do 
      audioRef.current.pause();
    }     
    else {
      audioRef.current.play();
    }
    setisPlaying(!isPlaying);

  };

  // Updating the current time and the duration of the song //
  // Actually currentTime and duration are attributes of audio tag
  // I got confused cuz here I named the state values of songInfo also  as currentTime and duration

  // setting the initial and final values of music player time //

  const convertTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  //  setting the dragging of input slider //

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setsongInfo({ ...songInfo, currentTime: e.target.value });
  };

  // skip song forward or backward //

  // song ka hmko index find krna h using ".findIndex" and 
  //fir us song ko skip krne k liye "(currentIndex + 1) % songs.length" method usE kr liye 


  const skipSongHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }

    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{convertTime(songInfo.currentTime)}</p>

        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />

        <p> {convertTime(songInfo.duration)} </p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={() => skipSongHandler("skip-back")}
        />
        <FontAwesomeIcon
          onClick={playHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => skipSongHandler("skip-forward")}
        />
      </div>
    </div>
  );
};

export default Player;
