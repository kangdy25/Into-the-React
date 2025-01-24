import React from 'react';
import Title from '../Title';
import Desc from '../Desc';
import Body from '../Body';
import ActionButtons from '../ActionButtons';

const QuestionBox = () => {
  return (
    <div>
      <Title>타이틀입니다.</Title>
      <Desc>설명입니다.</Desc>
      <Body />
      <ActionButtons />
    </div>
  );
};

export default QuestionBox;
