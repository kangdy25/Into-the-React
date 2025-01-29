import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import styled from 'styled-components';
import postAnswers from '../../services/postAnswers';
import useSurveyId from '../../hooks/useSurveyId';

const ActionButtons = ({ questionsLength, step, answer, setAnswer }) => {
  const surveyId = useSurveyId();
  const isLast = questionsLength - 1 === step;
  const navigate = useNavigate();

  const [answers, setAnswers] = [answer, setAnswer];
  useEffect(() => {
    if (answer !== null && answer !== '') {
      setAnswers((prev) => [...prev, answer]); // answer가 있을 때만 추가
    }
  }, [answer]); // answer가 변경될 때만 실행

  return (
    <ActionButtonsWrapper>
      {step === 0 || (
        <Button
          type="TERTIARY"
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type="PRIMARY"
          onClick={() => {
            postAnswers(surveyId, answers);
            navigate('/done');
          }}
        >
          제출
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            navigate(`${step + 1}`);
          }}
        >
          다음
        </Button>
      )}
    </ActionButtonsWrapper>
  );
};

const ActionButtonsWrapper = styled.div`
  margin-top: 72px;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export default ActionButtons;
