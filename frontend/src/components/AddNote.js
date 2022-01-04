import axios from "axios"
import { useState } from "react"

function AddNote(props) {

    const [title, setTitle] = useState("")
    const [noteContent, setNoteContent] = useState("")
    const [category, setCategory] = useState("")

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleNoteChange = (e) => {
        setNoteContent(e.target.value)
    }
    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }
    const handleClose = () => {
        props.closeAddFrom(false)
    }
    
    const handleSubmit = async () => {
        const newNote = {
            title: title,
            content: noteContent,
            category: category
        }
        await axios.post('/api/notes', newNote )
        props.closeAddFrom(false)
        props.onNotesUpdate()
        
    }

    return(
        <div className="border border-4 bg-warning bg-opacity-25 rounded-3 mb-3 p-2 w-50">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input onChange={handleTitleChange} value={title} type="text" className="form-control" id="exampleFormControlInput1"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Note</label>
                <textarea onChange={handleNoteChange} value={noteContent} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Category</label>
                <input onChange={handleCategoryChange} value={category} type="text" className="form-control" id="exampleFormControlInput1"/>
            </div>
            <button onClick={handleSubmit} className="btn btn-info">Add Note</button>
            <button onClick={handleClose} className="btn btn-danger mx-3">Close</button>
        </div>
    )
}

export default AddNote