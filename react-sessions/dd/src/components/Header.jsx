import React from 'react'
import { Button } from '../styles/Button.styled'
import {Headers} from "../styles/Header.styled"

const Header = () => {
  return (
    <Headers>
        <Button color="red" >Ali aksoy</Button>
        <Button bg="red">Ali aksoy</Button>
    </Headers>
  )
}

export default Header