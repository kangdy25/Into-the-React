import React from 'react';
import MemoList from './MemoList';
import SidebarHeader from './SidebarHeader';
import SidebarFooter from './SidebarFooter';

const Sidebar = ({ memos }) => {
  return (
    <div className="Sidebar">
      <SidebarHeader />
      <MemoList memos={memos} />
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
