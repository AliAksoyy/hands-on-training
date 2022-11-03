import styled from "styled-components"


export const NavbarDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:10vh;
    background-color: ${({theme})=> theme.colors.nav};
 

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
    @media screen and (max-width:${({theme})=>theme.responsive.lg }) {
           flex-direction:column;
           border:2px solid black;
        
           
        }

`
export const Hambur =styled.div`
       display:none;
       cursor:pointer;
       color:crimson;
        @media screen and (max-width:${({theme})=>theme.responsive.lg }) {
            display:block;
           border:2px solid black;

           
        }
       
`
