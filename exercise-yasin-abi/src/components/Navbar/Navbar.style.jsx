import styled from 'styled-components';

export const Nav = styled.nav`
    
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:10vh;
    background-color:${({theme})=> theme.colors.nav}
`;



export const Links =styled.div`
    display:flex;
    justify-content:space-evenly;
    width:50%;
    
`
export const NavLinkA =styled.a`
text-decoration:none;
font-size:1.5rem;
color:black;
&:active,:hover{
color:red;
}


`


export const Logo =styled.img`
width:110px;
padding:1rem;
margin:0 2rem;
border:transparent;
background:transparent;

`
