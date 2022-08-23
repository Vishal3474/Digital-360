import React from "react";

function VideoCard() {
  return (
    <div className="sm:flex hidden" >
      <iframe
        width="100%"
        height="360"
        src="https://www.youtube.com/embed/CKAn5dCK6RE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoCard;
