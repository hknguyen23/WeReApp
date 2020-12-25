import React, { useState, useEffect } from 'react';
import {
    Container,
    Button,
    ButtonBase,
    TextField,
    makeStyles, Typography
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '20px',
        marginBottom: '20px',
        paddingRight: '0px',
        paddingLeft: '0px',

    },
    button: {
        width: '297px',
        height: '36px',
        borderRadius: '0px',
        backgroundColor: '#2196F3',
    },
}));

const ControlPanel = (props) => {
    const classes = useStyles();

    const handleChange = () => {

    }

    return (
        <Container className={classes.root} maxWidth="lg">
            <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<ArrowBackIosIcon />}
            >
                Chương trước
            </Button>
            <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
            >
                Danh sách chương
            </Button>
            <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<ArrowForwardIosIcon />}
            >
                Chương sau
        </Button>
        </Container>
    );
}

export default ControlPanel;