import React from 'react'
import { memo } from 'react'

const HeaderMemo = ({count}) => {
  console.log("header components")
  return (
    <div className='bg-danger text-center'>HeaderMemo Componenti {count}</div>
  )
}

export default memo(HeaderMemo)