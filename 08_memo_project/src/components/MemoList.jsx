import React from 'react';
import MemoItem from './MemoItem';

const MemoList = ({ memos, selectedMemoIndex, setSelectedMemoIndex }) => {
  return (
    <div>
      {memos.map((content, index) => (
        <MemoItem
          key={index}
          onClick={() => {
            setSelectedMemoIndex(index);
          }}
          isSelected={index === selectedMemoIndex}
        >
          {content.title}
        </MemoItem>
      ))}
    </div>
  );
};

export default MemoList;
