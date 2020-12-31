import React from 'react';
import {Link} from 'react-scroll'
// import { ScrollTo } from "react-scroll-to";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <Link to="bauhaus" spy={true} smooth={true}><SidebarLink to='/' onClick={toggle}>Bauhaus</SidebarLink></Link>
        <Link to="bauhaus" spy={true} smooth={true}><SidebarLink to='/' onClick={toggle}>Scandinavian</SidebarLink></Link>
        <Link to="bauhaus" spy={true} smooth={true}><SidebarLink to='/' onClick={toggle}>Contemporary</SidebarLink></Link>

      </SidebarMenu>
      <SideBtnWrap>
      <Link to="bauhaus" spy={true} smooth={true}><SidebarRoute to='/' onClick={toggle}>View more</SidebarRoute></Link>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;