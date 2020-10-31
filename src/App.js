import React from "react";
import "./styles.css";
import image from "./imageInSrc.jpg";

export default function App() {
  return (
    <div style={{ border: "solid1pxBlack", maxWidth: "100vw" }}>
      <h1 className="title red">Your name here</h1>

      <br />

      <img src={image} />

      <br />

      <img src="imageInPublic.jpg" />

      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
