import React from "react";

const TableTask4 = () => {
  return (
    <div className="bg-amber-100 h-screen w-full flex items-center justify-center ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-100 flex justify-center">
        <table className="border-collapse border-2 border-black text-center w-50">
          <tbody>
            <tr>
              <td className="border border-black px-3 py-2">1</td>
              <td className="border border-black px-3 py-2">2</td>
              <td className="border border-black px-3 py-2" colSpan="2">
                3
              </td>
              <td className="border border-black px-3 py-2" colSpan="2">
                4
              </td>
            </tr>
            <tr>
              <td className="border border-black px-3 py-2" colSpan="1">
                5
              </td>
              <td className="border border-black px-3 py-2">6</td>
              <td className="border border-black px-3 py-2">7</td>
              <td className="border border-black px-3 py-2">8</td>
              <td className="border border-black px-3 py-2">9</td>
              <td className="border border-black px-3 py-2">10</td>
            </tr>
            <tr>
              <td className="border border-black px-3 py-2" colSpan="2">
                11
              </td>
              <td className="border border-black px-3 py-2" colSpan="4">
                12
              </td>
            </tr>
            <tr>
              <td className="border border-black px-3 py-2">14</td>
              <td className="border border-black px-3 py-2">15</td>
              <td className="border border-black px-3 py-2">16</td>
              <td className="border border-black px-3 py-2">17</td>
              <td className="border border-black px-3 py-2">18</td>
              <td className="border border-black px-3 py-2" rowSpan="4">
                13
              </td>
            </tr>
            <tr>
              <td className="border border-black px-3 py-2" colSpan="2">
                19
              </td>
              <td className="border border-black px-3 py-2">20</td>
              <td className="border border-black px-3 py-2" colSpan="2">
                21
              </td>
            </tr>
            <tr>
              <td className="border border-black px-3 py-2" colSpan="5">
                22
              </td>
            </tr>
            <tr>
              <td className="border border-black px-3 py-2">23</td>
              <td className="border border-black px-3 py-2">24</td>
              <td className="border border-black px-3 py-2">25</td>
              <td className="border border-black px-3 py-2">26</td>
              <td className="border border-black px-3 py-2">27</td>
            </tr>
            <tr>
              <td className="border border-black px-3 py-2">28</td>
              <td className="border border-black px-3 py-2" colSpan="4">
                29
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableTask4;
