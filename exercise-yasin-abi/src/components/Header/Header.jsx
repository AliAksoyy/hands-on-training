import React, { useState } from 'react'
import { Form, SearchButton, SearchInput, Selected, Title } from './Header.style'

export const Header = () => {
  const [searchInput,setSearchInput] = useState("")
  const [selected,setSelected] = useState("")

  const handleButton =(e) => {

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
          />
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

