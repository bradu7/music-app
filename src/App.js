import React, {useState, useRef} from 'react';
import './App.css';
import { Player } from './components/Player';
import { Song } from './components/Song';
import playlist from './playlist';
import { Library } from './components/Library';
import { Nav } from './components/Nav';


function App() {
  const [songs, setSongs] = useState(playlist());
  const [currentSong, setCurrent] = useState(songs[1]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdate = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  setSongInfo({...songInfo, currentTime: current, duration: duration})
  }
  const songEnd = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrent(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
    // if (audioRef.current.paused && !isPlaying) {
    //   return audioRef.current.play();
    // }
    // if (audioRef.current.play() !== undefined) {
    //   audioRef.current.play().then(_ => {
       
    //   })
    //   .catch(error => {
        
    //   });
    // }
    
  }
  return (
    <div className="App">
      {/* style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} */}
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} />
      <Player audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} setSongInfo={setSongInfo} songInfo={songInfo} songs={songs} setCurrent={setCurrent} setSongs={setSongs}/>
      <Library songs={songs} setCurrentSong={setCurrent} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs} libraryStatus={libraryStatus}/>
      <audio onTimeUpdate={timeUpdate} onLoadedMetadata={timeUpdate} ref={audioRef} src={currentSong.audio} onEnded={songEnd}></audio>
    </div>
  );
}

export default App;
