

const Form=()=> {
    return( <>
            <h1 className="dispaly-5 text-danger">Forms </h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                    Username
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                    Email
                    </label>
                    <input
                    type="password"
                    className="form-control"
                    id="email"
                    name="email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                    Password
                    </label>
                    <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            </>

    )
}
export default Form