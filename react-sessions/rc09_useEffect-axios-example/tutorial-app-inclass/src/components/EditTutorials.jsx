
import { useState } from "react"


const EditTutorials = ({handleOpenModal,data,setData}) => {
    const [newTitle, setNewTitle] = useState("")
    const [newDesc, setNewDesc] = useState("")
    console.log(newTitle,newDesc);
        
    
    const handleNewSubmit =(e) => {
        e.preventDefault()
        console.log("ali")
        const newTodo = {title:newTitle, description: newDesc}
        console.log(newTodo)  

    }

    
    
    return(
        <div
            className="modal fade"
            id="modal"
            tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Update Tutorial
                        </h1>
                        <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                                <label htmlFor="title" className="form-label">
                                Title
                                </label>
                                <input
                                type="text"
                                className="form-control"
                                id="title"
                                // value={{data}}
                                onChange={(e)=> setNewTitle(e.target.value)}
                                 />
                        </div>
                        <div className="mb-3">
                                <label htmlFor="description" className="form-label">
                                Description
                                </label>
                                <input
                                type="text"
                                className="form-control"
                                id="description"
                                // value={}
                                onChange={(e)=> setNewDesc(e.target.value)}
                                />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button onClick={(e)=> handleNewSubmit(e)}  type="button" className="btn btn-primary">
                        Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditTutorials