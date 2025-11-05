import React from "react";

const ListTask5 = () => {
  return (
    <div className="bg-amber-100 h-full p-20 w-full flex items-center justify-center ">
      <div className="bg-white w-100 h-220 border flex flex-col p-6 gap-2 rounded-lg shadow-lg overflow-hidden ">
        <ol>
          <li>
            <b>List Item 1</b>
            <ol className="list-[upper-alpha] pl-4">
              <li>Nested Item 1.1</li>
              <li>Nested Item 1.2</li>
            </ol>
          </li>
          <li>
            <b>List Item 2</b>
            <ol className="list-[lower-roman] pl-10">
              <li>Nested item 2.1</li>
              <li>
                Nested item 2.2
                <ul className="list-[square] pl-15">
                  <li>Nested item 2.2.1</li>
                  <li>
                    Nested item 2.2.2
                    <ul className="list-[circle] pl-20">
                      <li>Nested item 2.2.2.1</li>
                      <li>Nested item 2.2.2.2</li>
                    </ul>
                  </li>
                  <li>Nested item 2.2.3</li>
                </ul>
              </li>
              <li>Nested item 2.3</li>
            </ol>
          </li>
          <li>
            <b>List Item 3</b>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </li>
        </ol>
        <br />
        COMP 376 <br />
        <br />
        Introducton to Game Programming <br />
        Soen 287 <br />
        <br />
        Web Programming <br />
        <br />
        This is a <sup>5</sup> test <sub>9</sub> for assignment 1. <br />
        <br />
        <b>Figure 1. </b> List illustaration in <b>HTML</b>
      </div>
    </div>
  );
};

export default ListTask5;
