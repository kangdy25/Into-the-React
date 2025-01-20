import React from 'react';

const MemoContainer = () => {
  return (
    <div className="MemoContainer">
      <div>
        <input type="text" className="MemoContainer__title" />
      </div>
      <textarea className="MemoContainer__content" />
    </div>
  );
};

export default MemoContainer;
