import styled from 'styled-components';
import '../../index.css'
import FeaturePic from '../../images/images more/heroImg6.jpg';
import FeaturePic2 from '../../images/Chairs/Geniko/FeatureImage01.jpg';


export const FeatureContainer = styled.div`
  background: url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #e31837;
  text-align: center;
  padding: 0 1rem;
`;

export const FeatureContainer2 = styled.div`
  background: url(${FeaturePic2});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #e31837;
  text-align: center;
  padding: 0 1rem;
`;


export const FeatureHeader = styled.h1`
  
    font-size: clamp(1rem, 3vw, 3rem);
    font-family: 'Righteous', cursive;
`;

export const FeatureText = styled.p`
    margin-bottom: 1rem;
    font-size: clamp(1rem, 2vw, 3rem);
    font-family: 'Montserrat', sans-serif;
`;
