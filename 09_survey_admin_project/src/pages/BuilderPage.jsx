import { Col, Row, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import MainLayout from '../layouts/MainLayout';
import PreviewSecion from '../components/PreviewSecion';
import OptionSection from '../components/OptionSection';

import {
  setTitle,
  addQuestion,
  moveUpQuestion,
  moveDownQuestion,
  moveDeleteQuestion,
} from '../stores/survey/surveySlice';

const BuilderPage = () => {
  const dispatch = useDispatch();
  const survey = useSelector((state) => state.survey);

  return (
    <MainLayout selectedKeys={['builder']}>
      <Row>
        <Col flex="auto">
          <Input
            placeholder="설문 제목을 입력해주세요."
            value={survey.title}
            onChange={(e) => {
              dispatch(setTitle(e.target.value));
            }}
          />
          <PreviewSecion
            questions={survey.questions}
            addQuestion={(type) => {
              dispatch(addQuestion(type));
            }}
            moveUpQuestion={(index) => {
              if (index === 0) return;
              dispatch(moveUpQuestion(index));
            }}
            moveDownQuestion={(index) => {
              if (index === survey.questions.length - 1) return;
              dispatch(moveDownQuestion(index));
            }}
            moveDeleteQuestion={(index) => {
              dispatch(moveDeleteQuestion(index));
            }}
          />
        </Col>
        <Col flex="350px">
          <OptionSection />
        </Col>
      </Row>
    </MainLayout>
  );
};

export default BuilderPage;
