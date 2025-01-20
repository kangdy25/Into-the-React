import React from 'react';

const MemoItem = ({ children, onClickItem, onClickDelete, isSelected }) => {
  return (
    <div
      className={'MemoItem' + ' ' + (isSelected ? 'selected' : '')}
      onClickItem={onClickItem}
    >
      {children}
      <button className="MemoItem_delete-button" onClick={onClickDelete}>
        X
      </button>
    </div>
  );
};

export default MemoItem;
