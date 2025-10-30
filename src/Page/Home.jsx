import React from "react";
import image from "../assets/hero.jpg";

const Home = () => {
  return (
    <div
      className="relative w-full h-screen bg-fixed bg-cover bg-center overflow-y-auto "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-amber-300/60 h-full w-full flex items-center justify-center ">
        <div>
          <h1
            style={{
              fontFamily: "'Fredoka', sans-serif",
              color: "#FFFFFF",
              textShadow: "3px 3px 10px #000",
            }}
            className="animate-motion  text-7xl font-bold  drop-shadow-[4px_4px_20px] tracking-widest uppercase glass-text"
          >
            <b>My Assignments</b>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
