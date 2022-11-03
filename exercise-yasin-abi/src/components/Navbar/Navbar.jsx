import { Hambur, LinksDiv, NavbarDiv, NavbarImg } from "./Navbar.style"
import navbarimg from "../../assets/tastybites.png"
import { NavLink } from "react-router-dom"
import {GiHamburgerMenu} from "react-icons/gi"


const Navbar = () => {
    return(
        <NavbarDiv>
            <NavbarImg src={navbarimg} />
            <Hambur >
            <GiHamburgerMenu />

            </Hambur>

            <LinksDiv >
                <NavLink style={({isActive})=> ({color: isActive ? "red" :"white", textDecoration:"none" }) } to="/home" >Home</NavLink>
                <NavLink style={({isActive})=> ({color:isActive ? "red": "white", textDecoration:"none"})} to="/private/about">About</NavLink>
                <NavLink style={({isActive})=> ({color: isActive ? "red" :"white", textDecoration:"none" })} to="/login">Login</NavLink>
                <NavLink style={({isActive})=> ({color: isActive ? "red" :"white", textDecoration:"none" })} to="/">Register</NavLink>
            </LinksDiv >
        </NavbarDiv>
    )
}

export default Navbar