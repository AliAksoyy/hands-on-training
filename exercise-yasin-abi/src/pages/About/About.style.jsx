import styled from 'styled-components';

export const AboutDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:100%;
  height:90vh;
  background-color:${({theme})=> theme.colors.about}

`;

export const AboutImage= styled.img`
width:400px;
margin:2rem auto;

`
export const AboutDetailDiv = styled(AboutDiv)`
border:3px outset grey;
width:70%;
align-items:flex-start;
height:30vh;
gap:1rem;
`




