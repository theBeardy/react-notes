import { useState, useEffect, useRef } from "react"
import '../index.css'
import useDragger from "../hooks/useDragger"

function TextNote() {
    const [bodyHeight, setBodyHeight] = useState(0);
    const noteRef = useRef(null);
    const headerHeight = 50;

    const [noteId] = useState(() => crypto.randomUUID());

    useDragger(noteId);

    useEffect(() => {
        const note = noteRef.current;
        if(!note) return;

        // Create observer
        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                const newHeight = entry.contentRect.height;
                setBodyHeight(newHeight - headerHeight);
            }
        });

        observer.observe(note);

        return () => observer.disconnect;
    }, []);

    const inputStyle =
    "w-full h-10 p-2 focus:outline-none focus:bg-gray-200";
    const noteStyle =
    "absolute resize overflow-hidden min-h-[150px] min-w-48 w-[360px] bg-gray-300 font-default shadow-xs shadow-gray-800 flex flex-col";
    const noteBodyStyle =
    "w-full p-2 overflow-y-auto focus:outline-none [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-700";
    const moveBtn =
    "absolute flex justify-center items-center top-0 right-0 p-2 h-10 w-10 bg-gray-300 active:inset-shadow-sm inset-shadow-black/70";

    return (
        <>
            <div ref={noteRef} className={noteStyle}>
                <div id={noteId} className={moveBtn}>
                    <i className="fa-solid fa-up-down-left-right text-white text-shadow-xs text-shadow-black/50"></i>
                </div>
                <div className="flex flex-col h-full">
                    <input type="text" className={inputStyle}/>
                    <hr />
                    <div
                        contentEditable="true"
                        className={noteBodyStyle}
                        style={{ height: `${bodyHeight}px` }}
                    >
                    </div>
                </div>
            </div>          
        </>
    )
}

export default TextNote;