import React from 'react';
import '../css/EmailRow.css';
import {Checkbox, IconButton} from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';

function EmailRow({id, title, subject, description, time}) {
    return (
        <div className='emailRow'>
            <div className='emailRow__options'>
                <Checkbox />

                <IconButton>
                    <StarBorderIcon />
                </IconButton>

                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>

            <div className='emailRow__title'>

            </div>

            <div className='emailRow__message'>

            </div>

            <div className='emailRow__description'>

            </div>
        </div>
    );
}

export default EmailRow;