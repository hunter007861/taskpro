import React from 'react';
import SidebarRow from "./SideBarRow";
import AppsIcon from '@material-ui/icons/Apps';
import MovieIcon from '@material-ui/icons/Movie';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DevicesIcon from '@material-ui/icons/Devices';
import "../css/Sidebar.css";

const sideBar = () => {
	return (
        <div className="sidebar">
            
            <SidebarRow Icon={AppsIcon} title='Apps' />

            <SidebarRow Icon={MovieIcon } title='Movies' />
            <SidebarRow Icon={MenuBookIcon} title='Books' />
            <SidebarRow Icon={DevicesIcon} title='Devices' />

        </div>
    );
}

export default sideBar;