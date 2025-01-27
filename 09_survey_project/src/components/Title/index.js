import React from 'react';
import styled from 'styled-components';

const Title = ({ children }) => {
  return (
    <TitleWrapper>
      <span>Q.</span>
      {children}
    </TitleWrapper>
  );
};

const TitleWrapper = styled.h1`
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  margin: 0;
  color: #121111;

  span {
    margin-right: 12px;
  }
`;

export default Title;
