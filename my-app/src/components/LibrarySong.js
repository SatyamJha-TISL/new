import React from "react";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  key,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) =>


// koi v naya song click krne par usko current song bana diye 
//and then usko chala diye by using audioref.current.play aur agar load nhi hua h wo song to ".then" use kr k wait krwa liye and fir chalaye

  {
  const songHandler = () => {
    const newSong = songs.filter((element) => element.id === id);
    setCurrentSong(newSong[0]);

    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (isPlaying !== undefined) {
        playPromise.then((audio) => audioRef.current.play());
      }
    }

    // updating the background color of current song //
    // songs naam ka state ko bas update kr diye , matlab current song jo v mila
    // uska active ko true kr diye aur baki sb ka active ko false kr diye 

    const updateBackground = songs.map((song) => {
      if (song.id === id) {
        return { ...song, active: true };
      } else {
        return { ...song, active: false };
      }
    });
    setSongs(updateBackground);
  };
  
  return (
    <div
      onClick={songHandler}
      className={`librarysong-container ${song.active ? "active-color" : " "} `}
    >
      <img alt={song.name} src={song.cover}></img>

      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
