import React from 'react';
import Card from './Card';
import Body from './Body';
import AddButton from './AddButton';

const PreviewSecion = ({
  questions,
  addQuestion,
  moveUpQuestion,
  moveDownQuestion,
  moveDeleteQuestion,
}) => {
  return (
    <div>
      {questions.map((question, index) => (
        <Card
          key={index}
          title={question.title}
          desc={question.desc}
          onUpButtonClick={() => moveUpQuestion(index)}
          onDownButtonClick={() => moveDownQuestion(index)}
          onDeleteButtonClick={() => moveDeleteQuestion(index)}
        >
          <Body type={question.type} options={question.options}></Body>
        </Card>
      ))}
      <AddButton addQuestion={addQuestion} />
    </div>
  );
};

export default PreviewSecion;
