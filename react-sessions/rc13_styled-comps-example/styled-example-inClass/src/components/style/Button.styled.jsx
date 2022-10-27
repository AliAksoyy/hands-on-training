import styled from 'styled-components';

const Button = styled.button`
    background: ${({bg})=> bg || "white"};
    color: ${({color})=> color || "white"};
    border: 1px solid red;

        padding: 1rem 2rem;
        border-radius: 8px;
        &:hover{
            opacity:0.8;
        }

`;

export default Button;
