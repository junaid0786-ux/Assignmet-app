import React from "react";

const TableTask5 = () => {
  return (
    <div className="bg-amber-100 h-screen w-full flex items-center justify-center ">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="table-auto border-collapse border border-black text-center w-100">
          <thead className="bg-yellow-300">
            <tr>
              <th className="border border-black px-4 py-2">ID</th>
              <th className="border border-black px-4 py-2">Customer Name</th>
              <th className="border border-black px-4 py-2 bg-white">
                Product name
              </th>
              <th className="border border-black px-4 py-2 bg-white">
                Quantity
              </th>
              <th className="border border-black px-4 py-2 bg-white">Price</th>
              <th className="border border-black px-4 py-2">Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-yellow-300">
              <td className="border border-black px-4 py-2" rowSpan="4">
                1
              </td>
              <td className="border border-black px-4 py-2" rowSpan="4">
                Ram
              </td>
              <td className="border border-black px-4 py-2 bg-white">
                Realme c1
              </td>
              <td className="border border-black px-4 py-2 bg-white">2</td>
              <td className="border border-black px-4 py-2 bg-white">6000</td>
              <td className="border border-black px-4 py-2" rowSpan="4">
                17550
              </td>
            </tr>
            <tr className="bg-yellow-300">
              <td className="border border-black px-4 py-2 bg-white">
                Ram DDR3 8GB
              </td>
              <td className="border border-black px-4 py-2 bg-white">2</td>
              <td className="border border-black px-4 py-2 bg-white">5000</td>
            </tr>
            <tr className="bg-yellow-300">
              <td className="border border-black px-4 py-2 bg-white">
                DairyMilk
              </td>
              <td className="border border-black px-4 py-2 bg-white">10</td>
              <td className="border border-black px-4 py-2 bg-white">500</td>
            </tr>
            <tr className="bg-yellow-300">
              <td className="border border-black px-4 py-2 bg-white">
                cotton candy
              </td>
              <td className="border border-black px-4 py-2 bg-white">5</td>
              <td className="border border-black px-4 py-2 bg-white">50</td>
            </tr>
            <tr className="bg-yellow-300">
              <td className="border border-black px-4 py-2" rowSpan="2">
                2
              </td>
              <td className="border border-black px-4 py-2" rowSpan="2">
                Veronica
              </td>
              <td className="border border-black px-4 py-2 bg-white">
                Sony TV "50inch"
              </td>
              <td className="border border-black px-4 py-2 bg-white">1</td>
              <td className="border border-black px-4 py-2 bg-white">60000</td>
              <td className="border border-black px-4 py-2" rowSpan="2">
                80550
              </td>
            </tr>
            <tr className="bg-yellow-300">
              <td className="border border-black px-4 py-2 bg-white">
                chromecast
              </td>
              <td className="border border-black px-4 py-2 bg-white">1</td>
              <td className="border border-black px-4 py-2 bg-white">3000</td>
            </tr>
            <tr className="bg-gray-700 text-white font-semibold">
              <td
                colSpan="5"
                className="border border-black px-4 py-2 text-left"
              >
                Total Amount:
              </td>
              <td className="border border-black px-4 py-2">2,86,000</td>
            </tr>
            <tr className="bg-red-600 text-white font-semibold">
              <td
                colSpan="4"
                className="border border-black px-4 py-2 text-left"
              >
                Tax:
              </td>
              <td className="border border-black px-4 py-2">35%</td>
              <td className="border border-black px-4 py-2 bg-white text-black">
                28192.50
              </td>
            </tr>
            <tr className="bg-gray-700 text-white font-semibold">
              <td
                colSpan="5"
                className="border border-black px-4 py-2 text-left"
              >
                Tax Deduction Balance Amount:
              </td>
              <td className="border border-black px-4 py-2 bg-white text-black">
                52357.50
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableTask5;
