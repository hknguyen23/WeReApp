import React from 'react';
import {
    Container,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '40px',
        width: '100%',
        paddingTop: '5px',
        paddingLeft: '12px',
        color: '#FFFFFF',
        backgroundColor: '#2F80ED',
        textAlign: 'left',
        fontSize: 20,
    },
}));

function GroupHeader(props) {
    const classes = useStyles();
    const title = props.title;
    return (
        <Container className={classes.root} >
            {title}
        </Container>
    )
}

export default GroupHeader;