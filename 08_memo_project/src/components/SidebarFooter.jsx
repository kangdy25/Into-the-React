import React from 'react';

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
