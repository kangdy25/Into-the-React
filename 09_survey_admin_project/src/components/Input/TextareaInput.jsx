import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const TextareaInput = ({ options }) => {
  return <TextArea placeholder={options.placeholder} maxLength={options.max} />;
};

export default TextareaInput;
