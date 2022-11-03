import React from 'react'
import Cards from '../../components/Cards/Cards'
import Header from '../../components/Header/Header'
import { HomeDiv } from './Home.style'

const Home = () => {
  return (
    <HomeDiv>
    <Header />
    <Cards />
    </HomeDiv>
  )
}

export default Home