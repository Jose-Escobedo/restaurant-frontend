import React from "react";
import Header from "./Header";
let HomeImg = require("../images/home-img.jpg");

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <img id="home-img" src={HomeImg}></img>
        <p id="home-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  );
}

export default Home;
