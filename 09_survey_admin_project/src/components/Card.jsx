import React from 'react';
import styled from 'styled-components';

const Card = ({ title, desc, children }) => {
  return (
    <CardWrapper>
      <Head>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Head>
      <BodyWrapper>{children}</BodyWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  border: 1px solid #ddd;
  width: 500px;
  margin: 30px auto;
  background: #fff;
`;

const Head = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 15px;
`;

const Title = styled.div`
  font-weight: 600;
`;
const Desc = styled.div`
  color: #666;
  margin-top: 10px;
`;
const BodyWrapper = styled.div`
  padding: 15px;
`;
export default Card;
