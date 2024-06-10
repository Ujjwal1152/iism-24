import { Parallax } from "react-parallax";
import React from "react";

function ParallaxConquer() {
  return (
    <Parallax bgImage="https://cdn.pixabay.com/photo/2016/09/29/14/06/background-1702930_1280.jpg" strength={500}>
      <div style={{ height: "50vh"  }}>
        <h1 style={{ color: "white", textAlign: "center", paddingTop: "20vh" }}>
          Conquer the World!
        </h1>
      </div>
    </Parallax>
  );
}

export default ParallaxConquer;