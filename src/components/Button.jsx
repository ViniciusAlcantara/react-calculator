import React from 'react'
import Button from '@mui/material/Button';
import './Button.css'

export default props => {
    return (
        <div>
            <Button variant={props.variant} onClick={e => props.click && props.click(props.label)} fullWidth>
                {props.label}
            </Button>
        </div>
    )
}