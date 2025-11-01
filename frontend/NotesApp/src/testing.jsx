import { useState, useEffect, useRef } from "react"
import './index.css'
import TextNote from "./components/Note"

function Testing() {
    const [notes, setNotes] = useState([]);

    const addNote = () => {
        setNotes(prev => [...prev, { id: crypto.randomUUID() }]);
    }

    return(
        <>
            <div className="w-full h-screen flex justify-center items-center">
                <div className="relative h-[800px] w-[1200px]"> 
                    <button
                        onClick={addNote}
                        className="absolute top-2 right-2 bg-gray-300 text-white px-4 py-2 rounded"
                    >
                        Add Note
                    </button>

                    {notes.map(note => (
                        <TextNote key={note.id} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Testing;