import React from "react";

const ListTask4 = () => {
  return (
    <div className="bg-amber-100 h-screen w-full flex items-center justify-center ">
      <div className="bg-white w-100 h-150 border flex flex-col p-6 gap-2 rounded-lg shadow-lg overflow-hidden overflow-y-auto">
        <div>
          <h3>
            <b>FRUITS & VEGETABLES</b>
          </h3>
          <hr />
        </div>
        <ol className="list-[upper-alpha] pl-4">
          <li>
            <b>
              <u>Vegetables</u>
            </b>
            <br />
            <ul className="list-disc ">
              <li>Onion</li>
              <li>Tomato</li>
              <li>Radish</li>
              <li>Potato</li>
              <li>Carrot</li>
            </ul>
          </li>
          <li>
            <b>
              <u> Fruits</u>
            </b>
            <br />
            <ul className="list-disc ">
              <li>Apple</li>
              <li>Banana</li>
              <li>Water Melon</li>
              <li>Mango</li>
              <li>Grapes</li>
            </ul>
          </li>
        </ol>
        <div>
          <h3>
            <b>NEWSPAPER & MAGAZINES</b>
          </h3>
          <hr />
        </div>
        <ul className="list-[circle] pl-4">
          <li>
            <b>
              <u>Newspaper</u>
            </b>
            <br />
            <ol start={5} className="list-decimal pl-4">
              <li>The times of India</li>
              <li>Hindustan Times</li>
              <li>Navbharat Times</li>
              <li>Punjab Kesri</li>
              <li>Dainikjagran</li>
            </ol>
            <br />
          </li>
          <li>
            <b>
              <u>Magazine</u>
            </b>
            <br />
            <ol className="list-[lower-roman]">
              <li>Business Times</li>
              <li>The Week</li>
              <li>India Today</li>
              <li>Harvard Business Review</li>
              <li>Computer World</li>
            </ol>
          </li>
        </ul>
        <b>
          <u>Apply for following parts:</u>
        </b>
        <br /> <br />
        <ul className="list-disc pl-4">
          <li>put horizontal line after newspaper and magazine</li>
          <li>Apply heading tag for newspaper and magazine</li>
          <li>
            Apply base font for whole web page and different colors for subject
            of
            <br />
            each semester
          </li>
          <li>Apply a background color.</li>
          <li>
            Insert marquee tag displaying "<b>N</b>ewspapers & <b>M</b>
            agazines".
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ListTask4;
