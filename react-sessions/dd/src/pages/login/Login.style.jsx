import styled from "styled-components"

export const DivStyle = styled.div`
background-image:url("https://picsum.photos/1600/900");
background-size:cover;
background-position:center;
background-repeat:no-repeat;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
`

export const Content =styled.div`
width:26rem;
height:26rem;
background-color: rgba(322,12,32,0.5);
border:2px solid grey;
border-radius:50%;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
padding:0.5 2rem;
`

export const Image =styled.img`
width:8rem;
margin:.6rem 0 ;
`

export const Input =styled.input`
width:60%;
padding:0.7rem;
background-color:${({ali})=> ali ? "#f21" : "#cc2"};
border:none;
outline:none;
color:white;
border-radius:10px;
margin:0.6rem 0;
::placeholder{
    color:white;
    opacity:0.6
}
`

export const Button =styled.button`
width:60%;
padding:0.7rem;
background-color:#d21;
border:none;
outline:none;
color:white;
border-radius:10px;
margin:0.6rem 0;
cursor: pointer;
transition:transform 0.5s ease-in-out;
&:hover{
    transform:scale(0.96);
    opacity:0.8
}
`