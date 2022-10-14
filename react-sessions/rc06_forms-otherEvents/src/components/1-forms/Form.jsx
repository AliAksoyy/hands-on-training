import { useState } from "react"


const Form = () => {

    const [username, setUsername] = useState("")
    
    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
        console.log("submitted");
        alert(`
        username: ${username}
        email: ${email}
        password: ${password}
        `)
    }


    const handleUsername = (e) => {
        console.log(e.target.value)
        setUsername(e.target.value)
    }

    // const handleEmail = () =>{
    //     console.log(e.target.value);
    // }






    return(
        <form onSubmit={handleSubmit}>
        <h1 className="text-danger display-5">FORMS</h1>
        <div className="mb-3">
            <label htmlFor="username" className="form-label">
            Username : {username}
            </label>
            <input
            type="text"
            className="form-control"
            id="username"
            onChange={handleUsername}
            value={username}
            
            />
            
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">
            Email address: <span>{email}</span>
            </label>
            <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
            
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
            onChange={(e)=> setPassword(e.target.value)}
            />
        </div>
        
        <button type="submit" className="btn btn-primary">
            Submit
        </button>
</form>
    )
}

export default Form