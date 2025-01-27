import React from 'react';
import styled from 'styled-components';

const TextInput = ({ answers, setAnswers }) => {
  return (
    <Input
      type="text"
      value={answers}
      onChange={(e) => {
        setAnswers(e.target.value);
      }}
    ></Input>
  );
};

const Input = styled.input`
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  font-size: 18px;
  line-height: 21px;
  padding: 12px 10px;
`;

export default TextInput;
