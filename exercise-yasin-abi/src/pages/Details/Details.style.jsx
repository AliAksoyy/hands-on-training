import styled from "styled-components";

export const DetailsDiv=styled.div`
background-color: ${({theme})=> theme.colors.details};
padding:3rem, 2rem;
display:flex;
flex-direction:column;
gap:4rem;

`

export const ContentDiv = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-wrap:no-wrap;
padding:1rem;
border:1px solid grey;
`