import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/img.jpg";
import FormTask1 from "../Components/Form_Tasks/FormTask1";
import FormTask2 from "../Components/Form_Tasks/FormTask2";
import FormTask3 from "../Components/Form_Tasks/FormTask3";
import FormTask4 from "../Components/Form_Tasks/FormTask4";
import FormTask5 from "../Components/Form_Tasks/FormTask5";

const Form = () => {
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
          <FormTask1 />
          <Link to="/FormTask1">
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
            <FormTask2 />
          </div>
          <Link to="/FormTask2">
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
        <div className="bg-amber-100 w-150 h-150 flex flex-col border rounded-lg shadow-2xl overflow-hidden  ">
          <div className="bg-amber-300 w-full flex items-center justify-center p-2 font-extrabold">
            <h1>Task 3:</h1>
          </div>
          <div className="w-full h-full flex flex-col overflow-auto  ">
            <FormTask3 />
          </div>
          <Link to="/FormTask3">
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
        <div className="bg-amber-100 w-200 h-150 flex flex-col border rounded-lg shadow-2xl overflow-hidden  ">
          <div className="bg-amber-300 w-full flex items-center justify-center p-2 font-extrabold">
            <h1>Task 4:</h1>
          </div>
          <div className="w-full h-full flex flex-col overflow-auto  ">
            <FormTask4 />
          </div>
          <Link to="/FormTask4">
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
        <div className="bg-amber-100 w-100 h-150 flex flex-col border rounded-lg shadow-2xl overflow-hidden  ">
          <div className="bg-amber-300 w-full flex items-center justify-center p-2 font-extrabold">
            <h1>Task 5:</h1>
          </div>
          <div className="w-full h-full flex flex-col overflow-auto  ">
            <FormTask5 />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
