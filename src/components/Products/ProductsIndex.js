import React from 'react';
import Collapsible from 'react-collapsible';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductsElements';

const Products = ({ heading, data }) => {
  return (
    <ProductsContainer id="bauhaus">
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((dataFile, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={dataFile.img} alt={dataFile.alt} />
              <ProductInfo>
                <ProductTitle>{dataFile.name}</ProductTitle>
                <ProductPrice>{dataFile.price}</ProductPrice>

                <Collapsible trigger= {<ProductButton>{dataFile.button}</ProductButton>}>
                  <ProductDesc>{dataFile.desc}</ProductDesc>       
                </Collapsible>

              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;



{/* <Collapsible trigger="View more">
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        <p>It can even be another Collapsible component. Check out the next section!</p>
      </Collapsible> */}