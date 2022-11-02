import styled from "styled-components";

export const HeaderDiv = styled.div`
display:flex;
width:40%;
margin:0 auto;
flex-direction:column;
align-items:center;
justify-content:center;
height:20vh;
gap:2rem;
background-color:${({theme})=> theme.colors.header}
`
export const HeaderForm =styled.div`
display:flex;
justify-content:center;
padding:2rem;

`