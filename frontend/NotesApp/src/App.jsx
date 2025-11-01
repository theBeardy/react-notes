import { useState } from 'react'
import './App.css'
import Testing from './testing.jsx';

function App() {
  const navBtnClass = "flex justify-center items-center w-24 p-2 h-full font-default text-black hover:bg-gray-900 hover:text-white hover:scale-110 duration-200";
  const sideBtnClass = "flex items-center w-full font-default pl-12 h-12 hover:bg-gray-900 hover:text-white hover:text-xl duration-200";

  return (
    <>
      {/* Sidebar */}
      <div id="sidebar" className="fixed top-12 w-[250px] h-full bg-gray-200 shadow-sm shadow-gray-700">
        <div className="flex flex-col justify-center">
          <div className={sideBtnClass}>
            <button>Ipsum</button>
          </div>
          <div className={sideBtnClass}>
            <a href="#">Ipsum</a>
          </div>
          <div className={sideBtnClass}>
            <a href="#">Ipsum</a>
          </div>
          <div className={sideBtnClass}>
            <a href="#">Ipsum</a>
          </div>
        </div>
      </div>
      {/* NavBar */}
      <div id="navbar" className="fixed flex h-12 z-9999 bg-gray-200 w-full shadow-sm shadow-gray-700">
        <div className={navBtnClass}>
          <a href="#">New Note</a>
        </div>
        <div className={navBtnClass}>
          <a href="#">Lorem</a>
        </div>
        <div className={navBtnClass}>
          <a href="#">Lorem</a>
        </div>
        <div className={navBtnClass}>
          <a href="#">Lorem</a>
        </div>
        <div className={navBtnClass}>
          <a href="#">Lorem</a>
        </div>
      </div>
      {/* Main Body */}
      <Testing />
    </>
  )
}

export default App
