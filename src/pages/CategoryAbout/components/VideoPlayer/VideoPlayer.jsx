import React from "react";
import { Player } from "video-react";
import styled from "styled-components";
import "video-react/dist/video-react.css";

function VideoPlayer() {
  return (
    <VideoBox>
      <Player
        playsInline
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        height="300px"
      />
    </VideoBox>
  );
}

export default VideoPlayer;

export const VideoBox = styled.div``;
