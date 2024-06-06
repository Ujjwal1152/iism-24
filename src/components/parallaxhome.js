import { Parallax } from "react-parallax";
import React from "react";

function ParallaxAwe() {
  return (
    <Parallax bgImage="https://source.unsplash.com/1920x1080/?sports,crowd" strength={500}>
      <div style={{ height: "100vh" }}>
        <h1 style={{ color: "white", textAlign: "center", paddingTop: "45vh" }}>
          Welcome to the Inter IIT Sports Meet
        </h1>
      </div>
    </Parallax>
  );
}

export default ParallaxAwe;