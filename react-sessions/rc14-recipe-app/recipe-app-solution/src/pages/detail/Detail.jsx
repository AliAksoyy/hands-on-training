import React from 'react'
import { DetailContainer, HeaderContainer } from './Detail.style'
import {useLocation} from "react-router-dom"
const Detail = () => {
  const {state} = useLocation()
  console.log(state)
  return (
    <DetailContainer>
      <HeaderContainer>

    </HeaderContainer>
      Detail
    </DetailContainer>
  )
}

export default Detail
