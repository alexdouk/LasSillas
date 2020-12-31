import styled from "styled-components";
import heroImg from "../../images/heroImg.jpg"
import '../../index.css'

export const HeroContainer = styled.div`
background: url(${heroImg});
height: 100vh;
background-position:center;
background-size:cover;

`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding:calc((100vw - 1300px) / 2);
  ${'' /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end; */}
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 4rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 8vw, 4rem);
  padding-left: 0.5rem;
  margin-bottom: 1rem;
  box-shadow:  10px 10px black;
  border-style: solid;
  letter-spacing: 3px;
  font-family: 'Righteous', cursive;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 2rem);
  margin-bottom: 2rem;
  font-family: 'Righteous', cursive;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  font-family: 'Montserrat', sans-serif;
  padding: 1rem 4rem;
  border: none;
  background-color: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    background-color: transparent;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #fff;
    border:2px solid;
    border-color: #e31837;
  }
`;
