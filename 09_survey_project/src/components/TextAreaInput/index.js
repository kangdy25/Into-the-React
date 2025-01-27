import React from 'react';
import styled from 'styled-components';

const TextAreaInput = ({ answers, setAnswers, options }) => {
  return (
    <TextArea
      type="text"
      value={answers}
      placeholder={options.placeholder}
      onChange={(e) => {
        setAnswers(e.target.value);
      }}
    ></TextArea>
  );
};

const TextArea = styled.textarea`
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 18px;
  line-height: 21px;
  padding: 12px 10px;
  height: 196px;
  resize: none;
`;

export default TextAreaInput;
