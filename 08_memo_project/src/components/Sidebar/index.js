import React from 'react';
import MemoList from '../MemoList';
import SidebarHeader from '../SidebarHeader';
import SidebarFooter from '../SidebarFooter';
import './index.css';

const Sidebar = ({
  memos,
  addMemo,
  selectedMemoIndex,
  setSelectedMemoIndex,
  deleteMemo,
}) => {
  return (
    <div className="Sidebar">
      <SidebarHeader />
      <MemoList
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        deleteMemo={deleteMemo}
      />
      <SidebarFooter onClick={addMemo} />
    </div>
  );
};

export default Sidebar;
