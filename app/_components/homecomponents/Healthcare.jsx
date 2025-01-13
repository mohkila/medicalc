import React from "react";
import Heading from "../Heading";

function Healthcare() {
  return (
    <div className="container mt-10 mb-10">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mt-5 mb-5">
          #1 Healthcare Provider in Private Sector
        </h1>
        <h3 className="text-xl text-center font-bold text-primary">
          We're here for you around the clock. With branches in multiple
          regions, our dedicated team is always ready to provide top-notch
          medical care whenever and wherever you need it.
        </h3>
      </div>
      <div className="mt-16 flex text-center justify-center">
        <div className="  p-5" >
            <h2 className="text-4xl font-extrabold mt-5 mb-5 items-center text-center">19</h2>
            <h2 className="text-xl">Hopital</h2>
        </div>
        <div className="border-l-2  border-gray-600 p-5" >
            <h2 className="text-4xl font-extrabold mt-5 mb-5 items-center text-center">6</h2>
            <h2 className="text-xl">Medical Centers</h2>
        </div>
        <div className="border-l-2  border-gray-600 p-5" >
            <h2 className="text-4xl font-extrabold mt-5 mb-5 items-center text-center">7+</h2>
            <h2 className="text-xl">Upcoming Hospital</h2>
        </div>
        <div className="border-l-2  border-gray-600 p-5" >
            <h2 className="text-4xl font-extrabold mt-5 mb-5 items-center text-center">2+</h2>
            <h2 className="text-xl">Upcoming Medical Centers</h2>
        </div>
      </div>
    </div>
  );
}

export default Healthcare;
