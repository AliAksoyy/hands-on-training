import React, { useEffect, useState } from 'react'

const LifeCycleMethos = () => {

    const [info,setInfo]=useState([])
    const ali =()=> {
    fetch("https://randomuser.me/api/").then((res)=>{
        if(!res.ok){
            throw new Error("hata var")
        }
        return res.json()
        .then((data)=> setInfo(data.results[0]))
    }).catch((err)=> {
        console.log(err)
    })
}

useEffect(() => {
  ali()
}, [])




console.log(info)

  return (
    <div className=' container'>
    <div className='row justify-content-center gap-3'>
   
    
            <div className='col-12 text-center'>
                <h3>{info?.name?.first}</h3>
                {/* <img style={{width:"15rem"}} src={info[0].picture.thumbnail} alt="" /> */}
                <p>s</p>
                <button onClick={ali}>s</button>
        </div>
        

      
        
       
    </div>
      
    </div>
  )
}

export default LifeCycleMethos