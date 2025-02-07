import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { UpOutlined, DownOutlined, DeleteOutlined } from '@ant-design/icons';

const Card = ({
  title,
  desc,
  children,
  onUpButtonClick,
  onDownButtonClick,
  onDeleteButtonClick,
  onClick,
  isSelected,
}) => {
  return (
    <CardWrapper selected={isSelected}>
      <Head onClick={onClick}>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Head>
      <BodyWrapper onClick={onClick}>{children}</BodyWrapper>

      <ButtonGroupWrapper>
        <ButtonGroup>
          <Button type="text" onClick={onUpButtonClick} icon={<UpOutlined />} />
          <Button
            type="text"
            onClick={onDeleteButtonClick}
            icon={<DeleteOutlined />}
          />
          <Button
            type="text"
            onClick={onDownButtonClick}
            icon={<DownOutlined />}
          />
        </ButtonGroup>
      </ButtonGroupWrapper>
    </CardWrapper>
  );
};

const ButtonGroupWrapper = styled.div`
  display: none;
  position: absolute;
  left: 100%;
  top: 0;
`;

const ButtonGroup = styled.div`
  background: #fff;
  margin-left: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const CardWrapper = styled.div`
  border: ${({ selected }) =>
    selected ? '3px solid blue' : '1px solid #dddddd'};
  width: 500px;
  margin: 30px auto;
  background: #fff;
  position: relative;

  &:hover ${ButtonGroupWrapper} {
    display: block;
  }
`;

const Head = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 15px;
`;

const Title = styled.div`
  font-weight: 600;
`;

const Desc = styled.div`
  color: #666;
  margin-top: 10px;
`;

const BodyWrapper = styled.div`
  padding: 15px;
`;

export default Card;
