import React from 'react'
import "./Trio.scss";
import {data} from "../helper/data"
import Card from './Card';

const Main = () => {
  console.log(data);
  return (
    <div className='main'>
      {data.map((item)=> <Card key={item.id} {...item}/>)}
    </div>
  )
}

export default Main