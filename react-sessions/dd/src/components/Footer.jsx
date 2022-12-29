import React from 'react'
import FooterStyle from "../sass/footer.module.scss"
const Footer = () => {
  return (
    <div className={FooterStyle["footer"]}>Copy right by clarusway {new Date().toDateString()}</div>
  )
}

export default Footer