import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const AddButton = ({ onClick }) => {
  return (
    <AddButtonWrapper>
      <IconButton onClick={onClick}>
        <PlusCircleOutlined />
      </IconButton>
    </AddButtonWrapper>
  );
};

export default AddButton;

const AddButtonWrapper = styled.div`
  font-size: 2rem;
  text-align: center;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  outline: none;
  font-size: 2rem;
  cursor: pointer;
`;
