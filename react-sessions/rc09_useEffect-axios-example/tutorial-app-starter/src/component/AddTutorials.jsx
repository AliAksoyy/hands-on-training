import { useState } from "react"
import axios from "axios"



const AddTutorials = ({getTutorials}) => {
    const [title,setTitle] = useState("")
    const [description, setDescriptions] = useState("")

    
   

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {title:title, description:description}
        console.log(newTodo)
        postTutorials(newTodo)
        setTitle("")
        setDescriptions("")
        

    }
    const postTutorials = async(newTodo) => {

        const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials"
        try {
            await axios.post(url,newTodo)
        } catch (error) {
            console.log(error);
        }
        getTutorials()
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
                    value={description}
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