import React from "react";
import Vimeo from "@u-wave/react-vimeo";

const Video = () => {
  return (
    <div className="flex justify-center items-center rounded-md">
      <Vimeo video="https://player.vimeo.com/video/875803102?autoplay=1&playsinline=1&color&autopause=0&loop=1&muted=0&title=0&portrait=0&byline=0#t=" autoplay= {false} height={'300'} width={'350'} className="rounded-lg"></Vimeo>
    </div>
  );
};

export default Video;
