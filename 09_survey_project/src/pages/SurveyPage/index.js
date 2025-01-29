import React, { useEffect } from 'react';
import { useState } from 'react';
// import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';
import styled from 'styled-components';
import useStep from '../../hooks/useStep';
import useSurveyId from '../../hooks/useSurveyId';
import mainApi from '../../services/apis/mainApi';

const SurveyPage = () => {
  const step = useStep();
  const surveyId = useSurveyId();
  const [surveyState, setSurveyState] = useState(null);
  const surveyQuestions = surveyState?.questions || [];

  useEffect(() => {
    mainApi.get(`surveys/${surveyId}`).then((res) => {
      console.log(res);
      setSurveyState(res.data);
    });
  }, [surveyId]);

  const [answers, setAnswers] = useState([]);
  const answer = answers[step];
  const setAnswer = (newAnswer) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[step] = newAnswer;
      return newAnswers;
    });
  };

  return (
    <SurveyPageWrapper>
      =
      <QuestionBox
        question={surveyQuestions[step]}
        questionsLength={surveyQuestions.length}
        step={step}
        answer={answer}
        setAnswer={setAnswer}
      />
    </SurveyPageWrapper>
  );
};

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
