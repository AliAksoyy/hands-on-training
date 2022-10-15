import { useState } from "react"

const Form = () => {

 const [form, setForm] = useState({
    username:"",
    email: "",
    password:""
 })


 const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target);
        alert(`
        
        username:"${form}",
        email:"${form}",
        password:"${form}"
        `)

 }
    function hadnleChange(e) {
        console.log(e.target)
        setForm({...form, [e.target.id] :e.target.value})
    }

 

    return(
        <form onSubmit={handleSubmit}>
            <h1 className="display-5 text-danger">FORMS</h1>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">
                Username :
                </label>
                <input
                type="text"
                className="form-control"
                id="username"
                onChange={hadnleChange}
              
                
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                Email address: 
                </label>
                <input
                type="email"
                className="form-control"
                id="email"
                onChange={hadnleChange}

              
                
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
                onChange={hadnleChange}

          
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
</form>

    )

}

export default Form