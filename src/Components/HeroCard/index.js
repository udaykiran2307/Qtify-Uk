/* eslint-disable import/no-anonymous-default-export */

import "./hero.css";

const HeroSection = () => {
  return (
    <div className="hero-content">
      <div className="hero-content-txt">
        <h1 style={{ textAlign: "center" }}>100 Thousand songs ad-free</h1>
        <h1>over thousands podcast episodes</h1>
      </div>
      <div className="hero-content-img-frame">
        <img src="heroImg.png" alt="hero-img" className="hero-img"></img>
      </div>
    </div>
  );
};

export default HeroSection;
