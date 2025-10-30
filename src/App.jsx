import React from 'react'
import Sidebar from './Components/Sidebar'
import Home from './Page/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from './Page/List'
import Table from './Page/Table'
import Form from './Page/Form'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <div className="flex">
      
        <Sidebar />

      
        <div className="ml-[25%] w-[75%] ">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/List" element={<List />} />
            <Route path="/Table" element={<Table />} />
            <Route path="/Form" element={<Form />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App