import React from "react";
import "../Stylesheet/video.css";
import video from '../Stylesheet/video.mp4'

const FullScreenVideo = () => {
  return (
    <div className="video-container">
      {/* Background Video */}

      <div className="w-full h-screen relative video-container">
        <video autoPlay loop muted className="w-full h-full object-cover background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay Text */}
      <div className="overlay-text">
        <h1 className="futura_font">Impactful Spaces</h1>
        <h1 className="futura_font">Elevated Design</h1>
       
      </div>
      <div className="overlay-text_p">
      <p>SCROLL DOWN</p>
      </div>
    </div>
  );
};

export default FullScreenVideo;
