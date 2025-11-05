import React from 'react'

const FormTask3 = () => {
  return (
          <div className='bg-amber-100 w-full h-auto flex items-center justify-center p-10'>
                <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
                  <h2 className="text-2xl font-bold text-center mb-2">
                    Registration Form
                  </h2>
                  <p className="text-center text-gray-600 text-sm mb-1">
                    Of course, all submitted information is kept in the
                    strictest confidence.
                  </p>
                  <p className="text-center text-gray-700 font-medium text-sm mb-6">
                    Our services are always at no cost to you.
                  </p>

                  <form className="space-y-4">
                    <div>
                      <label className="block text-gray-700">Name:</label>
                      <input
                        type="text"
                        className="w-full border rounded-lg px-3 py-2 mt-1"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700">Address:</label>
                      <input
                        type="text"
                        className="w-full border rounded-lg px-3 py-2 mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700">City:</label>
                        <input
                          type="text"
                          className="w-full border rounded-lg px-3 py-2 mt-1"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700">
                          State/Province:
                        </label>
                        <input
                          type="text"
                          className="w-full border rounded-lg px-3 py-2 mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700">Zip Code:</label>
                        <input
                          type="text"
                          className="w-full border rounded-lg px-3 py-2 mt-1"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700">Country:</label>
                        <input
                          type="text"
                          className="w-full border rounded-lg px-3 py-2 mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700">
                          Phone (H):
                        </label>
                        <input
                          type="text"
                          className="w-full border rounded-lg px-3 py-2 mt-1"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700">Fax:</label>
                        <input
                          type="text"
                          className="w-full border rounded-lg px-3 py-2 mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700">Phone (W):</label>
                      <input
                        type="text"
                        className="w-full border rounded-lg px-3 py-2 mt-1"
                      />
                      <small className="text-gray-500 text-sm">
                        (if able to speak freely)
                      </small>
                    </div>

                    <div>
                      <label className="block text-gray-700">Email:</label>
                      <input
                        type="email"
                        className="w-full border rounded-lg px-3 py-2 mt-1"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700">
                        Company Name:
                      </label>
                      <input
                        type="text"
                        className="w-full border rounded-lg px-3 py-2 mt-1"
                      />
                      <small className="text-gray-500 text-sm">
                        (optional)
                      </small>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700">
                          Desired Region:
                        </label>
                        <select className="w-full border rounded-lg px-3 py-2 mt-1">
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700">Other:</label>
                        <input
                          type="text"
                          className="w-full border rounded-lg px-3 py-2 mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">
                        Professional designations earned:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-700">
                        {[
                          "College Student",
                          "Actuarial Student",
                          "ACAS",
                          "FCAS",
                          "ASA",
                          "FSA",
                          "EA",
                          "CFA",
                          "MBA",
                          "MAAA",
                          "FIA",
                          "FCIA",
                          "FIAA",
                          "Financial Engineer",
                          "M.S.",
                          "Ph.D.",
                          "Data Mining",
                          "Quant",
                        ].map((label, i) => (
                          <label key={i} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              className="accent-blue-600"
                            />
                            {label}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700">
                        Other Designations:
                      </label>
                      <input
                        type="text"
                        className="w-full border rounded-lg px-3 py-2 mt-1"
                      />
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
  )
}

export default FormTask3