import styled from 'styled-components';

const StyledHeader = styled.header`
        background-color: ${({theme})=> theme.colors.header}
`;

export const Logo = styled.img`
width:20rem;
`

export const Nav = styled.nav`
width:300px;
display:flex;
align-items:center;
justify-content:center;
padding:2rem;
`



export default StyledHeader;
