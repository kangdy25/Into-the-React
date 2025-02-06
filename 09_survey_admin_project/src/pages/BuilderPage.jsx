import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import fetchSurvey from '../services/fetchSurvey';
import PreviewSecion from '../components/PreviewSecion';
import OptionSection from '../components/OptionSection';
import BuilderTitleInput from '../components/Input/BuilderTitleInput';

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
    <MainLayout selectedKeys={['builder']}>
      <Row>
        <Col flex="auto">
          <BuilderTitleInput />
          <PreviewSecion />
        </Col>
        <Col flex="350px">
          <OptionSection />
        </Col>
      </Row>
    </MainLayout>
  );
};

export default BuilderPage;
