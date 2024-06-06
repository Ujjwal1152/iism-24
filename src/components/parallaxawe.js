import { Parallax } from "react-parallax";
import React from "react";

function ParallaxAwe() {
  return (
    <Parallax bgImage="https://source.unsplash.com/1920x1080/?sports,crowd" strength={500}>
      <div style={{ height: "50vh"  }}>
        <h1 style={{ color: "white", textAlign: "center", paddingTop: "20vh" }}>
          Awe the competition!
        </h1>
      </div>
    </Parallax>
  );
}

export default ParallaxAwe;