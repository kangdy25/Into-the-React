import React from 'react';
import Card from './Card';
import Body from './Body';
import AddButton from './AddButton';

const PreviewSecion = ({ questions, addQuestion }) => {
  return (
    <div>
      {questions.map((question, index) => (
        <Card key={index} title={question.title} desc={question.desc}>
          <Body type={question.type} options={question.options}></Body>
        </Card>
      ))}
      <AddButton onClick={addQuestion} />
    </div>
  );
};

export default PreviewSecion;
