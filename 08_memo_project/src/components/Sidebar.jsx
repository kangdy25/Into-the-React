import React from 'react';
import MemoList from './MemoList';
import SidebarHeader from './SidebarHeader';
import SidebarFooter from './SidebarFooter';

const Sidebar = ({ memos, selectedMemoIndex, setSelectedMemoIndex }) => {
  return (
    <div className="Sidebar">
      <SidebarHeader />
      <MemoList
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
      />
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
