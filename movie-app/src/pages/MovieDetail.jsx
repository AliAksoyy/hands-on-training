import React from 'react'

const MovieDetail = () => {
  return (
    <div className="d-flex flex-column align-items-center p-3" >
        <div className='d-flex justify-content-center align-items-center' style={{width:"100%", height:"35vh"}} >
          Movie 
        </div>
        <div className="card mt-3" style={{width:"100%", height:"50vh"}}>
          <div className="row g-0">
            <div className="col-md-4" style={{width:"30%"}}>
              <img src="..." className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8" style={{width:"70%"}}>
              <div className="card-body d-flex flex-column justify-content-between " style={{height:"50vh"}}>
              <div>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                </p>
                </div>
                <div>
                <p className="card-text">
                 sdfgsdfsdfs
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MovieDetail