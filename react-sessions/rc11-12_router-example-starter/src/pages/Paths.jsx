import React from 'react'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'

const Paths = () => {

  const navigate = useNavigate()
  return (
    <div className='container mt-4'>

      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam qui eaque. Deserunt quas praesentium sit. Mollitia error id dolorum?</h1>
      <p className='fs-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat sint magnam ducimus tenetur mollitia cupiditate iste molestias iure, ipsum dolor ab rerum ad incidunt quibusdam voluptate est quae fugiat. Sunt totam, ea ad laboriosam nam odio doloribus suscipit eaque aspernatur quibusdam! Autem fugit cum atque, placeat quos error perferendis?

      </p>
      <div>
        <Link className='btn btn-success w-50 ' to="/paths">FullStack</Link>
        {/* <Link className='btn btn-success w-50 ' to="fullstack">FullStack</Link> */}
        <button className='btn btn-warning w-50' onClick={()=> navigate("aws")} >Aws-Devops</button>
      </div>
      <Outlet />
    </div>
  )
}

export default Paths