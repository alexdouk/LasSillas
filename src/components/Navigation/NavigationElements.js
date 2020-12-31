
import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom';
import '../../index.css'
import { AiOutlineMenu } from 'react-icons/ai'

export const Nav = styled.nav`
background: transparent;
height: 80px;
display : flex;
justify-content : start;
align-items:center;
font-weight: 700;
font-size: 32px;
`;

export const NavLink = styled(Link)`
display:flex;
color:white;
font-family: 'Montserrat', sans-serif;
text-decoration:none;
margin-left:20px;

${'' /* @media screen and (max-width:400px){
    position:absolute;
    top:10px;
    left:25px;
} */}
`
export const NavMenu = styled(AiOutlineMenu)`
display:block;
position:absolute;
top:20px;
right:10px;
cursor:pointer;
color:#e31837;

p{
    font-family: 'Montserrat', sans-serif;
    margin-right:20px;
}

`