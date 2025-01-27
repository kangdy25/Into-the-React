import React from 'react';
import Title from '../Title';
import Desc from '../Desc';
import Body from '../Body';
import ActionButtons from '../ActionButtons';
import styled from 'styled-components';

const QuestionBox = ({
  question,
  questionsLength,
  step,
  answers,
  setAnswers,
}) => {
  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answers={answers}
        setAnswers={setAnswers}
        options={question.options}
      />
      <ActionButtons questionsLength={questionsLength} step={step} />
    </QuestionBoxWrapper>
  );
};

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default QuestionBox;
