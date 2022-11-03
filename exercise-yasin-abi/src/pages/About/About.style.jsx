import styled from "styled-components";

export const AboutDiv  =styled.div`
background-color:${({theme})=> theme.colors.about};
display:flex;
flex-direction:column;
gap:2rem;
padding-top:2rem;
align-items:center;
height:90vh;



`

export const AboutTextDiv=styled.div`
border:1px solid gray;
width:60%;
margin:1rem auto;
text-align:end;

`
