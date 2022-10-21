

const EditTutorials = () => {
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
                                id="title" />
                        </div>
                        <div className="mb-3">
                                <label htmlFor="description" className="form-label">
                                Description
                                </label>
                                <input
                                type="password"
                                className="form-control"
                                id="description"
                                />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">
                        Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditTutorials