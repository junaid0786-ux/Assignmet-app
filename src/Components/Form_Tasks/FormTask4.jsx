import React from "react";

const FormTask4 = () => {
  return (
    <div className="bg-amber-100 h-screen w-full flex items-center justify-center p-10">
      <div>
        <form className="bg-white shadow-lg border border-gray-300 p-6 rounded-lg w-full max-w-5xl">
          <h2 className="text-2xl font-bold text-center mb-6">
            Registration Form
          </h2>

          <table className="w-full border border-gray-300">
            <tbody>
              <tr className="border">
                <td className="p-2 font-semibold border w-1/4">Student Name</td>
                <td className="p-2 border">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border p-2 w-full"
                  />
                </td>
                <td className="p-2 border">
                  <input
                    type="text"
                    placeholder="Middle Name"
                    className="border p-2 w-full"
                  />
                </td>
                <td className="p-2 border">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border p-2 w-full"
                  />
                </td>
              </tr>

              <tr className="border">
                <td className="p-2 font-semibold border">Father's Name</td>
                <td className="p-2 border">
                  <input
                    type="text"
                    placeholder="Enter your father's name"
                    className="border p-2 w-full"
                  />
                </td>
                <td className="p-2 font-semibold border">Mother's Name</td>
                <td className="p-2 border">
                  <input
                    type="text"
                    placeholder="Enter your mother's name"
                    className="border p-2 w-full"
                  />
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
                  <label className="mr-2">
                    <input type="radio" name="category" /> Gen
                  </label>
                  <label className="mr-2">
                    <input type="radio" name="category" /> OBC
                  </label>
                  <label className="mr-2">
                    <input type="radio" name="category" /> SC/ST
                  </label>
                </td>
                <td className="p-2 font-semibold border">Handicapped</td>
                <td className="p-2 border">
                  <label className="mr-4">
                    <input type="radio" name="handicap" /> Yes
                  </label>
                  <label>
                    <input type="radio" name="handicap" /> No
                  </label>
                </td>
              </tr>

              <tr className="border">
                <td className="p-2 font-semibold border">Ex-Serviceman</td>
                <td className="p-2 border">
                  <label className="mr-4">
                    <input type="radio" name="exserviceman" /> Yes
                  </label>
                  <label>
                    <input type="radio" name="exserviceman" /> No
                  </label>
                </td>
                <td className="p-2 font-semibold border">EWS</td>
                <td className="p-2 border">
                  <label className="mr-4">
                    <input type="radio" name="ews" /> Yes
                  </label>
                  <label>
                    <input type="radio" name="ews" /> No
                  </label>
                </td>
              </tr>

              <tr className="border">
                <td className="p-2 font-semibold border">Email ID</td>
                <td className="p-2 border">
                  <input type="email" className="border p-2 w-full" />
                </td>
                <td className="p-2 font-semibold border">Mobile No.</td>
                <td className="p-2 border">
                  <input type="number" className="border p-2 w-full" />
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
  );
};

export default FormTask4;
