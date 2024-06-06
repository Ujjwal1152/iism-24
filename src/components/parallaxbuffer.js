import { Parallax } from "react-parallax";
import React from "react";
import background from './images/background.jpg'

function ParallaxBuffer() {
  return (
    <Parallax bgImage={background}   strength={500}>
      <div style={{ height: "40vh" }}>
        <h1 style={{ color: "white", textAlign: "center", paddingTop: "25vh" }}>
          
        </h1>
      </div>
    </Parallax>
  );
}

export default ParallaxBuffer;