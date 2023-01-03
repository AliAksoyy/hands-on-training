import React from 'react'
import beyda from "../../assets/coding.svg"
const About = () => {
  return (
    <div style={{backgroundColor:"#444", height:"87vh", paddingTop:"3rem"}} className='d-flex flex-column gap-5 align-items-center'>
      <div>
        <img style={{width:"20rem"}} src={beyda} alt="" />
      </div>
      <div className='display-6 text-danger'>Adım Ali Aksoy Software Developrım</div>
      <div style={{width:"89%", border:"1px solid grey"}} className='text-end p-3'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut nobis necessitatibus laborum, molestiae aliquid quo. Quo quos cum ullam fuga neque perferendis atque deserunt voluptatum accusamus, doloremque quia consequuntur aperiam possimus pariatur dolores placeat consequatur saepe laborum? Facere, possimus! Molestias officiis dolorum optio iste aperiam tempora, possimus alias voluptatem eligendi blanditiis commodi, quibusdam, iure quo ipsam illum facilis assumenda! Beatae soluta accusantium mollitia, magni rerum nesciunt nostrum inventore minima omnis, quidem odio minus expedita alias iusto, sunt libero veritatis aperiam et consectetur placeat unde. Molestiae porro quae, sit non id aliquid quasi perspiciatis inventore accusantium. Natus expedita atque porro a!</p>
      </div>
    </div>
  )
}

export default About