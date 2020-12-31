import React , { useState } from 'react';
import Navbar from '../Navigation/NavBarIndex';
import SideBar from '../Sidebar/SideBarIndex';
import {Link} from 'react-scroll'
import {HeroContainer, HeroContent , HeroBtn , HeroH1 , HeroP , HeroItems} from "./HeroElements"


const Hero = () =>{

    const[isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return(
       
        <HeroContainer onClick={toggle}>
            <Navbar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Iconic Design Chairs</HeroH1>
                    <HeroP>From all eras and styles</HeroP>
                    <Link to="bauhaus" spy={true} smooth={true}><HeroBtn>View more</HeroBtn></Link>
                </HeroItems>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default Hero