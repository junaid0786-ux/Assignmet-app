import React from "react";

const ListTask3 = () => {
  return (
    <div className="bg-amber-100 h-screen w-full flex items-center justify-center ">
      <div className="bg-white w-100 h-150 border flex flex-col p-6 gap-2 rounded-lg shadow-lg overflow-hidden overflow-y-auto">
        <ol className="list-decimal p-3">
          <li>
            <b> HTML is an __________ ?</b>
            <ol className="list-[lower-roman] pl-2">
              <br />
              <li>Markup language</li>
              <li>Progrmming language</li>
              <li>none of these</li>
            </ol>
            <br />
          </li>
          <li>
            <b>CSS is used for</b>
            <ol className="list-[lower-roman] pl-2">
              <br />
              <li>Styling</li>
              <li>Scripting</li>
              <li>none if these</li>
            </ol>
            <br />
          </li>
          <li>
            <b> Which of the following is dynamic form of HTML ?</b>
            <ol className="list-[lower-roman] pl-2">
              <br />
              <li>XML</li>
              <li>DHTML</li>
              <li>none of these</li>
            </ol>
            <br />
          </li>
          <li>
            <b> Which of the following can be linked with HTML and CSS ?</b>
            <ol className="list-[lower-roman] pl-2">
              <br />
              <li>Janvascript</li>
              <li>C++</li>
              <li>none of these</li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ListTask3;
