import React from "react";

import ButtonStyle from "./button.module.css"


const Buton = ({btn}) => {
    console.log(btn)
    return (
        <>
        <div className={ButtonStyle.title}>

        <button className={ButtonStyle["btn-blue"]}>{btn}</button>

        </div>
        </>
        
    )

    
    
}

export default Buton