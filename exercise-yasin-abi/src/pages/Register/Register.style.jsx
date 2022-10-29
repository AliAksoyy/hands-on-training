import styled from "styled-components";

export const RegisterDiv=styled.div`
background-image:url("https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg");
background-position:center;
background-size:cover;
background-repeat:no-repeat;
height:100vh;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
width:100%;
padding-top:5rem;

`


export const  RegisterButton =styled.button`
padding:0.5rem;
background-color:rgba(255,0,0,0.9);
color:white;
text-align:center;
width:90px;
border:none;
cursor:pointer;
border:1px solid white;
border-radius:10px;
margin:1rem 0 1rem 2.9rem;
transition:all 0.6s;
&:hover{
background-color:white;
color:black; 
transform:scale(0.97);
font-weight:bold;

}
`


