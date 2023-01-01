import React from 'react'
import { useParams } from 'react-router-dom'

const PeopleDetails = () => {
    const {id} =useParams()
    console.log(
        id
    );
  return (
    <div>PeopleDetails</div>
  )
}

export default PeopleDetails