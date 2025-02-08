import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import fetchSurvey from '../services/fetchSurvey';
import PreviewSecion from '../components/PreviewSecion';
import OptionSection from '../components/OptionSection';
import BuilderTitleInput from '../components/Input/BuilderTitleInput';
import FloatingButton from '../components/FloatingButton';

const BuilderPage = () => {
  const error = useSelector((state) => state.survey.error);
  const loading = useSelector((state) => state.survey.loading);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchSurvey(params.surveyId));
  }, [dispatch, params.surveyId]);

  if (error) return 'error';
  if (loading) return 'loading';

  return (
    <MainLayout selectedKeys={['builder']} padding={0}>
      <Row style={{ height: '100%' }}>
        <Col flex="auto" style={{ padding: 30 }}>
          <BuilderTitleInput />
          <PreviewSecion />
        </Col>
        <Col flex="350px">
          <OptionSection />
        </Col>
      </Row>
      <FloatingButton />
    </MainLayout>
  );
};

export default BuilderPage;
