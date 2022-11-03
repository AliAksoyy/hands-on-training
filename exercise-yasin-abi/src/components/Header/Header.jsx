import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { HeaderDiv, HeaderForm } from './Header.style'

const Header = ({getData}) => {

  const navigate = useNavigate()

  const [bilgiler ,setBilgiler] = useState({
    query:"",
    mealType:""
  });


const handleSubmit = (e) => {
  e.preventDefault()
  navigate("/home", {state:bilgiler} )
  getData(bilgiler.query, bilgiler.mealType)
  setBilgiler({
    query:"",
    mealType:""
  });

  
}

  return (
   <HeaderDiv >
    <h1>Food Recipe</h1>
    <HeaderForm onSubmit={handleSubmit} >
      <input type="text"
       placeholder='Search'
       style={{padding:"0.5rem"}}
        onChange={(e)=> setBilgiler({...bilgiler, query:e.target.value})}
         />
      <button>Search</button>
      <select name="search" id="search" onChange={(e)=> setBilgiler({...bilgiler, mealType:e.target.value})}>
        <option value="breakfast">breakfast</option>
        <option value="lunch">lunch</option>
        <option value="dinner">dinner</option>
        <option value="snack">snack</option>
        <option value="teatime">teatime</option>
      </select>
    </HeaderForm>
   </HeaderDiv>
  )
}

export default Header