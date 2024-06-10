import { Parallax } from "react-parallax";
import React from "react";

function ParallaxAwe() {
  return (
    <Parallax bgImage="https://cdn.pixabay.com/photo/2019/04/29/07/34/purple-4165352_1280.jpg" strength={500}>
      <div style={{ height: "100vh" }}>
        <h1 style={{ color: "white", textAlign: "center", paddingTop: "45vh" }}>
          Welcome to the Inter IIT Sports Meet
        </h1>
      </div>
    </Parallax>
  );
}

export default ParallaxAwe;