import { selector } from 'recoil';
import surveyState from './surveyState';

const questionsLength = selector({
  key: 'questionsLength',
  get: ({ get }) => {
    const questions = get(surveyState).questions;

    return questions.length;
  },
});

export default questionsLength;
