import React from 'react';
import AddButton from './AddButton';
import Body from './Body';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import {
  addQuestion,
  moveUpQuestion,
  moveDownQuestion,
  deleteQuestion,
} from '../stores/survey/surveySlice';

const PreviewSecion = () => {
  const questions = useSelector((state) => state.survey.data?.questions || []);
  const dispatch = useDispatch();

  const handleAddQuestion = (type) => {
    dispatch(addQuestion(type));
  };

  const handleMoveUpQuestion = (index) => {
    if (index === 0) return;
    dispatch(moveUpQuestion(index));
  };

  const handleMoveDownQuestion = (index) => {
    if (index === questions.length - 1) return;
    dispatch(moveDownQuestion(index));
  };

  const handleDeleteQuestion = (index) => {
    dispatch(deleteQuestion(index));
  };

  return (
    <div>
      {questions.map((question, index) => (
        <Card
          key={index}
          title={question.title}
          desc={question.desc}
          onUpButtonClick={() => handleMoveUpQuestion(index)}
          onDownButtonClick={() => handleMoveDownQuestion(index)}
          onDeleteButtonClick={() => handleDeleteQuestion(index)}
        >
          <Body type={question.type} options={question.options}></Body>
        </Card>
      ))}
      <AddButton addQuestion={handleAddQuestion} />
    </div>
  );
};

export default PreviewSecion;
