import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "../css/Header.css";


const Header = () => {
	return (

        <div className="header">
            <div className="header_left">
                <img src="https://media-exp1.licdn.com/dms/image/C560BAQFUTMSIbroRbA/company-logo_200_200/0/1519884771592?e=2159024400&v=beta&t=WDOSFOeNkGBCrNk420Eq7ZLEw4fCw6Ovna-yxsSWENY" alt="TSP logo" />
                <div className="header_input">
                    <SearchIcon/>
                    <input placeholder="Search" type="text"/>
                </div>
            </div>
       
            <div className="header_middle">
                
                <h3>TaskPro Services</h3>

            </div>



            </div>
    );
}

export default Header;