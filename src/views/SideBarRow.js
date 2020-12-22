import React from 'react';
import "../css/SidebarRow.css";

const sideRow = ({Icon, title}) => {
    return (
        <div className="sidebarRow">
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    );
}

export default sideRow;