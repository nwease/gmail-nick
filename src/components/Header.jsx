import React from 'react';
import '../css/Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {IconButton, Avatar} from '@material-ui/core';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <IconButton>
                    <MenuIcon />
                </IconButton>

                <img
                    src='https://www.amocrm.com/static/images/pages/integrations/logo/gmail.png'
                    alt='Gmail Logo'
                />
            </div>

            <div className='header__middle'>
                <form>

                </form>

                <SearchIcon />

                <input type='text' placeholder='Search Mail'/>

                <ArrowDropDownIcon />
            </div>

            <div className='header__right'>
                <IconButton>
                    <HelpOutlineIcon />
                </IconButton>

                <IconButton>
                    <SettingsIcon />
                </IconButton>

                <IconButton>
                    <AppsIcon />
                </IconButton>

                <Avatar />
            </div>
        </div>
    );
}

export default Header;