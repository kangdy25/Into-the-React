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
  answer,
  setAnswer,
}) => {
  if (!question) {
    return null;
  }

  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      />
      <ActionButtons
        questionsLength={questionsLength}
        step={step}
        answer={answer}
        setAnswer={setAnswer}
      />
    </QuestionBoxWrapper>
  );
};

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default QuestionBox;
