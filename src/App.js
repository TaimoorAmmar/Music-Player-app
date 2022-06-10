import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs, setSongs] = useState([
    {
      title: "Pasoori",
      artist: "Ali Sethi,Shae Gill",
      img_src: "./images/song-1.jpeg",
      src: "./music/pasoori.mp3"
    },

    {
      title: "Afreen Afreen",
      artist: "Momina Mustehsan, Rahat Fateh Ali Khan",
      img_src: "./images/song-2.jpg",
      src: "./music/afreen.mp3"
    },
  
    {
      title: "Hum Kis Gali Ja Rahe Hai",
      artist: "Atif Aslam",
      img_src: "./images/song-3.jpeg",
      src: "./music/Hum.mp3"
    }

  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(()=> {
    setNextSongIndex(()=>{
      if(currentSongIndex + 1 > songs.length - 1){
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
  
  return (
    <div className="App">
      
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
