import React from 'react';

const MemoList = ({ memos }) => {
  return (
    <div>
      {memos.map((content, index) => (
        <div key={index}>{content.title}</div>
      ))}
    </div>
  );
};

export default MemoList;
