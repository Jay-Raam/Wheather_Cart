import React from 'react';
import "./Cart.css"

const Card = () => {
  return (
    <div className="cardContainer">
      <div className="card">
        <p className="city">PINK CITY</p>
        <p className="weather">PARTIALLY CLOUDY</p>
        <svg
          className="weather"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          width="50px"
          height="50px"
          viewBox="0 0 100 100"
          xmlSpace="preserve"
        >
          <image
            id="image0"
            width="100"
            height="100"
            x="0"
            y="0"
            href="https://www.svgrepo.com/show/259677/cloudy-clouds-and-sun.svg"
          />
        </svg>
        <p className="temp">32°</p>
        <div className="minmaxContainer">
          <div className="min">
            <p className="minHeading">Min</p>
            <p className="minTemp">30°</p>
          </div>
          <div className="max">
            <p className="maxHeading">Max</p>
            <p className="maxTemp">32°</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
