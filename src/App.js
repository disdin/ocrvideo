import { DefaultPlayer } from 'react-html5video/dist';
import './App.css';
import 'react-html5video/dist/styles.css'
function App() {
  return (
    <>
    <div className="App">
      <DefaultPlayer
        autoPlay
        loop
        poster='thumbnail.png'
      >
        <source src='video.mp4' type='video/webm'></source>
      </DefaultPlayer>
      {/* OCR */}
    </div>
    {/* <div className="App" style={{fontSize:"4rem"}}>
      Optical Character Recognition
    </div> */}
    </>
  );
}

export default App;
