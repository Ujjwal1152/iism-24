import { Parallax } from "react-parallax";
import React from "react";

function ParallaxAwe() {
  return (
    <Parallax bgImage="https://cdn.pixabay.com/photo/2018/07/28/22/12/sky-3569073_1280.jpg" strength={500}>
      <div style={{ height: "50vh"  }}>
        <h1 style={{ color: "white", textAlign: "center", paddingTop: "20vh" }}>
          Awe the competition!
        </h1>
      </div>
    </Parallax>
  );
}

export default ParallaxAwe;