import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/img.jpg";

const Form = () => {
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
            <div className="bg-amber-100 h-full flex flex-col items-center justify-center ">
              <div>
                 <div className="mb-15">
      <form className="border border-black p-6 bg-white rounded-md w-[350px]">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Admin Login Page
        </h2>

        <div className="mb-4">
          <label htmlFor="username" className="block font-semibold mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="w-full border border-gray-400 p-2 rounded"
            placeholder="Enter username"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-400 p-2 rounded"
            placeholder="Enter password"
          />
        </div>

        <div className="flex justify-start gap-3">
          <button
            type="submit"
            className="bg-gray-200 border border-gray-400 px-4 py-1 rounded hover:bg-gray-300"
          >
            Submit
          </button>
          <button
            type="reset"
            className="bg-gray-200 border border-gray-400 px-4 py-1 rounded hover:bg-gray-300"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
    </div>
            </div>
          </div>
        </section>

        <section
          id="section2"
          className=" flex flex-col w-full h-auto items-center justify-center p-10 gap-30"
        >
          <div className=" w-150 h-150 border rounded-lg shadow-2xl  overflow-hidden">
            <div className="bg-amber-300 flex justify-center p-2">
              <h1>
                <b>Task 2:</b>
              </h1>{" "}
              <hr />
            </div>
            <div className="bg-amber-100 h-full p-10 flex flex-col items-center  overflow-y-auto">
              <div>
                <div className="">
      <form className="border border-black p-6 bg-white rounded-md w-[400px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Pizza Order Form</h2>

        <div className="mb-3">
          <label className="block font-semibold mb-1">First Name:</label>
          <input type="text" className="w-full border border-gray-400 p-1 rounded" />
        </div>

        <div className="mb-3">
          <label className="block font-semibold mb-1">Last Name:</label>
          <input type="text" className="w-full border border-gray-400 p-1 rounded" />
        </div>

        <div className="mb-3">
          <label className="block font-semibold mb-1">Email Address:</label>
          <input type="email" className="w-full border border-gray-400 p-1 rounded" />
        </div>

        <div className="mb-3">
          <label className="block font-semibold mb-1">Contact Number:</label>
          <input type="number" className="w-full border border-gray-400 p-1 rounded" />
        </div>

        <div className="mb-3">
          <label className="block font-semibold mb-1">Preferred Delivery Date:</label>
          <input type="date" className="w-full border border-gray-400 p-1 rounded" />
        </div>

        <div className="mb-3">
          <label className="block font-semibold mb-1">Size:</label>
          <div className="flex gap-4">
            <label><input type="radio" name="size" /> Small</label>
            <label><input type="radio" name="size" /> Medium</label>
            <label><input type="radio" name="size" /> Large</label>
          </div>
        </div>

        <div className="mb-3">
          <label className="block font-semibold mb-1">Flavor:</label>
          <div className="flex justify-between items-center mb-1">
            <label><input type="checkbox" /> Hawaiian (Php 150.00)</label>
            <select className="border border-gray-400 rounded p-1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="flex justify-between items-center mb-1">
            <label><input type="checkbox" /> Pepperoni (Php 140.00)</label>
            <select className="border border-gray-400 rounded p-1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <label><input type="checkbox" /> Vegetable (Php 130.00)</label>
            <select className="border border-gray-400 rounded p-1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label className="block font-semibold mb-1">Credit Card Number:</label>
          <input type="number" className="w-full border border-gray-400 p-1 rounded" />
        </div>

        <div className="mb-3">
          <label className="block font-semibold mb-1">PIN:</label>
          <input type="password" className="w-full border border-gray-400 p-1 rounded" />
        </div>

        <div className="mb-3">
          <label className="block font-semibold mb-1">Additional Note:</label>
          <textarea className="w-full border border-gray-400 p-2 rounded h-20"></textarea>
        </div>

        <div className="flex justify-start">
          <button
            type="submit"
            className="bg-gray-200 border border-gray-400 px-4 py-1 rounded hover:bg-gray-300 cursor-pointer"
          >
            Submit Order
          </button>
        </div>
      </form>
    </div>
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
            <div className="bg-amber-100 h-full p-10 flex flex-col items-center overflow-y-auto">
              <div className="">
  <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
    <h2 className="text-2xl font-bold text-center mb-2">Registration Form</h2>
    <p className="text-center text-gray-600 text-sm mb-1">
      Of course, all submitted information is kept in the strictest confidence.
    </p>
    <p className="text-center text-gray-700 font-medium text-sm mb-6">
      Our services are always at no cost to you.
    </p>

    <form className="space-y-4">
      <div>
        <label className="block text-gray-700">Name:</label>
        <input type="text" className="w-full border rounded-lg px-3 py-2 mt-1" />
      </div>

      <div>
        <label className="block text-gray-700">Address:</label>
        <input type="text" className="w-full border rounded-lg px-3 py-2 mt-1" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">City:</label>
          <input type="text" className="w-full border rounded-lg px-3 py-2 mt-1" />
        </div>
        <div>
          <label className="block text-gray-700">State/Province:</label>
          <input type="text" className="w-full border rounded-lg px-3 py-2 mt-1" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">Zip Code:</label>
          <input type="text" className="w-full border rounded-lg px-3 py-2 mt-1" />
        </div>
        <div>
          <label className="block text-gray-700">Country:</label>
          <input type="text" className="w-full border rounded-lg px-3 py-2 mt-1" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">Phone (H):</label>
          <input type="text" className="w-full border rounded-lg px-3 py-2 mt-1" />
        </div>
        <div>
          <label className="block text-gray-700">Fax:</label>
          <input type="text" className="w-full border rounded-lg px-3 py-2 mt-1" />
        </div>
      </div>

      <div>
        <label className="block text-gray-700">Phone (W):</label>
        <input type="text" className="w-full border rounded-lg px-3 py-2 mt-1" />
        <small className="text-gray-500 text-sm">(if able to speak freely)</small>
      </div>

      <div>
        <label className="block text-gray-700">Email:</label>
        <input type="email" className="w-full border rounded-lg px-3 py-2 mt-1" />
      </div>

      <div>
        <label className="block text-gray-700">Company Name:</label>
        <input type="text" className="w-full border rounded-lg px-3 py-2 mt-1" />
        <small className="text-gray-500 text-sm">(optional)</small>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700">Desired Region:</label>
          <select className="w-full border rounded-lg px-3 py-2 mt-1">
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Other:</label>
          <input type="text" className="w-full border rounded-lg px-3 py-2 mt-1" />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Professional designations earned:</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-700">
          {[
            "College Student", "Actuarial Student", "ACAS", "FCAS", "ASA", "FSA",
            "EA", "CFA", "MBA", "MAAA", "FIA", "FCIA", "FIAA", "Financial Engineer",
            "M.S.", "Ph.D.", "Data Mining", "Quant"
          ].map((label, i) => (
            <label key={i} className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600" />
              {label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-gray-700">Other Designations:</label>
        <input type="text" className="w-full border rounded-lg px-3 py-2 mt-1" />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg mt-4 hover:bg-blue-700 transition-all duration-300"
      >
        Submit
      </button>
    </form>
  </div>
</div>
            </div>
          </div>
        </section>

        <section
          id="section4"
          className=" flex flex-col w-full h-auto items-center justify-center p-10 gap-30"
        >
          <div className=" w-250 h-200 border rounded-lg shadow-2xl  overflow-hidden">
            <div className="bg-amber-300 flex justify-center p-2">
              <h1>
                <b>Task 4:</b>
              </h1>
            </div>
            <div className="bg-amber-100 h-full flex flex-col items-center p-10 justify-center overflow-y-auto">
              <div>
               <div className="">
  <form className="bg-white shadow-lg border border-gray-300 p-6 rounded-lg w-full max-w-5xl">
    <h2 className="text-2xl font-bold text-center mb-6">Registration Form</h2>

    <table className="w-full border border-gray-300">
      <tbody>
        <tr className="border">
          <td className="p-2 font-semibold border w-1/4">Student Name</td>
          <td className="p-2 border">
            <input type="text" placeholder="First Name" className="border p-2 w-full" />
          </td>
          <td className="p-2 border">
            <input type="text" placeholder="Middle Name" className="border p-2 w-full" />
          </td>
          <td className="p-2 border">
            <input type="text" placeholder="Last Name" className="border p-2 w-full" />
          </td>
        </tr>

        <tr className="border">
          <td className="p-2 font-semibold border">Father's Name</td>
          <td className="p-2 border">
            <input type="text" placeholder="Enter your father's name" className="border p-2 w-full" />
          </td>
          <td className="p-2 font-semibold border">Mother's Name</td>
          <td className="p-2 border">
            <input type="text" placeholder="Enter your mother's name" className="border p-2 w-full" />
          </td>
        </tr>

        <tr className="border">
          <td className="p-2 font-semibold border">Date of Birth</td>
          <td className="p-2 border">
            <input type="date" className="border p-2 w-full" />
          </td>
          <td className="p-2 font-semibold border">Gender</td>
          <td className="p-2 border">
            <label className="mr-4">
              <input type="radio" name="gender" /> Male
            </label>
            <label>
              <input type="radio" name="gender" /> Female
            </label>
          </td>
        </tr>

        <tr className="border">
          <td className="p-2 font-semibold border">Category</td>
          <td className="p-2 border">
            <label className="mr-2"><input type="radio" name="category" /> Gen</label>
            <label className="mr-2"><input type="radio" name="category" /> OBC</label>
            <label className="mr-2"><input type="radio" name="category" /> SC/ST</label>
          </td>
          <td className="p-2 font-semibold border">Handicapped</td>
          <td className="p-2 border">
            <label className="mr-4"><input type="radio" name="handicap" /> Yes</label>
            <label><input type="radio" name="handicap" /> No</label>
          </td>
        </tr>

        <tr className="border">
          <td className="p-2 font-semibold border">Ex-Serviceman</td>
          <td className="p-2 border">
            <label className="mr-4"><input type="radio" name="exserviceman" /> Yes</label>
            <label><input type="radio" name="exserviceman" /> No</label>
          </td>
          <td className="p-2 font-semibold border">EWS</td>
          <td className="p-2 border">
            <label className="mr-4"><input type="radio" name="ews" /> Yes</label>
            <label><input type="radio" name="ews" /> No</label>
          </td>
        </tr>

        <tr className="border">
          <td className="p-2 font-semibold border">Email ID</td>
          <td className="p-2 border">
            <input type="email" className="border p-2 w-full" />
          </td>
          <td className="p-2 font-semibold border">Mobile No.</td>
          <td className="p-2 border">
            <input type="text" className="border p-2 w-full" />
          </td>
        </tr>

        <tr className="border">
          <td className="p-2 font-semibold border">State</td>
          <td className="p-2 border">
            <select className="border p-2 w-full">
              <option>Select any One</option>
              <option>State 1</option>
              <option>State 2</option>
              <option>State 3</option>
            </select>
          </td>
          <td className="p-2 font-semibold border">City</td>
          <td className="p-2 border">
            <select className="border p-2 w-full">
              <option>Select any One</option>
              <option>City 1</option>
              <option>City 2</option>
              <option>City 3</option>
            </select>
          </td>
        </tr>

        <tr className="border">
          <td className="p-2 font-semibold border">Upload Photo</td>
          <td className="p-2 border">
            <input type="file" className="border p-1 w-full" />
          </td>
          <td className="p-2 font-semibold border">Upload Signature</td>
          <td className="p-2 border">
            <input type="file" className="border p-1 w-full" />
          </td>
        </tr>

        <tr className="border">
          <td colSpan="4" className="text-center p-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all"
            >
              Submit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</div>
</div>
            </div>
          </div>
        </section>

      
      </div>
    </div>
  );
};

export default Form;
