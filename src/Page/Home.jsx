import React from "react";
import image from "../assets/hero.jpg";

const Home = () => {
  return (
    <div
      className="relative w-full h-screen bg-fixed bg-cover bg-center overflow-y-auto "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-amber-200/60 h-full w-full flex items-center justify-center ">
        <div>
          <h1
            style={{
              fontFamily: "'Fredoka', sans-serif",
              color: "#FFFDD0",
              textShadow: "5px 5px 10px #FFFF00",
            }}
            className="animate-motion  text-7xl font-bold  drop-shadow-[4px_4px_0px] tracking-widest uppercase glass-text"
          >
            <b>My Assignments</b>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
