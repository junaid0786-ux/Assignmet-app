import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/img.jpg";
const Table = () => {
  return (
    <div
      className="relative w-full h-screen bg-fixed bg-cover bg-center overflow-y-auto"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className=" bg-amber-200/70 flex flex-col w-full h-auto items-center justify-center p-10 gap-30 ">
        <section
          id="section1"
          className="  flex flex-col w-full h-auto items-center justify-center p-10 gap-30 "
        >
          <div className="bg-white w-150 h-150 border rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-amber-300 flex justify-center p-2 ">
              <h1 className="">
                <b>Task 1:</b>
              </h1>
            </div>
            <div className="bg-amber-100 h-full flex flex-col items-center">
              <div className="mt-30">
                <table className="table-auto border-collapse border border-black w-full text-left">
                  <thead>
                    <tr>
                      <th className="border border-black px-4 py-2">No.</th>
                      <th className="border border-black px-4 py-2">
                        Full Name
                      </th>
                      <th className="border border-black px-4 py-2">
                        Position
                      </th>
                      <th className="border border-black px-4 py-2">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-black px-4 py-2">1</td>
                      <td className="border border-black px-4 py-2">
                        Bill Gates
                      </td>
                      <td className="border border-black px-4 py-2">
                        Founder Microsoft
                      </td>
                      <td className="border border-black px-4 py-2">$1000</td>
                    </tr>
                    <tr>
                      <td className="border border-black px-4 py-2">2</td>
                      <td className="border border-black px-4 py-2">
                        Steve Jobs
                      </td>
                      <td className="border border-black px-4 py-2">
                        Founder Apple
                      </td>
                      <td className="border border-black px-4 py-2">$1200</td>
                    </tr>
                    <tr>
                      <td className="border border-black px-4 py-2">3</td>
                      <td className="border border-black px-4 py-2">
                        Larry Page
                      </td>
                      <td className="border border-black px-4 py-2">
                        Founder Google
                      </td>
                      <td className="border border-black px-4 py-2">$1100</td>
                    </tr>
                    <tr>
                      <td className="border border-black px-4 py-2">4</td>
                      <td className="border border-black px-4 py-2">
                        Mark Zuckeberg
                      </td>
                      <td className="border border-black px-4 py-2">
                        Founder Facebook
                      </td>
                      <td className="border border-black px-4 py-2">$1300</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section
          id="section2"
          className=" flex flex-col w-full h-auto items-center justify-center p-10 gap-30"
        >
          <div className=" w-150 h-150 border rounded-lg shadow-2xl items-center overflow-hidden">
            <div className="bg-amber-300 flex justify-center p-2">
              <h1>
                <b>Task 2:</b>
              </h1>{" "}
              <hr />
            </div>
            <div className="bg-amber-100 h-full p-5  overflow-y-auto ">
              <div className="mt-25">
               <table className="table-auto border-collapse border-5 border-gray-500 text-center w-full">
  <thead>
    <tr>
      <th colSpan="6" className="border border-black px-4 py-2 font-semibold">
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
      <td className="border border-black px-4 py-2" rowSpan="2">Track</td>
      <td className="border border-black px-4 py-2">400m</td>
      <td className="border border-black px-4 py-2">200m</td>
      <td className="border border-black px-4 py-2" rowSpan="3">Lunch</td>
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
          </div>
        </section>

        <section
          id="section3"
          className="  flex flex-col w-full h-auto items-center justify-center p-10 gap-30"
        >
          <div className=" w-200 h-150 border rounded-lg shadow-2xl  overflow-hidden ">
            <div className="bg-amber-300 flex justify-center p-2">
              <h1>
                <b>Task 3:</b>
              </h1>
            </div>
            <div className="bg-amber-100 h-full p-5 overflow-y-auto ">
              <div className="mt-20">
             <table className="table-auto border-collapse border border-black text-center w-full">
  <thead>
    <tr>
      <th colSpan="6" className="border border-black px-4 py-2 font-semibold bg-blue-200">
        Final Examination Schedule - Fall 2008
      </th>
    </tr>
    <tr className="bg-yellow-200">
      <th className="border border-black px-4 py-2"></th>
      <th className="border border-black px-4 py-2">
        Monday<br />Dec. 15
      </th>
      <th className="border border-black px-4 py-2">
        Tuesday<br />Dec. 16
      </th>
      <th className="border border-black px-4 py-2">
        Wednesday<br />Dec. 17
      </th>
      <th className="border border-black px-4 py-2">
        Thursday<br />Dec. 18
      </th>
      <th className="border border-black px-4 py-2 bg-pink-200" rowSpan="5">
        H<br />O<br />M<br />E
      </th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-blue-100">
      <td className="border border-black px-4 py-2 font-semibold">8:00 a.m.</td>
      <td className="border border-black px-4 py-2">8M</td>
      <td className="border border-black px-4 py-2">9M</td>
      <td className="border border-black px-4 py-2">9/9:30T</td>
      <td className="border border-black px-4 py-2">8T</td>
    </tr>
    <tr className="bg-blue-100">
      <td className="border border-black px-4 py-2 font-semibold">10:00 a.m.</td>
      <td className="border border-black px-4 py-2">12/12:30T</td>
      <td className="border border-black px-4 py-2">11M</td>
      <td className="border border-black px-4 py-2">10M</td>
      <td className="border border-black px-4 py-2">11T</td>
    </tr>
    <tr className="bg-blue-100">
      <td className="border border-black px-4 py-2 font-semibold">1:00 p.m.</td>
      <td className="border border-black px-4 py-2">1M</td>
      <td className="border border-black px-4 py-2">1T</td>
      <td className="border border-black px-4 py-2">10T</td>
      <td className="border border-black px-4 py-2">12M</td>
    </tr>
    <tr className="bg-blue-100">
      <td className="border border-black px-4 py-2 font-semibold">3:00 p.m.</td>
      <td className="border border-black px-4 py-2">3M</td>
      <td className="border border-black px-4 py-2">2T</td>
      <td className="border border-black px-4 py-2">2M</td>
      <td className="border border-black px-4 py-2">3/3:30T</td>
    </tr>
  </tbody>
</table>
</div>
            </div>
          </div>
        </section>

        <section
          id="section4"
          className=" flex flex-col w-full h-auto items-center justify-center p-10 gap-30"
        >
          <div className=" w-100 h-150 border rounded-lg shadow-2xl  overflow-hidden">
            <div className="bg-amber-300 flex justify-center p-2">
              <h1>
                <b>Task 4:</b>
              </h1>
            </div>
            <div className="bg-amber-100 h-full p-4 flex justify-center overflow-y-auto">
              <div className="mt-20">
               <table className="border-collapse border-2 border-black text-center">
  <tbody>
    <tr>
      <td className="border border-black px-3 py-2">1</td>
      <td className="border border-black px-3 py-2">2</td>
      <td className="border border-black px-3 py-2" colSpan="2">3</td>
      <td className="border border-black px-3 py-2" colSpan="2">4</td>
    </tr>
    <tr>
      <td className="border border-black px-3 py-2" colSpan="1">5</td>
      <td className="border border-black px-3 py-2">6</td>
      <td className="border border-black px-3 py-2">7</td>
      <td className="border border-black px-3 py-2">8</td>
      <td className="border border-black px-3 py-2">9</td>
      <td className="border border-black px-3 py-2">10</td>
    </tr>
    <tr>
      <td className="border border-black px-3 py-2" colSpan="2">11</td>
      <td className="border border-black px-3 py-2" colSpan="4">12</td>
    </tr>
    <tr>
      <td className="border border-black px-3 py-2">14</td>
      <td className="border border-black px-3 py-2">15</td>
      <td className="border border-black px-3 py-2">16</td>
      <td className="border border-black px-3 py-2">17</td>
      <td className="border border-black px-3 py-2">18</td>
      <td className="border border-black px-3 py-2" rowSpan="4">13</td>
    </tr>
    <tr>
      <td className="border border-black px-3 py-2" colSpan="2">19</td>
      <td className="border border-black px-3 py-2">20</td>
      <td className="border border-black px-3 py-2" colSpan="2">21</td>
    </tr>
    <tr>
      <td className="border border-black px-3 py-2" colSpan="5">22</td>
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
      <td className="border border-black px-3 py-2" colSpan="4">29</td>
    </tr>
  </tbody>
</table>
</div>
            </div>
          </div>
        </section>

        <section
          id="section5"
          className="  flex flex-col w-full h-auto items-center justify-center p-10 gap-30"
        >
          <div className=" w-200 h-150 border rounded-lg shadow-2xl  overflow-hidden ">
            <div className="bg-amber-300 flex justify-center p-2">
              <h1>Task 5:</h1>
            </div>
            <div className="bg-amber-100 h-full p-10 flex items-center justify-center pb-25 overflow-y-auto">
             <table className="table-auto border-collapse border border-black text-center w-full">
  <thead className="bg-yellow-300">
    <tr>
      <th className="border border-black px-4 py-2">ID</th>
      <th className="border border-black px-4 py-2">Customer Name</th>
      <th className="border border-black px-4 py-2 bg-white">Product name</th>
      <th className="border border-black px-4 py-2 bg-white">Quantity</th>
      <th className="border border-black px-4 py-2 bg-white">Price</th>
      <th className="border border-black px-4 py-2">Total Price</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-yellow-300">
      <td className="border border-black px-4 py-2" rowSpan="4">1</td>
      <td className="border border-black px-4 py-2" rowSpan="4">Ram</td>
      <td className="border border-black px-4 py-2 bg-white">Realme c1</td>
      <td className="border border-black px-4 py-2 bg-white">2</td>
      <td className="border border-black px-4 py-2 bg-white">6000</td>
      <td className="border border-black px-4 py-2" rowSpan="4">17550</td>
    </tr>
    <tr className="bg-yellow-300">
      <td className="border border-black px-4 py-2 bg-white">Ram DDR3 8GB</td>
      <td className="border border-black px-4 py-2 bg-white">2</td>
      <td className="border border-black px-4 py-2 bg-white">5000</td>
    </tr>
    <tr className="bg-yellow-300">
      <td className="border border-black px-4 py-2 bg-white">DairyMilk</td>
      <td className="border border-black px-4 py-2 bg-white">10</td>
      <td className="border border-black px-4 py-2 bg-white">500</td>
    </tr>
    <tr className="bg-yellow-300">
      <td className="border border-black px-4 py-2 bg-white">cotton candy</td>
      <td className="border border-black px-4 py-2 bg-white">5</td>
      <td className="border border-black px-4 py-2 bg-white">50</td>
    </tr>
    <tr className="bg-yellow-300">
      <td className="border border-black px-4 py-2" rowSpan="2">2</td>
      <td className="border border-black px-4 py-2" rowSpan="2">Veronica</td>
      <td className="border border-black px-4 py-2 bg-white">Sony TV "50inch"</td>
      <td className="border border-black px-4 py-2 bg-white">1</td>
      <td className="border border-black px-4 py-2 bg-white">60000</td>
      <td className="border border-black px-4 py-2" rowSpan="2">80550</td>
    </tr>
    <tr className="bg-yellow-300">
      <td className="border border-black px-4 py-2 bg-white">chromecast</td>
      <td className="border border-black px-4 py-2 bg-white">1</td>
      <td className="border border-black px-4 py-2 bg-white">3000</td>
    </tr>
    <tr className="bg-gray-700 text-white font-semibold">
      <td colSpan="5" className="border border-black px-4 py-2 text-left">Total Amount:</td>
      <td className="border border-black px-4 py-2">2,86,000</td>
    </tr>
    <tr className="bg-red-600 text-white font-semibold">
      <td colSpan="4" className="border border-black px-4 py-2 text-left">Tax:</td>
      <td className="border border-black px-4 py-2">35%</td>
      <td className="border border-black px-4 py-2 bg-white text-black">28192.50</td>
    </tr>
    <tr className="bg-gray-700 text-white font-semibold">
      <td colSpan="5" className="border border-black px-4 py-2 text-left">Tax Deduction Balance Amount:</td>
      <td className="border border-black px-4 py-2 bg-white text-black">52357.50</td>
    </tr>
  </tbody>
</table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Table;
