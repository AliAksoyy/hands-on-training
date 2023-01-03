import React from 'react'
import { Form } from './Header.style'


const Header = ({query,setQuery,mealType,setMealType,getMeal}) => {

  const handleSubmit=(e)=> {
    e.preventDefault()
    getMeal(query)
  }
  console.log(query)

  return (
    
    <div style={{textAlign:"center", padding:"0.6rem", backgroundColor:"#d53",width:"100%"}}>
    <h3 className='display-5 mb-3'>Food App</h3>
    <Form onSubmit={handleSubmit}>
    <input style={{width:"45%",outline:"none",borderRadius:"10px", border:"none"}} type="text" value={query || ""} onChange={(e)=> setQuery(e.target.value) } />
    <button  style={{width:"30%",border:"none"}} type="submit">Search</button>
    <select style={{width:"20%"}} name="meal" id="meals">
      <option value="saa" >asas</option>
      <option value="as">asasas</option>
      <option value="dsa">sdsdsd</option>
    </select>
    </Form>
    </div>
  
  )
}

export default Header