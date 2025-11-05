import React from "react";
import Sidebar from "./Components/Sidebar";
import Home from "./Page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import List from "./Page/List";
import Table from "./Page/Table";
import Form from "./Page/Form";

import FormTask1 from "./Components/Form_Tasks/FormTask1";
import FormTask2 from "./Components/Form_Tasks/FormTask2";
import FormTask3 from "./Components/Form_Tasks/FormTask3";
import FormTask4 from "./Components/Form_Tasks/FormTask4";
import FormTask5 from "./Components/Form_Tasks/FormTask5";
import FormTask6 from "./Components/Form_Tasks/FormTask6";

import TableTask1 from "./Components/Table_Tasks/TableTask1";
import TableTask2 from "./Components/Table_Tasks/TableTask2";
import TableTask3 from "./Components/Table_Tasks/TableTask3";
import TableTask4 from "./Components/Table_Tasks/TableTask4";
import TableTask5 from "./Components/Table_Tasks/TableTask5";

import ListTask1 from "./Components/List_Tasks/ListTask1";
import ListTask2 from "./Components/List_Tasks/ListTask2";
import ListTask3 from "./Components/List_Tasks/ListTask3";
import ListTask4 from "./Components/List_Tasks/ListTask4";
import ListTask5 from "./Components/List_Tasks/ListTask5";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="flex">
          <Sidebar />

          <div className="ml-[25%] w-[75%] ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/List" element={<List />} />
              <Route path="/Table" element={<Table />} />
              <Route path="/Form" element={<Form />} />

              <Route path="/FormTask1" element={<FormTask1 />} />
              <Route path="/FormTask2" element={<FormTask2 />} />
              <Route path="/FormTask3" element={<FormTask3 />} />
              <Route path="/FormTask4" element={<FormTask4 />} />
              <Route path="/FormTask5" element={<FormTask5 />} />
              <Route path="/FormTask6" element={<FormTask6 />} />

              <Route path="/TableTask1" element={<TableTask1 />} />
              <Route path="/TableTask2" element={<TableTask2 />} />
              <Route path="/TableTask3" element={<TableTask3 />} />
              <Route path="/TableTask4" element={<TableTask4 />} />
              <Route path="/TableTask5" element={<TableTask5 />} />

              <Route path="/ListTask1" element={<ListTask1 />} />
              <Route path="/ListTask2" element={<ListTask2 />} />
              <Route path="/ListTask3" element={<ListTask3 />} />
              <Route path="/ListTask4" element={<ListTask4 />} />
              <Route path="/ListTask5" element={<ListTask5 />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
