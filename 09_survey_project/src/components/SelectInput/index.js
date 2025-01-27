import React from 'react';
import styled from 'styled-components';

function Item({ children, onChange }) {
  return (
    <ItemWrapper>
      <label>
        <input type="checkbox" onChange={onChange} />
        <span />
        <div>{children}</div>
      </label>
    </ItemWrapper>
  );
}

const SelectInput = ({ answers = [], setAnswers, options }) => {
  const handleChange = (isChecked, index) => {
    if (isChecked) {
      setAnswers([...answers, index]);
    } else {
      setAnswers(answers.filter((item) => item !== index));
    }
  };
  return (
    <SelectInputWrapper>
      {options.items.map((item, index) => {
        return (
          <Item
            key={index}
            onChange={(e) => {
              handleChange(e.target.checked, index);
            }}
          >
            {item}
          </Item>
        );
      })}
    </SelectInputWrapper>
  );
};

const SelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ItemWrapper = styled.div`
  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox'] ~ span {
    width: 24px;
    height: 24px;
    border: 3px solid #e2dfdf;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 100%;
  }
  input[type='checkbox']:checked ~ span {
    border: 8px solid #6542f1;
  }
  input[type='checkbox'] ~ div {
    font-size: 14px;
    line-height: 10px;
    display: inline-block;
    vertical-align: middle;
  }
  input[type='checkbox']:checked ~ div {
    font-weight: 600;
  }
`;

export default SelectInput;
