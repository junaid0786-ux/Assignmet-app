import React from "react";

const ListTask1 = () => {
  return (
    <div className="bg-amber-100 h-screen w-full flex items-center justify-center ">
      <div className="bg-white w-100 h-150 border flex flex-col p-6 gap-2 rounded-lg shadow-lg">
        <div>
          <h3>
            <b>Disk bullet list:</b>
          </h3>
          <hr />
        </div>
        <ul className="list-disc p-4">
          <li>Apple</li>
          <li>Banana</li>
          <li>Lemons</li>
          <li>Orange</li>
        </ul>
        <div>
          <h3>
            <b>Circle bullet list:</b>
          </h3>
          <hr />
        </div>
        <ul className="list-[circle] p-4">
          <li>Apple</li>
          <li>Banana</li>
          <li>Lemons</li>
          <li>Orange</li>
        </ul>
        <div>
          <h3>
            <b>Square bullet list:</b>
          </h3>
          <hr />
        </div>
        <ul className="list-[square] p-4">
          <li>Apple</li>
          <li>Banana</li>
          <li>Lemons</li>
          <li>Orange</li>
        </ul>
      </div>
    </div>
  );
};

export default ListTask1;
