import { useState } from "react"
import './index.css'
import useDragger from "./hooks/useDragger"

function Note() {

    const inputStyle = "w-full p-2 pl-2 shadow-xs shadow-gray-600"
    const textAreaStyle = "w-full h-full p-2 pl-2 resize-none focus:outline-none no-scrollbar"
    const noteStyle = "absolute resize overflow-hidden h-[360px] w-[360px] bg-gray-300 font-default shadow-xs shadow-gray-800"

    useDragger('note');

    return(
        <>
            <div className="w-full h-screen flex justify-center items-center">
                <div className="relative h-[800px] w-[800px] border-2 border-black">
                    <div id="note" className={noteStyle}>
                        <input type="text" className={inputStyle}/>
                        <textarea name="note" id="noteInputArea" className={textAreaStyle}>Something</textarea>
                    </div>
                </div>
            </div>
        </>
    )
}

function Body() {
    return(
        <>
        
        </>
    )
}

export default Note