import { useState } from "react"


const Form=()=> {

    const [info,setInfo]=useState({})


const handleSubmit=(e)=> {
    e.preventDefault()
    console.log(info)
   
}

const handleChange =(e)=> {
   setInfo({...info, [e.target.id]:e.target.value})
  
}

    return( <>
            <h1 className="dispaly-5 text-danger">Forms </h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                    Username : {info.username}
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={info.username || ""}
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                    Email : {info.email}
                    </label>
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={info.email || ""}
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
                    value={info.password || ""}
                    onChange={handleChange}

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