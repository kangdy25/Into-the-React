import React from 'react';
import TextInput from '../TextInput';
import TextAreaInput from '../TextAreaInput';
import SelectInput from '../SelectInput';
import styled from 'styled-components';

const Body = ({ type, answers, setAnswers, options }) => {
  let InputComponent = null;

  if (type === 'select') {
    InputComponent = SelectInput;
  } else if (type === 'text') {
    InputComponent = TextInput;
  } else if (type === 'textarea') {
    InputComponent = TextAreaInput;
  }
  return (
    <BodyWrapper>
      <InputComponent
        answers={answers}
        setAnswers={setAnswers}
        options={options}
      />
    </BodyWrapper>
  );
};

const BodyWrapper = styled.div`
  margin: 38px;
  flex: 1;
`;

export default Body;
