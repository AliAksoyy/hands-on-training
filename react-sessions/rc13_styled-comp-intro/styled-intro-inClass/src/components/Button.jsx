import styled from "styled-components"


export const Button = styled.button`
/* background-color: hotpink; */
background-color: ${({primary})=> (primary ? "white" : "purple")};
color:${(primary)=> (primary ? "purple" : "white")};
cursor: pointer;
padding: 1rem 2rem;
border-radius:0.5rem;
border-color:purple;
font-size:1.1rem;
&:hover {
    transform:scale(0.97)
}
`;

export const TomatoButton = styled(Button)`
background-color:${({primary})=> (primary ? "white" : "tomato")};
color:${({primary})=> (primary ? "tomato" : "white")};
border-color: tomato;
`;