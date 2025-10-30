import React from 'react'
import { Link } from 'react-router-dom'
import bgImage from '../assets/img.jpg'
const List = () => {
  return (
   <div  className="relative w-full h-screen bg-fixed bg-cover bg-center overflow-y-auto"
  style={{ backgroundImage: `url(${bgImage})` }}>

  <div className=" bg-amber-200/70 flex flex-col w-full h-auto items-center justify-center p-10 gap-30 " >
    <section id='section1' className='  flex flex-col w-full h-auto items-center justify-center p-10 gap-30 ' >
     
      <div className="bg-white w-100 h-150 border rounded-lg shadow-2xl overflow-hidden">
        <div className="bg-amber-300 flex justify-center p-2 ">
          <h1 className="">
            <b>Task 1:</b>
          </h1>
        </div>
        <div className="bg-amber-100 h-full flex flex-col p-4 space-y-2 ">
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
           <h3><b>Circle bullet list:</b></h3> <hr />
         </div>
          <ul className="list-[circle] p-4">
            <li>Apple</li>
            <li>Banana</li>
            <li>Lemons</li>
            <li>Orange</li>
          </ul>
         <div>
           <h3><b>Square bullet list:</b></h3> <hr />
         </div>
          <ul className="list-[square] p-4">
            <li>Apple</li>
            <li>Banana</li>
            <li>Lemons</li>
            <li>Orange</li>
          </ul>
        </div>
      </div>
    </section>

    <section id='section2' className=' flex flex-col w-full h-auto items-center justify-center p-10 gap-30'>
    <div className=' w-100 h-150 border rounded-lg shadow-2xl  overflow-hidden'>
      <div className='bg-amber-300 flex justify-center p-2'>
        <h1><b>Task 2:</b></h1> <hr />
      </div>
      <div className='bg-amber-100 h-full p-4 pb-20 space-y-2 overflow-y-auto'>

       
   <div>
     <h3><b>Numbered bullet list:</b></h3> <hr />
   </div>
    <ol className='list-decimal pl-4'>
      <li>Apple</li>
      <li>Banana</li>
      <li>Lemons</li>
      <li>Orange</li>
    </ol>
   <div>
     <h3><b>Letters bullet list:</b></h3> <hr />
   </div>
    <ol className='list-[upper-alpha] p-4'>
      <li>Apple</li>
      <li>Banana</li>
      <li>Lemons</li>
      <li>Orange</li>
    </ol>
    <div>
      <h3><b>Lowercase letters bullet list:</b></h3> <hr />
    </div>
    <ol className='list-[lower-alpha] pl-4'>
      <li>Apple</li>
      <li>Banana</li>
      <li>Lemons</li>
      <li>Orange</li>
    </ol>
    <div>
      <h3><b>Roman bullet list:</b></h3> <hr />
    </div>
    <ol className='list-[upper-roman] pl-4' >
      <li>Apple</li>
      <li>Banana</li>
      <li>Lemons</li>
      <li>Orange</li>
    </ol>
    <div>
      <h3><b>Lowercase roman bullet list:</b></h3> <hr />

    </div>
    <ol className='list-[lower-roman] pl-4' >
      <li>Apple</li>
      <li>Banana</li>
      <li>Lemons</li>
      <li>Orange</li>
    </ol>

      </div>
    </div>
    </section>

    <section id='section3' className='  flex flex-col w-full h-auto items-center justify-center p-10 gap-30'>

      <div className=' w-100 h-150 border rounded-lg shadow-2xl  overflow-hidden '>
        <div className='bg-amber-300 flex justify-center p-2'>
          <h1><b>Task 3:</b></h1>
        </div>
        <div  className='bg-amber-100 h-full p-4 pb-20 space-y-5 overflow-y-auto'>
         <ol className='list-decimal p-3'>
      <li>
        <b> HTML is an __________ ?</b>
        <ol className='list-[lower-roman] pl-2'>
          <br />
          <li>Markup language</li>
          <li>Progrmming language</li>
          <li>none of these</li>
        </ol>
        <br />
      </li>
      <li>
        <b>CSS is used for</b>
        <ol className='list-[lower-roman] pl-2'>
          <br />
          <li>Styling</li>
          <li>Scripting</li>
          <li>none if these</li>
        </ol>
        <br />
      </li>
      <li>
        <b> Which of the following is dynamic form of HTML ?</b>
        <ol className='list-[lower-roman] pl-2'>
          <br />
          <li>XML</li>
          <li>DHTML</li>
          <li>none of these</li>
        </ol>
        <br />
      </li>
      <li>
        <b> Which of the following can be linked with HTML and CSS ?</b>
        <ol className='list-[lower-roman] pl-2'>
          <br />
          <li>Janvascript</li>
          <li>C++</li>
          <li>none of these</li>
        </ol>
      </li>
    </ol>
        </div>
      </div>

    </section>

    <section id='section4' className=' flex flex-col w-full h-auto items-center justify-center p-10 gap-30'>

      <div className=' w-100 h-150 border rounded-lg shadow-2xl  overflow-hidden'>
        <div className='bg-amber-300 flex justify-center p-2'>
          <h1><b>Task 4:</b></h1>
        </div>
        <div className='bg-amber-100 h-full p-4 pb-20 space-y-5 overflow-y-auto'>
          <div>
            <h3><b>FRUITS & VEGETABLES</b></h3> <hr />
          </div>
    <ol className='list-[upper-alpha] pl-4'>
      <li>
        <b><u>Vegetables</u></b> <br />
        <ul className='list-disc '>
          <li>Onion</li>
          <li>Tomato</li>
          <li>Radish</li>
          <li>Potato</li>
          <li>Carrot</li>
        </ul>
      </li>
      <li>
       <b><u> Fruits</u></b> <br />
        <ul  className='list-disc ' >
          <li>Apple</li>
          <li>Banana</li>
          <li>Water Melon</li>
          <li>Mango</li>
          <li>Grapes</li>
        </ul>
      </li>
    </ol>

    <div>
      <h3><b>NEWSPAPER & MAGAZINES</b></h3> <hr />
    </div>
    <ul className='list-[circle] pl-4'>
      <li>
        <b><u>Newspaper</u></b> <br />
        <ol start={5} className='list-decimal pl-4'>
          <li>The times of India</li>
          <li>Hindustan Times</li>
          <li>Navbharat Times</li>
          <li>Punjab Kesri</li>
          <li>Dainikjagran</li>
        </ol>
        <br />
      </li>
      <li>
        <b><u>Magazine</u></b> <br />
        <ol className='list-[lower-roman]'>
          <li>Business Times</li>
          <li>The Week</li>
          <li>India Today</li>
          <li>Harvard Business Review</li>
          <li>Computer World</li>
        </ol>
      </li>
    </ul>

    <b><u>Apply for following parts:</u></b> <br /> <br />
    <ul className='list-disc pl-4'>
      <li>put horizontal line after newspaper and magazine</li>
      <li>Apply heading tag for newspaper and magazine</li>
      <li>
        Apply base font for whole web page and different colors for subject of
        <br />
        each semester
      </li>
      <li>Apply a background color.</li>
      <li>
        Insert marquee tag displaying "<b>N</b>ewspapers & <b>M</b>agazines".
      </li>
    </ul>

        </div>
      </div>

    </section>

    <section id='section5' className='  flex flex-col w-full h-auto items-center justify-center p-10 gap-30'>
      <div className=' w-100 h-150 border rounded-lg shadow-2xl  overflow-hidden '>
        <div className='bg-amber-300 flex justify-center p-2'>
          <h1>Task 5:</h1>
         </div>
        <div className='bg-amber-100 h-full p-4 pb-20 space-y-5 overflow-y-auto'>
          <ol>
      <li>
        <b>List Item 1</b>
        <ol className='list-[upper-alpha] pl-4'>
          <li>Nested Item 1.1</li>
          <li>Nested Item 1.2</li>
        </ol>
      </li>
      <li>
        <b>List Item 2</b>
        <ol className='list-[lower-roman] pl-10'>
          <li>Nested item 2.1</li>
          <li>
            Nested item 2.2
            <ul className='list-[square] pl-15'>
              <li>Nested item 2.2.1</li>
              <li>
                Nested item 2.2.2
                <ul className='list-[circle] pl-20'>
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

    </section>
   </div>
   </div>
    
  )
}

export default List