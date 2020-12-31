import React from 'react';
import {Nav, NavLink , NavMenu} from "./NavigationElements"
import { GiRockingChair , GiHamburgerMenu} from 'react-icons/gi';

const Navbar = ({toggle})=>{
    return(
        <>
            <Nav>
            <NavLink to='/'><GiRockingChair /> Las Sillas</NavLink>
                <NavMenu onClick={toggle}>
                    <p><GiHamburgerMenu /></p>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar