import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const [selectedSection, setSelectedSection] = useState('');

  const handleSelectChange = (event) => {
    const sectionId = event.target.value;
    setSelectedSection(sectionId);

    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-amber-100 w-[25%] h-screen p-5 flex items-center justify-center fixed top-0 left-0">
      <div className="bg-gray-100 w-full h-full rounded-2xl shadow-2xl flex-col justify-center items-center gap-1 overflow-hidden">
        <div className="bg-amber-300 w-full flex items-center justify-center p-4 ">
          <h1>
            <b><Link to="/">Assignment</Link></b>
          </h1>
        </div>
        <div className=" flex flex-col w-full h-auto p-2 pt-5 gap-5 ">

          {/* tasks boxes */}
          <div className="bg-white flex items-center justify-between p-4 rounded-2xl">
            <label htmlFor="list"><b> <Link to="/List">List <hr/></Link> </b> </label>
            <div >
              <select name="list" id="list" onChange={handleSelectChange} value={selectedSection} className="bg-amber-300 flex items-center justify-content-center rounded-full p-1 " >
                <option value="">Select Task</option>
                <option value="section1">Task 1:</option>
                <option value="section2">Task 2:</option>
                <option value="section3">Task 3:</option>
                <option value="section4">Task 4:</option>
                <option value="section5">Task 5:</option>
              </select>
            </div>
          </div>

          <div className="bg-white flex items-center justify-between p-4 rounded-2xl">
            <label htmlFor="list"><b><Link to="Table">Table <hr /></Link></b></label>
            <div >
              <select name="list" id="list" className="bg-amber-300 flex items-center justify-content-center rounded-full p-1" >
                <option value="list">Select Task</option>
                <option value="list">Task 1:</option>
                <option value="list">Task 2:</option>
                <option value="list">Task 3:</option>
              </select>
            </div>
          </div>

          <div className="bg-white items-center flex justify-between p-4 rounded-2xl">
            <label htmlFor="list"><b> <Link to="/Form">Form <hr /></Link></b></label>
            <div >
              <select name="list" id="list" className="bg-amber-300 flex items-center justify-content-center rounded-full p-1" >
                <option value="list">Select Task</option>
                <option value="list">Task 1:</option>
                <option value="list">Task 2:</option>
                <option value="list">Task 3:</option>
              </select>
            </div>
          </div>

          <div className="bg-white items-center flex justify-between p-4 rounded-2xl">
            <label htmlFor="list"><b>Lists</b></label>
            <div >
              <select name="list" id="list" className="bg-amber-300 flex items-center justify-content-center rounded-full p-1" >
                <option value="list">Select Task</option>
                <option value="list">Task 1:</option>
                <option value="list">Task 2:</option>
                <option value="list">Task 3:</option>
              </select>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
