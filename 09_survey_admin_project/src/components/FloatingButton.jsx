import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import putSurvey from '../services/putSurvey';
import postSurvey from '../services/postSurvey';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FloatingButton = () => {
  const survey = useSelector((state) => state.survey.data);
  const navigate = useNavigate();
  if (!survey) return null;
  const isEditPage = !!survey.id;

  return (
    <FloatingButtonWrapper>
      <Button
        onClick={() => {
          isEditPage
            ? putSurvey(survey)
            : postSurvey(survey).then((data) => {
                navigate(`/builder/${data.id}`);
              });
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
