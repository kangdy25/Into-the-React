import React from 'react';
import Title from '../Title';
import Desc from '../Desc';
import Body from '../Body';
import ActionButtons from '../ActionButtons';

const QuestionBox = ({
  question,
  questionsLength,
  step,
  answers,
  setAnswers,
}) => {
  return (
    <div>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answers={answers}
        setAnswers={setAnswers}
        options={question.options}
      />
      <ActionButtons questionsLength={questionsLength} step={step} />
    </div>
  );
};

export default QuestionBox;
