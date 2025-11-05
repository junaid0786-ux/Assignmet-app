import React from "react";

const TableTask1 = () => {
  return (
    <div className="bg-amber-100 h-screen w-full flex items-center justify-center ">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="table-auto border-collapse border border-black w-100 text-left">
          <thead>
            <tr>
              <th className="border border-black px-4 py-2">No.</th>
              <th className="border border-black px-4 py-2">Full Name</th>
              <th className="border border-black px-4 py-2">Position</th>
              <th className="border border-black px-4 py-2">Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black px-4 py-2">1</td>
              <td className="border border-black px-4 py-2">Bill Gates</td>
              <td className="border border-black px-4 py-2">
                Founder Microsoft
              </td>
              <td className="border border-black px-4 py-2">$1000</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">2</td>
              <td className="border border-black px-4 py-2">Steve Jobs</td>
              <td className="border border-black px-4 py-2">Founder Apple</td>
              <td className="border border-black px-4 py-2">$1200</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">3</td>
              <td className="border border-black px-4 py-2">Larry Page</td>
              <td className="border border-black px-4 py-2">Founder Google</td>
              <td className="border border-black px-4 py-2">$1100</td>
            </tr>
            <tr>
              <td className="border border-black px-4 py-2">4</td>
              <td className="border border-black px-4 py-2">Mark Zuckeberg</td>
              <td className="border border-black px-4 py-2">
                Founder Facebook
              </td>
              <td className="border border-black px-4 py-2">$1300</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableTask1;
