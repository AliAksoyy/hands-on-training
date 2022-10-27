import styled, {css} from 'styled-components';

const StyledLink = styled.a`
  font-size:1rem;
  text-decoration:none;
  :hover{
    opacity:0.5;
  }
  ${({secondary})=> secondary && css`
  background-color:blue;
  `}

`;

export default StyledLink;
