import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [listSection, setListSection] = useState("");
  const [tableSection, setTableSection] = useState("");
  const [formSection, setFormSection] = useState("");

  useEffect(() => {
    setListSection("");
    setTableSection("");
    setFormSection("");
  }, [currentPath]);

  const handleListChange = (e) => {
    const id = e.target.value;
    setListSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTableChange = (e) => {
    const id = e.target.value;
    setTableSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormChange = (e) => {
    const id = e.target.value;
    setFormSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const isListPage = currentPath === "/List";
  const isTablePage = currentPath === "/Table";
  const isFormPage = currentPath === "/Form";

  return (
    <div className="bg-amber-100 w-[25%] h-screen p-5 flex items-center justify-center fixed top-0 left-0">
      <div className="bg-gray-200 w-full h-full rounded-2xl shadow-2xl flex flex-col  items-center gap-5 overflow-hidden ">
        <div className="bg-amber-300 w-full flex items-center justify-center p-4 shadow-md">
          <h1 className="text-lg font-bold">
            <Link to="/">
              Assignments / <u>home</u>
            </Link>
          </h1>
        </div>
        <div className="h-full w-full p-3 flex flex-col gap-5">
          <Link
            to="/List"
            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
              isListPage ? "bg-gray-300" : "bg-white hover:bg-amber-300"
            }`}
            onClick={(e) => {
              if (
                e.target.tagName === "SELECT" ||
                e.target.tagName === "OPTION"
              )
                e.preventDefault();
            }}
          >
            <div className="flex flex-col items-start">
              <b>List</b>
              <hr className="border-black w-12 mt-1" />
            </div>
            <select
              onChange={handleListChange}
              value={listSection}
              className={`bg-amber-300 rounded-full p-1 transition-all duration-500 ${
                isListPage
                  ? "opacity-100 scale-100 translate-x-0"
                  : "opacity-0 scale-0 -translate-x-5 pointer-events-none"
              }`}
            >
              <option value="">Select Task</option>
              <option value="section1">Task 1</option>
              <option value="section2">Task 2</option>
              <option value="section3">Task 3</option>
              <option value="section4">Task 4</option>
              <option value="section5">Task 5</option>
            </select>
          </Link>

          <Link
            to="/Table"
            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
              isTablePage ? "bg-gray-300" : "bg-white hover:bg-amber-300"
            }`}
            onClick={(e) => {
              if (
                e.target.tagName === "SELECT" ||
                e.target.tagName === "OPTION"
              )
                e.preventDefault();
            }}
          >
            <div className="flex flex-col items-start">
              <b>Table</b>
              <hr className="border-black w-12 mt-1" />
            </div>
            <select
              onChange={handleTableChange}
              value={tableSection}
              className={`bg-amber-300 rounded-full p-1 transition-all duration-500 ${
                isTablePage
                  ? "opacity-100 scale-100 translate-x-0"
                  : "opacity-0 scale-0 -translate-x-5 pointer-events-none"
              }`}
            >
              <option value="">Select Task</option>
              <option value="section1">Task 1</option>
              <option value="section2">Task 2</option>
              <option value="section3">Task 3</option>
              <option value="section4">Task 4</option>
              <option value="section5">Task 5</option>
            </select>
          </Link>

          <Link
            to="/Form"
            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
              isFormPage ? "bg-gray-300" : "bg-white hover:bg-amber-300"
            }`}
            onClick={(e) => {
              if (
                e.target.tagName === "SELECT" ||
                e.target.tagName === "OPTION"
              )
                e.preventDefault();
            }}
          >
            <div className="flex flex-col items-start">
              <b>Form</b>
              <hr className="border-black w-12 mt-1" />
            </div>
            <select
              onChange={handleFormChange}
              value={formSection}
              className={`bg-amber-300 rounded-full p-1 transition-all duration-500 ${
                isFormPage
                  ? "opacity-100 scale-100 translate-x-0"
                  : "opacity-0 scale-0 -translate-x-5 pointer-events-none"
              }`}
            >
              <option value="">Select Task</option>
              <option value="section1">Task 1</option>
              <option value="section2">Task 2</option>
              <option value="section3">Task 3</option>
              <option value="section4">Task 4</option>
            </select>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
