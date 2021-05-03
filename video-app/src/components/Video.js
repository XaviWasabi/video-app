import React, { useState } from "react";

const Video = (props) => {
  const [play, setPlay] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const hideAndPlay = () => {
    setShowOverlay(!showOverlay);
    setPlay(!play);
  };
  return (
    <div className="container" onClick={hideAndPlay}>
      {showOverlay ? (
        <div className="overlay"></div>
      ) : (
        <div className="video">
          <video muted="false" controls="true" autoPlay>
            <source src={props.videoUrl} type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  );
};

export default Video;


