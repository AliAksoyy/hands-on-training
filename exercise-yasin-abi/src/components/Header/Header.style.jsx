import styled from "styled-components";

export const HeaderDiv = styled.div`
display:flex;
width:40%;
margin:0 auto;
flex-direction:column;
align-items:center;
justify-content:center;
height:20vh;
width:100%;
gap:2rem;
background-color:${({theme})=> theme.colors.header}

`
export const HeaderForm =styled.form`
display:flex;
justify-content:center;


`