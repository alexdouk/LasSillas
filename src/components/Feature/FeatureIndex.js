import React from 'react';
import { FeatureContainer, FeatureHeader, FeatureText , FeatureContainer2} from './FeatureElements';

const Feature = ({heading,text}) => {
  return (
    <FeatureContainer>
      <FeatureHeader>{heading}</FeatureHeader>
      <FeatureText>{text}</FeatureText>
    </FeatureContainer>
  );
};

export default Feature;

export const Feature2 = ({heading,text}) => {
  return (
    <FeatureContainer2>
      <FeatureHeader>{heading}</FeatureHeader>
      <FeatureText>{text}</FeatureText>
    </FeatureContainer2>
  );
};

