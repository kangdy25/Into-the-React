import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CompletionPage = () => {
  axios.get('http://localhost:3001/surveys').then((res) => {
    console.log('res', res.data);
  });

  return <CompletionPageWrapper>CompletionPage</CompletionPageWrapper>;
};

const CompletionPageWrapper = styled.div``;

export default CompletionPage;
