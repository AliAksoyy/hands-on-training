import React, { useState } from 'react'
import { Form, SearchButton, SearchInput, Selected, Title } from './Header.style'

export const Header = ({getRecipe}) => {
  const [searchInput,setSearchInput] = useState("")
  const [selected,setSelected] = useState("")

  const handleButton =(e) => {
    e.preventDefault();
    getRecipe(searchInput, selected)

  }
  

  return (
    <>
     <Title>Food App</Title>
     <Form  >
        <SearchInput
          type="text"
          id="text"
          value={searchInput}
          onChange={(e)=> setSearchInput(e.target.value)}
        />
        <SearchButton
          type="submit"
          onClick={handleButton}
          id="submit"
          style={{fontSize:"1.3rem"}}
          >Search </SearchButton>
        <Selected onChange={(e)=> setSelected(e.target.value)}>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
          <option value="TeaTime">TeaTime</option>
        </Selected>
     </Form>

    </>

  )
}

