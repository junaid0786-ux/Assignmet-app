import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/img.jpg";
import ListTask1 from "../Components/List_Tasks/ListTask1";
import ListTask2 from "../Components/List_Tasks/ListTask2";
import ListTask3 from "../Components/List_Tasks/ListTask3";
import ListTask4 from "../Components/List_Tasks/ListTask4";
import ListTask5 from "../Components/List_Tasks/ListTask5";

const List = () => {
  return (
    <div
      className=" relative w-full h-screen bg-fixed bg-cover bg-center overflow-y-auto"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <section
        id="section1"
        className="h-screen w-full flex items-center justify-center p-10 bg-amber-200/70 "
      >
        <div className="bg-amber-100 w-150 h-150 flex flex-col border rounded-lg shadow-2xl overflow-hidden justify-center  ">
          <div className="bg-amber-300 w-full flex items-center justify-center p-2 font-extrabold">
            <h1>Task 1:</h1>
          </div>
          <div className="w-full h-full flex flex-col overflow-auto  ">
            <ListTask1 />
          </div>
          <Link to="/ListTask1">
            <div className=" w-full h-full flex justify-end relative ">
              <div className="bg-amber-300 p-2  w-20 rounded-full border-3 border-amber-400 flex items-center justify-center text-sm font-medium hover:bg-amber-400 cursor-pointer active:scale-95 transition-all duration-300 absolute bottom-5 right-8 shadow-2xl ">
                View
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section
        id="section2"
        className="h-screen w-full flex items-center justify-center p-10 bg-amber-200/70 "
      >
        <div className="bg-amber-100 w-150 h-150 flex flex-col  border rounded-lg shadow-2xl overflow-hidden ">
          <div className="bg-amber-300 w-full flex items-center justify-center p-2 font-extrabold">
            <h1>Task 2:</h1>
          </div>
          <div className="w-full h-full flex flex-col overflow-auto  ">
            <ListTask2 />
          </div>
          <Link to="/ListTask2">
            <div className=" w-full h-full flex justify-end relative ">
              <div className="bg-amber-300 p-2  w-20 rounded-full border-3 border-amber-400 flex items-center justify-center text-sm font-medium hover:bg-amber-400 cursor-pointer active:scale-95 transition-all duration-300 absolute bottom-5 right-8 shadow-2xl ">
                View
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section
        id="section3"
        className="h-screen w-full flex items-center justify-center p-10 bg-amber-200/70 "
      >
        <div className="bg-amber-100 w-150 h-150 flex flex-col border rounded-lg shadow-2xl overflow-hidden  ">
          <div className="bg-amber-300 w-full flex items-center justify-center p-2 font-extrabold">
            <h1>Task 3:</h1>
          </div>
          <div className="w-full h-full flex flex-col overflow-auto  ">
            <ListTask3 />
          </div>
          <Link to="/ListTask3">
            <div className=" w-full h-full flex justify-end relative ">
              <div className="bg-amber-300 p-2  w-20 rounded-full border-3 border-amber-400 flex items-center justify-center text-sm font-medium hover:bg-amber-400 cursor-pointer active:scale-95 transition-all duration-300 absolute bottom-5 right-8 shadow-2xl ">
                View
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section
        id="section4"
        className="h-screen w-full flex items-center justify-center p-10 bg-amber-200/70 "
      >
        <div className="bg-amber-100 w-150 h-150 flex flex-col border rounded-lg shadow-2xl overflow-hidden  ">
          <div className="bg-amber-300 w-full flex items-center justify-center p-2 font-extrabold">
            <h1>Task 4:</h1>
          </div>
          <div className="w-full h-full flex flex-col overflow-auto ">
            <ListTask4 />
          </div>
          <Link to="/ListTask4">
            <div className=" w-full h-full flex justify-end relative ">
              <div className="bg-amber-300 p-2  w-20 rounded-full border-3 border-amber-400 flex items-center justify-center text-sm font-medium hover:bg-amber-400 cursor-pointer active:scale-95 transition-all duration-300 absolute bottom-5 right-8 shadow-2xl ">
                View
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section
        id="section5"
        className="h-screen w-full flex items-center justify-center p-10 bg-amber-200/70 "
      >
        <div className="bg-amber-100 w-150 h-150 flex flex-col border rounded-lg shadow-2xl overflow-hidden  ">
          <div className="bg-amber-300 w-full flex items-center justify-center p-2 font-extrabold">
            <h1>Task 5:</h1>
          </div>
          <div className="w-full h-full flex flex-col overflow-auto   ">
            <ListTask5 />
          </div>
          <Link to="/ListTask5">
            <div className=" w-full h-full flex justify-end relative ">
              <div className="bg-amber-300 p-2  w-20 rounded-full border-3 border-amber-400 flex items-center justify-center text-sm font-medium hover:bg-amber-400 cursor-pointer active:scale-95 transition-all duration-300 absolute bottom-5 right-8 shadow-2xl ">
                View
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default List;
