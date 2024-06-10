import { Parallax } from "react-parallax";
import React from "react";

function ParallaxInspire() {
  return (
    <Parallax bgImage="https://cdn.pixabay.com/photo/2022/03/08/21/20/running-7056590_1280.jpg" strength={500}>
      <div style={{ height: "50vh" }}>
        <h1 style={{ color: "white", textAlign: "center", paddingTop: "20vh" }}>
          Inspire the next generation!
        </h1>
      </div>
    </Parallax>
  );
}

export default ParallaxInspire;