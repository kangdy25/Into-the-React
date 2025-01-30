import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import questionsLengthState from '../../stores/survey/questionsLengthState';
import Button from '../Button';
import postAnswers from '../../services/postAnswers';
import useStep from '../../hooks/useStep';
import useSurveyId from '../../hooks/useSurveyId';
import useAnswers from '../../hooks/useAnswers';
import useRequiredOption from '../../hooks/useRequiredOption';

function ActionButtons() {
  const step = useStep();
  const surveyId = useSurveyId();
  const [isPosting, setIsPosting] = useState(false);
  const questionsLength = useRecoilValue(questionsLengthState);
  const isRequired = useRequiredOption;
  const [answers, setAnswers] = useAnswers();

  const isLast = questionsLength - 1 === step;
  const navigate = useNavigate();

  return (
    <ActionButtonsWrapper>
      {step === 0 || (
        <Button
          type="SECONDARY"
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
            setIsPosting(true);
            postAnswers(surveyId, answers)
              .then(() => {
                navigate(`/done/${surveyId}`);
                setAnswers([]);
              })
              .catch((err) => {
                alert('에러가 발생했습니다. 다시 시도해주세요');
                setIsPosting(false);
              });
          }}
          disabled={isPosting || isRequired ? !answers[step]?.length : false}
        >
          {isPosting ? '제출 중입니다...' : '제출'}
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            navigate(`${step + 1}`);
          }}
          disabled={!isRequired ? !answers[step]?.length : false}
        >
          다음
        </Button>
      )}
    </ActionButtonsWrapper>
  );
}

const ActionButtonsWrapper = styled.div`
  margin-top: 72px;
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export default ActionButtons;
