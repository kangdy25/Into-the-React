import React from 'react';
import TextInput from './Input/TextInput';
import TextareaInput from './Input/TextareaInput';
import SelectInput from './Input/SelectInput';

const Body = ({ type, options }) => {
  let Component;
  if (type === 'text') {
    Component = TextInput;
  } else if (type === 'textarea') {
    Component = TextareaInput;
  } else if (type === 'select') {
    Component = SelectInput;
  } else {
    return null;
  }
  return <Component options={options} />;
};

export default Body;
