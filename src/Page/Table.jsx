import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/img.jpg";
import TableTask1 from "../Components/Table_Tasks/TableTask1";
import TableTask2 from "../Components/Table_Tasks/TableTask2";
import TableTask3 from "../Components/Table_Tasks/TableTask3";
import TableTask4 from "../Components/Table_Tasks/TableTask4";
import TableTask5 from "../Components/Table_Tasks/TableTask5";
const Table = () => {
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
          <TableTask1 />
          <Link to="/TableTask1">
            <div className=" w-full flex justify-end ">
              <div className="bg-amber-300 p-2 mr-5 mb-5 w-20 rounded-full border-3 border-amber-400 flex items-center justify-center text-sm font-medium hover:bg-amber-400 cursor-pointer active:scale-95 transition-all duration-300">
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
            <TableTask2 />
          </div>
          <Link to="/TableTask2">
            <div className=" w-full flex justify-end ">
              <div className="bg-amber-300 p-2 mr-5 mb-5 w-20 rounded-full border-3 border-amber-400 flex items-center justify-center text-sm font-medium hover:bg-amber-400 cursor-pointer active:scale-95 transition-all duration-300">
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
        <div className="bg-amber-100 w-170 h-150 flex flex-col border rounded-lg shadow-2xl overflow-hidden  ">
          <div className="bg-amber-300 w-full flex items-center justify-center p-2 font-extrabold">
            <h1>Task 3:</h1>
          </div>
          <div className="w-full h-full flex flex-col overflow-auto  ">
            <TableTask3 />
          </div>
          <Link to="/TableTask3">
            <div className=" w-full flex justify-end ">
              <div className="bg-amber-300 p-2 mr-5 mb-5 w-20 rounded-full border-3 border-amber-400 flex items-center justify-center text-sm font-medium hover:bg-amber-400 cursor-pointer active:scale-95 transition-all duration-300">
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
          <div className="w-full h-full flex flex-col overflow-auto p-20 ">
            <TableTask4 />
          </div>
          <Link to="/TableTask4">
            <div className=" w-full flex justify-end ">
              <div className="bg-amber-300 p-2 mr-5 mb-5 w-20 rounded-full border-3 border-amber-400 flex items-center justify-center text-sm font-medium hover:bg-amber-400 cursor-pointer active:scale-95 transition-all duration-300">
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
        <div className="bg-amber-100 w-200 h-150 flex flex-col border rounded-lg shadow-2xl overflow-hidden  ">
          <div className="bg-amber-300 w-full flex items-center justify-center p-2 font-extrabold">
            <h1>Task 5:</h1>
          </div>
          <div className="w-full h-full flex flex-col overflow-auto   ">
            <TableTask5 />
          </div>
          <Link to="/TableTask5">
            <div className=" w-full flex justify-end ">
              <div className="bg-amber-300 p-2 mr-5 mb-5 w-20 rounded-full border-3 border-amber-400 flex items-center justify-center text-sm font-medium hover:bg-amber-400 cursor-pointer active:scale-95 transition-all duration-300">
                View
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Table;
