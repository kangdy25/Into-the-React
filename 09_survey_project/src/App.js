import { Route, Routes } from 'react-router-dom';
import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';
import styled from 'styled-components';

function App() {
  return (
    <AppWrapper>
      <Box>
        <Routes>
          <Route path="/done/:surveyId" element={<CompletionPage />} />
          <Route path="/survey/:surveyId" element={<SurveyPage />}>
            <Route path=":step" element={<SurveyPage />} />
          </Route>
        </Routes>
      </Box>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5f5f5;
`;

const Box = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.07);
  border-radius: 16px;
  width: 700px;
  min-height: 500px;
  padding: 60px;
`;

export default App;
