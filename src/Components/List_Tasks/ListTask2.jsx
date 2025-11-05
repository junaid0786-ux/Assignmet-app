import React from "react";

const ListTask2 = () => {
  return (
    <div className="bg-amber-100 h-screen w-full flex items-center justify-center ">
      <div className="bg-white w-100 h-150 border flex flex-col p-6 gap-2 rounded-lg shadow-lg overflow-hidden overflow-y-auto">
        <div>
          <h3>
            <b>Numbered bullet list:</b>
          </h3>
          <hr />
        </div>
        <ol className="list-decimal pl-4">
          <li>Apple</li>
          <li>Banana</li>
          <li>Lemons</li>
          <li>Orange</li>
        </ol>
        <div>
          <h3>
            <b>Letters bullet list:</b>
          </h3>
          <hr />
        </div>
        <ol className="list-[upper-alpha] p-4">
          <li>Apple</li>
          <li>Banana</li>
          <li>Lemons</li>
          <li>Orange</li>
        </ol>
        <div>
          <h3>
            <b>Lowercase letters bullet list:</b>
          </h3>
          <hr />
        </div>
        <ol className="list-[lower-alpha] pl-4">
          <li>Apple</li>
          <li>Banana</li>
          <li>Lemons</li>
          <li>Orange</li>
        </ol>
        <div>
          <h3>
            <b>Roman bullet list:</b>
          </h3>
          <hr />
        </div>
        <ol className="list-[upper-roman] pl-4">
          <li>Apple</li>
          <li>Banana</li>
          <li>Lemons</li>
          <li>Orange</li>
        </ol>
        <div>
          <h3>
            <b>Lowercase roman bullet list:</b>
          </h3>
          <hr />
        </div>
        <ol className="list-[lower-roman] pl-4">
          <li>Apple</li>
          <li>Banana</li>
          <li>Lemons</li>
          <li>Orange</li>
        </ol>
      </div>
    </div>
  );
};

export default ListTask2;
