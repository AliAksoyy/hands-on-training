import styled from "styled-components";

export const CardsDiv =styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    margin-top:1rem;
    gap:1rem;

` 

export const CardDiv = styled.div`
display:flex;
flex-direction:column;
text-align:center;
justify-content:center;
align-items:center;
box-shadow:2px 2px 3px rgba(0,0,0,0.7);
border-radius:10px;


gap:1rem;
padding:1rem;
background-color:${({theme})=> theme.colors.cardbg};

`

export const CardImage =styled.img`
width:10rem;
border-radius:10px;

`
export const CardButton = styled.button`
padding:0.4rem;
background-color:yellow;
text-align:center;
border-radius:10px;
outline:none;
border:none;
color:black;
transition:0.4s;
 &:hover{
    color:yellow;
    background-color: black;
    transform:sclae(0.98);
    opacity:0.9;
}

`