import React from 'react';
import { useState } from 'react';
// import ProgressIndicator from '../../components/ProgressIndicator';
import QuestionBox from '../../components/QuestionBox';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const SurveyPage = () => {
  const params = useParams();
  const questions = [
    {
      title: '질문 1입니다.',
      desc: '설명 1입니다.',
      type: 'text',
      required: false,
      options: {
        placeholder: 'placeholder 입니다.',
      },
    },
    {
      title: '질문 2입니다.',
      desc: '설명 2입니다.',
      type: 'textarea',
      required: true,
      options: {
        placeholder: 'placeholder 입니다.',
      },
    },
    {
      title: '질문 3입니다.',
      desc: '설명 3입니다.',
      type: 'select',
      required: false,
      options: {
        items: ['답변1', '답변2', '답변3', '답변4', '답변5'],
      },
    },
  ];

  const step = parseInt(params.step);

  const [answers, setAnswers] = useState([]);

  return (
    <SurveyPageWrapper>
      {/* <ProgressIndicator /> */}
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answers={answers[step]}
        setAnswers={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
      />
    </SurveyPageWrapper>
  );
};

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
