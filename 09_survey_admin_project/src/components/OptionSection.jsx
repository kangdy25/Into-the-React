import React, { useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Form, Input, Button, Switch, InputNumber } from 'antd';
import { setQuestion } from '../stores/survey/surveySlice';
import { useDispatch } from 'react-redux';

const { Item } = Form;

const groups = [
  {
    title: '공통 옵션',
    fields: [
      {
        label: '질문',
        name: 'title',
        rules: [{ required: true }],
        type: 'text',
      },
      {
        label: '설명',
        name: 'desc',
        rules: [{ required: true }],
        type: 'text',
      },
      {
        label: '필수 여부',
        name: 'required',
        rules: [],
        type: 'switch',
        valuePropName: 'checked',
      },
    ],
  },
];

const detailFields = {
  text: [
    {
      label: 'placeholder',
      name: 'placeholder',
      rules: [{ required: false }],
      type: 'text',
    },
    {
      label: '최대 입력 길이',
      name: 'max',
      rules: [{ required: false }],
      type: 'number',
    },
  ],
  textarea: [
    {
      label: 'placeholder',
      name: 'placeholder',
      rules: [{ required: false }],
      type: 'text',
    },
    {
      label: '최대 입력 길이',
      name: 'max',
      rules: [{ required: false }],
      type: 'number',
    },
  ],
  select: [
    {
      label: '답변',
      name: 'items',
      rules: [{ required: true }],
      type: 'text',
    },
    {
      label: '최대 선택 가능 개수',
      name: 'max',
      rules: [{ required: false }],
      type: 'number',
    },
  ],
};

const getFieldInput = (type) => {
  if (type === 'text') return <Input />;
  else if (type === 'switch') return <Switch />;
  else if (type === 'number') return <InputNumber />;

  return null;
};

const OptionSection = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const question = useSelector((state) =>
    state.selectedQuestionId.data === null
      ? null
      : state.survey.data.questions[state.selectedQuestionId.data],
  );
  const selectedQuestionId = useSelector(
    (state) => state.selectedQuestionId.data,
  );

  useEffect(() => {
    if (!question) return;

    const type = question.type;
    let detailFieldsValue = {};
    if (type === 'text' || type === 'textarea') {
      detailFieldsValue.max = question.options.max;
      detailFieldsValue.placeholder = question.options.placeholder;
    } else if (type === 'select') {
      detailFieldsValue.max = question.options.max;
      detailFieldsValue.items = question.options.items.join(';');
    }

    form.setFieldsValue({
      title: question.title,
      desc: question.desc,
      required: question.required,
      ...detailFieldsValue,
    });
  }, [form, question]);

  const mergedGroups = question
    ? [
        ...groups,
        {
          title: '세부 옵션',
          fields: detailFields[question.type],
        },
      ]
    : [];

  return (
    <OptionSectonWrapper>
      <Title>문항 옵션</Title>
      <FormWrapper>
        {question ? (
          <Form form={form} layout={'vertical'} name="option-form">
            {mergedGroups.map((group, index) => (
              <Fragment key={index}>
                <SubTitle>{group.title}</SubTitle>
                {group.fields.map((field, index) => (
                  <Item key={index} {...field}>
                    {getFieldInput(field.type)}
                  </Item>
                ))}
              </Fragment>
            ))}

            <Item>
              <Button
                type="primary"
                onClick={() => {
                  const { title, desc, required, ...options } =
                    form.getFieldValue();

                  const values = {
                    title,
                    desc,
                    required,
                    options,
                    type: question.type,
                  };

                  if (
                    values.type === 'select' &&
                    typeof values.options.items === 'string'
                  ) {
                    values.options.items = values.options.items.split(';');
                  }

                  dispatch(
                    setQuestion({ index: selectedQuestionId, data: values }),
                  );
                }}
              >
                적용
              </Button>
            </Item>
          </Form>
        ) : (
          '질문을 선택해주세요.'
        )}
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
