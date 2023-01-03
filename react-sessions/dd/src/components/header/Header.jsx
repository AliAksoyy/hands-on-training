import React from 'react'
import { Form } from './Header.style'


const Header = ({query,setQuery,mealType,setMealType,getMeal}) => {

  const handleSubmit=(e)=> {
   e.preventDefault()
   getMeal(query,mealType)  
   console.log(query);
   console.log(mealType);
  }
 

  return (
    
    <div style={{textAlign:"center", padding:"0.6rem", backgroundColor:"#d53",width:"100%"}}>
    <h3 className='display-5 mb-3'>Food App</h3>
    <Form onSubmit={handleSubmit}>
    <input style={{width:"45%",outline:"none",borderRadius:"10px", border:"none"}} type="text" value={query || ""} onChange={(e)=> setQuery(e.target.value) } />
    <button  style={{width:"30%",border:"none"}} type="submit">Search</button>
    <select style={{width:"20%"}} name="meal" id="meals" onChange={(e)=> setMealType(e.target.value)}>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
              <option value="TeaTime">TeaTime</option>
    </select>
    </Form>
    </div>
  
  )
}

export default Header