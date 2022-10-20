


const AddTutorials = () => {
    return(
        <div className="text-center  p-4 container">
            <h1 className="display-5 text-danger">Add Your Tutorial</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                    Title
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="title"
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