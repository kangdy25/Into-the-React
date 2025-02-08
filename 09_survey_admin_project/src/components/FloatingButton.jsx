import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import putSurvey from '../services/putSurvey';
import { useSelector } from 'react-redux';

const FloatingButton = () => {
  const survey = useSelector((state) => state.survey.data);
  return (
    <FloatingButtonWrapper>
      <Button
        onClick={() => {
          putSurvey(survey);
        }}
      >
        저장
      </Button>
    </FloatingButtonWrapper>
  );
};

const FloatingButtonWrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 10px;
  box-shadow: 2px 2px 5px -2px #ddd;
`;

export default FloatingButton;
