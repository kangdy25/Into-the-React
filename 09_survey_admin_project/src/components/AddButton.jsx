import React from 'react';
import { useState } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Popover, Button } from 'antd';

const AddButton = ({ addQuestion }) => {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <AddButtonWrapper>
      <Popover
        content={
          <div>
            <Button
              type="text"
              onClick={() => {
                hide();
                addQuestion('select');
              }}
              style={{ display: 'block' }}
            >
              객관식
            </Button>
            <Button
              type="text"
              onClick={() => {
                hide();
                addQuestion('text');
              }}
              style={{ display: 'block' }}
            >
              단답식
            </Button>
            <Button
              type="text"
              onClick={() => {
                hide();
                addQuestion('textarea');
              }}
              style={{ display: 'block' }}
            >
              서술식
            </Button>
          </div>
        }
        placement="right"
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
      >
        <IconButton>
          <PlusCircleOutlined />
        </IconButton>
      </Popover>
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
