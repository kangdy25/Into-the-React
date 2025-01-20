import React from 'react';
import './index.css';

const SidebarFooter = ({ onClick }) => {
  return (
    <div className="SidebarFooter">
      <button className="SidebarFooter__add-button" onClick={onClick}>
        +
      </button>
    </div>
  );
};

export default SidebarFooter;
