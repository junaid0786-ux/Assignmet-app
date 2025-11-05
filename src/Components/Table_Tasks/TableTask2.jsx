import React from "react";

const TableTask2 = () => {
  return (
    <div className="bg-amber-100 h-screen w-full flex items-center justify-center ">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="table-auto border-collapse border-5 border-gray-500 text-center w-100">
          <thead>
            <tr>
              <th
                colSpan="6"
                className="border border-black px-4 py-2 font-semibold"
              >
                Athletics day time table
              </th>
            </tr>
            <tr>
              <th className="border border-black px-4 py-2">Area</th>
              <th className="border border-black px-4 py-2">10am–11am</th>
              <th className="border border-black px-4 py-2">11am–12pm</th>
              <th className="border border-black px-4 py-2">12pm–1pm</th>
              <th className="border border-black px-4 py-2">1pm–2pm</th>
              <th className="border border-black px-4 py-2">2pm–3pm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-4 py-2" rowSpan="2">
                Track
              </td>
              <td className="border border-black px-4 py-2">400m</td>
              <td className="border border-black px-4 py-2">200m</td>
              <td className="border border-black px-4 py-2" rowSpan="3">
                Lunch
              </td>
              <td className="border border-black px-4 py-2">800m</td>
              <td className="border border-black px-4 py-2">100m</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">Hurdles</td>
              <td className="border border-black px-4 py-2">1500m</td>
              <td className="border border-black px-4 py-2">Free</td>
              <td className="border border-black px-4 py-2">80m</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">Field</td>
              <td className="border border-black px-4 py-2">Discus</td>
              <td className="border border-black px-4 py-2">Javelin</td>
              <td className="border border-black px-4 py-2">Shot put</td>
              <td className="border border-black px-4 py-2">Hammer throw</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableTask2;
