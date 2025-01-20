import React from 'react';
import MemoItem from '../MemoItem';

const MemoList = ({
  memos,
  selectedMemoIndex,
  setSelectedMemoIndex,
  deleteMemo,
}) => {
  return (
    <div>
      {memos.map((content, index) => (
        <MemoItem
          key={index}
          onClickItem={() => {
            setSelectedMemoIndex(index);
          }}
          onClickDelete={(e) => {
            deleteMemo(index);
            e.preventDefault();
            e.stopPropagation();
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
