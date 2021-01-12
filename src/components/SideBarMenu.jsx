import React from 'react';
import '../css/SideBarMenu.css';

function SideBarMenu({Icon, title, number, selected}) {
    return (
        <div className={`sidebarMenu ${selected && 'sidebar--active'}`}>
            <Icon />

            <h3>
                {title}
            </h3>

            <p>
                {number}
            </p>
        </div>
    );
}

export default SideBarMenu;