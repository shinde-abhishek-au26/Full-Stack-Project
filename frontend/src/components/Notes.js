import axios from "axios"
import { useState } from "react";
import UpdateNote from "./UpdateNote";

function Notes(props) {

    const [clickedEdit, setclickedEdit] = useState(false)

    const handleDelete = () => {
        axios.delete(`/api/notes/${props.data._id}`)
        props.onNotesUpdate()
    }

    const handleEdit = () => {
        setclickedEdit(true)
    }

    if (clickedEdit) {
        return(
            <UpdateNote data={props.data} closeFn={setclickedEdit} onNotesUpdate={props.onNotesUpdate} />
        )
    }

    return(
        <div style={{width: "20em"}} className="card col-4 overflow-auto" key={props.data._id}>
            <div className="card-header">
                {props.data.title}
            </div>
            <div className="card-body bg-warning bg-opacity-25 ">
                <p className="card-text">{props.data.content}</p>
                <div className="float-end">
                    <button onClick={handleEdit} className="btn btn-primary mx-3">Edit</button>
                    <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Notes