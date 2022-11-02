import React from 'react'
import { HeaderDiv, HeaderForm } from './Header.style'

const Header = () => {
  return (
   <HeaderDiv >
    <h1>Food Recipe</h1>
    <HeaderForm >
      <input type="search" placeholder='Search' />
      <button>Search</button>
      <select name="search" id="search">
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