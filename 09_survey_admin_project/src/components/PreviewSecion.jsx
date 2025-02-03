import React from 'react';
import Card from './Card';

const PreviewSecion = ({ questions }) => {
  return (
    <div>
      {questions.map((question, index) => (
        <Card key={index} title={question.title} desc={question.desc}>
          Body
        </Card>
      ))}
    </div>
  );
};

export default PreviewSecion;
