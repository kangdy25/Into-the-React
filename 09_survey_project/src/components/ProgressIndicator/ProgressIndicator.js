import React from 'react';
import styled from 'styled-components';
import Bar from '../Bar';
import { useRecoilValue } from 'recoil';
import questionsLengthState from '../../stores/survey/questionsLengthState';
import useAnswers from '../../hooks/useAnswers';
import useStep from '../../hooks/useStep';

const ProgressIndicator = () => {
  const length = useRecoilValue(questionsLengthState);
  const step = useStep();
  const [answers] = useAnswers();

  const bars = [];
  for (let i = 0; i < length; i++) {
    let status = 'pending';
    if (i === step) {
      status = 'in-progress';
    } else if (answers[i]) {
      status = 'done';
    }

    bars.push(<Bar key={i} $status={status} />);
  }
  return (
    <ProgressIndicatorWrapper>
      {bars}
      <PageCount>
        <span>{step + 1}</span>/{length}
      </PageCount>
    </ProgressIndicatorWrapper>
  );
};

const ProgressIndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: calc(100% + 24px);
  left: 0;
  align-items: center;
  gap: 8px;
`;

const PageCount = styled.div`
  margin-left: 8px;
  color: #626262;
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
  span {
    color: #121111;
  }
`;

export default ProgressIndicator;
