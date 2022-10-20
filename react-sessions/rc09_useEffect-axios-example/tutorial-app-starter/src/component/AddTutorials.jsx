import { useState } from "react"



const AddTutorials = () => {
    const [title,setTitle] = useState("")
    const [descriptions, setDescriptions] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title);
        console.log(descriptions)
        setTitle("")
        setDescriptions("")

    }

   

    return(
        <div className="text-center  p-4 container">
            <h1 className="display-5 text-danger">Add Your Tutorial</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                    Title
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="title"
                    onChange={(e)=> setTitle(e.target.value)}
                    required
                    value={title}
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
                    onChange={(e)=> setDescriptions(e.target.value)}
                    required
                    value={descriptions}
                    />
                </div>
                <button type="submit" className="btn btn-danger">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddTutorials