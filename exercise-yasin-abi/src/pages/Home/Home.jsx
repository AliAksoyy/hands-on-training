import React from 'react'
import Cards from '../../components/Cards/Cards'
import Header from '../../components/Header/Header'
import { HomeDiv } from './Home.style'


const Home = ({getData, recipes}) => {
  return (
    <HomeDiv>
    <Header getData={getData} />
    <Cards recipes={recipes} />
    </HomeDiv>
  )
}

export default Home