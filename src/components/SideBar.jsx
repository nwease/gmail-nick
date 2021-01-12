import React from 'react';
import '../css/SideBar.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import SideBarMenu from './SideBarMenu';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import LabelIcon from '@material-ui/icons/Label';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {IconButton} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';

function SideBar() {
    return (
        <div className='sidebar'>
            <Button
                className='sidebar__compose'
                startIcon={<AddIcon />}
            >
                Compose
            </Button>

            <div className='sidebar__menu'>
                <SideBarMenu Icon={InboxIcon} title='Inbox' number={54} selected={true} />
                <SideBarMenu Icon={StarIcon} title='Starred' number={54} />
                <SideBarMenu Icon={WatchLaterIcon} title='Snoozed' number={54} />
                <SideBarMenu Icon={LabelImportantIcon} title='Important' number={54} />
                <SideBarMenu Icon={SendIcon} title='Sent' number={54} />
                <SideBarMenu Icon={InsertDriveFileIcon} title='Drafts' number={54} />
                <SideBarMenu Icon={LabelIcon} title='Categories' number={54} />
                <SideBarMenu Icon={ExpandMoreIcon} title='More' number={54} />

                <div className='sidebar__footer'>
                    <div className='sidebar__footerIcons'>
                        <IconButton>
                            <PersonIcon />
                        </IconButton>

                        <IconButton>
                            <DuoIcon />
                        </IconButton>

                        <IconButton>
                            <LocalPhoneIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar;