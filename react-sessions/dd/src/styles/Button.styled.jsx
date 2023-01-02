import styled from "styled-components";

export const Button = styled.button`
background: ${({bg})=> bg || "white"};
color: ${({color})=> color || "white"};
`