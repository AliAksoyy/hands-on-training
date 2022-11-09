import React from 'react'

const App = () => {
  return (
    <div className='p-4 w-50 mx-auto border-border-2'>
          <h1>Ürünler</h1>
       <div className='d-flex justify-content-center gap-5 m-3'>
           <div  style={{backgroundColor:"grey", width:"10rem", height:"10rem",paddingTop:"2rem"}}>
            <h4>İpohone 12</h4>
            <h6>15.000</h6>
            <button>sepete ekle</button>
           </div>
           <div style={{backgroundColor:"grey", width:"10rem", height:"10rem",paddingTop:"2rem"}}>
            <h4>Galaxy S20</h4>
            <h6>7.000</h6>
            <button>sepete ekle</button>
           </div>
           <div style={{backgroundColor:"grey", width:"10rem", height:"10rem",paddingTop:"2rem"}}>
            <h4>Huawei P40</h4>
            <h6>10.000</h6>
            <button>sepete ekle</button>
           </div>
       </div>
       <h2>Sepetiniz    <span>sepetiniz boş</span></h2> 



    </div>
  )
}

export default App