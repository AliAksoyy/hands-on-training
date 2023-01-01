import React from 'react'

const ListTask = ({info}) => {
  console.log(info);
  return (
    <div>
      <ul style={{listStyle:"none"}}  className='p-3'>
        {info?.map((item)=> {
          return(
        <li key={item.id} className='border border-3 my-1 d-flex flexdirection-columns'>{item.task} {item.date}</li>
          )
        })}
       
      </ul>
    </div>
  )
}

export default ListTask