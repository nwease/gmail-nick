import React from 'react';
import '../css/SideBar.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

function SideBar() {
    return (
        <div className='sidebar'>
            <Button startIcon={<AddIcon />} variant='contained'>
                Compose
            </Button>
        </div>
    );
}

export default SideBar;