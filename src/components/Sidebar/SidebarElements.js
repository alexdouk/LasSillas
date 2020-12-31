import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { VscChromeClose } from 'react-icons/vsc'

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 1;
  width: 300px;
  border-left-style:ridge;
  border-left-color: #e31837;
  height: 100vh;
  background: whitesmoke;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const CloseIcon = styled(VscChromeClose)`
  color: #e31837;
  font-size:30px;
  border-width:thin;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2.5rem;
  cursor: pointer;
  outline: none;
  border-width: thin;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 100px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 80px);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;
  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  background:#e31837;
  justify-content: center;
`;

export const SidebarRoute = styled(Link)`
  background: #e31837;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: 0.2s ease-in-out;
    ${'' /* background: #fff; */}
    ${'' /* color: #010606; */}
  }
`;