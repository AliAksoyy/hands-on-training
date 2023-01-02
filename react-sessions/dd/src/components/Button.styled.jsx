
import styled from "styled-components"

export const Button =styled.button`
background-color:${({primary})=> primary ? "white" : "pink"};
color: ${({primary})=> primary ? "pink" : "white"};
&:hover{
    transform:scaleY(0.95)
}
`;