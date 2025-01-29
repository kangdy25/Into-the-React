import mainApi from './apis/mainApi';

function postAnswers(surveyId, data) {
  mainApi.post('http://localhost:3001/answers', { surveyId, data });
}

export default postAnswers;
