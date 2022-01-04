import { useEffect, useState } from "react"
import axios from 'axios'
import AddNote from "./AddNote"
import Notes from "./Notes"
import { useLocation } from "react-router"

function Main() {

    const {state} = useLocation()
    const {user} = state
    const [notes, setNotes] = useState([])
    const [clickedAdd, setclickedAdd] = useState(false)
    useEffect(() => {
        pullNotes()
    }, [])

    const pullNotes = async () => {
        const response = await axios.get(`/api/notes/${user}`)
        setNotes(response.data)
    }

    const handleAddNote = () => {
        setclickedAdd(true)
    }

    const onNotesUpdate = () => {
        pullNotes()
    }

    const noteEl = notes.map((note) => <Notes data={note} onNotesUpdate={onNotesUpdate}/>)

   
    return(
        <div className="w-100 d-flex justify-content-center flex-column align-items-center">
            <h2>Notes HomePage</h2>
            {clickedAdd && <AddNote onNotesUpdate={onNotesUpdate} closeAddFrom={setclickedAdd}/>}
            <button onClick={handleAddNote} className="btn btn-primary mb-3">Add Note</button>
            <div className="row">
                {noteEl}
            </div>
        </div>
    )
}

export default Main

