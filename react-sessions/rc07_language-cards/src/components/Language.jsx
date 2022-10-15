import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image"

const Language = function({name,img,options}) {
    
    const [showDesc, setShowDesc] =useState(false)

    console.log(showDesc);
    return(
        <Container style={{background:"peachpuff"}} className="p-4  rounded-2 h-100" onClick={()=> setShowDesc(!showDesc)}>

        {!showDesc && (<Container>

            <Image src={img} width="70%"></Image>
            <h3 className="mt-2 display-6">{name}</h3>

            </Container>)}

        {showDesc && (
            <ul >
                {options.map((item)=> {
                    return(
                        <li className="text-start h5">{item}</li>
                    )
                })}
            </ul>
        )}
         
       
        </Container>
    )
}

export default Language