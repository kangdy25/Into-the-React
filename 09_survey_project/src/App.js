import { useState } from 'react';
import ProgressIndicator from './components/ProgressIndicator';
import QuestionBox from './components/QuestionBox';

function App() {
  const questions = [
    {
      title: '질문 1 입니다.',
      desc: '설명 1 입니다.',
      type: 'text',
      required: false,
      options: {},
    },
    {
      title: '질문 2 입니다.',
      desc: '설명 2 입니다.',
      type: 'text',
      required: true,
      options: {},
    },
    {
      title: '질문 3 입니다.',
      desc: '설명 3 입니다.',
      type: 'text',
      required: false,
      options: {},
    },
  ];

  const step = 0;

  const [answers, setAnswers] = useState(['', '', '']);

  return (
    <div className="App">
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answers={answers[step]}
        setAnswers={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
      />
    </div>
  );
}

export default App;
