import React from "react";

const TableTask3 = () => {
  return (
    <div className="bg-amber-100 h-screen w-full flex items-center justify-center ">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="table-auto border-collapse border border-black text-center w-100">
          <thead>
            <tr>
              <th
                colSpan="6"
                className="border border-black px-4 py-2 font-semibold bg-blue-200"
              >
                Final Examination Schedule - Fall 2008
              </th>
            </tr>
            <tr className="bg-yellow-200">
              <th className="border border-black px-4 py-2"></th>
              <th className="border border-black px-4 py-2">
                Monday
                <br />
                Dec. 15
              </th>
              <th className="border border-black px-4 py-2">
                Tuesday
                <br />
                Dec. 16
              </th>
              <th className="border border-black px-4 py-2">
                Wednesday
                <br />
                Dec. 17
              </th>
              <th className="border border-black px-4 py-2">
                Thursday
                <br />
                Dec. 18
              </th>
              <th
                className="border border-black px-4 py-2 bg-pink-200"
                rowSpan="5"
              >
                H<br />O<br />M<br />E
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blue-100">
              <td className="border border-black px-4 py-2 font-semibold">
                8:00 a.m.
              </td>
              <td className="border border-black px-4 py-2">8M</td>
              <td className="border border-black px-4 py-2">9M</td>
              <td className="border border-black px-4 py-2">9/9:30T</td>
              <td className="border border-black px-4 py-2">8T</td>
            </tr>
            <tr className="bg-blue-100">
              <td className="border border-black px-4 py-2 font-semibold">
                10:00 a.m.
              </td>
              <td className="border border-black px-4 py-2">12/12:30T</td>
              <td className="border border-black px-4 py-2">11M</td>
              <td className="border border-black px-4 py-2">10M</td>
              <td className="border border-black px-4 py-2">11T</td>
            </tr>
            <tr className="bg-blue-100">
              <td className="border border-black px-4 py-2 font-semibold">
                1:00 p.m.
              </td>
              <td className="border border-black px-4 py-2">1M</td>
              <td className="border border-black px-4 py-2">1T</td>
              <td className="border border-black px-4 py-2">10T</td>
              <td className="border border-black px-4 py-2">12M</td>
            </tr>
            <tr className="bg-blue-100">
              <td className="border border-black px-4 py-2 font-semibold">
                3:00 p.m.
              </td>
              <td className="border border-black px-4 py-2">3M</td>
              <td className="border border-black px-4 py-2">2T</td>
              <td className="border border-black px-4 py-2">2M</td>
              <td className="border border-black px-4 py-2">3/3:30T</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableTask3;
