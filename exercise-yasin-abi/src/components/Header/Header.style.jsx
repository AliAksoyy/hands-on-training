import styled  from "styled-components";

export const Title = styled.h1`
    font-size:3rem;
    font-weight:bold;
    margin-top:1rem;
    color:black;
    text-align:center;
    
`

export const Form=styled.form`
border:2px solid white;
margin:1rem auto;
width:45%;
padding:0.4rem;
display:flex;
/* height:10vh; */
`

export const SearchInput = styled.input`
padding:0.5rem;
font-size:1.2rem;
width:40%;

`

export const SearchButton = styled.button`
width:25%;
background-color: lightblue;
padding:0.5rem;
cursor:pointer;
&:hover{
    opacity:0.6;
    transform:scale(0.97);
}
`
export const Selected = styled.select`
padding:0.5rem;
font-size:1.2rem;
width:35%;
`