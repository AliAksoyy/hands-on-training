import React from 'react'

const EditTutorial = ({newId,editTutorial, editTitle ,setEditTitle,editDesc, setEditDesc}) => {
    
const handleEdit = (e)=>{  
    e.preventDefault()
     editTutorial(newId, editTitle,editDesc)
     setEditDesc("")
     setEditTitle("")
}

console.log(editTitle,editDesc)

  return (<>  
  {/* Modal */}
  <div
    className="modal fade"
    id="edit-modal"
    tabIndex={-1}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Tutorial</h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"/>
        </div>

            <form className='p-3' onSubmit={(e)=> handleEdit(e)}>
                <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter your title"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    required
                />
                </div>
                <div className="mb-3">
                <label htmlFor="desc" className="form-label">
                    Description
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="desc"
                    placeholder="Enter your Description"
                    value={editDesc}
                    onChange={(e) => setEditDesc(e.target.value)}
                    required
                />
                </div>
                <button type="submit" className="btn btn-primary">Save Tutorial</button>
            </form>

            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
      </div>
    </div>
  </div>
</>
  )
}

export default EditTutorial