import React from 'react'

const FormTask1 = () => {
  return (
        <div className='bg-amber-100 h-screen w-full flex items-center justify-center ' >
             <div className="border border-black p-6 bg-white rounded-md w-[350px]">
                  
                    <h2 className="text-2xl font-bold mb-6 text-center">
                      Admin Login Page
                    </h2>

                    <div className="mb-4">
                      <label
                        htmlFor="username"
                        className="block font-semibold mb-2"
                      >
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
                      <label
                        htmlFor="password"
                        className="block font-semibold mb-2"
                      >
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
                </div>
        </div>
  )
}

export default FormTask1