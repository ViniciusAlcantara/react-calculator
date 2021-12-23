import React from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';

export default props => {
    return (
        <div className="display">
            <Paper elevation={3}>
                <Typography gutterBottom variant="h4" component="div">
                    {props.valor}
                </Typography>
            </Paper>
        </div>
    )
}