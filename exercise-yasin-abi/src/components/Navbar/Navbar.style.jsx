import styled from "styled-components"


export const NavbarDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:10vh;
    background-color: ${({theme})=> theme.colors.nav}
`
export const NavbarImg = styled.img`
    width:60px;
    margin-left:3rem;
`
export const LinksDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    width:60%;
    gap:1rem;

`
