import React, { useState, useRef } from "react";
import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./util";
import Library from "./components/Library";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setisPlaying] = useState(false);
  // state
  const [songInfo, setsongInfo] = useState({
    currentTime: 0, // named the state value as current time . It is different from the attribute value "currentTime" of audio tag
    duration: 0,
  });

  const updateHandler = (e) => {
    const current = e.target.currentTime; // currentTime is acting here as an attribute of audio tag
    const duration = e.target.duration;
    setsongInfo({ ...songInfo, currentTime: current, duration });
  };

  const audioRef = useRef(null);
  return (
    <div className="App">
      <Song currentSong={currentSong} />

      <Player
        isPlaying={isPlaying}
        currentSong={currentSong}
        songs = {songs}
        setSongs = {setSongs}
        setCurrentSong = {setCurrentSong}
        setisPlaying={setisPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setsongInfo={setsongInfo}
      />

      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs = {setSongs}
      />

      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={updateHandler}
        onLoadedMetadata={updateHandler}
      ></audio>
    </div>
  );
}

export default App;
