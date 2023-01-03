import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Div =styled.div`
display:flex;
justify-content:space-between;
padding:0.5rem 2rem;
align-items:center;
background-color: #ddd;
`

export const NavDiv=styled(Div)`
    gap:2rem;
`

export const NLink=styled(NavLink)`
    text-decoration:none;
   color:${(props)=> props.isActive && "red"};
`