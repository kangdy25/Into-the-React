import React from 'react';
import styled from 'styled-components';

const TextAreaInput = ({ answer = '', setAnswer, options }) => {
  return (
    <TextArea
      type="text"
      value={answer}
      placeholder={options.placeholder}
      onChange={(e) => {
        setAnswer(e.target.value);
      }}
      {...(options?.max && { maxLength: options?.max })}
    ></TextArea>
  );
};

const TextArea = styled.textarea`
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  font-size: 18px;
  line-height: 21px;
  padding: 12px 10px;
  height: 196px;
  resize: none;
`;

export default TextAreaInput;
