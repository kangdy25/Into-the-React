import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Form, Input } from 'antd';
const { Item } = Form;

const OptionSection = () => {
  const question = useSelector((state) =>
    state.selectedQuestionId.data === null
      ? null
      : state.survey.data.questions[state.selectedQuestionId.data],
  );
  console.log(question);
  return (
    <OptionSectonWrapper>
      <Title>문항 옵션</Title>
      {/* {question ? <div>앙</div> : '질문을 선택해주세요.'} */}
      <FormWrapper>
        <Form layout={'vertical'} name="option-form">
          <SubTitle>공통 옵션</SubTitle>
          <Item label="질문" name="title" rules={[{ required: true }]}>
            <Input />
          </Item>
          <Item label="질문" name="title" rules={[{ required: true }]}>
            <Input />
          </Item>
        </Form>
      </FormWrapper>
    </OptionSectonWrapper>
  );
};

const OptionSectonWrapper = styled.div`
  height: 100%;
  background: #fff;
  border-left: 1px solid #ddd;
`;

const Title = styled.div`
  font-weight: 500;
  background: #f0f0f0;
  border-bottom: 1px solid #ddd;
  padding: 20px 0;
  text-align: center;
`;

const SubTitle = styled.div`
  font-size: 1.05rem;
  font-weight: 600;
  margin: 10px;
`;

const FormWrapper = styled.div`
  padding: 20px;
`;

export default OptionSection;
