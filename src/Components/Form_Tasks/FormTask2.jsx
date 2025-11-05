import React from 'react'

const FormTask2 = () => {
  return (
    <div className='bg-amber-100 w-full h-auto flex items-center justify-center p-10'>
         <div className="border border-black p-6 bg-white rounded-md w-[400px] h-auto">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                      Pizza Order Form
                    </h2>

                    <div className="mb-3">
                      <label className="block font-semibold mb-1">
                        First Name:
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-400 p-1 rounded"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="block font-semibold mb-1">
                        Last Name:
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-400 p-1 rounded"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="block font-semibold mb-1">
                        Email Address:
                      </label>
                      <input
                        type="email"
                        className="w-full border border-gray-400 p-1 rounded"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="block font-semibold mb-1">
                        Contact Number:
                      </label>
                      <input
                        type="number"
                        className="w-full border border-gray-400 p-1 rounded"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="block font-semibold mb-1">
                        Preferred Delivery Date:
                      </label>
                      <input
                        type="date"
                        className="w-full border border-gray-400 p-1 rounded"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="block font-semibold mb-1">Size:</label>
                      <div className="flex gap-4">
                        <label>
                          <input type="radio" name="size" /> Small
                        </label>
                        <label>
                          <input type="radio" name="size" /> Medium
                        </label>
                        <label>
                          <input type="radio" name="size" /> Large
                        </label>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="block font-semibold mb-1">
                        Flavor:
                      </label>
                      <div className="flex justify-between items-center mb-1">
                        <label>
                          <input type="checkbox" /> Hawaiian (Php 150.00)
                        </label>
                        <select className="border border-gray-400 rounded p-1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                      <div className="flex justify-between items-center mb-1">
                        <label>
                          <input type="checkbox" /> Pepperoni (Php 140.00)
                        </label>
                        <select className="border border-gray-400 rounded p-1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                      <div className="flex justify-between items-center">
                        <label>
                          <input type="checkbox" /> Vegetable (Php 130.00)
                        </label>
                        <select className="border border-gray-400 rounded p-1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="block font-semibold mb-1">
                        Credit Card Number:
                      </label>
                      <input
                        type="number"
                        className="w-full border border-gray-400 p-1 rounded"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="block font-semibold mb-1">PIN:</label>
                      <input
                        type="password"
                        className="w-full border border-gray-400 p-1 rounded"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="block font-semibold mb-1">
                        Additional Note:
                      </label>
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
                </div>
    </div>
  )
}

export default FormTask2