import React, {useState} from "react";
import './App.css';
import Video from "./components/Video";


function App() {
  
  return (
    <div className="App">
      <div className="container">
        <Video videoUrl="https://rocani-testproject.s3.eu-central-1.amazonaws.com/video-loop-1.mp4" />
         <Video videoUrl="https://rocani-testproject.s3.eu-central-1.amazonaws.com/video-loop-2.mp4"/> 
      </div>
    </div>
  );
}

export default App;
